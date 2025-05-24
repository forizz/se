/**
 * @abstract
 * @class LightNode
 */
export class LightNode {
    /**
     * @returns {string}
     */
    innerHTML() {
        throw new Error('innerHTML() must be implemented');
    }

    /**
     * @returns {string}
     */
    outerHTML() {
        throw new Error('outerHTML() must be implemented');
    }
}
