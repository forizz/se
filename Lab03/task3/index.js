import {Circle, RasterRenderer, Square, Triangle, VectorRenderer} from "./shape.js";

function main() {
    const vectorRenderer = new VectorRenderer();
    const circleVector = new Circle(vectorRenderer);
    const squareVector = new Square(vectorRenderer);
    const triangleVector = new Triangle(vectorRenderer);

    circleVector.draw();
    squareVector.draw();
    triangleVector.draw();

    const rasterRenderer = new RasterRenderer();
    const circleRaster = new Circle(rasterRenderer);
    const squareRaster = new Square(rasterRenderer);
    const triangleRaster = new Triangle(rasterRenderer);

    circleRaster.draw();
    squareRaster.draw();
    triangleRaster.draw();
}

main();
