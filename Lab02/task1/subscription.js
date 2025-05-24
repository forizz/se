/**
 * @typedef {Object} SubscriptionOptions
 * @property {number} monthlyFee
 * @property {number} minPeriod
 * @property {string[]} channels
 * @property {string[]} features
 */

/**
 * @abstract
 */
export class Subscription {
    /**
     * @param {SubscriptionOptions} options
     */
    constructor(options) {
        if (new.target === Subscription) {
            throw new Error('Неможливо створити екземпляр абстрактного класу Subscription');
        }
        this.monthlyFee = options.monthlyFee;
        this.minPeriod = options.minPeriod;
        this.channels = options.channels;
        this.features = options.features;
    }

    /**
     * @returns {string}
     */
    describe() {
        return `${this.constructor.name} — плата: $${this.monthlyFee}/міс, мін. період: ${this.minPeriod} міс,
    канали: [${this.channels.join(', ')}], фічі: [${this.features.join(', ')}]`;
    }
}
