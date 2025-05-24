import {Subscription} from './subscription.js';

export class EducationalSubscription extends Subscription {
    constructor() {
        super({
            monthlyFee: 5,
            minPeriod: 6,
            channels: ['Documentaries', 'Kids', 'Science'],
            features: ['Subtitles', 'Educational Quizzes']
        });
    }
}
