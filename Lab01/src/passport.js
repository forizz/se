import clipboard from "clipboardy";
import {Document} from "./document.js";

export class Passport extends Document {
    /**
     * @constructor
     * @param {Person} person
     * @param {Date} expiresAt
     * @param {string} uuid
     */
    constructor(person, expiresAt, uuid) {
        super(person, expiresAt);

        this.uuid = uuid;
    }

    /**
     * @return {void}
     */
    async copyUUID() {
        try {
            await clipboard.write(this.uuid)
            console.log("UUID copied to clipboard");
        } catch (err) {
            console.log(err);
        }
    }

    /**
     * @return {string}
     */
    toString() {
        return `${this.person.name} ${this.person.surname} ${this.person.birthday.toLocaleDateString()} ${this.person.nationality} ${this.expiresAt.toLocaleDateString()} ${this.uuid}`;
    }
}