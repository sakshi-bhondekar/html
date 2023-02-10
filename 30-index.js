// Dot vs. Bracket Notation--->
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schedtmann',
    age: 2037 - 1991,
    job: 'tearcher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas); 
console.log(jonas.lastNames); 
console.log(jonas['lastNames']); 
console.log(jonas['age']);


// Object Methods--->
const myCountry = {
    country: 'Finland',
    capital: 'Helsinki',
    language: 'finnish',
    population: 6,
    neighbours: ['Norway', 'Sweden', 'Russia'],
    describe: function () {
    console.log(
    `${this.country} has ${this.population} million 
    ${this.language}-speaking people, 
    ${this.neighbours.length} neighbouring countries and a 
    capital called ${this.capital}.`
    );
    },
    checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true :
    false;
    // Even simpler version (see why this works...)
    // this.isIsland = !Boolean(this.neighbours.length);
    }
    };
    myCountry.describe();
    myCountry.checkIsland();
    console.log(myCountry);
    

    // The for Loop--->
     for (let voter = 1; voter <= 50; voter++)
 console.log(`Voter number ${voter} is currently voting`);



//  Looping Arrays, Breaking and Continuing--->
const populations = [10, 1441, 332, 83];
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
const perc = percentageOfWorld1(populations[i]);
percentages2.push(perc);
}
console.log(percentages2);



     






