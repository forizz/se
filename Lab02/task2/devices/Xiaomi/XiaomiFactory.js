import {ExampleDeviceFactory} from '../../interfaces/ExampleDeviceFactory.js';
import {XiaomiLaptop} from './XiaomiLaptop.js';
import {XiaomiNetbook} from './XiaomiNetbook.js';
import {XiaomiEBook} from './XiaomiEBook.js';
import {XiaomiSmartphone} from './XiaomiSmartphone.js';

export class XiaomiFactory extends ExampleDeviceFactory {
    createLaptop() {
        return new XiaomiLaptop();
    }

    createNetbook() {
        return new XiaomiNetbook();
    }

    createEBook() {
        return new XiaomiEBook();
    }

    createSmartphone() {
        return new XiaomiSmartphone();
    }
}
