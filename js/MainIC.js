'use strict';

StockRender.AppRender.register({
	id: "49e90eee6ce1942a94136fc8db19319c",
	name: "Industry Comparisons",
	version: "1.0.0",
	defaults: {
		terminal: {
			x: 0,
			y: 0,
			w: 100,
			h: 100
		}
	},
	beforeRender: function () {
		console.log('running beforeRender!');
	},
ready: function(AppMemory, AppData) {
      Runner.loading(true);
			//autocomplete
			var tickers = new Array();
			var stockData = new Array();
			var stockName = new Array();
		AppData.v1.Tickerlist.GET('json')
			.then(function(data){
				for (var h = 0; h < data.response.length; h++ ){
					tickers[h] = data.response[h].Ticker;
					callFundimental(tickers[h], h);
					Runner.setTickers(tickers[h], h);
				}
			 	$("#autocomplete").autocomplete({
    				lookup: tickers,
    				onSelect: function (suggestion) {
      					var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
      					$('#outputcontent').html(thehtml);
      					$("#autocomplete").focus();
    				}
  				});
			});
			//loading all floatshare data
			function callFundimental(ticker, num) {
				stockName[num] = ticker;
				Runner.setFundimentalName(stockName[num], num, 'floatshares');
				AppData.v1.fundamental.GET(ticker,'floatshares')
					.then(function(data){
					stockData[num] = data.response.data.slice(0,1)[0][1];
					Runner.setFundimentalData(stockData[num], num, 'floatshares');
				})
			}

		$('#autocomplete').keypress(function(e){
			if( e.which === 13 ) {
				Runner.loading(true);
				Runner.loadData(AppData, $('#autocomplete')[0].value);
				return;
			}
		})
    var fund = 'floatshares';
		$( "#Add" ).click(function() {
			var rowNum = document.getElementById("table1").rows.length;
    		if(rowNum >= 5){
  			Runner.chosenFundimental(AppData, $('#autocomplete')[0].value, fund);
  			}
		});

  var changeSize, isChanged;
$( "#inpText" ).change(function() {
  var newTextSize = document.getElementById('inpText').value;
  console.log(newTextSize);
  	changeSize = newTextSize + 'px';
  	isChanged = true;
});

var count = 0;
var click = 0;
var fundChanged;
$( "#opener" ).click(function() {
    count += 1;
    click = count % 2;
    console.log('click', click);
    if(click == 1){
      $("#settings").show();
      $("#table1").hide();
    } 
    if(click == 0) {
      $("#settings").hide();
      $("#table1").show();
      if(isChanged == true){
      console.log(changeSize);
      var pLength = document.getElementsByTagName('p').length;
      for(var x = 0; x < pLength; x++){
         document.getElementsByTagName('p')[x].style.fontSize = changeSize;
      }
      var emLength = document.getElementsByTagName('em').length;
      for(var x = 0; x < emLength; x++){
      document.getElementsByTagName('em')[x].style.fontSize = changeSize;
      }
  	  	isChanged = false;
  	  }
      if(fundChanged == true){
         var rowNum = document.getElementById("table1").rows.length; 
              while(rowNum > 4) 
              {
               document.getElementById("table1").deleteRow(rowNum - 2);
               rowNum = document.getElementById("table1").rows.length; 
               stockLength = 0;
               numAddedStocks = 0;
              }
              fundChanged = false;
      }
    }
  });

$( "#fundimental" ).change(function() {
        var e = document.getElementById("fundimental");
        fund = e.options[e.selectedIndex].text;
        console.log(fund);
        fundChanged = true;
			Runner.loadFundimental(AppData);
		});

$( "#inpColorScheme1" ).click(function() {
  Runner.colorType('scheme1');
});
$( "#inpColorScheme2" ).click(function() {
  Runner.colorType('scheme2');
});
$( "#btnTextColor" ).click(function() {
  Runner.colorType('text');
});


}
});

