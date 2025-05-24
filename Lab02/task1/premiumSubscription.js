import {Subscription} from './subscription.js';

export class PremiumSubscription extends Subscription {
    constructor() {
        super({
            monthlyFee: 20,
            minPeriod: 1,
            channels: ['All Channels'],
            features: ['4K', 'Multiple Screens', 'Priority Support']
        });
    }
}
