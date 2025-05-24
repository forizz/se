import {CharacterDirector} from "./CharacterDirector.js";
import {HeroBuilder} from "./HeroBuilder.js";
import {EnemyBuilder} from "./EnemyBuilder.js";


function main() {
    const director = new CharacterDirector();

    const hero = director.constructKnight(new HeroBuilder());
    console.log('--- Герой мрії ---');
    console.log(hero.toString());

    const enemy = director.constructRogue(new EnemyBuilder());
    console.log('\n--- Запеклий ворог ---');
    console.log(enemy.toString());
}

main();
