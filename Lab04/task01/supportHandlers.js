export class SupportHandler {
    constructor(nextHandler = null) {
        this.nextHandler = nextHandler;
    }

    /**
     * @param {Object} context
     */
    handle(context) {
        if (this.canHandle(context)) {
            this.process(context);
        } else if (this.nextHandler) {
            this.nextHandler.handle(context);
        } else {
            console.log('Вибір не розпізнано, повторюємо меню...\n');
            context.restart();
        }
    }

    canHandle() {
        throw new Error('canHandle має бути реалізовано в підкласі');
    }

    process() {
        throw new Error('process має бути реалізовано в підкласі');
    }
}


export class LevelOneHandler extends SupportHandler {
    canHandle({level}) {
        return level === 1;
    }

    process() {
        console.log('Рівень 1: Загальні питання. З’єднуємо із оператором базового рівня.\n');
    }
}

export class LevelTwoHandler extends SupportHandler {
    canHandle({level}) {
        return level === 2;
    }

    process() {
        console.log('Рівень 2: Технічна підтримка. Передаємо фахівцю другого рівня.\n');
    }
}

export class LevelThreeHandler extends SupportHandler {
    canHandle({level}) {
        return level === 3;
    }

    process() {
        console.log('Рівень 3: Фінансові питання. З’єднуємо з фінансовим відділом.\n');
    }
}

export class LevelFourHandler extends SupportHandler {
    canHandle({level}) {
        return level === 4;
    }

    process() {
        console.log('Рівень 4: Екстрена служба. Ваша заявка передана в кризовий центр.\n');
    }
}
