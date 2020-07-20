"use strict";
// Tipo explicito
var idUser;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);
// Tipo Inferido
var otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('idUser', idUser);
var surprise = 'Hello, TypeScript';
// surprise.sayHello(); // error
var res = surprise.substring(7);
console.log('res', res);
