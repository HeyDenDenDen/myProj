
const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    rollback: 50,
    adaptive: true,
    services: {},
    fullPrice: 0,
    allServicePrices: 0,
    servicePercentPrice: 0,
    start: function(){
        appData.asking();
        appData.addPrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle(appData.title);
        appData.logger();
    },
    isNumber: function(num){
        return !isNaN(parseFloat(num)) && isFinite(num);
    },
    isString: function(str){
        return !isNaN(str) && isFinite(str);
    },
    asking: function(){
        
        do {
            appData.title = prompt('Как называется ваш проект?').trim();
        }
        while(appData.isString(appData.title));

        for(let i = 0; i < 2 ; i++){
            let screen;
            do {
                screen = prompt('Какие типы экранов нужно разработать?');
            }
            while(appData.isString(screen));

            let numb = 0;

            do {
                numb = prompt('Сколько будет стоить данная работа?');
            }
            while(!appData.isNumber(numb));

            appData.screens.push({id: i,name: screen,price: numb})

        }

        for(let i = 0; i < 2 ; i++){
            let name;
            do {
                name = prompt('Какой дополнительный тип услуги нужен?');
            }
            while(appData.isString(name));

            let numb = 0;

            do {
                numb = prompt('Сколько это будет стоить?');
            }
            while(!appData.isNumber(numb))
            
            appData.services[name] = +numb;

        }
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function(){

        for(let screen of appData.screens){
            appData.screenPrice += +screen.price
        }

        for(let key in appData.services){
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function (){
        appData.fullPrice = +appData.screenPrice + +appData.allServicePrices;
    },
    getServicePercentPrices: function (){
        appData.servicePercentPrice =  appData.fullPrice - (appData.fullPrice  * (appData.rollback/100));
    },
    getTitle: function (str){
        appData.title =  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();    
    },
    getRollbackMessage: function() {
        if (appData.fullPrice >= 30000){
            console.log('Даем скидку в 10%');
        } else if (appData.fullPrice >= 15000 && appData.fullPrice < 30000){
            console.log('Даем скидку в 5%');
        } else if (appData.fullPrice < 15000 && appData.fullPrice > 0){
            console.log('Скидка не предусмотрена');
        } else if(appData.fullPrice <= 0){
            console.log('Что то пошло не так');
        }
    },
    logger: function(){
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },

}


appData.start();




