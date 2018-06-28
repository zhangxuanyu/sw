var Neb = require("nebulas").Neb;
var neb = new Neb();
var NebPay = require("nebpay");
var nebPay = new NebPay();
var nebulas = require("nebulas")
var browser = function getBrowserInfo() { //获取浏览器名称
	return 'chrome'
}();




//var contractAddress = "n1fu9ULTQc4nqdZBNwAwtXwvNxr34w3J1rG" //项目合约地址
var contractAddress = "n1sX8KJmkpbsyjyMgFvYPKg3oZJJTCadz62" //项目线上合约地址
var nickNameAddress = "n1gHbworeeX9Q3Png44YysZDWpxbmyoXDw2"  //拉去昵称的合约地址
var userAddress = '' //用户钱包地址，默认为空

neb.setRequest(new nebulas.HttpRequest("https://mainnet.nebulas.io"));

function onSimulateCallClick(contractAddress,func,args,callback) {  //call查询调用函数，（合约地址，函数名，参数，回调）
	to  = contractAddress;
	value = '0';
	callFunction =  func;
	var callArgs =args;
	nebPay.simulateCall(to, value, callFunction, callArgs, {
		qrcode: {
			showQRCode: false
		},
		goods: {
			name: "test",
			desc: "test goods"
		},
		listener: callback 
		// listener: alert('zheshi huidiao')
	});
}




function newTransaction(contractAddress,callFunction,val,callArgs,callback) {  //合约交易调用函数，（合约地址，函数名，参数，回调）
	if (browser == 'chrome') {
		if (typeof(webExtensionWallet) === "undefined") {
			alert("请先安装星云谷歌拓展钱包.")
		} else {
			to = contractAddress;
			value = val;
			callFunction = callFunction;
			var callArgs = callArgs;
			serialNumber = nebPay.call(to, value, callFunction, callArgs, {
				listener: callback 
			});
			setTimeout(() => {
				onrefreshClick();
			}, 1000);
		}
	} else {
		alert('请在谷歌浏览器下输入');
	}
}



function onrefreshClick() {
	nebPay.queryPayInfo(serialNumber) //search transaction result from server (result upload to server by app)
		.then(function(resp) {
			console.log('----------------queryPayInfo-----------');
			console.log(resp);
		})
		.catch(function(err) {
			console.log('----------------queryPayInfo-----------');
			console.log(err);
		});
}
















/*********************************************************忽略下面的代码************************************************************/ 

function dialog(ctx, text) { //弹出框
	var str =
		`<div class='dialog'>
			  	${text}
			</div>`
	$(ctx).append(str)
	setTimeout(function() {
		$(ctx).html('')
	}, 1500)
}

function loading(ctx) {  //loading样式
	var str =
		`<div class='loader'>
			  <div>
			    <div>
			      <div>
			        <div>
			          <div>
			            <div></div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>`

	$(ctx).css('position', 'relative')

	$(ctx).append(str)
}