/*
Promises I: What Is a Closure?
Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function parent(x) {
  return function closure() {    // Closure is declared here.
    return x
  }
}

const remember = parent("remembers me")
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure()
// Returns "remembers me" because the inner
// function remembers x.

Fix the greetingMaker() function so that it works with the greeting() function.
Arregle la función GreetingMaker() para que funcione con la función Greeting().
The greeting() function has already been created (check the Tests tab).

Example
const greeting = greetingMaker("Hello")
greeting("James") ➞ "Hello, James"
Notes
Check the Resources tab for more info on closures.
 */


function greetingMaker(salutation) {
    function closure(name) {
        return salutation + ", " + name
    }
    return closure;
}

const greeting = greetingMaker("Hello");
console.log(greeting("James")); // "Hello, James"