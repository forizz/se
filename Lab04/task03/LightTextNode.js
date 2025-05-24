import {LightNode} from './LightNode.js';

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
        this.text = text;
    }

    innerHTML() {
        return this.text;
    }

    outerHTML() {
        return this.text;
    }
}
