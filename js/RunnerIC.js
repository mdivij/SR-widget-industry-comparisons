'use strict';
//variables
	var stockData;
	var numAddedStocks = 0;
	var ticker = new Array();
	var checks = 0;
	var loaded = new Array();
	var numTickers = 0;
	var emptyStocks = new Array();

	var similarShare = new Array(); 
	//fundimental Arrays
	var floatsharedata = new Array();
	var liabilitydata = new Array();
	var totaloperatingexpensedata = new Array();
	var netincomedata = new Array();
	var longtermdebtdata = new Array();
	var revenuedata = new Array();
	var numofemployeesdata = new Array();
	var assetsdata = new Array();
	var equitydata = new Array();
	var shorttermdebtdata = new Array();
	var epsbasedata = new Array();
	var cashdata = new Array();
	var goodwilldata = new Array();
	var epsdiluteddata = new Array();
	var dpsdata = new Array();
	var institutionalowndata = new Array();
	var inventorydata = new Array();
	var incomeaftertaxdata = new Array();
	var incomebeforetaxdata = new Array();
	var capitalexpendituresdata = new Array();
	var costofgoodssolddata = new Array();
	var operatingincomedata = new Array();
	var bookvaluedata = new Array();

	var floatsharename = new Array();
	var liabilityname = new Array();
	var totaloperatingexpensename = new Array();
	var netincomename = new Array();
	var longtermdebtname = new Array();
	var revenuename = new Array();
	var numofemployeesname = new Array();
	var assetsname = new Array();
	var equityname = new Array();
	var shorttermdebtname = new Array();
	var epsbasename = new Array();
	var cashname = new Array();
	var goodwillname = new Array();
	var epsdilutedname = new Array();
	var dpsname = new Array();
	var operatingcashflowname = new Array();
	var institutionalownname = new Array();
	var inventoryname = new Array();
	var incomeaftertaxname = new Array();
	var incomebeforetaxname = new Array();
	var capitalexpendituresname = new Array();
	var costofgoodssoldname = new Array();
	var operatingincomename = new Array();
	var bookvaluename = new Array();


function Runner () {}
Runner.loadData = function loadData(AppData, stockId){
	similarShare.length = 0;
	Runner.pricedata(AppData, stockId, false);
	return AppData;
}

Runner.setTickers = function setTickers(tickern, number){
	ticker[number] = tickern;
	console.log('ticker', ticker[number]);
	numTickers += 1;
}

