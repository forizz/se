import fs from 'fs';

/**
 * @class SmartTextReader
 */
export class SmartTextReader {
    /**
     * @param {string} filePath
     */
    constructor(filePath) {
        /** @type {string} */
        this.filePath = filePath;
        /** @type {string[]} */
        this.lines = [];
    }

    open() {
        if (!fs.existsSync(this.filePath)) {
            throw new Error(`File not found: ${this.filePath}`);
        }
    }

    /**
     * @returns {string[][]}
     */
    read() {
        const text = fs.readFileSync(this.filePath, 'utf8');
        this.lines = text.split(/\r?\n/);
        return this.lines.map(line => Array.from(line));
    }

    close() {
    }
}
