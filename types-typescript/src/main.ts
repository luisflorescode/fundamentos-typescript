console.log('Hola TypeScript con Platzi');

// Number
// Explicito
let phone: number;
phone = 1;
phone = 3479;
// phone = 'hola'; // Error

// Inferido
let phoneNumber = 7291;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Tipo: Boolean
let isPro: boolean;
isPro = true;
// isPro = 1; // Error

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error

// Strings
let username: string = 'Luis Flores';
username = 'Luis';
// username = true; // Error

// Template String
// Uso de back-tick `
let userInfo: string;
userInfo = `
  User Info:
  username: ${username}
  fistName: ${username + ' Flores'}
  phone: ${phone}
  isPro: ${isPro}
`;
console.log('userInfo', userInfo);
