let title = 'myProj';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 999;
let rollback = 50;
let fullPrice = 257800;
let adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log('Стоимость верстки экранов' + ' ' + screenPrice + ' ' + 'рублей/ долларов/гривен/юани');
console.log('Стоимость разработки сайта' + ' ' +  fullPrice + ' ' + 'рублей/ долларов/гривен/юани');

console.log(screens.toLowerCase().split(', '));

console.log((fullPrice * (rollback/100)));



alert('Hello world!');

console.log('Hello space!');