/**
 * @class Logger
 */
export class Logger {
    /**
     * @param {string} message
     */
    log(message) {
        console.log(`\x1b[32m${message}\x1b[0m`);
    }

    /**
     * @param {string} message
     */
    warn(message) {
        console.log(`\x1b[33m${message}\x1b[0m`);
    }

    /**
     * @param {string} message
     */
    error(message) {
        console.log(`\x1b[31m${message}\x1b[0m`);
    }
}
