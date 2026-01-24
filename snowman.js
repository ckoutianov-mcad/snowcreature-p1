let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#587291");
    grid = loadImage("../img/100px_grid.png");
}
function draw() {
    background(grid);
    //legs
    fill("#1ccad8");
    stroke("#2f97c1");
    //left leg (x from the left, y from the bottom, width, optional height)
    ellipse(350, 600, 200);

}