/**
 * @interface Renderer
 */
export class Renderer {
    /**
     * @param {string} shapeName
     */
    render(shapeName) {
        throw new Error('render() must be implemented');
    }
}

/**
 * @class VectorRenderer
 */
export class VectorRenderer extends Renderer {
    render(shapeName) {
        console.log(`Drawing ${shapeName} as vectors`);
    }
}

/**
 * @class RasterRenderer
 */
export class RasterRenderer extends Renderer {
    render(shapeName) {
        console.log(`Drawing ${shapeName} as pixels`);
    }
}

/**
 * @class Shape
 */
export class Shape {
    /**
     * @param {Renderer} renderer
     */
    constructor(renderer) {
        /** @protected */ this.renderer = renderer;
    }

    /**
     * @abstract
     */
    draw() {
        throw new Error('draw() must be implemented');
    }
}

/**
 * @class Circle
 */
export class Circle extends Shape {
    draw() {
        this.renderer.render('Circle');
    }
}

/**
 * @class Square
 */
export class Square extends Shape {
    draw() {
        this.renderer.render('Square');
    }
}

/**
 * @class Triangle
 */
export class Triangle extends Shape {
    draw() {
        this.renderer.render('Triangle');
    }
}
