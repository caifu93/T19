// 引入web3
// var Web3 = require('web3');
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
//     web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/yourAddress"));
// }

var abitoken = [
	{
		"constant": true,
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "ethToThis",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_tos",
				"type": "address[]"
			},
			{
				"name": "_values",
				"type": "uint256[]"
			}
		],
		"name": "wdBatchOthers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getInfOfCtt",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getBurnRatio",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_burnAmt",
				"type": "uint256"
			}
		],
		"name": "upgradeCandy",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [
			{
				"name": "success",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalSupplyOfToken",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalEthWei",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalBurntokens",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_enter",
				"type": "uint256"
			},
			{
				"name": "_exAmt",
				"type": "uint256"
			},
			{
				"name": "_burnAmt",
				"type": "uint256"
			}
		],
		"name": "enterCandy",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "wdOthersAndBurn",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"name": "balance",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "totalEthToPlayer",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "exChange",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "ratio",
				"type": "uint256"
			}
		],
		"name": "setBurnRatio",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "totalExch",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getInfoByAddr",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "wdOwner",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_to",
				"type": "address"
			},
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "wdOthers",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getRatio",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "totalBurn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "tokenTransfer",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"payable": true,
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	}
]

// eth地址
var contract_address = '0x04EEb259aC65b14Ad8ba9bA34665D41e79B0425f';

var contract;
// init contract
function initContract(web3) {
    contract = web3.eth.contract(abitoken).at(contract_address);
}

// function bcAlertBox(cont) {
//     PostbirdAlertBox.alert({
//         'title': 'Tips',
//         'content': cont,
//         'okBtn': 'confirm',
//         'contentColor': 'red',
//     });
// }

// 兑换门票
function purchase(value, callback) {
    var etherValue = web3.toWei(value, 'ether');
    contract.exChange({ from: account, value: etherValue }, (function (error, result) {
        if (!error) {
            // 返回值 "0xd64d10cd580078cded21dbbc8e83ec5fd6d222085ce3718dc9e1f0b28cc8cc3d"
			// console.log(JSON.stringify(result));

			callback(value, result)
        } else {
			if (Ealt) {
				qback.remove()
				confirmBox.remove()
			}
            Ealt.Ealert({
				title:'Tips',
				message: error.message
			});
        }
	}));
}

// 转账
function transferAccount(value, callback, parentResult) {
	var etherValue = web3.toWei(value, 'ether');;
	contract.ethToThis({ from: account, value: etherValue }, (function (error, result) {
        if (!error) {
			// console.log(JSON.stringify(result));
			if (parentResult) {
				callback(parentResult, result);
			} else {
				callback(result);
			}
        } else {
			if (Ealt) {
				qback.remove()
				confirmBox.remove()
			}
            Ealt.Ealert({
				title:'Tips',
				message: error.message
			});
        }
	}));
}

/**
 * 参与合约
 * _enter : 转给合约地址的以太坊金额(wei)
 * _exAmt : 用于兑换门票的以太坊金额(wei)
 * _burnAmt : 需要销毁的门票数量(最小单位)
 */
function enterContract(enter, exAmt, burnAmt, callback) {
	var ts = Number(enter) + Number(exAmt);
	var etherValue = web3.toWei(ts, 'ether');
	var one = web3.toWei(enter, 'ether');
	var two = web3.toWei(exAmt, 'ether');
	var three = web3.toWei(burnAmt, 'ether');
	// console.log(etherValue, one, two, three)
	contract.enterCandy(one, two, three, {from:account, value:etherValue}, (function (error, result) {
        if (!error) {
			// console.log(JSON.stringify(result));
			callback(result, ts);
        } else {
			if (Ealt) {
				qback.remove()
				confirmBox.remove()
			}
            Ealt.Ealert({
				title:'Tips',
				message: error.message
			});
        }
	}));
}

/**
 * 升级
 * msg.value : 转给合约地址的以太坊金额(wei)
 * _burnAmt : 需要销毁的门票数量(最小单位)
 */
