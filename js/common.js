// 乘法
function accMul(arg1, arg2) {
	var m = 0,
		s1 = arg1.toString(),
		s2 = arg2.toString(),
		t;
 
	t = s1.split(".");
	// 判断有没有小数位，避免出错
	if (t[1]) {
		m += t[1].length
	}
 
	t = s2.split(".");
	if (t[1]) {
		m += t[1].length
	}
 
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m)
}

// 验证数字
function validateNum(value) {
    let reg = /^[0-9]+\.?[0-9]*$/;
    return reg.test(value)
}

// 获取url参数
function getQueryString(name) {
    const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    const urlObj=window.location;
    var r =urlObj.href.indexOf('#')>-1? urlObj.hash.split("?")[1].match(reg) : urlObj.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

// 提示语（对语言）
var tipCopy, tipTitle, tipNeedTickets, tipNumber, tipOperating;
switch (localStorage.getItem("lang")) {
	case "fan":
		tipCopy = "複製成功!";
		tipTitle = "提示";
		tipNeedTickets = "需支付門票";
		tipNumber = "請輸入大于0.1的數字";
		tipOperating = "操作成功";
		break;
	case "en":
		tipCopy = "Successful copy!";
		tipTitle = "Prompt";
		tipNeedTickets = "Need to pay tickets";
		tipNumber = "Please enter a number greater than 0.1";
		tipOperating = "Successful operation";
		break;
	case "kor":
		tipCopy = "성공적인 복사!";
		tipTitle = "프롬프트";
		tipNeedTickets = "티켓을 지불해야 함";
		tipNumber = "0.1의 숫자를 입력하십시오";
		tipOperating = "성공적인 운영";
		break;
	case "jp":
		tipCopy = "コピー成功!";
		tipTitle = "プロンプト";
		tipNeedTickets = "チケットを支払う必要がある";
		tipNumber = "0.1より大きい数字を入力してください";
		tipOperating = "成功した操作";
		break;
}

// 级差级别
function gradation(num) {
	switch (num) {
		case 1: 
			$(".grade-level").html("<img src='images/v1.png'>");
			break;
		case 2: 
			$(".grade-level").html("<img src='images/v2.png'>");
			break;
		case 3: 
			$(".grade-level").html("<img src='images/v3.png'>");
			break;
		case 4: 
			$(".grade-level").html("<img src='images/v4.png'>");
			break;
		case 5: 
			$(".grade-level").html("<img src='images/v5.png'>");
			break;
	};
}

// ----------------------------首页--------------------------------------
// 公告列表 pc
function swiperList(res) {
	var data = ["--"];
	if (res.code == "2222") {
		data = res.data;
	}
	jo.reTpl(
		$("#temp1"), {
			list: res.data
		},
		$("#cont1")
	);

	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: true,
		direction: 'vertical',
		loop: true, 
		height: 50
	});
}

// 规则 pc
function rulesContent(res) {
	if (res.code == "2222") {
		jo.reTpl(
			$("#temp"), {
				list: res.data
			},
			$("#cont")
		);
	}
}

// 公告列表 h5
function swiperListH5(res) {
	var data = ["--"];
	if (res.code == "2222") {
		data = res.data;
	}
	jo.reTpl(
		$("#temp1"), {
			list: res.data
		},
		$("#cont1")
	);

	var mySwiper = new Swiper ('.swiper-container', {
		autoplay: true,
		direction: 'vertical',
		loop: true
	});
}

// 规则 h5
function rulesContentH5(res) {
	var text = "";
	var title = "參與規則:";
	if (res.code == "2222") {
		// text += res.data[1].title + "：" + res.data[1].content;
		switch (localStorage.getItem("lang")) { 
			case "fan": 
				title = "參與規則:";
				break
			case "en": 
				title = "Participation rules:";
				break
			case "kor": 
				title = "참여 규칙:";
				break
			case "jp": 
				title = "参加ルール:";
				break
		};

		text = title + "<br/>" + res.data[1].content;
	}
	$(".rules .content").html(text)
}

