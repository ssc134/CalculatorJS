var text = "";
var buffer = "0";
var operator = "";
var input;

function initialize()
{
    console.log(`text = ${text}`) ;
    console.log(`buffer = ${buffer}`) ;
    console.log(`operator = ${operator}`) ;
    input = document.getElementById("inputText");    
}

function onClick1()
{
    console.log("1 Clicked");
    text += "1";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick2()
{
    console.log("2 Clicked");
    text += "2";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick3()
{
    console.log("3 Clicked");
    text += "3";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick4()
{
    console.log("4 Clicked");
    text += "4";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick5()
{
    console.log("5 Clicked");
    text += "5";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick6()
{
    console.log("6 Clicked");
    text += "6";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick7()
{
    console.log("7 Clicked");
    text += "7";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick8()
{
    console.log("8 Clicked");
    text += "8";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick9()
{
    console.log("9 Clicked");
    text += "9";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClick0()
{
    console.log("0 Clicked");
    text += "0";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClickPlus()
{
    console.log("+ Clicked");
    buffer = text;
    text = "";
    input.value = text;
    operator = "+";
//    document.getElementById("inputText").value = text;
}

function onClickMinus()
{
    console.log("- Clicked");
    buffer = text;
    text = "";
    input.value = text;
    operator = "-";
}

function onClickDivide()
{
    console.log("/ Clicked");
    buffer = text;
    text = "";
    input.value = text;
    operator = "/";
}

function onClickMultiply()
{
    console.log("* Clicked");
    buffer = text;
    text = "";
    input.value = text;
    operator = "*";
}

function onClickDot()
{
    console.log(". Clicked");
    if(text.indexOf('.')==-1)
    {
        text += '.';
        input.value = text;
    }
}

function onClickClear()
{
    console.log("AC Clicked");
    text = "";
//    document.getElementById("inputText").value = text;
    input.value = text;
}

function onClickEvaluate()
{
    console.log("= Clicked");
    var a = parseFloat(buffer);
    var b = parseFloat(text);
    var c;
    if(operator == '+')
        c = a + b;
    else if(operator == '-')
        c = a - b;
    else if(operator == '*')
        c = a * b;
    else if(operator == '/')
        c = a / b;
    text = c.toString();
    input.value = text;
    
}

