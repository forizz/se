/**
 * @class Character
 */
export class Character {
    constructor() {
        /** @type {number|null} */ this.height = null;
        /** @type {string|null} */ this.build = null;
        /** @type {string|null} */ this.hairColor = null;
        /** @type {string|null} */ this.eyeColor = null;
        /** @type {string[]} */ this.clothes = [];
        /** @type {string[]} */ this.inventory = [];
        /** @type {string[]} */ this.deeds = [];
    }

    /**
     * @returns {string}
     */
    toString() {
        return `
Height: ${this.height}
Build: ${this.build}
Hair Color: ${this.hairColor}
Eye Color: ${this.eyeColor}
Clothes: ${this.clothes.join(', ')}
Inventory: ${this.inventory.join(', ')}
Deeds: ${this.deeds.join(', ')}`.trim();
    }
}