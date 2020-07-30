// Corchete []

// Tipo Explicito
let users: string[];
users = ['luisfloresdev', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // Error

//Tipo Inferido
let otherUsers = ['luisfloresdev', 'paparazzi', 'lensqueen'];
// users = [1, true, 'test']; // Error

// Array (Tipo)
let pictureTitles: Array<string>;
pictureTitles = ['Favorites Sunset', 'Vacation Time', 'Landscape'];

// Accediendo a los valores en un Array
console.log('First User:', users[0]);
console.log('First Title:', pictureTitles[0]);

// Propiedades en Arrays
console.log('Users Length:', users.length);

// Uso métodos en Arrays
users.push('aPlatzi User');
users.sort();
console.log('Users:', users);
