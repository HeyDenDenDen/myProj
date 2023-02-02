let title = prompt('Как называется ваш проект?').trim();

let screens = prompt('Какие типы экранов нужно разработать?');
console.log(screens);

let screenPrice = parseInt(prompt('Сколько будет стоить данная работа?'));

let rollback = 50;

let adaptive = confirm('Нужен ли адаптив на сайте?');


let service1 = prompt('Какой дополнительный тип услуги нужен?');
let servicePrice1 = parseInt(prompt('Сколько это будет стоить?'));

let service2 = prompt('Какой дополнительный тип услуги нужен?');

let servicePrice2 = parseInt(prompt('Сколько это будет стоить?'));

let fullPrice = parseInt(screenPrice + servicePrice1 + servicePrice2);

let servicePercentPrice = fullPrice - Math.ceil(fullPrice * (rollback/100));


if (fullPrice >= 30000){
    console.log('Даем скидку в 10%');
} else if (fullPrice >= 15000 && fullPrice < 30000){
    console.log('Даем скидку в 5%');
} else if (fullPrice < 15000 && fullPrice > 0){
    console.log('Скидка не предусмотрена');
} else if(fullPrice <= 0){
    console.log('Что то пошло не так');
}


// let allServicePrices;

const getAllServicePrices = function () {
    return parseInt(screenPrice + servicePrice1 + servicePrice2);
}
let allServicePrices = getAllServicePrices();


function getFullPrice (){
    return parseInt(screenPrice + allServicePrices);
}
fullPrice = getFullPrice();


const getTitle = function (){
    return title[0].toUpperCase() + title.substring(1).toLowerCase();    
}
let test = getTitle();
console.log(test);

const getServicePercentPrices = function (){
    return allServicePrices  * (rollback/100);
}
servicePercentPrice = getServicePercentPrices();
console.log(servicePercentPrice);


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