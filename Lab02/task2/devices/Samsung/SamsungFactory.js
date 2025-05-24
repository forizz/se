import {ExampleDeviceFactory} from '../../interfaces/ExampleDeviceFactory.js';
import {SamsungLaptop} from './SamsungLaptop.js';
import {SamsungNetbook} from './SamsungNetbook.js';
import {SamsungEBook} from './SamsungEBook.js';
import {SamsungSmartphone} from './SamsungSmartphone.js';

export class SamsungFactory extends ExampleDeviceFactory {
    createLaptop() {
        return new SamsungLaptop();
    }

    createNetbook() {
        return new SamsungNetbook();
    }

    createEBook() {
        return new SamsungEBook();
    }

    createSmartphone() {
        return new SamsungSmartphone();
    }
}
