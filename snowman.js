let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#d8c3a5");
    grid = loadImage("../img/100px_grid.png");
}
function draw() {
    background(grid);
    //legs
    fill("#f1f1f1");
    stroke(100, 250, 100);

}