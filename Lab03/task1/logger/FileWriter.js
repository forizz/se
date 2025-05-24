import fs from 'fs';
import path from 'path';

/**
 * @class FileWriter
 */
export class FileWriter {
    /**
     * @param {string} filename
     */
    constructor(filename) {
        this.filePath = path.resolve(filename);
        fs.writeFileSync(this.filePath, '', 'utf8');
    }

    /**
     * @param {string} text
     */
    write(text) {
        fs.appendFileSync(this.filePath, text, 'utf8');
    }

    /**
     * @param {string} text
     */
    writeLine(text) {
        fs.appendFileSync(this.filePath, text + '\n', 'utf8');
    }
}
