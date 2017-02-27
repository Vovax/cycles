var n = Number(prompt("Дізнатись число?"));


var result;
function fibCount(n) {
    var x = 1;
    var y = 1;
    var count = 0;
    
    if (n < 2) return n;
    
    for (var i = 2; i < n; i ++) {
        count = x + y;
        x = y;
        y = count;
        result = count;
        // document.write(count);
    }
    return result;
}

document.write("Cycle = " + fibCount(n), "<br>");



function fib(n) {
    
    if (n < 2) return n;
    
    return fib(n-2) + fib(n-1);
    
}
document.write("Recursion = " + fib(n));
















// n = fib(n - 2) + fib(n - 1);



// function fibCount(n) {
//     var x = 1;
//     var y = 1;
//     var count = 0;
    
//     if (n <= 2) {
//         return document.write(x, "<br>");
//     }
    
//     for (var i = 2; i < n; i ++) {
//         count = x + y;
//         x = y;
//         y = count;
//         // document.write(count);
//     }
    
//     return document.write(count, "<br>");
// }

// fibCount(2);







// var count = 0;

// while (count <= 10) {
//     document.write(count);
//     count ++;
// }


// var cars = ['lexus', 'toyota', 'honda'];

// cars[10] = 'Jaguar';

// cars.push(Jaguar);

// document.write(cars.length);

// document.write(cars[2]);

// for( var i = 0; i < cars.length; i ++) {
//     document.write(cars[i]);
//     document.write("<br>");
// }


// // Анонімна ф-ція
// cars.forEach(function printCar(el) {
//     document.write(el);
//     document.write("<br>");
    
// });


// //Дікшенері КОЛЕКЦІЯ МНОЖИНА
// var myCars = {
//     mostExpensive: 'Bugatti',
//     cheapest: 'Zaz',
//     favorite: 'Lexus'
// }

// myCars['stolen'] = 'Toyota 200'; //додати до колекції

// document.write(myCars['favorite']);

// for (var key in myCars) {
//     document.write(myCars[key]);
// }


// var count = 0;
// for (key in myCars) {
    
//     count ++;
    
//     document.write(count);
//     document.write("<br>");
// }

// // ОБЄКТ ОДНИНА
// var oldCar = {
//     make: 'Audi',
//     model: 'TT',
//     year: 2000,
//     drive: function() {
//         document.write('Car' + this.model + 'is driving');
//         document.write("<br>");
//     }
// }

// oldCar.drive()

// var newCar = {
//     make: 'Ferrari',
//     model: 'CT',
//     year: 2001,
//     drive: function() {
//         document.write('Car' + this.model + 'is driving');
//         document.write("<br>");
//     }
// }

// newCar.drive()

// function car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.drive = function() {
//         document.write(this.year + 'Car' + this.model + 'is driving');
//         document.write("<br>");
//     }
//     return this;
// }

// anotherCar = new Car ('Subaru', 'Forester, 2017');
// anotherCar();


// var yetAnotherCar = new Car('BMW', 'M', 2 );
// yetAnotherCar.drive();



//числа фібаначе 

// пеші два числа 1 і 1
// наступ сума поперед двох
// і т.д

// цикл і рекурсія

// fib(9) + fib(8)



// var n = 5;

// function fib(n) {
//     var fibN;
//     // var n;
    
//     fibN = fib(n-1) + fib(n-2);
// }

// fib();

// document.write(n);







// var n;

// for (n = 2; n >= 3; n ++ ){
//     // n ++;
//     document.write(n);
// }



// var fib = {
//     fib: 1,
//     model: 'CT',
//     year: 2001,
//     drive: function() {
//         document.write('Car' + this.model + 'is driving');
//         document.write("<br>");
//     }
// }

// fib.drive()



// 5*4+5*3 = 7;

// fib3 = fib2 + fib1;
    // fib4 = fib3 + fib2;
    // fib5 = fib4 + fib3;



// var fib = [ 1, 1, 2, 3, 5, 8];


// var fib0 = 0;
// var fib1 = 1;
// var fib2 = 1;


// function sum() {
//     var fib3 = fib2 + fib1;
//     var fib4 = fib3 + fib1;
    
//     var fib = [fib0, fib1, fib2, fib3, fib4];
    
    
//     // return document.write(fiboN);
//     return fib;
// }

// // sum();




// var results = [0,1];
// function fibonacchi(n){
//     if ( n == 0 ) return results[0];

//     if (n == 1) return results[1];
 

// }
















// for (var i = 100; i >= 1; i= i - 2) {
    

//     document.write(i);
//     document.write("<br>");
// }


