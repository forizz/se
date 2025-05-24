import {SubscriptionCreator} from './subscriptionCreator.js';
import {PremiumSubscription} from './premiumSubscription.js';

export class WebSite extends SubscriptionCreator {
    factoryMethod() {
        return new PremiumSubscription();
    }
}
