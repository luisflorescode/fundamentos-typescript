// Void

// Tipo Explicito
function showInfo(user: any): any {
  console.log('User Info', user.id, user.username, user.firstName);
}

showInfo({ id: 1, username: 'luisfloresdev', firstName: 'Luis' });

// Tipo Inferido
function showFormattedInfo(user: any) {
  console.log(
    'User Info',
    `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}
  `,
  );
}

showFormattedInfo({ id: 1, username: 'luisfloresdev', firstName: 'Luis' });

// Tipo void, como tipo de data en variable
let unusable: void;
// unusable = null;
unusable = undefined;

// Never

function handleError(code: number, message: string): never {
  throw new Error(`${message}. Code: ${code}`);
}

try {
  handleError(404, 'Not Found');
} catch (error) {}

function sumNumbers(limit: number): never {
  let sum = 0;
  while (true) {
    sum++;
  }
}

sumNumbers(10);
