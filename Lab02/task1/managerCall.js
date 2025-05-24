import {SubscriptionCreator} from './subscriptionCreator.js';
import {EducationalSubscription} from './educationalSubscription.js';

export class ManagerCall extends SubscriptionCreator {
    factoryMethod() {
        return new EducationalSubscription();
    }
}