Runner.loadFundimental = function loadFundimental(AppData){
			var stockdata = new Array();
			var stockname = new Array();
			var myselect = document.getElementById("fundimental");
  			var fundimental = myselect.options[myselect.selectedIndex].text;
  			emptyStocks.length = 0;
			//loading all fundimental data
			if(loaded[1] != true){
				if(fundimental == 'liability'){//1
					Runner.loading(true);
					loaded[1] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental1(ticker[h], h);
					}

					function callFundimental1(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'liability');
						AppData.v1.fundamental.GET(ticker,'liability')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'liability');
						})
					}
				}
			}		
			
			if(loaded[2] != true){
				if(fundimental == 'totaloperatingexpense'){//2
					Runner.loading(true);
					loaded[2] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental2(ticker[h], h);
					}

					function callFundimental2(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'totaloperatingexpense');
						AppData.v1.fundamental.GET(ticker,'totaloperatingexpense')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'totaloperatingexpense');
						})
					}
				}
			}

			if(loaded[3] != true){
				if(fundimental == 'netincome'){//3
					Runner.loading(true);
					loaded[3] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental3(ticker[h], h);
					}

					function callFundimental3(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'netincome');
						AppData.v1.fundamental.GET(ticker,'netincome')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'netincome');
						})
					}
				}
			}		

			if(loaded[4] != true){
				if(fundimental == 'longtermdebt'){//4
					Runner.loading(true);
					loaded[4] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental4(ticker[h], h);
					}

					function callFundimental4(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'longtermdebt');
						AppData.v1.fundamental.GET(ticker,'longtermdebt')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'longtermdebt');
						})
					}
				}
			}	

			if(loaded[5] != true){
				if(fundimental == 'revenue'){//5
					Runner.loading(true);
					loaded[5] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental5(ticker[h], h);
					}

					function callFundimental5(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'revenue');
						AppData.v1.fundamental.GET(ticker,'revenue')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'revenue');
						})
					}
				}
			}		

			if(loaded[6] != true){
				if(fundimental == 'numofemployees'){//6
					Runner.loading(true);
					loaded[6] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental6(ticker[h], h);
					}

					function callFundimental6(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'numofemployees');
						AppData.v1.fundamental.GET(ticker,'numofemployees')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'numofemployees');
						})
					}
				}
			}

			if(loaded[7] != true){
				if(fundimental == 'assets'){//7
					Runner.loading(true);
					loaded[7] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental7(ticker[h], h);
					}

					function callFundimental7(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'assets');
						AppData.v1.fundamental.GET(ticker,'assets')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'assets');
						})
					}
				}
			}

			if(loaded[8] != true){
				if(fundimental == 'equity'){//8
					Runner.loading(true);
					loaded[8] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental8(ticker[h], h);
					}

					function callFundimental8(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'equity');
						AppData.v1.fundamental.GET(ticker,'equity')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'equity');
						})
					}
				}
			}		

			if(loaded[9] != true){
				if(fundimental == 'shorttermdebt'){//9
					Runner.loading(true);
					loaded[9] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental9(ticker[h], h);
					}

					function callFundimental9(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'shorttermdebt');
						AppData.v1.fundamental.GET(ticker,'shorttermdebt')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'shorttermdebt');
						})
					}
				}
			}	

			if(loaded[10] != true){
				if(fundimental == 'epsbase'){//10
					Runner.loading(true);
					loaded[10] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental10(ticker[h], h);
					}

					function callFundimental10(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'epsbase');
						AppData.v1.fundamental.GET(ticker,'epsbase')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'epsbase');
						})
					}
				}
			}		

			if(loaded[11] != true){
				if(fundimental == 'cash'){//11
					Runner.loading(true);
					loaded[11] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental11(ticker[h], h);
					}

					function callFundimental11(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'cash');
						AppData.v1.fundamental.GET(ticker,'cash')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'cash');
						})
					}
				}
			}

			if(loaded[12] != true){
				if(fundimental == 'goodwill'){//12
					Runner.loading(true);
					loaded[12] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental12(ticker[h], h);
					}

					function callFundimental12(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'goodwill');
						AppData.v1.fundamental.GET(ticker,'goodwill')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'goodwill');
						})
					}
				}
			}

			if(loaded[13] != true){
				if(fundimental == 'epsdiluted'){//13
					Runner.loading(true);
					loaded[13] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental13(ticker[h], h);
					}

					function callFundimental13(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'epsdiluted');
						AppData.v1.fundamental.GET(ticker,'epsdiluted')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'epsdiluted');
						})
					}
				}
			}		

			if(loaded[14] != true){
				if(fundimental == 'dps'){//14
					Runner.loading(true);
					loaded[14] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental14(ticker[h], h);
					}

					function callFundimental14(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'dps');
						AppData.v1.fundamental.GET(ticker,'dps')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'dps');
						})
					}
				}
			}	

			if(loaded[15] != true){
				if(fundimental == 'operatingcashflow'){//15
					Runner.loading(true);
					loaded[15] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental15(ticker[h], h);
					}

					function callFundimental15(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'operatingcashflow');
						AppData.v1.fundamental.GET(ticker,'operatingcashflow')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'operatingcashflow');
						})
					}
				}
			}		

			if(loaded[16] != true){
				if(fundimental == 'institutionalown'){//16
					Runner.loading(true);
					loaded[16] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental16(ticker[h], h);
					}

					function callFundimental16(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'institutionalown');
						AppData.v1.fundamental.GET(ticker,'institutionalown')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'institutionalown');
						})
					}
				}
			}	

			if(loaded[17] != true){
				if(fundimental == 'inventory'){//17
					Runner.loading(true);
					loaded[17] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental17(ticker[h], h);
					}

					function callFundimental17(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'inventory');
						AppData.v1.fundamental.GET(ticker,'inventory')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'inventory');
						})
					}
				}
			}

			if(loaded[18] != true){
				if(fundimental == 'incomeaftertax'){//18
					Runner.loading(true);
					loaded[18] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental18(ticker[h], h);
					}

					function callFundimental18(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'incomeaftertax');
						AppData.v1.fundamental.GET(ticker,'incomeaftertax')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'incomeaftertax');
						})
					}
				}
			}		

			if(loaded[19] != true){
				if(fundimental == 'incomebeforetax'){//19
					Runner.loading(true);
					loaded[19] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental19(ticker[h], h);
					}

					function callFundimental19(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'incomebeforetax');
						AppData.v1.fundamental.GET(ticker,'incomebeforetax')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'incomebeforetax');
						})
					}
				}
			}	

			if(loaded[20] != true){
				if(fundimental == 'capitalexpenditures'){//20
					Runner.loading(true);
					loaded[20] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental20(ticker[h], h);
					}

					function callFundimental20(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'capitalexpenditures');
						AppData.v1.fundamental.GET(ticker,'capitalexpenditures')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'capitalexpenditures');
						})
					}
				}
			}		

			if(loaded[21] != true){
				if(fundimental == 'costofgoodssold'){//21
					Runner.loading(true);
					loaded[21] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental21(ticker[h], h);
					}

					function callFundimental21(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'costofgoodssold');
						AppData.v1.fundamental.GET(ticker,'costofgoodssold')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'costofgoodssold');
						})
					}
				}
			}	

			if(loaded[22] != true){
				if(fundimental == 'operatingincome'){//22
					Runner.loading(true);
					loaded[22] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental22(ticker[h], h);
					}

					function callFundimental22(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'operatingincome');
						AppData.v1.fundamental.GET(ticker,'operatingincome')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'operatingincome');
						})
					}
				}
			}

			if(loaded[23] != true){
				if(fundimental == 'bookvalue'){//23
					Runner.loading(true);
					loaded[23] = true;
					for (var h = 0; h < ticker.length; h++ ){
						callFundimental23(ticker[h], h);
					}

					function callFundimental23(ticker, num) {
						stockname[num] = ticker;
						Runner.setFundimentalName(stockname[num], num, 'bookvalue');
						AppData.v1.fundamental.GET(ticker,'bookvalue')
						.then(function(data){
						stockdata[num] = data.response.data.slice(0,1)[0][1];
						Runner.setFundimentalData(stockdata[num], num, 'bookvalue');
						})
					}
				}
			}		
}
Runner.setFundimentalName = function setFundimentalName(fundimentalname, number, fundimental){
if(fundimental == 'floatshares'){
		floatsharename[number] = fundimentalname;
		console.log(floatsharename[number]);
	}
	if(fundimental == 'liability'){
		liabilityname[number] = fundimentalname;
		console.log(liabilityname[number]);
	}
	if(fundimental == 'totaloperatingexpense'){
		totaloperatingexpensename[number] = fundimentalname;
		console.log(totaloperatingexpensename[number]);
	}
	if(fundimental == 'netincome'){
		netincomename[number] = fundimentalname;
		console.log(netincomename[number]);
	}
	if(fundimental == 'longtermdebt'){
		longtermdebtname[number] = fundimentalname;
		console.log(longtermdebtname[number]);
	}
	if(fundimental == 'revenue'){
		revenuename[number] = fundimentalname;
		console.log(revenuename[number]);
	}
	if(fundimental == 'numofemployees'){
		numofemployeesname[number] = fundimentalname;
		console.log(numofemployeesname[number]);
	}
	if(fundimental == 'assets'){
		assetsname[number] = fundimentalname;
		console.log(assetsname[number]);
	}
	if(fundimental == 'equity'){
		equityname[number] = fundimentalname;
		console.log(equityname[number]);
	}
	if(fundimental == 'shorttermdebt'){
		shorttermdebtname[number] = fundimentalname;
		console.log(shorttermdebtname[number]);
	}
	if(fundimental == 'epsbase'){
		epsbasename[number] = fundimentalname;
		console.log(epsbasename[number]);
	}
	if(fundimental == 'cash'){
		cashname[number] = fundimentalname;
		console.log(cashname[number]);
	}
	if(fundimental == 'goodwill'){
		goodwillname[number] = fundimentalname;
		console.log(goodwillname[number]);
	}
	if(fundimental == 'epsdiluted'){
		epsdilutedname[number] = fundimentalname;
		console.log(epsdilutedname[number]);
	}
	if(fundimental == 'dps'){
		dpsname[number] = fundimentalname;
		console.log(dpsname[number]);
	}
	if(fundimental == 'operatingcashflow'){
		operatingcashflowname[number] = fundimentalname;
		console.log(operatingcashflowname[number]);
	}
	if(fundimental == 'institutionalown'){
		institutionalownname[number] = fundimentalname;
		console.log(institutionalownname[number]);
	}
	if(fundimental == 'inventory'){
		inventoryname[number] = fundimentalname;
		console.log(inventoryname[number]);
	}
	if(fundimental == 'incomeaftertax'){
		incomeaftertaxname[number] = fundimentalname;
		console.log(incomeaftertaxname[number]);
	}
	if(fundimental == 'incomebeforetax'){
		incomebeforetaxname[number] = fundimentalname;
		console.log(incomebeforetaxname[number]);
	}
	if(fundimental == 'capitalexpenditures'){
		capitalexpendituresname[number] = fundimentalname;
		console.log(capitalexpendituresname[number]);
	}
	if(fundimental == 'costofgoodssold'){
		costofgoodssoldname[number] = fundimentalname;
		console.log(costofgoodssoldname[number]);
	}
	if(fundimental == 'operatingincome'){
		operatingincomename[number] = fundimentalname;
		console.log(operatingincomename[number]);
	}
	if(fundimental == 'bookvalue'){
		bookvaluename[number] = fundimentalname;
		console.log(bookvaluename[number]);
	}
}
var counter;
Runner.setFundimentalData = function setFundimentalData(fundimentaldata, number, fundimental){
	if(fundimental == 'floatshares'){
		floatsharedata[number] = fundimentaldata;
		console.log(floatsharedata[number]);
		if(floatsharedata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'liability'){
		liabilitydata[number] = fundimentaldata;
		console.log(liabilitydata[number]);
			if(liabilitydata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'totaloperatingexpense'){
		totaloperatingexpensedata[number] = fundimentaldata;
		console.log(totaloperatingexpensedata[number]);
			if(totaloperatingexpensedata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'netincome'){
		netincomedata[number] = fundimentaldata;
		console.log(netincomedata[number]);
			if(netincomedata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'longtermdebt'){
		longtermdebtdata[number] = fundimentaldata;
		console.log(longtermdebtdata[number]);
			if(longtermdebtdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'revenue'){
		revenuedata[number] = fundimentaldata;
		console.log(revenuedata[number]);
			if(revenuedata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'numofemployees'){
		numofemployeesdata[number] = fundimentaldata;
		console.log(numofemployeesdata[number]);
			if(numofemployeesdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'assets'){
		assetsdata[number] = fundimentaldata;
		console.log(assetsdata[number]);
			if(assetsdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'equity'){
		equitydata[number] = fundimentaldata;
		console.log(equitydata[number]);
			if(equitydata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'shorttermdebt'){
		shorttermdebtdata[number] = fundimentaldata;
		console.log(shorttermdebtdata[number]);
			if(shorttermdebtdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'epsbase'){
		epsbasedata[number] = fundimentaldata;
		console.log(epsbasedata[number]);
			if(epsbasedata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'cash'){
		cashdata[number] = fundimentaldata;
		console.log(cashdata[number]);
			if(cashdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'goodwill'){
		goodwilldata[number] = fundimentaldata;
		console.log(goodwilldata[number]);
			if(goodwilldata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'epsdiluted'){
		epsdiluteddata[number] = fundimentaldata;
		console.log(epsdiluteddata[number]);
			if(epsdiluteddata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'dps'){
		dpsdata[number] = fundimentaldata;
		console.log(dpsdata[number]);
			if(dpsdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'operatingcashflow'){
		operatingcashflowdata[number] = fundimentaldata;
		console.log(operatingcashflowdata[number]);
			if(operatingcashflowdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'institutionalown'){
		institutionalowndata[number] = fundimentaldata;
		console.log(institutionalowndata[number]);
			if(institutionalowndata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'inventory'){
		inventorydata[number] = fundimentaldata;
		console.log(inventorydata[number]);
			if(inventorydata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'incomeaftertax'){
		incomeaftertaxdata[number] = fundimentaldata;
		console.log(incomeaftertaxdata[number]);
			if(incomeaftertaxdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'incomebeforetax'){
		incomebeforetaxdata[number] = fundimentaldata;
		console.log(incomebeforetaxdata[number]);
			if(incomebeforetaxdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'capitalexpenditures'){
		capitalexpendituresdata[number] = fundimentaldata;
		console.log(capitalexpendituresdata[number]);
			if(capitalexpendituresdata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'costofgoodssold'){
		costofgoodssolddata[number] = fundimentaldata;
		console.log(costofgoodssolddata[number]);
			if(costofgoodssolddata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'operatingincome'){
		operatingincomedata[number] = fundimentaldata;
		console.log(operatingincomedata[number]);
			if(operatingincomedata.length == numTickers){
			Runner.loading(false);
		}
	}
	if(fundimental == 'bookvalue'){
		bookvaluedata[number] = fundimentaldata;
		console.log(bookvaluedata[number]);
			if(bookvaluedata.length == numTickers){
			Runner.loading(false);
		}
	}
}

Runner.chosenFundimental = function chosenFundimental(AppData, stockId, fund){
	Runner.fundamentals(AppData, stockId, fund);
}

Runner.pricedata = function priceData(AppData, stockId, plus){
	AppData.v1.pricedata.GET(stockId)
	.then(function(data){
		var stockName = stockId;
		var todayPrice = data.response.data.slice(0,1)[0][1];
		var yesterdayPrice = data.response.data.slice(0,2)[1][1];
		var change = ((todayPrice - yesterdayPrice) / todayPrice ) * 100;
		change = Math.round(change * 100) / 100;
		if(plus == true){
		numAddedStocks += 1;
		}
		Runner.addRow(stockName, todayPrice, change, plus);
		Runner.loading(false);
	}, function(jqXHR){
		Runner.loading(false);
		var length = emptyStocks.length;
		emptyStocks[length] = stockId;
		console.log('emptystocks', length, emptyStocks[length]);
		throw new Error('Failed to load data!',jqXHR);
	});
};


Runner.fundamentals = function fundamentals(AppData, stockId, fundimental){
	checks = 0;
	var fund = fundimental;
	var difference = 1000000000;
	if(fund == 'floatshares') {
		var floatcounter;
		var stockNameF;
		AppData.v1.fundamental.GET(stockId,'floatshares')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameF = stockId;	
			floatcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameF){
					FloatShares(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameF){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
										console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
											FloatShares(ticker[i]);	
											}
										}
									}
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										FloatShares(ticker[i]);	
									}
								}
							}
						}
					}
				}
			floatcounter -= 1;
			console.log(floatcounter)
			}
			if(floatcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function FloatShares(ticker) {
			var tempsharename = ticker;
			var position = floatsharename.indexOf(ticker);
			var tempshare = floatsharedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}

	if(fund == 'liability') {
	var liabcounter;
	var stockNameL;
	AppData.v1.fundamental.GET(stockId,'liability')
	.then(function(data){
	Runner.loading(true);
	stockData = data.response.data.slice(0,1)[0][1];
	console.log('stockdata: ', stockData);
	stockNameL = stockId;	
		liabcounter = ticker.length;
		for (var i = 0; i < ticker.length; i++ ){
			if(numAddedStocks == 0){
				if(ticker[i] != stockNameL){
				Liability(ticker[i]);	
				}
			} else {
				if(ticker[i] != stockNameL){
					var counter = 0;
					for(var h = 0; h < numAddedStocks; h++ ){
						var emptCounter = 0;
						if(ticker[i] != similarShare[h]){
							for(var x = 0; x < emptyStocks.length; x++ ){
								console.log('emptystock', emptyStocks[x]);
								if(ticker[i] != emptyStocks[x]){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									emptCounter += 1;
									counter += 1;
									if(counter == numAddedStocks){
										if(emptCounter == emptyStocks.length){
											Liability(ticker[i]);	
										}
									}
								}		
							}
							if(emptyStocks.length == 0){
								console.log('num added stocks', numAddedStocks)
								console.log(ticker[i],'!=', similarShare[h]);
								counter += 1;
								if(counter == numAddedStocks){
										Liability(ticker[i]);	
								}
							}
						}	
					}
				}
			}
		
		liabcounter -= 1;
		console.log(liabcounter)
		}
		if(liabcounter == 0){
			Runner.pricedata(AppData, similarShare[numAddedStocks], true);
		}
	}, function(jqXHR){
		var length = emptyStocks.length	;
		emptyStocks[length] = stockId;
		console.log('emptystocks', length, emptyStocks[length]);
		throw new Error('Failed to load data!',jqXHR);
	})
	function Liability(ticker) {
		var tempsharename = ticker;
		var position = liabilityname.indexOf(ticker);
		var tempshare = liabilitydata[position];
		var tempDifference = stockData - tempshare;
		if(tempDifference < 0){tempDifference *= -1}
		if(tempDifference < difference){
			similarShare[numAddedStocks] = tempsharename;
			difference = tempDifference;	
		}
	}
}
if(fund == 'totaloperatingexpense') {
		var toecounter;
		var stockNameTOE;
		AppData.v1.fundamental.GET(stockId,'totaloperatingexpense')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameTOE = stockId;	

			toecounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameTOE){
					TotalOperatingExpense(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameTOE){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									TotalOperatingExpense(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										TotalOperatingExpense(ticker[i]);	
									}
								}
							}
						}
					}
				}
			toecounter -= 1;
			console.log(toecounter)
			}
			if(toecounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function TotalOperatingExpense(ticker) {
			var tempsharename = ticker;
			var position = totaloperatingexpensename.indexOf(ticker);
			var tempshare = totaloperatingexpensedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'netincome') {
		var netcounter;
		var stockNameN;
		AppData.v1.fundamental.GET(stockId,'netincome')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameN = stockId;	

			netcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameN){
					NetIncome(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameN){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									NetIncome(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										NetIncome(ticker[i]);	
									}
								}
							}
						}
					}
				}
			netcounter -= 1;
			console.log(netcounter)
			}
			if(netcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function NetIncome(ticker) {
			var tempsharename = ticker;
			var position = netincomename.indexOf(ticker);
			var tempshare = netincomedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'longtermdebt') {
		var ltdebtcounter;
		var stockNameLTD;
		AppData.v1.fundamental.GET(stockId,'longtermdebt')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameLTD = stockId;	

			ltdebtcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameLTD){
					LongtermDebt(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameLTD){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									LongtermDebt(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										LongtermDebt(ticker[i]);	
									}
								}
							}
						}
					}
				}
			ltdebtcounter -= 1;
			console.log(ltdebtcounter)
			}
			if(ltdebtcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function LongtermDebt(ticker) {
			var tempsharename = ticker;
			var position = longtermdebtname.indexOf(ticker);
			var tempshare = longtermdebtdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'revenue') {
		var revcounter;
		var stockNameR;
		AppData.v1.fundamental.GET(stockId,'revenue')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameR = stockId;	

			revcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameR){
					Revenue(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameR){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									Revenue(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										Revenue(ticker[i]);	
									}
								}
							}
						}
					}
				}
			revcounter -= 1;
			console.log(revcounter)
			}
			if(revcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function Revenue(ticker) {
			var tempsharename = ticker;
			var position = revenuename.indexOf(ticker);
			var tempshare = revenuedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'numofemployees') {
		var noecounter;
		var stockNameNOE;
		AppData.v1.fundamental.GET(stockId,'numofemployees')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameNOE = stockId;	

			noecounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameNOE){
					NumofEmployees(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameNOE){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									NumofEmployees(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										NumofEmployees(ticker[i]);	
									}
								}
							}
						}
					}
				}
			noecounter -= 1;
			console.log(noecounter)
			}
			if(noecounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function NumofEmployees(ticker) {
			var tempsharename = ticker;
			var position = numofemployeesname.indexOf(ticker);
			var tempshare = numofemployeesdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'assets') {
		var assetscounter;
		var stockNameA;
		AppData.v1.fundamental.GET(stockId,'assets')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameA = stockId;	

			assetscounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameA){
					Assets(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameA){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									Assets(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										Assets(ticker[i]);	
									}
								}
							}
						}
					}
				}
			assetscounter -= 1;
			console.log(assetscounter)
			}
			if(assetscounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function Assets(ticker) {
			var tempsharename = ticker;
			var position = assetsname.indexOf(ticker);
			var tempshare = assetsdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'equity') {
		var equitycounter;
		var stockNameE;
		AppData.v1.fundamental.GET(stockId,'equity')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameE = stockId;	

			equitycounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameE){
					Equity(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameE){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									Equity(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										Equity(ticker[i]);	
									}
								}
							}
						}
					}
				}
			equitycounter -= 1;
			console.log(equitycounter)
			}
			if(equitycounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function Equity(ticker) {
			var tempsharename = ticker;
			var position = equityname.indexOf(ticker);
			var tempshare = equitydata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'shorttermdebt') {
		var sdcounter;
		var stockNameSD;
		AppData.v1.fundamental.GET(stockId,'shorttermdebt')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameSD = stockId;	

			sdcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameSD){
					ShorttermDebt(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameSD){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									ShorttermDebt(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										ShorttermDebt(ticker[i]);	
									}
								}
							}
						}
					}
				}
			sdcounter -= 1;
			console.log(sdcounter)
			}
			if(sdcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function ShorttermDebt(ticker) {
			var tempsharename = ticker;
			var position = shorttermdebtname.indexOf(ticker);
			var tempshare = shorttermdebtdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'epsbase') {
		var basecounter;
		var stockNameEPSB;
		AppData.v1.fundamental.GET(stockId,'epsbase')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameEPSB = stockId;	

			basecounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameEPSB){
					EpsBase(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameEPSB){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									EpsBase(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										EpsBase(ticker[i]);	
									}
								}
							}
						}
					}
				}
			basecounter -= 1;
			console.log(basecounter)
			}
			if(basecounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function EpsBase(ticker) {
			var tempsharename = ticker;
			var position = epsbasename.indexOf(ticker);
			var tempshare = epsbasedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'cash') {
		var cashcounter;
		var stockNameC;
		AppData.v1.fundamental.GET(stockId,'cash')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameC = stockId;	

			cashcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameC){
					Cash(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameC){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									Cash(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										Cash(ticker[i]);	
									}
								}
							}
						}
					}
				}
			cashcounter -= 1;
			console.log(cashcounter)
			}
			if(cashcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function Cash(ticker) {
			var tempsharename = ticker;
			var position = cashname.indexOf(ticker);
			var tempshare = cashdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'goodwill') {
		var goodcounter;
		var stockNameG;
		AppData.v1.fundamental.GET(stockId,'goodwill')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameG = stockId;	

			goodcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameG){
					Goodwill(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameG){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									Goodwill(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										Goodwill(ticker[i]);	
									}
								}
							}
						}
					}
				}
			goodcounter -= 1;
			console.log(goodcounter)
			}
			if(goodcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function Goodwill(ticker) {
			var tempsharename = ticker;
			var position = goodwillname.indexOf(ticker);
			var tempshare = goodwilldata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'epsdiluted') {
		var dilucounter;
		var stockNameEPSD;
		AppData.v1.fundamental.GET(stockId,'epsdiluted')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameEPSD = stockId;	

			dilucounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameEPSD){
					EpsDiluted(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameEPSD){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									EpsDiluted(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										EpsDiluted(ticker[i]);	
									}
								}
							}
						}
					}
				}
			dilucounter -= 1;
			console.log(dilucounter)
			}
			if(dilucounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function EpsDiluted(ticker) {
			var tempsharename = ticker;
			var position = epsdilutedname.indexOf(ticker);
			var tempshare = epsdiluteddata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'dps') {
		var dpscounter;
		var stockNameDPS;
		AppData.v1.fundamental.GET(stockId,'dps')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameDPS = stockId;	

			dpscounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameDPS){
					DPS(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameDPS){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									DPS(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										DPS(ticker[i]);	
									}
								}
							}
						}
					}
				}
			dpscounter -= 1;
			console.log(dpscounter)
			}
			if(dpscounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function DPS(ticker) {
			var tempsharename = ticker;
			var position = dpsname.indexOf(ticker);
			var tempshare = dpsdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'operatingcashflow') {
		var ocfcounter;
		var stockNameOCF;
		AppData.v1.fundamental.GET(stockId,'operatingcashflow')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameOCF = stockId;	

			ocfcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameOCF){
					OperatingCashFlow(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameOCF){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									OperatingCashFlow(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										OperatingCashFlow(ticker[i]);	
									}
								}
							}
						}
					}
				}
			ocfcounter -= 1;
			console.log(ocfcounter)
			}
			if(ocfcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function OperatingCashFlow(ticker) {
			var tempsharename = ticker;
			var position = operatingcashflowname.indexOf(ticker);
			var tempshare = operatingcashflowdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'institutionalown') {
		var owncounter;
		var stockNameIO;
		AppData.v1.fundamental.GET(stockId,'institutionalown')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameIO = stockId;	

			owncounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameIO){
					InstitutionalOwn(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameIO){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									InstitutionalOwn(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										InstitutionalOwn(ticker[i]);	
									}
								}
							}
						}
					}
				}
			owncounter -= 1;
			console.log(owncounter)
			}
			if(owncounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function InstitutionalOwn(ticker) {
			var tempsharename = ticker;
			var position = institutionalownname.indexOf(ticker);
			var tempshare = institutionalowndata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'inventory') {
		var invencounter;
		var stockNameI;
		AppData.v1.fundamental.GET(stockId,'inventory')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameI = stockId;	

			invencounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameI){
					Inventory(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameI){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									Inventory(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										Inventory(ticker[i]);	
									}
								}
							}
						}
					}
				}
			invencounter -= 1;
			console.log(invencounter)
			}
			if(invencounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function Inventory(ticker) {
			var tempsharename = ticker;
			var position = inventoryname.indexOf(ticker);
			var tempshare = inventorydata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'incomeaftertax') {
		var iatcounter;
		var stockNameIAT;
		AppData.v1.fundamental.GET(stockId,'incomeaftertax')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameIAT = stockId;	

			iatcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameIAT){
					IncomeAfterTax(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameIAT){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									IncomeAfterTax(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										IncomeAfterTax(ticker[i]);	
									}
								}
							}
						}
					}
				}
			iatcounter -= 1;
			console.log(iatcounter)
			}
			if(iatcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function IncomeAfterTax(ticker) {
			var tempsharename = ticker;
			var position = incomeaftertaxname.indexOf(ticker);
			var tempshare = incomeaftertaxdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'incomebeforetax') {
		var ibtcounter;
		var stockNameIBT;
		AppData.v1.fundamental.GET(stockId,'incomebeforetax')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameIBT = stockId;	

			ibtcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameIBT){
					IncomeBeforeTax(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameIBT){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									IncomeBeforeTax(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										 IncomeBeforeTax(ticker[i]);	
									}
								}
							}
						}
					}
				}
			ibtcounter -= 1;
			console.log(ibtcounter)
			}
			if(ibtcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function IncomeBeforeTax(ticker) {
			var tempsharename = ticker;
			var position = incomebeforetaxname.indexOf(ticker);
			var tempshare = incomebeforetaxdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'capitalexpenditures') {
		var expencounter;
		var stockNameCE;
		AppData.v1.fundamental.GET(stockId,'capitalexpenditures')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameF = stockId;	

			expencounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameF){
					CapitalExpenditures(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameF){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									CapitalExpenditures(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										CapitalExpenditures(ticker[i]);	
									}
								}
							}
						}
					}
				}
			expencounter -= 1;
			console.log(expencounter)
			}
			if(expencounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function CapitalExpenditures(ticker) {
			var tempsharename = ticker;
			var position = capitalexpendituresname.indexOf(ticker);
			var tempshare = capitalexpendituresdata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'costofgoodssold') {
		var cogscounter;
		var stockNameCOGS;
		AppData.v1.fundamental.GET(stockId,'costofgoodssold')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameCOGS = stockId;	

			cogscounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameCOGS){
					CostOfGoodsSold(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameCOGS){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									CostOfGoodsSold(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										CostOfGoodsSold(ticker[i]);	
									}
								}
							}
						}
					}
				}
			cogscounter -= 1;
			console.log(cogscounter)
			}
			if(cogscounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function CostOfGoodsSold(ticker) {
			var tempsharename = ticker;
			var position = costofgoodssoldname.indexOf(ticker);
			var tempshare = costofgoodssolddata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'operatingincome') {
		var oicounter;
		var stockNameOI;
		AppData.v1.fundamental.GET(stockId,'operatingincome')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameOI = stockId;	

			oicounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameOI){
					OperatingIncome(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameOI){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									OperatingIncome(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										OperatingIncome(ticker[i]);	
									}
								}
							}
						}
					}
				}
			oicounter -= 1;
			console.log(oicounter)
			}
			if(oicounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function OperatingIncome(ticker) {
			var tempsharename = ticker;
			var position = operatingincomename.indexOf(ticker);
			var tempshare = operatingincomedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
if(fund == 'bookvalue') {
		var bookcounter;
		var stockNameBV;
		AppData.v1.fundamental.GET(stockId,'bookvalue')
		.then(function(data){
		Runner.loading(true);
		stockData = data.response.data.slice(0,1)[0][1];
		console.log('stockdata: ', stockData);
		stockNameBV = stockId;	

			bookcounter = ticker.length;
			for (var i = 0; i < ticker.length; i++ ){
				if(numAddedStocks == 0){
					if(ticker[i] != stockNameBV){
					BookValue(ticker[i]);	
					}
				} else {
					if(ticker[i] != stockNameBV){
						var counter = 0;
						for(var h = 0; h < numAddedStocks; h++ ){
							var emptCounter = 0;
							if(ticker[i] != similarShare[h]){
								for(var x = 0; x < emptyStocks.length; x++ ){
									console.log('emptystock', emptyStocks[x]);
									if(ticker[i] != emptyStocks[x]){
								console.log('num added stocks', numAddedStocks)
										console.log(ticker[i],'!=', similarShare[h]);
										emptCounter += 1;
										counter += 1;
										if(counter == numAddedStocks){
											if(emptCounter == emptyStocks.length){
									BookValue(ticker[i]);	
											}
										}
									}		
								}
								if(emptyStocks.length == 0){
									console.log('num added stocks', numAddedStocks)
									console.log(ticker[i],'!=', similarShare[h]);
									counter += 1;
									if(counter == numAddedStocks){
										BookValue(ticker[i]);	
									}
								}
							}
						}
					}
				}
			bookcounter -= 1;
			console.log(bookcounter)
			}
			if(bookcounter == 0){
				Runner.pricedata(AppData, similarShare[numAddedStocks], true);
			}
		}, function(jqXHR){
			var length = emptyStocks.length;
			emptyStocks[length] = stockId;
			console.log('emptystocks', length, emptyStocks[length]);
			throw new Error('Failed to load data!',jqXHR);
		})
		function BookValue(ticker) {
			var tempsharename = ticker;
			var position = bookvaluename.indexOf(ticker);
			var tempshare = bookvaluedata[position];
			var tempDifference = stockData - tempshare;
			if(tempDifference < 0){tempDifference *= -1}
			if(tempDifference < difference){
				similarShare[numAddedStocks] = tempsharename;
				difference = tempDifference;	
			}
		}
	}
 };

Runner.addRow = function addRow(stockName, price, percentChange, plus) {
            var rowNum = document.getElementById("table1").rows.length; 
            var stockAdded = plus;
            if(stockAdded == false){
            	while(rowNum > 4) 
            	{
            	 document.getElementById("table1").deleteRow(rowNum - 2);
            	 rowNum = document.getElementById("table1").rows.length; 
            	 numAddedStocks = 0;
           		}
            }
               var newTextSize = document.getElementById('inpText').value;
               var changeSize = '16px';
 			   changeSize = newTextSize + 'px';

             var table = document.getElementById("table1");
             if(stockAdded == false){
             	var row = table.insertRow(3);
             	var cell1 = row.insertCell(0);
            	var cell2 = row.insertCell(1);
             	var cell3 = row.insertCell(2);
             	var cell4 = row.insertCell(3);
             	cell1.innerHTML = "<em>" + stockName + "</em>";
             	cell2.innerHTML = "<em>" + price + "</em>";
             	cell3.innerHTML = "<em>" + percentChange + "</em>";
             	cell4.innerHTML = "<em style='color:grey'>(x)</em>";
       				if (percentChange < 0){ 
       					cell3.style.color = "red";	
       				}
       				if (percentChange > 0){ 
       					cell3.style.color = "green";
       				}
                   } else {
    	      	var row = table.insertRow(rowNum - 1);
             	var cell1 = row.insertCell(0);
             	var cell2 = row.insertCell(1);
             	var cell3 = row.insertCell(2);
             	var cell4 = row.insertCell(3);
             	cell1.innerHTML = "<em>" + stockName + "</em>";
             	cell2.innerHTML = "<em>" + price + "</em>";
             	cell3.innerHTML = "<em>" + percentChange + "</em>";
             	cell4.innerHTML = "<em class = 'deleterow' onclick='Runner.deleteRow(this);'>(x)</em>";
             		if (percentChange < 0){ 
       					cell3.style.color = "red";	
       				}
       				if (percentChange > 0){ 
       					cell3.style.color = "green";
       				}
             }
             		var emLength = document.getElementsByTagName('em').length;
     				for(var x = 0; x < emLength; x++){
      					document.getElementsByTagName('em')[x].style.fontSize = changeSize;
      				}

      	var txtcolor = document.getElementById('inpColorScheme1').value;
		txtcolor = '#' + txtcolor;
	 	var rowLength = document.getElementById('table1').rows.length;
	 	for(var x = 2; x < rowLength; x += 2){
	 		document.getElementById('table1').rows[x].style.background = txtcolor;
	 	}
	 	txtcolor = document.getElementById('inpColorScheme2').value;
		txtcolor = '#' + txtcolor;
	 	for(var x = 1; x < rowLength; x += 2){
	 		document.getElementById('table1').rows[x].style.background = txtcolor;
	 	}
};

Runner.deleteRow = function deleteRow(r) {
	var i = r.parentNode.parentNode.rowIndex;
	var deletedstock = String(document.getElementById("table1").rows[i].cells[0].innerHTML);
	var delstock = deletedstock.slice(29, 33);
	console.log('deletedstock', delstock);
    document.getElementById("table1").deleteRow(i);
    console.log("Removed Row")
    numAddedStocks -= 1;
    for(var h = 0; h < similarShare.length; h++ ) {
    	if (similarShare[h] == delstock) {
    		similarShare.splice(h, 1);
    	}
    }
    	var txtcolor = document.getElementById('inpColorScheme1').value;
		txtcolor = '#' + txtcolor;
	 	var rowLength = document.getElementById('table1').rows.length;
	 	for(var x = 2; x < rowLength; x += 2){
	 		document.getElementById('table1').rows[x].style.background = txtcolor;
	 	}
	 	txtcolor = document.getElementById('inpColorScheme2').value;
		txtcolor = '#' + txtcolor;
	 	for(var x = 1; x < rowLength; x += 2){
	 		document.getElementById('table1').rows[x].style.background = txtcolor;
	 	}

};

Runner.loading = function loading(isloading) {
        // add the overlay with loading image to the page
        var isLoading = isloading;
        var over = '<div id="overlay">' +
            '<img id="loading" src="http://bit.ly/pMtW1K">' +
            '</div>';
        if(isLoading == true){
        	$(over).appendTo('body');
        }   
        if(isLoading == false){
        	$('#overlay').remove();
        }
                
};
var colorChangeType;
Runner.colorType = function colorType(type){
colorChangeType = type;
};

Runner.colorChange = function colorChange(){
	   var txtcolor;
	if(colorChangeType == 'text'){
		txtcolor = document.getElementById('btnTextColor').value;
		txtcolor = '#' + txtcolor;
	   var pLength = document.getElementsByTagName('p').length;
    	for(var x = 0; x < pLength; x++){
    		 document.getElementsByTagName('p')[x].style.color = txtcolor;
    	}
	}
	 if(colorChangeType == 'scheme1'){
	 	txtcolor = document.getElementById('inpColorScheme1').value;
		txtcolor = '#' + txtcolor;
	 	var rowLength = document.getElementById('table1').rows.length;
	 	for(var x = 2; x < rowLength; x += 2){
	 		document.getElementById('table1').rows[x].style.background = txtcolor;
	 	}
	}
	 if(colorChangeType == 'scheme2'){
	 	txtcolor = document.getElementById('inpColorScheme2').value;
		txtcolor = '#' + txtcolor;
	 	var rowLength = document.getElementById('table1').rows.length;
	 	for(var x = 1; x < rowLength; x += 2){
	 		document.getElementById('table1').rows[x].style.background = txtcolor;
	 	}
 	}     
}
