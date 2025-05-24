/**
 * @class CharacterDirector
 */
export class CharacterDirector {
    /**
     * @param {CharacterBuilder} builder
     * @returns {Character}
     */
    constructKnight(builder) {
        return builder
            .setHeight(185)
            .setBuild('Мускулисте')
            .setHairColor('Руде')
            .setEyeColor('Сині')
            .addClothes('Латні обладунки')
            .addClothes('Червоний плащ')
            .addInventory('Меч')
            .addInventory('Щит')
            .addDeed('Врятувати короля')
            .build();
    }

    /**
     * @param {CharacterBuilder} builder
     * @returns {Character}
     */
    constructRogue(builder) {
        return builder
            .setHeight(170)
            .setBuild('Струнке')
            .setHairColor('Чорне')
            .setEyeColor('Зелені')
            .addClothes('Шкіряний плащ')
            .addInventory('Кинджал')
            .addInventory('Приховані підсумки')
            .addDeed('Пограбувати багатія')
            .addDeed('Вкрасти корону')
            .build();
    }
}