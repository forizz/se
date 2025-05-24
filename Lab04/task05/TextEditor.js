import {TextDocument} from './TextDocument.js';
import {HistoryManager} from './HistoryManager.js';

/**
 * @class TextEditor
 */
export class TextEditor {
    constructor() {
        /** @type {TextDocument} */
        this.document = new TextDocument();

        /** @type {HistoryManager} */
        this.history = new HistoryManager();
    }

    /**
     * @param {string} text
     */
    write(text) {
        this.history.save(this.document.save());
        this.document.appendContent(text);
    }

    /**
     * @param {string} text
     */
    overwrite(text) {
        this.history.save(this.document.save());
        this.document.setContent(text);
    }

    undo() {
        const prevState = this.history.undo(this.document.save());
        if (prevState) {
            this.document.restore(prevState);
        } else {
            console.log('Nothing to undo.');
        }
    }

    redo() {
        const nextState = this.history.redo(this.document.save());
        if (nextState) {
            this.document.restore(nextState);
        } else {
            console.log('Nothing to redo.');
        }
    }
    
    show() {
        console.log('[Document]:', this.document.getContent());
    }
}
