/**
 * @class SmartTextChecker
 */
export class SmartTextChecker {
    /**
     * @param {SmartTextReader} reader
     */
    constructor(reader) {
        /** @type {SmartTextReader} */
        this.reader = reader;
    }

    open() {
        console.log(`Opening file: ${this.reader.filePath}`);
        this.reader.open();
        console.log(`Successfully opened.`);
    }

    read() {
        console.log(`Reading file: ${this.reader.filePath}`);
        const matrix = this.reader.read();
        const totalLines = matrix.length;
        const totalChars = matrix.reduce((sum, line) => sum + line.length, 0);
        console.log(`Read complete: ${totalLines} lines, ${totalChars} characters.`);
        return matrix;
    }

    close() {
        console.log(`Closing file: ${this.reader.filePath}`);
        this.reader.close();
        console.log(`Successfully closed.`);
    }
}
