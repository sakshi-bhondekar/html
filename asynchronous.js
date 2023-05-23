             //Asynchronous 
// console.log('This is Asynchronous');

// setTimeout(() =>  {
//     for (let index = 0; index < 45; index++) {
//         const element = index;
//         console.log('This is index number' + index); 
//     }
// }, 100)


// console.log('done index');




            // Aync/wait

console.log('This is Asynchronous');

async function saksh() {
    console.log('Inside saksh function')
    const response = await fetch('https://github.com/sakshi-bhondekar/html');
    console.log('before response');
    const users = await response.json();
    console.log('users resolved')
    return users;

}



console .log('Before calling saksh')
let a = saksh();
console.log('After calling saksh');
console.log(a);
a.then(data => console.log(data))
console.log('Last line of this js file');