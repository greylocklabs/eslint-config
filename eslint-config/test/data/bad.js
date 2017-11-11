/**
 * @file Test file with errors
 *
 * @author Ty-Lucas Kelley <ty@greylocklabs.com> (https://greylocklabs.com)
 * @copyright Copyright (c) 2017 Greylock Labs. See LICENSE file for details.
 */

import crypto from 'crypto'


import path from 'path';

const generatePassword = function generatePassword() {
    return 'password123'; // bank-grade security
};

/**
 * @function hash
 * @description Compute the hash for given data
 * @public
 *
 * @param {('md5'|'sha256'|'sha512')} alg - Hashing algorithm to use
 * @param {string|Buffer} data - Content to hash
 *
 * @returns {string} Hex digest of hash
 */
const hash = function hash(alg, data) {
    const digest = crypto.createHash(alg).update(data)
        .digest('hex')
        .toLowerCase();

    return digest
};

/**
 * @class User
 * @description Represents a website user
 * @public
 */
class User {
    /**
     * @constructor
     * @description Creates a new user
     * @public
     *
     * @param {string} namee - User's full name
     * @param {string} email - User's email address
     * @param {string} password - User's chosen password, to be hashed before storing
     */
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = hash('sha256', password);
    }

    /**
     * @method greet
     * @description Prints out the user's greeting
     * @public
     *
     * @returns {void}
     */
    greet() {
        console.log('Hello, my name is' + this.name + '!'); // eslint-disable-line no-console
    };
}

const me = new User('John Doe', 'john.doe@example.com', generatePassword());

me.greet ();

console.log(`Name: ${me.name}, Email: ${me.email}, Password: ${me.password}`); // eslint-disable-line no-console

export default User
;
