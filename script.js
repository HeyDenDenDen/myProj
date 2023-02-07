let title = prompt('Как называется ваш проект?').trim();
let screens = prompt('Какие типы экранов нужно разработать?');
let screenPrice;
let rollback = 50;
let adaptive = confirm('Нужен ли адаптив на сайте?');
let service1;
let servicePrice1;
let service2;
let servicePrice2;
let fullPrice;
let allServicePrices;
let servicePercentPrice;

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
}
while(!isNumber(screenPrice))

const getAllServicePrices = function () {
    let sum = 0;
    let numb;
    for(let i = 0; i < 2 ; i++){
        if(i === 0){
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if( i === 1){
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        do {
            numb = prompt('Сколько это будет стоить?');
        }
        while(!isNumber(numb))
         sum += parseInt(numb);
    }
    return sum;
}
allServicePrices = getAllServicePrices();

function getFullPrice (){
    return +screenPrice + +allServicePrices;
}
fullPrice = getFullPrice();


const getTitle = function (str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();    
}

title = getTitle(title);

const getServicePercentPrices = function (){
    return fullPrice - (fullPrice  * (rollback/100));
}
servicePercentPrice = getServicePercentPrices();

if (fullPrice >= 30000){
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000){
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена');
} else if(fullPrice <= 0){
    console.log('Что то пошло не так');
}

console.log(title)
console.log(fullPrice)
console.log(allServicePrices)
console.log(servicePercentPrice)