// ----------------------我的收益----------------------------------------
var page1 = {
	pageNumber: 1,
	pageSize: 10,
	total: 0
};
var page2 = {
	pageNumber: 1,
	pageSize: 10,
	total: 0
};

// 收益列表-待收益
function showList1(res) {
	if (res.code == "2222") {
		page1.total = res.data.total;
		page1.pageNumber = res.data.pageNum;
		res.data.list.forEach(val => {
			if (localStorage.getItem("lang")) {
				switch (localStorage.getItem("lang")) {
					case "fan":
						switch (val.type) {
							case 1:
								val.type = "級差";
								break;
							case 2:
								val.type = "升級";
								break;
							case 3:
								val.type = "參與合約";
								break;
						};

						val.operating = "領取";
						break;
					case "en":
						switch (val.type) {
							case 1:
								val.type = "Level";
								break;
							case 2:
								val.type = "upgrade";
								break;
							case 3:
								val.type = "join contract";
								break;
						};

						val.operating = "receive";
						break;
					case "kor":
						switch (val.type) {
							case 1:
								val.type = "레벨 차이";
								break;
							case 2:
								val.type = "업그레이드";
								break;
							case 3:
								val.type = "계약에 참여하다";
								break;
						};

						val.operating = "받기";
						break;
					case "jp":
						switch (val.type) {
							case 1:
								val.type = "レベル差";
								break;
							case 2:
								val.type = "アップグレード";
								break;
							case 3:
								val.type = "契約に参加する";
								break;
						};

						val.operating = "受け取る";
						break;
				}
			} 
		});
		jo.reTpl(
			$("#temp"), {
				list: res.data.list
			},
			$("#cont")
		);

		$("#myPage1").sPage({
			page: page1.pageNumber,
			pageSize: 10,
			total: page1.total,
			showPN: false,
			backFun: function(page) {
				profitList({
					status: 1,
					pageNumber: page1.pageNumber,
					pageSize: page1.pageSize
				}, showList1);
			}
		});
	} else {
		page1.pageNumber = 1;
		page1.total = 0;
	}
}

// 收益列表-已结算
function showList2(res) {
	if (res.code == "2222") {
		page2.pageNumber = res.data.pageNum;
		page2.total = res.data.total;
		res.data.list.forEach(val => {
			if (localStorage.getItem("lang")) {
				switch (localStorage.getItem("lang")) {
					case "fan":
						val.type = val.type == 1 ? "級差" : "升級";
						val.settled = "已結算";
						break;
					case "en":
						val.type = val.type == 1 ? "Level" : "upgrade";
						val.settled = "Settled";
						break;
					case "kor":
						val.type = val.type == 1 ? "레벨 차이" : "업그레이드";
						val.settled = "정착";
						break;
					case "jp":
						val.type = val.type == 1 ? "レベル差" : "アップグレード";
						val.settled = "落ち着いた";
						break;
				}
			} 
		});
		jo.reTpl(
			$("#temp2"), {
				list: res.data.list
			},
			$("#cont2")
		);

		$("#myPage2").sPage({
			page: page2.pageNumber,
			pageSize: 10,
			total: page2.total,
			showPN: false,
			backFun: function(page) {
				profitList({
					status: 2,
					pageNumber: page2.pageNumber,
					pageSize: page2.pageSize
				}, showList2);
			}
		});
	} else {
		page2.pageNumber = 1;
		page2.total = 0;
	}
}

// 領取
function receive(value, id) {
	Ealt.Econfirm({
		title: tipTitle,
		message: tipNeedTickets + value,  // 需支付門票
		define:function(){
			let is = incomeReceived(value, id);
			if (is) {
				transferAccount(value, 1, 2, id);
			}
		},
		cancel:function(){}
	})
}
