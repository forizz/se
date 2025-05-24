import {AppleFactory} from './devices/Apple/AppleFactory.js';
import {XiaomiFactory} from './devices/Xiaomi/XiaomiFactory.js';
import {SamsungFactory} from './devices/Samsung/SamsungFactory.js';

const factories = [
    new AppleFactory(),
    new XiaomiFactory(),
    new SamsungFactory()
];

factories.forEach(factory => {
    console.log(`\n=== Виробництво від ${factory.constructor.name} ===`);
    console.log(factory.createLaptop().getDetails());
    console.log(factory.createNetbook().getDetails());
    console.log(factory.createEBook().getDetails());
    console.log(factory.createSmartphone().getDetails());
});
