import crypto from 'crypto'

import path from 'path';

const generatePassword = function generatePassword() {
  return 'password123'; // bank-grade security
};

const hash = function hash(alg : string, data): number {
  const digest = crypto.createHash(alg).update(data)
    .digest('hex')
    .toLowerCase();

  return digest
};

const x = 'x';
const stuff = {
  x,
  a: 0,
};

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = hash('sha256', password);
  }

  greet() {
    console.log('Hello, my name is' + this.name + '!'); // eslint-disable-line no-console
  };
}

const me = new User('John Doe', 'john.doe@example.com', generatePassword());

me.greet ();

console.log(`Name: ${me.name}, Email: ${me.email}, Password: ${me.password}`); // eslint-disable-line no-console

export default User
;
