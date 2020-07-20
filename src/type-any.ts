// Tipo explicito
let idUser: any;
idUser = 1; // number
idUser = '1'; // string
console.log('idUser', idUser);

// Tipo Inferido
let otherId;
otherId = 1;
otherId = '1';
// otherId = true;
console.log('idUser', idUser);

let surprise: any = 'Hello, TypeScript';
// surprise.sayHello(); // error
const res = surprise.substring(7);
console.log('res', res);
