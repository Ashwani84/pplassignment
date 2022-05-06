function divide (x,y,callback)
{
    var quotient = x/y;
    var remainder = x%y;
    callback([quotient,remainder]);
}
function output (sum)
{
    console.log('quotient and remainder is' + sum)
    document.write('quotient and remainder is ' + sum)
}
divide(50,20,output);