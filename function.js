'use strict'

// const bookings = [];

// const createBooking = function (
//     flightNum,
//     numPassengers = 1,
//     price = 199 * numPassengers
// ) {
//     const booking = {
//         flightNum,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
    
// };

// createBooking('LH123');
// createBooking('LH123', 2, 700);
// createBooking('LH123', 2);
// createBooking('LH123', 5);
// createBooking('LH123', undefined, 1100);









// How Passing Arguments Works: Values vs. Reference
// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 24739479284,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;
//   if (passenger.passport === 24739479284) {
//     alert('Checked in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);
// // Is the same as doing...
// // const flightNum = flight;
// // const passenger = jonas;
// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000000);
// };
// newPassport(jonas);
// checkIn(flight, jonas)




// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);
(() => console.log('This will ALSO never run again'))();
{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);







// Closures
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();
console.dir(booker);




// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
// Re-assigning f function




h();
f();
console.dir(f);



// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);
  console.log(`Will start boarding in ${wait} seconds`);
};
const perGroup = 1000;
boardPassengers(180, 3);

