// Type: object
let user: object;
user = {}; // Object
user = {
  id: 1,
  username: 'paparazzi',
  fistName: 'Pablo',
  isPro: true,
};

console.log('user', user);

//Object vs object
const myObj = {
  id: 1,
  username: 'paparazzi',
  fistName: 'Pablo',
  isPro: true,
};

const isInstance = myObj instanceof Object;

console.log('isInstance', isInstance);
console.log('myObj.username', myObj.username);
