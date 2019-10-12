var base_url = "http://47.52.216.38:9538";  // 服务器
// var base_url = "https://www.candy19.top";       // GitHub
// var base_url = "http://192.168.1.139:8081";
var headers = {
    Authorization: localStorage.getItem("ncc-token"),
    language: localStorage.getItem("lang") || "fan"
};

// 注册
function register(data) {
    $.ajax({
        contentType: "application/json;charset=utf-8",
        url: base_url + "/jansse/user/register",
        type: "post",
        data: JSON.stringify(data),
        success: function(res) {
            if (res.code == "2222" || res.code == "1009") {
                localStorage.setItem("isRegister", true);
                login(data)
            }
        }
    })
}

// 登录
function login(data) {
    $.ajax({
        url: base_url + "/jansse/user/authorize",
        type: "post",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(data),
        success: function(res) {
            if (res.code == "2222") {
                localStorage.setItem("ncc-isLogin", true);
                localStorage.setItem("ncc-token", res.data.token);
                localStorage.setItem("vipLevel", res.data.vipLevel);
                localStorage.setItem("gradationLevel", res.data.gradationLevel);
                window.location.reload();
            }
        }
    })
}

// 公告列表
function noticeList(callback) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/content/findContent",
        type: "get",
        contentType: "application/json;charset=utf-8",
        data: {},
        success: function(res) {
            callback(res);
        }
    })
}

// 规则
function rules(callback) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/content/findRule",
        type: "get",
        contentType: "application/json;charset=utf-8",
        data: {},
        success: function(res) {
            callback(res);
        }
    })
}

// 是否能够购买
function ethPurchase() {
    let num = $("#purchase-num").val();
	if (!validateNum(num) || num < 0.1) {
		Ealt.Etoast(tipNumber, 1)
		return
    }
    
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/isBuy",
        type: "get",
        contentType: "application/json;charset=utf-8",
        data: {},
        success: function(res) {
            if (res.code == "2222") {
                purchase(num, purchaseHash);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
               })
            }
        }
    })
}

// 购买hash
function purchaseHash(money, hash) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/buy",
        type: "POST",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            money: money,
            hash: hash
        }),
        success: function(res) {
            if (res.code == "2222") {
                Ealt.Etoast(tipOperating, 1);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
               })
            }
        }
    })
}


// 我的接点人&注册推荐人
function personRegistered() {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/myNode",
        contentType: "application/json;charset=utf-8",
        type: "get",
        data: {},
        success: function (res) {
            if (res.code == "2222") {
                $(".registered-referee").html(res.data.realParentNodePath);
                $(".contact-person").html(res.data.parentNodePath);
                $(".mydirect-pushes").html(res.data.directTeamCount);
                $("#copy").val(res.data.invitationLink);
                $("#partin-ticket").val(res.data.partakeNum);
                $("#partin-trans").val(res.data.partakeEthNum);
                $("#partin-contract").val(Number(res.data.partakeNum) + Number(res.data.partakeEthNum));
                $("#partin-destruction").val(res.data.joinT19Num);
            }
        }
    })
}

// 參與合約 能否入场
function admission() {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/isJoin",
        type: "get",
        contentType: "application/json;charset=utf-8",
        data: {},
        success: function(res) {
            if (res.code == "2222") {
                // console.log($("#partin-trans").val(), $("#partin-ticket").val(), $("#partin-destruction").val());
                enterContract($("#partin-trans").val(), $("#partin-ticket").val(), $("#partin-destruction").val(), admissionHash);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
               })
            }
        }
    })
}

// 參與合約  入場hash
function admissionHash(hash) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/join",
        type: "post",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            hash: hash
        }),
        success: function(res) {
            if (res.code == "2222") {
                Ealt.Etoast(tipOperating, 1);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
               })
            }
        }
    })
}

// 我要升级 能否升级
function userUp() {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/isUp",
        type: "get",
        contentType: "application/json;charset=utf-8",
        data: {},
        success: function(res) {
            if (res.code == "2222") {
                let num = $("#update-value").val();
                let burn = $("#update-destruction").val();
                upgradeFn(num, burn, userUpHash);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
               })
            }
        }
    })
}

// 我要升级 升级Hash
function userUpHash(hash) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/up",
        type: "post",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify({
            hash: hash
        }),
        success: function(res) {
            if (res.code == "2222") {
                Ealt.Etoast(tipOperating, 1);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
               })
            }
        }
    })
}

