
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 50,
    adaptive: true,
    service1: '',
    service2: '',
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    asking: function(){
        appData.title = prompt('Как называется ваш проект?').trim();
        appData.screens = prompt('Какие типы экранов нужно разработать?');
    
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
        }
        while(!isNumber(appData.screenPrice));
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    logger: function(){
        for(let key in appData){
            console.log(key);
        }
    },
    start: function(){
        appData.asking();
        appData.allServicePrices = getAllServicePrices();
        appData.fullPrice = getFullPrice();
        appData.servicePercentPrice = getServicePercentPrices();
        appData.title = getTitle(appData.title);
        appData.logger();
    }
}

const isNumber = function(num){
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const getAllServicePrices = function () {
    let sum = 0;
    let numb;
    for(let i = 0; i < 2 ; i++){
        if(i === 0){
            appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if( i === 1){
            appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
        }
        do {
            numb = prompt('Сколько это будет стоить?');
        }
        while(!isNumber(numb))
         sum += parseInt(numb);
    }
    return sum;
}


function getFullPrice (){
    return +appData.screenPrice + +appData.allServicePrices;
}


const getTitle = function (str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();    
}


const getServicePercentPrices = function (){
    return appData.fullPrice - (appData.fullPrice  * (appData.rollback/100));
}


if (appData.fullPrice >= 30000){
    console.log('Даем скидку в 10%');
} else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000){
    console.log('Даем скидку в 5%');
} else if (appData.fullPrice < 15000 && appData.fullPrice > 0){
    console.log('Скидка не предусмотрена');
} else if(appData.fullPrice <= 0){
    console.log('Что то пошло не так');
}


appData.start();



// console.log(title)
console.log(appData.fullPrice)
// console.log(allServicePrices)
console.log(appData.servicePercentPrice)
