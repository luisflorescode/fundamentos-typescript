export {};

let username: any;
username = 'luis';

let message: string =
  (<string>username).length > 5
    ? `Welcome ${username}`
    : 'Username is too short';
console.log('Message:', message);

let usernameWithId: any = 'luisFlores 1';
username = (<string>usernameWithId).substring(0, 10);
console.log('Only username:', username);

//Sintaxis "as"
message =
  (username as string).length > 5
    ? `Welcome ${username}`
    : 'Username is too short';

let helloUser: any;
helloUser = 'Hello, paparazzi';
username = (helloUser as string).substring(7);
console.log('Username', username);
