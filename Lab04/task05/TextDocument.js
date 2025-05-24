import {DocumentMemento} from './DocumentMemento.js';

/**
 * @class TextDocument
 */
export class TextDocument {
    constructor() {
        /** @type {string} */
        this._content = '';
    }

    /**
     * @param {string} newText
     */
    setContent(newText) {
        this._content = newText;
    }

    /**
     * @param {string} extraText
     */
    appendContent(extraText) {
        this._content += extraText;
    }

    /**
     * @returns {string}
     */
    getContent() {
        return this._content;
    }

    /**
     * @returns {DocumentMemento}
     */
    save() {
        return new DocumentMemento(this._content);
    }

    /**
     * @param {DocumentMemento} memento
     */
    restore(memento) {
        this._content = memento.getContent();
    }
}
