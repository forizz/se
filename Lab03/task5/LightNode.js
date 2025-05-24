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

/**
 * @class LightTextNode
 * @extends LightNode
 */
export class LightTextNode extends LightNode {
    /**
     * @param {string} text
     */
    constructor(text) {
        super();
        /** @type {string} */
        this.text = text;
    }

    /** @override */
    innerHTML() {
        return this.text;
    }

    /** @override */
    outerHTML() {
        return this.text;
    }
}

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
        /** @type {string} */
        this.tagName = tagName;
        /** @type {DisplayType} */
        this.displayType = displayType;
        /** @type {boolean} */
        this.selfClosing = selfClosing;
        /** @type {string[]} */
        this.classes = [];
        /** @type {LightNode[]} */
        this.children = [];
    }

    /**
     * @param {string} className
     * @returns {this}
     */
    addClass(className) {
        this.classes.push(className);
        return this;
    }

    /**
     * @param {LightNode} node
     * @returns {this}
     */
    addChild(node) {
        this.children.push(node);
        return this;
    }

    /** @override */
    innerHTML() {
        return this.children.map(child => child.outerHTML()).join('');
    }

    /** @override */
    outerHTML() {
        const classAttr = this.classes.length
            ? ` class="${this.classes.join(' ')}"`
            : '';
        if (this.selfClosing) {
            return `<${this.tagName}${classAttr}/>`;
        } else {
            return `<${this.tagName}${classAttr}>` +
                this.innerHTML() +
                `</${this.tagName}>`;
        }
    }
}


