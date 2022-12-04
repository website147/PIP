function add()
{
  var resolt=Number(document.getElementById("number1").value) + Number(document.getElementById("number2").value);
  console.log (resolt);
  document.getElementById("answer").innerHTML = resolt;
}

function minus()
{
  var result=Number(document.getElementById("number1").value) - Number(document.getElementById("number2").value);
  console.log (result);
  document.getElementById("answer").innerHTML = result;
}
function times()
{
  var resalt=Number(document.getElementById("number1").value) * Number(document.getElementById("number2").value);
  console.log (resalt);
  document.getElementById("answer").innerHTML = resalt;
}
function divide()
{
  var reselt=Number(document.getElementById("number1").value) / Number(document.getElementById("number2").value);
  console.log (reselt);
  document.getElementById("answer").innerHTML = reselt;
}
function power()
{
  var resilt=Number(document.getElementById("number1").value) ** Number(document.getElementById("number2").value);
  console.log (resilt);
  document.getElementById("answer").innerHTML = resilt;
}
function REM()
{
  var resat=Number(document.getElementById("number1").value) % Number(document.getElementById("number2").value);
  console.log (resat);
  document.getElementById("answer").innerHTML = resat;
}
function functions()
{
  var dee=Number(document.getElementById("inputbox").value) * 2;
  console.log (dee);
  document.getElementById("p").innerHTML = dee;
}