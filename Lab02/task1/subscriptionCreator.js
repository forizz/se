/**
 * @abstract
 */
export class SubscriptionCreator {
    /**
     * @abstract
     * @returns {Subscription}
     */
    factoryMethod() {
        throw new Error('factoryMethod() має бути реалізований у підкласі');
    }

    /**
     * @returns {Subscription}
     */
    subscribe() {
        const subscription = this.factoryMethod();
        console.log(`Створюємо підписку через ${this.constructor.name}:`);
        console.log(subscription.describe());
        return subscription;
    }
}
