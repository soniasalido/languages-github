/*
Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

Examples
numberSplit(4) ➞ [2, 2]

numberSplit(10) ➞ [5, 5]

numberSplit(11) ➞ [5, 6]

numberSplit(-9) ➞ [-5, -4]
 */


const numberSplit = n => {
    let arr = [];
    if (n % 2 === 0){
        arr.push(n / 2);
        arr.push(n / 2);
    } else {
        arr.push(Math.floor(n / 2));
        arr.push(Math.ceil(n / 2));
    }
    return arr;
}



console.log(numberSplit(4)); // ➞ [2, 2]
console.log(numberSplit(11)); // ➞ [5, 6]