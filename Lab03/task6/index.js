import fs from 'fs';

class LightNode {
    innerHTML() {
        throw new Error();
    }

    outerHTML() {
        throw new Error();
    }
}

class ElementFlyweight {
    constructor(tagName, displayType, selfClosing, classes) {
        this.tagName = tagName;
        this.displayType = displayType;
        this.selfClosing = selfClosing;
        this.classes = classes;
    }
}

class FlyweightFactory {
    constructor() {
        this.map = new Map();
    }

    get(tagName, displayType = 'block', selfClosing = false, classes = []) {
        const key = `${tagName}|${displayType}|${selfClosing}|${classes.join(',')}`;
        if (!this.map.has(key)) {
            this.map.set(key, new ElementFlyweight(tagName, displayType, selfClosing, classes.slice()));
        }
        return this.map.get(key);
    }
}

class LightTextNode extends LightNode {
    constructor(text) {
        super();
        this.text = text;
    }

    innerHTML() {
        return this.text;
    }

    outerHTML() {
        return this.text;
    }
}

class LightElementNode extends LightNode {
    constructor(fly) {
        super();
        this.fly = fly;
        this.children = [];
    }

    addChild(node) {
        this.children.push(node);
        return this;
    }

    innerHTML() {
        return this.children.map(c => c.outerHTML()).join('');
    }

    outerHTML() {
        const cls = this.fly.classes.length
            ? ` class="${this.fly.classes.join(' ')}"`
            : '';
        if (this.fly.selfClosing) {
            return `<${this.fly.tagName}${cls}/>`;
        }
        return `<${this.fly.tagName}${cls}>${this.innerHTML()}</${this.fly.tagName}>`;
    }
}

async function main() {
    if (typeof global.gc !== 'function') {
        console.warn('Запустіть скрипт як: node --expose-gc index.js');
    }

    const lines = fs.readFileSync('book.txt', 'utf8').split(/\r?\n/);
    const factory = new FlyweightFactory();

    global.gc && global.gc();
    const before1 = process.memoryUsage().heapUsed;
    const tree1 = new LightElementNode(factory.get('div'));
    lines.forEach((line, i) => {
        let fw;
        if (i === 0) fw = new ElementFlyweight('h1', 'block', false, []);
        else if (line.startsWith(' ')) fw = new ElementFlyweight('blockquote', 'block', false, []);
        else if (line.length < 20) fw = new ElementFlyweight('h2', 'block', false, []);
        else fw = new ElementFlyweight('p', 'block', false, []);

        tree1.addChild(new LightElementNode(fw).addChild(new LightTextNode(line.trim())));
    });
    global.gc && global.gc();
    const after1 = process.memoryUsage().heapUsed;
    console.log('Без Flyweight:', ((after1 - before1) / 1024).toFixed(2), 'KB');

    global.gc && global.gc();
    const before2 = process.memoryUsage().heapUsed;
    const tree2 = new LightElementNode(factory.get('div'));
    lines.forEach((line, i) => {
        const fw =
            i === 0 ? factory.get('h1') :
                line.startsWith(' ') ? factory.get('blockquote') :
                    line.length < 20 ? factory.get('h2') :
                        factory.get('p');
        tree2.addChild(new LightElementNode(fw).addChild(new LightTextNode(line.trim())));
    });
    global.gc && global.gc();
    const after2 = process.memoryUsage().heapUsed;
    console.log('З Flyweight:', ((after2 - before2) / 1024).toFixed(2), 'KB');
}

main();
