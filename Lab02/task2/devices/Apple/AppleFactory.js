import {ExampleDeviceFactory} from '../../interfaces/ExampleDeviceFactory.js';
import {AppleLaptop} from './AppleLaptop.js';
import {AppleNetbook} from './AppleNetbook.js';
import {AppleEBook} from './AppleEBook.js';
import {AppleSmartphone} from './AppleSmartphone.js';

export class AppleFactory extends ExampleDeviceFactory {
    createLaptop() {
        return new AppleLaptop();
    }

    createNetbook() {
        return new AppleNetbook();
    }

    createEBook() {
        return new AppleEBook();
    }

    createSmartphone() {
        return new AppleSmartphone();
    }
}
