function onInstall(e) {
  onOpen(e);
}

function onOpen(e) {
  SpreadsheetApp.getUi()
  .createMenu('Tags')
  .addItem('Set Tags', 'showDialog')
  .addSeparator()
  .addItem('Instructions', 'showHelpSidebar')
  .addToUi();
}

function showDialog() {  
  var html = HtmlService
   .createHtmlOutputFromFile('dialog');
  SpreadsheetApp.getUi()
   .showModalDialog(html, "Select Tags");
  Logger.log("opened dialog");
}

function showHelpSidebar(){
 var html = HtmlService
  .createHtmlOutputFromFile('help')
  .setTitle("Tags Manual");
 SpreadsheetApp.getUi()
  .showSidebar(html);
}

function getMultiSelectValues(){
  try{
    Logger.log("get values called");
   
    //put all values from tags range (range0) into one array: 
    var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
 
    Logger.log(namedRanges[0].getName());
    var range = namedRanges[0].getRange().getValues();
    
    //Logger.log(range); 
     
    var values = [];
    for (var i in range){
      for (var j in range[i]){
        values.push(range[i][j]);
      }
    }
   
    Logger.log(values);
    return values;
  }catch(e){
    Logger.log(e);
    return null;
  }
}


function fillCellWithSelectedValues(e){
 
  Logger.log("fillCell called");
  Logger.log(e);
  //Logger.log(e['']);
  var s = [];
  for(var i in e){
    Logger.log(i);
    s.push(e[i]);
  }  
  if(s.length) SpreadsheetApp.getActiveRange().setValue(s.join(', '));
  
  
}

function testNamedRanges(){
  
  var namedRanges = SpreadsheetApp.getActiveSpreadsheet().getNamedRanges();
 

  Logger.log(namedRanges[0].getName());
  var range = namedRanges[0].getRange().getValues();
  Logger.log(range);
  
  var s = [];
  for (var i in range){
    for (var j in range[i]){
      s.push(range[i][j]);
    }
  }
  Logger.log(s);
  Logger.log(s[0]);
//  var range = namedRanges[0].getRange().getValues();
//   for(var i in range){
//     for(var j in range[i]){
//       
//       Logger.log(i + range[i].join('! '));
//     }
//  }
 
}