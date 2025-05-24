/**
 * @class HistoryManager
 */
export class HistoryManager {
    constructor() {
        /** @type {import('./DocumentMemento.js').DocumentMemento[]} */
        this.undoStack = [];

        /** @type {import('./DocumentMemento.js').DocumentMemento[]} */
        this.redoStack = [];
    }

    /**
     * @param {import('./DocumentMemento.js').DocumentMemento} memento
     */
    save(memento) {
        this.undoStack.push(memento);
        this.redoStack = [];
    }

    /**
     * @param {import('./DocumentMemento.js').DocumentMemento} currentState
     * @returns {import('./DocumentMemento.js').DocumentMemento|null}
     */
    undo(currentState) {
        if (this.undoStack.length === 0) return null;
        const prev = this.undoStack.pop();
        this.redoStack.push(currentState);
        return prev;
    }

    /**
     * @param {import('./DocumentMemento.js').DocumentMemento} currentState
     * @returns {import('./DocumentMemento.js').DocumentMemento|null}
     */
    redo(currentState) {
        if (this.redoStack.length === 0) return null;
        const next = this.redoStack.pop();
        this.undoStack.push(currentState);
        return next;
    }
}
