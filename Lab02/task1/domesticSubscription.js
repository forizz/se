import {Subscription} from './subscription.js';

export class DomesticSubscription extends Subscription {
    constructor() {
        super({
            monthlyFee: 10,
            minPeriod: 1,
            channels: ['News', 'Entertainment', 'Sports'],
            features: ['HD', 'Offline']
        });
    }
}