// 收益列表
function profitList(data, callback) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/detail/receiveDetail",
        type: "post",
        contentType: "application/json;charset=utf-8",
        data: JSON.stringify(data),
        success: function(res) {
            callback(res);
        }
    })
}

// 统计数据&我要升级
function statistical() {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/info",
        contentType: "application/json;charset=utf-8",
        type: "get",
        data: {},
        success: function (res) {
            if (res.code == "2222") {
                // $(".burned-tickets").html(res.data.destructionNum);
                $(".direct-push").html(res.data.directTeamCount);
                $(".five-team").html(res.data.teamFiveLevelCount);
                $(".nine-team").html(res.data.teamNineLevelCount);
                $(".total-number").html(res.data.teamCount);
                $("#update-value").val(res.data.upNum);
                $("#update-destruction").val(res.data.deductionMoney);
                
                gradation(res.data.gradationLevel);
        
                // 我的等级
                switch (res.data.vipLevel) {
                    case 1: 
                        $(".current-level").html("<img src='images/L1.png'>");
                        break;
                    case 2: 
                        $(".current-level").html("<img src='images/L2.png'>");
                        break;
                    case 3: 
                        $(".current-level").html("<img src='images/L3.png'>");
                        break;
                    case 4: 
                        $(".current-level").html("<img src='images/L4.png'>");
                        break;
                    case 5: 
                        $(".current-level").html("<img src='images/L5.png'>");
                        break;
                    case 6: 
                        $(".current-level").html("<img src='images/L6.png'>");
                        break;
                    case 7: 
                        $(".current-level").html("<img src='images/L7.png'>");
                        break;
                    case 8: 
                        $(".current-level").html("<img src='images/L8.png'>");
                        break;
                    case 9: 
                        $(".current-level").html("<img src='images/L9.png'>");
                        break;
                }
            }
        }
    })
}

// 收益数据（平台币&已结算）
function beneficial() {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/detail/findReceiveData",
        contentType: "application/json;charset=utf-8",
        type: "get",
        data: {},
        success: function (res) {
            if (res.code == "2222") {
                $(".total-settled").html(res.data.settlementNum);
            }
        }
    })
}

// 领取收益  能否领取
function incomeReceived(value, id) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/detail/isReceive",
        contentType: "application/json;charset=utf-8",
        type: "post",
        data: JSON.stringify({
            id: id
        }),
        success: function (res) {
            if (res.code == "2222") {
                Ealt.Econfirm({
                    title: tipTitle,
                    message: tipNeedTickets + value,  // 需支付門票
                    define:function(){
                        destruction(value, incomeReceivedHash, id);
                    },
                    cancel:function(){}
                })
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
                })
            }
        }
    })
}

// 领取收益  领取hash
function incomeReceivedHash(hash, id, value) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/detail/receive",
        contentType: "application/json;charset=utf-8",
        type: "post",
        data: JSON.stringify({
            id: id,
            hash: hash,
            needT19: value
        }),
        success: function (res) {
            if (res.code == "2222") {
                Ealt.Etoast(tipOperating, 1);

                beneficial();

                profitList({
                    status: 1,
                    pageNumber: page1.pageNumber,
                    pageSize: page1.pageSize
                }, showList1);
            
                profitList({
                    status: 2,
                    pageNumber: page2.pageNumber,
                    pageSize: page2.pageSize
                }, showList2);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
                })
            }
        }
    })
}

// 传交易hash
function passHash(data) {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/detail/hash",
        contentType: "application/json;charset=utf-8",
        type: "post",
        data: JSON.stringify(data),
        success: function (res) {
            if (res.code == "2222") {
                Ealt.Etoast(tipOperating, 1);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
                })
            }
        }
    })
}

// 能否邀请好友
function inviteFriends() {
    $.ajax({
        headers: headers,
        url: base_url + "/jansse/user/isInvitation",
        contentType: "application/json;charset=utf-8",
        type: "get",
        data: {},
        success: function (res) {
            if (res.code == "2222") {
                var Url2 = document.getElementById("copy");
                Url2.select(); // 选择对象
                document.execCommand("Copy"); // 执行浏览器复制命令
                Ealt.Etoast(tipCopy, 1);
            } else {
                Ealt.Ealert({
                    title: tipTitle,
                    message: res.message
                })
            }
        }
    })
}
