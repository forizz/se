/**
 * @interface Hero
 */
export class Hero {
    getDescription() {
        throw new Error('getDescription() must be implemented');
    }

    getStats() {
        throw new Error('getStats() must be implemented');
    }
}

/**
 * @class Warrior
 */
export class Warrior extends Hero {
    getDescription() {
        return 'Warrior';
    }

    getStats() {
        return {attack: 10, defense: 8, magic: 2};
    }
}

/**
 * @class Mage
 */
export class Mage extends Hero {
    getDescription() {
        return 'Mage';
    }

    getStats() {
        return {attack: 3, defense: 4, magic: 12};
    }
}

/**
 * @class Paladin
 */
export class Paladin extends Hero {
    getDescription() {
        return 'Paladin';
    }

    getStats() {
        return {attack: 8, defense: 10, magic: 5};
    }
}
