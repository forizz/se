import {SubscriptionCreator} from './subscriptionCreator.js';
import {DomesticSubscription} from './domesticSubscription.js';

export class MobileApp extends SubscriptionCreator {
    factoryMethod() {
        return new DomesticSubscription();
    }
}
