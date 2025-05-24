import {Hero} from './HeroTypes.js';

/**
 * @class HeroDecorator
 * @implements {Hero}
 */
export class HeroDecorator extends Hero {
    constructor(hero) {
        super();
        this.hero = hero;
    }

    getDescription() {
        return this.hero.getDescription();
    }

    getStats() {
        return this.hero.getStats();
    }
}

/**
 * @class ArmorDecorator
 */
export class ArmorDecorator extends HeroDecorator {
    getDescription() {
        return `${this.hero.getDescription()} + Armor`;
    }

    getStats() {
        const stats = this.hero.getStats();
        return {
            attack: stats.attack,
            defense: stats.defense + 5,
            magic: stats.magic
        };
    }
}

/**
 * @class WeaponDecorator
 */
export class WeaponDecorator extends HeroDecorator {
    getDescription() {
        return `${this.hero.getDescription()} + Weapon`;
    }

    getStats() {
        const stats = this.hero.getStats();
        return {
            attack: stats.attack + 7,
            defense: stats.defense,
            magic: stats.magic
        };
    }
}

/**
 * @class ArtifactDecorator
 */
export class ArtifactDecorator extends HeroDecorator {
    getDescription() {
        return `${this.hero.getDescription()} + Artifact`;
    }

    getStats() {
        const stats = this.hero.getStats();
        return {
            attack: stats.attack,
            defense: stats.defense,
            magic: stats.magic + 6
        };
    }
}
