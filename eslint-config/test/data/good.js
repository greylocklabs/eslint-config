/**
 * @file Test file without errors
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

import crypto from 'crypto';

const generatePassword = function generatePassword() {
  return 'password123'; // bank-grade security
};

const hash = function hash(alg, data) {
  const digest = crypto
    .createHash(alg)
    .update(data)
    .digest('hex')
    .toLowerCase();

  return digest;
};

class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = hash('sha256', password);
  }

  greet() {
    console.log(`Hello, my name is ${this.name}!`); // eslint-disable-line no-console
  }
}

const me = new User('John Doe', 'john.doe@example.com', generatePassword());

me.greet();

console.log(`Name: ${me.name}, Email: ${me.email}, Password: ${me.password}`); // eslint-disable-line no-console

export default User;
