'use strict';
// const timerId = setTimeout(logger, 2000);

// clearInterval(timerId);

// function logger() {
//     console.log("hello World");
// }

// class Rectangle {
//     constructor(height, weight) {
//         this.height = height;
//         this.weight = weight;
//     }

//     calcArea() {
//         return this.height * this.weight;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//     constructor(height, weight, text, bgColor) {
//         super(height, weight);
//         this.text = text;
//         this.bgColor = bgColor;
//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithText(5, 6, 'Hello', 'Red');
// div.showMyProps();
// console.log(div.calcArea());

// const myArea = new Rectangle(5, 6);
// console.log(myArea.calcArea());



// Rest Operator (a, b, ...rest)

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('basic', 'rest', 'operator', 'usage');

// const persone = {
//     name: 'Faryaz',
//     tel: '+994559259929'
// };

// console.log(JSON.parse(JSON.stringify(persone)));


// const req = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         console.log('Подгатовка данных...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         }

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     });
// }).then(data => {
//     data.modify = true;
//     return data;
// }).then(data => {
//     console.log(data);
// }).catch(() => {
//     console.error("Произошла ошибка!");
// }).finally(() => {
//     console.log("Finally!!!");
// });


// const test = time => {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(), time);
//     });
// };

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });

// Promise.race([test(1000), test(2000)]).then(() => {
//     console.log('All');
// });