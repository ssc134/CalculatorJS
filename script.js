function calc()
{
    var a = document.getElementById("operand1").value;
    a = Number.parseFloat(a);
    var b = document.getElementById("operand2").value;
    b = Number.parseFloat(b);
    var op = document.getElementById('operator').value;
    var res;
    if(op=='+')
        res = a+b;
    else if(op=='-')
        res = a-b;
    else if(op=='*')
        res = a*b;
    else if(op=='/')
        res = a/b;

    document.getElementById("result").value = res;
    console.log(`${res}`);
    
}

function copy1()
{
    document.getElementById('operand1').value = document.getElementById('result').value;
}

function copy2()
{
    document.getElementById("operand2").value = document.getElementById('result').value;
}