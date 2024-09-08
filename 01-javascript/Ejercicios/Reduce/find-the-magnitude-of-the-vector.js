/*
You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.


The array can have any length.
The input array will contain integers (except for empty array [] ➞ 0).
Use both .map() and .reduce().
Don't use Math.hypot().
 */


const magnitude = vector => {
    // Calcula la suma de los cuadrados de los elementos del array
    const sumOfSquares = vector.reduce((sum, num) => sum + num ** 2, 0);

    // Retorna la raíz cuadrada de la suma de los cuadrados
    return Math.sqrt(sumOfSquares);
}


/*
Explicación:
.reduce(): Se utiliza para calcular la suma de los cuadrados de los elementos del array.
num ** 2: Eleva al cuadrado cada elemento del array.
sum + num ** 2: Acumula la suma de los cuadrados.
Math.sqrt(sumOfSquares): Se utiliza para calcular la raíz cuadrada de la suma de los cuadrados, lo que da como resultado la magnitud del vector.
 */


const magnitude2 = vector => {
    let result = 0;
    vector.forEach( (element) => {
        result += element **2;
    });
    return Math.sqrt(result);
}


console.log(magnitude([3, 4])); // 5
console.log(magnitude([0, 0, -10])); // 10
console.log(magnitude([])); // 0
console.log(magnitude([2, 3, 6, 1, 8])); // 10.677078252031311
console.log(magnitude([9, 9, 9, 9, 9, 9])); // 15



console.log(magnitude2([3, 4])); // 5
console.log(magnitude2([0, 0, -10])); // 10
console.log(magnitude2([])); // 0
console.log(magnitude2([2, 3, 6, 1, 8])); // 10.677078252031311
console.log(magnitude2([9, 9, 9, 9, 9, 9])); // 15