/**
 * @class Virus
 * @description Клас-Прототип для моделювання віруса із нащадками.
 */
class Virus {
    /**
     * @param {Object} options
     * @param {number} options.weight - Вага віруса
     * @param {number} options.age - Вік віруса
     * @param {string} options.name - Ім’я віруса
     * @param {string} options.species - Вид віруса
     */
    constructor({weight, age, name, species}) {
        /** @type {number} */ this.weight = weight;
        /** @type {number} */ this.age = age;
        /** @type {string} */ this.name = name;
        /** @type {string} */ this.species = species;
        /** @type {Virus[]} */ this.children = [];
    }

    /**
     * Додає нащадка
     * @param {Virus} child
     */
    addChild(child) {
        this.children.push(child);
    }

    /**
     * Глибоке клонування віруса разом із всіма дітьми
     * @returns {Virus}
     */
    clone() {
        // Створюємо новий екземпляр із тим же набором полів
        const copy = new Virus({
            weight: this.weight,
            age: this.age,
            name: this.name,
            species: this.species
        });
        // Рекурсивно клонувати кожного нащадка
        this.children.forEach(child => {
            copy.addChild(child.clone());
        });
        return copy;
    }

    /**
     * Виводить дерево нащадків (для демонстрації)
     * @param {number} level - рівень вкладеності (для відступів)
     */
    printTree(level = 0) {
        const indent = '  '.repeat(level);
        console.log(`${indent}- ${this.name} (${this.species}), вік ${this.age}, вага ${this.weight}`);
        this.children.forEach(child => child.printTree(level + 1));
    }
}

// Головний метод для демонстрації
function main() {
    // Створюємо “батька”
    const root = new Virus({weight: 1.2, age: 5, name: 'RootVirus', species: 'Alpha'});

    // Перше покоління (діти)
    const child1 = new Virus({weight: 0.8, age: 3, name: 'ChildOne', species: 'Beta'});
    const child2 = new Virus({weight: 0.9, age: 2, name: 'ChildTwo', species: 'Beta'});
    root.addChild(child1);
    root.addChild(child2);

    // Друге покоління (онуки)
    const grandchild1 = new Virus({weight: 0.5, age: 1, name: 'GrandchildA', species: 'Gamma'});
    const grandchild2 = new Virus({weight: 0.6, age: 1, name: 'GrandchildB', species: 'Gamma'});
    child1.addChild(grandchild1);
    child1.addChild(grandchild2);

    // Третє покоління (правнуки)
    const greatGrand = new Virus({weight: 0.3, age: 0.5, name: 'GreatGrand', species: 'Delta'});
    grandchild1.addChild(greatGrand);

    console.log('Оригінальна “родина” вірусів:');
    root.printTree();

    // Клонування
    const clonedRoot = root.clone();
    console.log('\nКлонована “родина” вірусів:');
    clonedRoot.printTree();

    // Перевірка, що екземпляри не ті ж самі
    console.log('\nПеревірка екземплярів:');
    console.log('root === clonedRoot:', root === clonedRoot);                     // false
    console.log('root.children[0] === clonedRoot.children[0]:',
        root.children[0] === clonedRoot.children[0]);                     // false
    console.log('root.children[0].children[0] === clonedRoot.children[0].children[0]:',
        root.children[0].children[0] === clonedRoot.children[0].children[0]); // false
}

main();
