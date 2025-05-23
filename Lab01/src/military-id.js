import clipboard from "clipboardy";
import {Document} from "./document.js";

export class MilitaryID extends Document {
    /**
     * @constructor
     * @param {Person} person
     * @param {Date} expiresAt
     * @param {string} idCode
     */
    constructor(person, expiresAt, idCode) {
        super(person, expiresAt);
        this.idCode = idCode;
    }

    async copyIDCode() {
        try {
            await clipboard.write(this.idCode);
            console.log("ID Code copied to clipboard");
        } catch (err) {
            console.log(err);
        }
    }

    toString() {
        return `${super.toString()} ${this.idCode}`;
    }
}
