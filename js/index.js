console.log("I'm ready!");

// Iteration 1: Names and Input

let hacker1 = "rebeca";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "paco";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if ( hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
     console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let newHacker = "rebeca";
let hacker3 = "";

for (let i = 0; i < newHacker.length; i++) 
{
     hacker3 += newHacker[i].toUpperCase() + " "
}

console.log(hacker3.trim())

let hacker4 = "rebeca"
let resul = "";

for (let i = hacker4.length -1; i >= 0 ; i--) {
    resul += hacker4[i]
}
console.log(resul)
