function upgradeFn(value, burnAmt, callback) {
	let money = value;
	var etherValue = web3.toWei(value, 'ether');
	var burnAmt = web3.toWei(burnAmt, 'ether');
	// console.log(etherValue, burnAmt)
	contract.upgradeCandy(burnAmt, {from:account, value:etherValue}, (function (error, result) {
        if (!error) {
			// console.log(JSON.stringify(result));
			callback(result, money);
        } else {
			if (Ealt) {
				qback.remove()
				confirmBox.remove()
			}
            Ealt.Ealert({
				title:'Tips',
				message: error.message
			});
        }
	}));
}

// 销毁
function destruction(value, callback, id) {
	var etherValue = web3.toWei(value, 'ether');;
	contract.burn(etherValue, (function (error, result) {
        if (!error) {
			// console.log(JSON.stringify(result));
			callback(result, id, value);
        } else {
			if (Ealt) {
				qback.remove()
				confirmBox.remove()
			}
            Ealt.Ealert({
				title:'Tips',
				message: error.message
			});
        }
	}));
}

window.addEventListener('load', function () {
    if (typeof web3 !== 'undefined') {
        getChange();

        if (window.ethereum) {
            ethereum.enable();
        }

        initContract(web3);

		// 查询当前余量
        // contract.totalSupply(function (error, result) {
        //     if (!error) {
        //         // console.log(JSON.stringify(result));
        //     } else {
		// 		// bcAlertBox(error);
		// 		Ealt.Ealert({
		// 			title:'Tips',
		// 			message: error
		// 		})
        //     }
        // });

		// 合约持有者
        contract.owner(function (error, result) {
            if (!error) {
                // console.log(JSON.stringify(result));
            } else {
				if (Ealt) {
					qback.remove()
            		confirmBox.remove()
				}
				Ealt.Ealert({
					title:'Tips',
					message: error
				})
            }
        });

        // contract.owner(function (error, result) {
        //     if (!error) {
        //         console.log(JSON.stringify(result));
        //     } else {
		//         bcAlertBox(error);
					// Ealt.Ealert({
					// 	title:'Tips',
					// 	message: error
					// })
        //     }
        // });

        // 兑换门票-> 成功; metamask弹出付款确认框
        // var etherValue=web3.toWei(0.3, 'ether');;
        // contract.exChange({from: account, value: etherValue},(function(error, result) {
        //     if (!error){
        //         // 返回值 "0xd64d10cd580078cded21dbbc8e83ec5fd6d222085ce3718dc9e1f0b28cc8cc3d"
        //         console.log(JSON.stringify(result));
        //     }else{
		//         bcAlertBox(error);
					// Ealt.Ealert({
					// 	title:'Tips',
					// 	message: error
					// })
        //     }
		// }));
		
		// 兑换比例
		contract.getRatio({ from: account }, function (error, result) {
			if (!error) {
				// console.log(JSON.stringify(result), "比例");
				// 首页显示兑换比例
				// $(".exchange-ratio").html("1:" + result);

				// 参与合约所需T19
				var num = new Number(result).toLocaleString().replace(/,/g, "")/Math.pow(10, 18);
				var bili = accMul(1.1, num)
				// console.log(result)
				// $("#T-19").val(bili)
				$(".exchange-ratio").html("1:" + num);
			} else {
				// bcAlertBox(error);
				if (Ealt) {
					qback.remove()
            		confirmBox.remove()
				}
				Ealt.Ealert({
					title:'Tips',
					message: error
				})
			}
		});

		// 获取统计数据
		contract.getInfOfCtt({ from: account }, function (error, result) {
			if (!error) {
				// console.log(result)
				// 参与合约所需T19
				var num = new Number(result[3]).toLocaleString().replace(/,/g, "")/Math.pow(10, 18);
				$(".burned-tickets").html(parseFloat(num.toFixed(6)));
			} else {
				// bcAlertBox(error);
				if (Ealt) {
					qback.remove()
            		confirmBox.remove()
				}
				Ealt.Ealert({
					title:'Tips',
					message: error
				})
			}
		});

		setInterval(function() {
			// 获取统计数据
			contract.getInfOfCtt({ from: account }, function (error, result) {
				if (!error) {
					// console.log(result)
					// 参与合约所需T19
					var num = new Number(result[3]).toLocaleString().replace(/,/g, "")/Math.pow(10, 18);
					$(".burned-tickets").html(parseFloat(num.toFixed(6)));
				} else {
					// bcAlertBox(error);
					if (Ealt) {
						qback.remove()
						confirmBox.remove()
					}
					Ealt.Ealert({
						title:'Tips',
						message: error
					})
				}
			});
		})
		
		// 平台币剩余总量
		// contract.totalSupply({ from: account }, function (error, result) {
		// 	if (!error) {
		// 		var surplus = web3.fromWei(result, "ether");
		// 		$(".number-coins").html(parseFloat(Number(surplus.c[0]).toFixed(6)));
		// 	} else {
		// 		if (Ealt) {
		// 			qback.remove()
        //     		confirmBox.remove()
		// 		}
		// 		Ealt.Ealert({
		// 			title:'Tips',
		// 			message: error
		// 		})
		// 	}
		// });

		// 个人平台币剩余数量
		contract.balanceOf(web3.eth.accounts[0], { from: web3.eth.accounts[0] }, function (error, result) {
			if (!error) {
				// console.log(result)
				var surplus = web3.fromWei(result, "ether");
				$(".number-coins").html(parseFloat(Number(surplus.c[0]).toFixed(6)));
			} else {
				if (Ealt) {
					qback.remove()
            		confirmBox.remove()
				}
				Ealt.Ealert({
					title:'Tips',
					message: error
				})
			}
		});


        if (web3.currentProvider.isMetaMask == true) {
            /*
            This is to determine whether you have logged in or not, 
            coinbase is the account you choose at this time.
            */
            if (web3.eth.coinbase == null || web3.eth.coinbase == 'null') {
				var msg = "Please login to MetaMask Wallet first";
				if (Ealt) {
					qback.remove()
            		confirmBox.remove()
				}
				Ealt.Ealert({
					title:'Tips',
					message: msg
			   	})
                // isWebLogin = false;
            } else {
                // isWebLogin = true;
                //initAccount(web3);
				// bcAlertBox("yes MetaMask");
				// Ealt.Ealert({
				// 	title:'Tips',
				// 	message:'yes MetaMask'
			   	// })
            }
        } else {
			// console.log("no MetaMask");
			Ealt.Ealert({
				title:'Tips',
				message:'No MetaMask. Download address is https://metamask.io.'
			})
        }
    } else {
		Ealt.Ealert({
			title:'Tips',
			message:'No MetaMask. Download address is https://metamask.io.'
		})
	}
})

