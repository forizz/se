import {Warrior, Mage, Paladin} from './HeroTypes.js';
import {ArmorDecorator, WeaponDecorator, ArtifactDecorator} from './HeroDecorators.js';

function main() {
    const baseWarrior = new Warrior();
    console.log(baseWarrior.getDescription(), baseWarrior.getStats());

    const strongWarrior = new WeaponDecorator(new ArmorDecorator(baseWarrior));
    console.log(strongWarrior.getDescription(), strongWarrior.getStats());

    const magicMage = new ArtifactDecorator(new WeaponDecorator(new Mage()));
    console.log(magicMage.getDescription(), magicMage.getStats());

    const fullPaladin = new ArtifactDecorator(new WeaponDecorator(new ArmorDecorator(new Paladin())));
    console.log(fullPaladin.getDescription(), fullPaladin.getStats());
}

main();
