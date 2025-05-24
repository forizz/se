import {LightNode} from './LightNode.js';

/**
 * @class LightImageNode
 * @extends LightNode
 */
export class LightImageNode extends LightNode {
    /**
     * @param {string} src
     * @param {import('./strategies/ImageLoadStrategy.js').ImageLoadStrategy} strategy
     */
    constructor(src, strategy) {
        super();
        this.src = src;
        this.strategy = strategy;
    }

    async load() {
        this.result = await this.strategy.load(this.src);
    }

    innerHTML() {
        return '';
    }

    outerHTML() {
        return `<img src="${this.src}"/>`;
    }
}
