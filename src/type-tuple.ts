// Tuplas

export {};

let user: [number, string];
user = [1, 'luisfloresdev'];

console.log('User:', user);
console.log('Username:', user[1]);
console.log('Username Length:', user[1].length);
console.log('Id:', user[0]);

// Tuplas con varios valores
let userInfo: [number, string, boolean];
userInfo = [2, 'paparazzi', true];

console.log('User Information:', userInfo);

// Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'luisfloresdev']);
array.push([2, 'LeonidasEsteban']);
array.push([3, 'Freddier']);

console.log('Array', array);

// Uso de funciones array
array[2][1] = array[2][1].concat('007');
console.log('Array', array);
