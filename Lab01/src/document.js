/**
 * @typedef {Object} Person
 * @property {string} name
 * @property {string} surname
 * @property {Date} birthday
 * @property {string} nationality
 */

export class Document {
    /**
     * @constructor
     * @param {Person} person
     * @param {Date} expiresAt
     */
    constructor(person, expiresAt) {
        this.person = person;
        this.expiresAt = expiresAt;
    }

    /**
     * @return {string}
     */
    fullName() {
        return `${this.person.name} ${this.person.surname}`;
    }

    /**
     * @return {string}
     */
    toString() {
        return flatObject(this);
    }
}

/**
 * @param {Object} object
 * @return {string}
 */
export function flatObject(object) {
    const parts = [];

    for (const prop of Object.values(object)) {
        if (prop instanceof Date) {
            parts.push(prop.toLocaleDateString());
        } else if (prop !== null && typeof prop === 'object') {
            parts.push("\t" + flatObject(prop));
        } else {
            parts.push(prop);
        }
    }

    return parts.join(', ');
}
