"use strict";
console.log('Hola TypeScript con Platzi');
// Number
// Explicito
var phone;
phone = 1;
phone = 3479;
// phone = 'hola'; // Error
// Inferido
var phoneNumber = 7291;
phoneNumber = 123;
// phoneNumber = true; // Error por tipo
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Tipo: Boolean
var isPro;
isPro = true;
// isPro = 1; // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 10; // Error
// Strings
var username = 'Luis Flores';
username = 'Luis';
// username = true; // Error
// Template String
// Uso de back-tick `
var userInfo;
userInfo = "\n  User Info:\n  username: " + username + "\n  fistName: " + (username + ' Flores') + "\n  phone: " + phone + "\n  isPro: " + isPro + "\n";
console.log('userInfo', userInfo);
