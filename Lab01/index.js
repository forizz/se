import {Document} from "./src/document.js";
import {Passport} from "./src/passport.js";
import {DrivingLicense} from "./src/driving-licence.js";
import {MilitaryID} from "./src/military-id.js";
import {DocumentContainer} from "./src/document-container.js";

/**
 * @type {Person}
 */
let person = {
    name: 'Dmytro',
    surname: 'Danylkovych',
    birthday: new Date('2005-11-10'),
    nationality: 'Ukrainian'
};

let passport = new Passport(
    person,
    new Date('2027-12-12'),
    '00445566'
);

passport.copyUUID();
console.log('Passport:', passport.toString());

let drivingLicense = new DrivingLicense(
    person,
    new Date('2027-07-10'),
);

drivingLicense.addCategory('B');

/**
 * @type {Vehicle}
 */
const FordEscape = {
    person: person,
    brand: 'Ford',
    model: 'Escape',
    vin: '2HGFG1B84BH577807',
    color: 'White',
    category: 'B'
};

drivingLicense.registerVehicle(FordEscape);
console.log('Driving License:', drivingLicense.toString());

let militaryID = new MilitaryID(
    person,
    new Date('2030-01-01'),
    'AK123456'
);

await militaryID.copyIDCode();
console.log('Military ID:', militaryID.toString());

let container = new DocumentContainer([passport, drivingLicense, militaryID]);

console.log('\n=== Documents: Full Details ===');
container.printDocuments();

container.toggleDetails();
console.log('\n=== Documents: Only Names ===');
container.printDocuments();

console.log('\n=== Reordering Documents ===');
container.moveDocument(2, 0);
container.toggleDetails();
container.printDocuments();