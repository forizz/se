import {Logger} from './Logger.js';

/**
 * @class FileLoggerAdapter
 */
export class FileLoggerAdapter extends Logger {
    /**
     * @param {FileWriter} writer
     */
    constructor(writer) {
        super();
        this.writer = writer;
    }

    /** @override */
    log(message) {
        this.writer.writeLine(`[LOG] ${message}`);
    }

    /** @override */
    warn(message) {
        this.writer.writeLine(`[WARN] ${message}`);
    }

    /** @override */
    error(message) {
        this.writer.writeLine(`[ERROR] ${message}`);
    }
}
