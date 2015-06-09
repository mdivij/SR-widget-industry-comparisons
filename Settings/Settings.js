 //Here are all the functions you are going to need for settings
 //You will need to modify the code to suite your own program

//Insert this code into your HTML inside the body
///////////////////////////////////
  <!-- jquery -->
       <script src="vendors/jquery-2.1.3.min.js"></script>
       <script src="vendors/jquery-ui-1.11.4.custom/jquery-ui.js"></script>

  <script src="jscolor-1.4.4/jscolor/jscolor.js"></script>


  <div id="settings" title="Settings">
    <script>  $("#settings").hide(); </script>

      <label id = "lblAddStocks">Add Stocks by: </label>
      <label id = "lblText">Text Size: </label>
      <label id = "lblColor">Color Scheme: </label>
      <label id = "lblTextColor">Text Color: </label>
      <input id = "btnTextColor" class="color" value="000000"></input>
      <input id = "inpColorScheme1" class="color" value="A8C6FA"></input>
      <input id = "inpColorScheme2" class="color" value="FFFFFF"></input>


      <input id = "inpText" type="number" min="12" max="20" step="1" value="16">

      <select id="fundimental">
          <option selected = "selected">floatshares</option>
          <option>liability</option>
          <option>totaloperatingexpense</option>
          <option>netincome</option>
          <option>longtermdebt</option>
          <option>revenue</option>
          <option>numofemployees</option>
          <option>assets</option>
          <option>equity</option>
          <option>shorttermdebt</option>
          <option>epsbase</option>
          <option>cash</option>
          <option>goodwill</option>
          <option>epsdiluted</option>
          <option>dps</option>
          <!--<option>operatingcashflow</option>  temporarily disabled, no fundimental data-->
          <option>institutionalown</option>
          <option>inventory</option>
          <option>incomeaftertax</option>
          <option>incomebeforetax</option>
          <option>capitalexpenditures</option>
          <option>costofgoodssold</option>
          <option>operatingincome</option>
          <option>bookvalue</option>
      </select> 
  </div>
 
  <button id="opener">Settings</button>
  ///////////////////////////////////////////

//insert this code into your css
///////////////////////////////////
#settings {
  border: 1px solid black;
  height: 125px;
  width: 350px;
  position: absolute;
  top: 105px;
  left: 70px;
}
#lblAddStocks {
  position: absolute;
  top: 92px;
  left: 30px;
  height: 20px;
  width: 100px;
}
#lblAddStocks {
  position: absolute;
  top: 92px;
  left: 30px;
  height: 20px;
  width: 100px;
}
#lblText {
  position: absolute;
  top: 10px;
  left: 30px;
  height: 20px;
  width: 100px;
}
#inpText {
  position: absolute;
  top: 8px;
  left: 95px;
  height: 20px;
  width: 40px;
}
#fundimental {
  position: absolute;
  top: 90px;
  left: 130px;
  height: 27px;
  width: 100px;
}
#lblTextColor {
  position: absolute;
  top: 10px;
  left: 180px;
  height: 20px;
  width: 100px;
}
#btnTextColor {
  position: absolute;
  top: 10px;
  left: 260px;
  height: 20px;
  width: 50px;
}
#inpColorScheme1 {
  position: absolute;
  top: 50px;
  left: 140px;
  height: 20px;
  width: 50px;
}
#inpColorScheme2 {
  position: absolute;
  top: 50px;
  left: 210px;
  height: 20px;
  width: 50px;
}
#lblColor {
  position: absolute;
  top: 53px;
  left: 30px;
  height: 20px;
  width: 100px;
}
////////////////////////////////////

//insert all of these settings into your main
/////////////////////////////////////////////

//this is the text size change function
 var changeSize, isChanged;
$( "#inpText" ).change(function() {
  var newTextSize = document.getElementById('inpText').value;
  console.log(newTextSize);
  if(newTextSize == 12){
  	changeSize = '12px';
  	isChanged = true;
  }
  if(newTextSize == 13){
  	changeSize = '13px';
  	isChanged = true;
  }
  if(newTextSize == 14){
  	changeSize = '14px';
  	isChanged = true;
  }
  if(newTextSize == 15){
  	changeSize = '15px';
  	isChanged = true;
  }
  if(newTextSize == 16){
  	changeSize = '16px';
  	isChanged = true;
  }
  if(newTextSize == 17){
  	changeSize = '17px';
  	isChanged = true;
  }
  if(newTextSize == 18){
  	changeSize = '18px';
  	isChanged = true;
  }
  if(newTextSize == 19){
  	changeSize = '19px';
  	isChanged = true;
  }
  if(newTextSize == 20){
  	changeSize = '20px';
  	isChanged = true;
  }
});

//this is the function for opening and closing the settings
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

//this function is used for the dropdown list (modify if you need it, if not delete)
$( "#fundimental" ).change(function() {
        var e = document.getElementById("fundimental");
        fund = e.options[e.selectedIndex].text;
        console.log(fund);
        fundChanged = true;
			Runner.loadFundimental(AppData);
		});
//functions that determine which color wheel you changed
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
//////////////////////////////////////////

//These are the files to insert into your Runner
////////////////////////////////////////////////
//this is my add row function for adding additional row, look through and take the code you will need
//I commented on the files that reffer to settings
Runner.addRow = function addRow(stockName, price, percentChange, plus) {
            var rowNum = document.getElementById("table1").rows.length; 
            var stockAdded = plus;
            if(stockAdded == false){
              while(rowNum > 4) 
              {
               document.getElementById("table1").deleteRow(rowNum - 2);
               rowNum = document.getElementById("table1").rows.length; 
               stockLength = 0;
           numAddedStocks = 0;
              }
            }
            //This is for changing text size in settings
             var newTextSize = document.getElementById('inpText').value;
               var changeSize = '16px';
         if(newTextSize == 12){
          changeSize = '12px';
        }
        if(newTextSize == 13){
          changeSize = '13px';
        }
        if(newTextSize == 14){
          changeSize = '14px';
        }
        if(newTextSize == 15){
          changeSize = '15px';
        }
        if(newTextSize == 16){
          changeSize = '16px';
        }
        if(newTextSize == 17){
          changeSize = '17px';
        }
        if(newTextSize == 18){
          changeSize = '18px';
        }
        if(newTextSize == 19){
          changeSize = '19px';
        }
        if(newTextSize == 20){
          changeSize = '20px';
        }

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
             //this changes the font size of newly added rows
                var emLength = document.getElementsByTagName('em').length;
            for(var x = 0; x < emLength; x++){
                document.getElementsByTagName('em')[x].style.fontSize = changeSize;
              }
              //this changes the color of the newly added rows
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
//finds which table row set you are changing
var colorChangeType;
Runner.colorType = function colorType(type){
colorChangeType = type;
};
//changes the color of the rows
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
////////////////////////////////////////////////
