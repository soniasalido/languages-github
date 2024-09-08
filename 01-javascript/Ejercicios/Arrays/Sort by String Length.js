/*
Create a function that returns an array of strings sorted by length in ascending order.

Examples
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ []
 */


const sortByLength = arr => arr.sort((a, b) => a.length - b.length);

console.log(sortByLength(["a", "ccc", "dddd", "bb"])); // ➞ ["a", "bb", "ccc", "dddd"]
