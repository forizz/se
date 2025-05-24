/**
 * @interface
 */
export class ImageLoadStrategy {
    /**
     * @param {string} src
     * @returns {Promise<string>}
     */
    async load(src) {
        throw new Error('load() must be implemented');
    }
}
