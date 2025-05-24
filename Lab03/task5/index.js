import {LightElementNode, LightTextNode} from "./LightNode.js";


function main() {
    const ul = new LightElementNode({tagName: 'ul', displayType: 'block'})
        .addClass('menu');

    ['Home', 'About', 'Contact'].forEach(text => {
        const li = new LightElementNode({tagName: 'li', displayType: 'block'})
            .addClass('menu-item')
            .addChild(new LightTextNode(text));
        ul.addChild(li);
    });

    const span = new LightElementNode({tagName: 'span', displayType: 'inline'})
        .addClass('highlight')
        .addChild(new LightTextNode('!'));

    ul.children[0].addChild(span);

    console.log(ul.outerHTML());
}

main();
