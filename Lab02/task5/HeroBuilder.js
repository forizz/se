import {CharacterBuilder} from "./CharacterBuilder.js";
import {Character} from "./Character.js";

/**
 * @class HeroBuilder
 * @implements {CharacterBuilder}
 */
export class HeroBuilder extends CharacterBuilder {
    constructor() {
        super();
        this.character = new Character();
    }

    setHeight(height) {
        this.character.height = height;
        return this;
    }

    setBuild(build) {
        this.character.build = build;
        return this;
    }

    setHairColor(c) {
        this.character.hairColor = c;
        return this;
    }

    setEyeColor(c) {
        this.character.eyeColor = c;
        return this;
    }

    addClothes(i) {
        this.character.clothes.push(i);
        return this;
    }

    addInventory(i) {
        this.character.inventory.push(i);
        return this;
    }

    addDeed(d) {
        this.character.deeds.push(`Добре: ${d}`);
        return this;
    }

    build() {
        return this.character;
    }
}