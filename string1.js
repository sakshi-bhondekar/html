'use strict';

const airline ='TAP to Portugal';
const plane = 'B67G8';

console.log(airline);
console.log(airline.length);
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log(plane.length);
console.log(airline.indexOf('Portugal'));
console.log(airline.slice(4));
console.log(airline.slice(4,7));
console.log(airline.slice(0,airline.indexOf('')));
console.log(airline.slice(1,-1));


const checkMiddleSeat = function(seat) {
    const s = seat.slice(-1);
    if ( s === 'B' || s ==='E' ) console.log('You got the middle seat');
    else ('You got the Lucky seat')
}
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

const jonas = () => {
    firstName = 'Jonas';
    job = 'Engineer';
    contry = 'Portugal';
}
console.log(new String ('jonas'));
console.log(typeof new String ('jonas'));
console.log(typeof new String ('jonas').slice(2));



// Example2

const checkBaggage= function (items) {
    const baggage = items.toLowerCase();
    if ( baggage.includes('Knife') || baggage.includes('gun'))
     {
    console.log('You are not allowed on board');
    } else { 
    console.log('Welcome aboard!'); 
  } 
};
 
checkBaggage('I have a laptop, some food and a pocket knife ');
checkBaggage('socks and camera ');

checkBaggage('Got some snacks and gun for protection');