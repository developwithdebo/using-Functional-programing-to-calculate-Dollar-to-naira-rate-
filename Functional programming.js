var dollarAmount = 100;
var dollarExchangeRate = 1200;
var currencyInNaira = 0;
function totalAmount(dollar, rate) {
    return dollar * rate;
}
currencyInNaira = totalAmount(dollarAmount, dollarExchangeRate);
console.log(currencyInNaira);