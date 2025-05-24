/**
 * @class SmartTextReaderLocker
 */
export class SmartTextReaderLocker {
    /**
     * @param {SmartTextReader} reader
     * @param {RegExp} forbiddenPattern
     */
    constructor(reader, forbiddenPattern) {
        /** @type {SmartTextReader} */
        this.reader = reader;
        /** @type {RegExp} */
        this.forbidden = forbiddenPattern;
    }

    open() {
        if (this.forbidden.test(this.reader.filePath)) {
            console.log('Access denied!');
            this._denied = true;
        } else {
            this._denied = false;
            this.reader.open();
        }
    }

    read() {
        if (this._denied) {
            console.log('Access denied!');
            return [];
        }
        return this.reader.read();
    }

    close() {
        if (this._denied) {
            console.log('Access denied!');
        } else {
            this.reader.close();
        }
    }
}
