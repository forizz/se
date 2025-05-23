/**
 * @typedef {'A' | 'A1' | 'B' | 'C' | 'D'} DrivingCategory
 */

import {Document, flatObject} from "./document.js";

/**
 * @typedef {Object} Vehicle
 * @property {Person} person
 * @property {string} brand
 * @property {string} model
 * @property {string} vin
 * @property {string} color
 * @property {DrivingCategory} category
 */

export class DrivingLicense extends Document {
    /**
     * @constructor
     * @param {Person} person
     * @param {Date} expiresAt
     * @param {DrivingCategory[]} categories
     * @param {Vehicle[]} vehicles
     */
    constructor(person, expiresAt, categories = [], vehicles = []) {
        super(person, expiresAt);

        this.categories = categories;
        this.vechicles = vehicles;
    }

    /**
     * @param {DrivingCategory} category*/
    addCategory(category) {
        this.categories.push(category);
        console.log(`Category added: ${category}`);
    }

    /**
     * @param {Vehicle} vehicle
     * @return {void}
     */
    registerVehicle(vehicle) {
        this.vechicles.push(vehicle);
        let characteristics = flatObject(vehicle);

        console.log(`Vehicle added: ${characteristics}`);
    }

    /**
     * @return {string}
     */
    toString() {
        return flatObject(this);
    }
}
