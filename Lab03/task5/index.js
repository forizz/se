import {LightElementNode, LightTextNode} from "./LightNode.js";


function main() {
    const ul = new LightElementNode({tagName: 'ul', displayType: 'block'})
        .addClass('menu');

    // Додамо три <li> елементи
    ['Home', 'About', 'Contact'].forEach(text => {
        const li = new LightElementNode({tagName: 'li', displayType: 'block'})
            .addClass('menu-item')
            .addChild(new LightTextNode(text));
        ul.addChild(li);
    });

    // Для демонстрації вкладемо в одному пункті ще inline <span>
    const span = new LightElementNode({tagName: 'span', displayType: 'inline'})
        .addClass('highlight')
        .addChild(new LightTextNode('!'));
    
    ul.children[0].addChild(span);

    // Виведемо outerHTML
    console.log(ul.outerHTML());
}

main();
