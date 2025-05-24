/**
 * @class DocumentMemento
 */
export class DocumentMemento {
    /**
     * @param {string} content
     */
    constructor(content) {
        /** @type {string} */
        this._content = content;
    }

    /**
     * @returns {string}
     */
    getContent() {
        return this._content;
    }
}
