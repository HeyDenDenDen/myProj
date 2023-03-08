const books = document.querySelectorAll('.book');
const bookName = document.querySelectorAll('.book>h2>a');
const booksList = document.querySelectorAll('.books');
const delElement = document.querySelector('.adv');
const imageUpdate = document.querySelector('body');
const bookPointOne = document.querySelectorAll('.book:nth-child(1) > ul > li');
const bookPointTwo = document.querySelectorAll('.book:nth-child(6) > ul > li');
const bookPointThree = document.querySelectorAll('.book:nth-child(3) > ul > li');

document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

const bookTextElement = document.createElement('li');

bookTextElement.textContent = 'Глава 8: За пределами ES6';
bookPointThree[8].after(bookTextElement);

console.log(bookPointThree);

books[0].before(books[1]);
books[5].after(books[2]);
books[3].before(books[4]);

delElement.remove();

bookPointTwo[2].before(bookPointTwo[9]);
bookPointTwo[4].after(bookPointTwo[2]);
bookPointTwo[8].before(bookPointTwo[5]);

bookPointOne[10].before(bookPointOne[2]);
bookPointOne[3].after(bookPointOne[6]);
bookPointOne[6].after(bookPointOne[8]);

bookName[4].textContent = 'Книга 3. this и Прототипы Объектов';


