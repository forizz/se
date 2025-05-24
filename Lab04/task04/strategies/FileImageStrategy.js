import fs from 'fs/promises';
import {ImageLoadStrategy} from './ImageLoadStrategy.js';

export class FileImageStrategy extends ImageLoadStrategy {
    async load(src) {
        try {
            await fs.access(src);
            return `Loaded image from file: ${src}`;
        } catch {
            return `File not found: ${src}`;
        }
    }
}