//change account
var account;
var accountInterval;
var times = 1;
function getChange() {
    accountInterval = setInterval(function () {
        if (web3.eth.accounts[0] != localStorage.getItem("ncc-account")) {
            times = 2;
			account = web3.eth.accounts[0];
			// localStorage.clear();
			localStorage.setItem("ncc-account", web3.eth.accounts[0])
			// console.log(web3.eth.accounts[0]);

			// 注册
			// if (!localStorage.getItem("isRegister")) {
				register({
					invitationCode: localStorage.getItem("invitationCode"),
					walletPath: web3.eth.accounts[0]
				})
			// }

			// 登录
			// if (localStorage.getItem("isRegister") && !localStorage.getItem("ncc-isLogin")) {
				login({walletPath: web3.eth.accounts[0]});
			// }

			contract.balanceOf(account, { from: account }, function (error, result) {
				if (!error) {
					console.log(result)
					// var surplus = web3.fromWei(result, "ether");
					// $(".number-coins").html(parseFloat(Number(surplus.c[0]).toFixed(6)));
				} else {
					// if (Ealt) {
					// 	qback.remove()
					// 	confirmBox.remove()
					// }
					// Ealt.Ealert({
					// 	title:'Tips',
					// 	message: error
					// })
				}
			});

			// setTimeout(function() {
			// 	window.location.reload();
			// }, 500)
		} 
	}, 100);
	
	// 注册
	if (!localStorage.getItem("isRegister")) {
		register({
			invitationCode: localStorage.getItem("invitationCode"),
			walletPath: web3.eth.accounts[0]
		})
	}

	// 登录
	if (localStorage.getItem("isRegister") && !localStorage.getItem("ncc-isLogin")) {
		login({walletPath: web3.eth.accounts[0]});
	}
}


