import {ImageLoadStrategy} from './ImageLoadStrategy.js';

export class RemoteImageStrategy extends ImageLoadStrategy {
    async load(src) {
        return `Loaded image from URL: ${src}`;
    }
}
