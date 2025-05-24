import readline from 'readline';
import {LevelFourHandler, LevelOneHandler, LevelThreeHandler, LevelTwoHandler} from "./supportHandlers.js";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class MenuContext {
    constructor(chain) {
        this.chain = chain;
    }

    restart() {
        showMenu(this);
    }
}


function showMenu(context) {
    console.log('\n=== Служба підтримки Diia ===');
    console.log('Оберіть тип запиту:');
    console.log('1 – Загальні питання');
    console.log('2 – Технічна підтримка');
    console.log('3 – Фінансові питання');
    console.log('4 – Екстрена служба');
    console.log('Інше – повторити меню');

    rl.question('Ваш вибір: ', answer => {
        const level = parseInt(answer.trim(), 10);

        if ([1, 2, 3, 4].includes(level)) {
            context.level = level;
            context.chain.handle(context);
            rl.close();
        } else {
            console.log('Невірний вибір. Спробуйте ще раз.');
            showMenu(context);
        }
    });
}

const handlerChain = new LevelOneHandler(
    new LevelTwoHandler(
        new LevelThreeHandler(
            new LevelFourHandler(null)
        )
    )
);

const context = new MenuContext(handlerChain);

showMenu(context);
