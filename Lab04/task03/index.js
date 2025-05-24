import {LightElementNode} from './LightElementNode.js';
import {LightTextNode} from './LightTextNode.js';

function main() {
    const button = new LightElementNode({tagName: 'button', displayType: 'inline'})
        .addClass('btn')
        .addChild(new LightTextNode('Click me'));

    button.addEventListener('click', () => {
        console.log('Кнопка натиснута!');
    });

    button.addEventListener('mouseover', () => {
        console.log('Курсор наведено!');
    });

    console.log('HTML:');
    console.log(button.outerHTML());

    console.log('\nСимуляція подій:');
    button.dispatchEvent('click');
    button.dispatchEvent('mouseover');
    button.dispatchEvent('keydown');
}

main();
