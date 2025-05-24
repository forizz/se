import {LightImageNode} from './LightImageNode.js';
import {FileImageStrategy} from './strategies/FileImageStrategy.js';
import {RemoteImageStrategy} from './strategies/RemoteImageStrategy.js';

async function main() {
    const localImg = new LightImageNode('picture.jpg', new FileImageStrategy());
    const remoteImg = new LightImageNode('https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg', new RemoteImageStrategy());

    await localImg.load();
    await remoteImg.load();

    console.log('HTML локального зображення:', localImg.outerHTML());
    console.log('HTML мережевого зображення:', remoteImg.outerHTML());

    console.log('\nЗвіт про завантаження:');
    console.log(localImg.result);
    console.log(remoteImg.result);
}

main();
