let title = prompt('Как называется ваш проект?').trim();

let screens = prompt('Какие типы экранов нужно разработать?');
console.log(screens);

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num)
}

let screenPrice;

do {
    screenPrice = parseInt(prompt('Сколько будет стоить данная работа?'));
}
while(!isNumber(screenPrice))

let rollback = 50;

let adaptive = confirm('Нужен ли адаптив на сайте?');


let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1;
do {
    servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));
}
while(!isNumber(servicePrice1))

let service2 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice2;
do {
    servicePrice2 = parseInt(prompt('Сколько это будет стоить?'));
}
while(!isNumber(servicePrice2))

let fullPrice = parseInt(screenPrice + servicePrice1 + servicePrice2);
console.log(fullPrice + "ФУЛПРАЙС");

// let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback/100));



// let allServicePrices;

const getAllServicePrices = function () {
    return parseInt(servicePrice1 + servicePrice2);
}
let allServicePrices = getAllServicePrices();
console.log(allServicePrices + "АЛЛСЕРВИСПРАЙС");


function getFullPrice (){
    return parseInt(screenPrice + allServicePrices);
}
fullPrice = getFullPrice();


const getTitle = function (){
    return title[0].toUpperCase() + title.substring(1).toLowerCase();    
}

const getServicePercentPrices = function (){
    return fullPrice  * (rollback/100);
}
let servicePercentPrice = getServicePercentPrices();


if (fullPrice >= 30000){
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000){
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена');
} else if(fullPrice <= 0){
    console.log('Что то пошло не так');
}


// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);
// console.log(screens.length);
// console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/ долларов/гривен/юани');
// console.log('Стоимость разработки сайта' + ' ' +  fullPrice + ' ' + 'рублей/ долларов/гривен/юани');

// console.log(screens.toLowerCase().split(', '));

// console.log((fullPrice * (rollback/100)));



// alert('Hello world!');

// console.log('Hello space!');