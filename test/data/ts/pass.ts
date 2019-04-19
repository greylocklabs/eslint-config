import crypto from 'crypto';

const generatePassword = function generatePassword(): string {
  return 'password123'; // bank-grade security
};

const hash = function hash(alg, data): string {
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

  greet(): void {
    console.log(`Hello, my name is ${this.name}!`); // eslint-disable-line no-console
  }
}

const me = new User('John Doe', 'john.doe@example.com', generatePassword());

me.greet();

console.log(`Name: ${me.name}, Email: ${me.email}, Password: ${me.password}`); // eslint-disable-line no-console

export default User;
