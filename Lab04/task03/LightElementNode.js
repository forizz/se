import {LightNode} from './LightNode.js';

/**
 * @typedef {'block'|'inline'} DisplayType
 */

/**
 * @class LightElementNode
 * @extends LightNode
 */
export class LightElementNode extends LightNode {
    /**
     * @param {Object} options
     * @param {string} options.tagName
     * @param {DisplayType} [options.displayType='block']
     * @param {boolean} [options.selfClosing=false]
     */
    constructor({tagName, displayType = 'block', selfClosing = false}) {
        super();
        this.tagName = tagName;
        this.displayType = displayType;
        this.selfClosing = selfClosing;
        this.classes = [];
        this.children = [];
        this.eventListeners = new Map();
    }

    addClass(className) {
        this.classes.push(className);
        return this;
    }

    addChild(node) {
        this.children.push(node);
        return this;
    }

    innerHTML() {
        return this.children.map(child => child.outerHTML()).join('');
    }

    outerHTML() {
        const classAttr = this.classes.length
            ? ` class="${this.classes.join(' ')}"`
            : '';
        if (this.selfClosing) {
            return `<${this.tagName}${classAttr}/>`;
        } else {
            return `<${this.tagName}${classAttr}>${this.innerHTML()}</${this.tagName}>`;
        }
    }

    /**
     * @param {string} type
     * @param {() => void} handler
     */
    addEventListener(type, handler) {
        if (!this.eventListeners.has(type)) {
            this.eventListeners.set(type, []);
        }
        this.eventListeners.get(type).push(handler);
    }

    /**
     * @param {string} type
     */
    dispatchEvent(type) {
        const handlers = this.eventListeners.get(type);
        if (handlers) {
            handlers.forEach(handler => handler());
        }
    }
}
