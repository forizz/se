/**
 * @interface CharacterBuilder
 */
export class CharacterBuilder {
    
    setHeight(height) {
        throw new Error('setHeight() not implemented');
    }

    setBuild(build) {
        throw new Error('setBuild() not implemented');
    }

    setHairColor(color) {
        throw new Error('setHairColor() not implemented');
    }

    setEyeColor(color) {
        throw new Error('setEyeColor() not implemented');
    }

    addClothes(item) {
        throw new Error('addClothes() not implemented');
    }

    addInventory(item) {
        throw new Error('addInventory() not implemented');
    }

    addDeed(deed) {
        throw new Error('addDeed() not implemented');
    }

    build() {
        throw new Error('build() not implemented');
    }
}