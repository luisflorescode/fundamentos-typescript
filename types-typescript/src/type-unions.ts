export {};

// Unión de Tipos

let idUser: number | string;
idUser = 10;
idUser = '10';

function getUsernameById(id: number | string) {
  return 'luisfloresdev';
}

getUsernameById(20);
getUsernameById('20');

// Alias de tipos TS
type IdUser = number | string;
type Username = string;
let userId: IdUser;
userId = 10;
userId = '10';

function getUserById(id: IdUser): Username {
  return 'luisfloresdev';
}

getUserById(20);
getUserById('20');

// Tipos literales
type SquareSize = '100x100' | '500x500' | '1000x1000';
// let smallPicture: SquareSize = '200x200'; // Error
let smallPicture: SquareSize = '100x100';
let mediumPicture: SquareSize = '500x500';
