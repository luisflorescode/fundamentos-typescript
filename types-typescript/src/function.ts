export {};

type SquareSize = '100x100' | '500x500' | '1000x1000';

function createPicture(title: string, date: string, size?: SquareSize) {
  console.log('Create Picture using', title, date, size);
}
createPicture('My Birthday', '2020-01-09', '500x500');
createPicture('Colombia Trip', '2020-03');

let createPic = (title: string, date: string, size: SquareSize): object => {
  return { title, date, size };
};
const picture = createPic('Platzi Session', '2020-07-25', '100x100');
console.log('Picture;', picture);

// Tipo de Retorno con TypeScript

function handleError(code: number, message: string): never | string {
  if (message === 'error') {
    throw new Error(`${message}. Code error: ${code}`);
  } else {
    return 'An error has ocurred';
  }
}

try {
  let result = handleError(200, 'OK');
  console.log('Result:', result);
  result = handleError(404, 'error');
} catch (error) {}
