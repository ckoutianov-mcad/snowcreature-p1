let grid = undefined;
let stroke1 = prompt("Choose a basic color name (lowercase letters)." , "blue");
let stroke2 = prompt("Choose another basic color name (lowercase letters).", "orange");
function setup() {
    createCanvas(1000, 800);
    background("#587291");
    grid = loadImage("");
}
function draw() {
    background(grid);
    //legs
    fill("#1ccad8");
    strokeWeight(15);
    stroke(stroke1);
    //left leg (x from the left, y from the bottom, width, optional height)
    ellipse(350, 600, 200);
    //right leg
    ellipse(650, 600, 200);
    //body
    ellipse(500, 450, 360, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(25);
    line(400, 120, 600, 120);
    //hat body 
    quad(400, 50, 600, 50, 550, 120, 450, 120);
    //eyes
    stroke(0);
    strokeWeight(50);
    point(450, 200);
    point(505, 200);
    //nose
    stroke("#ff8200");
    strokeWeight(25);
    point(475, 230);
    //mouth
    noFill();
    stroke(0);
    strokeWeight(5);
    arc(500, 200, 110, 120, 0, HALF_PI);
    //buttons
    stroke("#2f97c1");
    strokeWeight(35);
    point(475, 400); 
    point(475, 450);  
    point(475, 500);
    //left arm
    stroke(0);
    strokeWeight(10);
    line(300, 300, 380, 380);
    //right arm
    noFill();
    stroke(0);
    strokeWeight(10);
    arc(660, 310, 140, 200, 0, HALF_PI);

}