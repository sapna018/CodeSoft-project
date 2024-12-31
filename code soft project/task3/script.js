let resultField  = document.getElementById("result")

function appendValue(value){
  if(resultField .innerText === "0"){
    resultField .innerText =value;
  }else{
    resultField .innerText +=value;
  }
}

function ClearResult(){
  resultField .innerText ="0";
}

function backspace(){
  resultField.innerText = resultField .innerText.slice(0,-1 )|| "0"
}
function calculate(){
  try{
    // show final output
    let expression = resultField .innerText;
    let FinalResult = eval(expression); //evaluate expression
    resultField.innerText = FinalResult;
  }
  catch(error){
    alert("Invalid Input ! please check your Expression");

  }
  
}