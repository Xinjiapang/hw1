// bubble homework 1
// Xinjia Pang

var bubbles = [];

function setup() {
    createCanvas(600, 600);

    for (var i = 0; i < 10; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(5, 150) // the range of the size of bubbles
        };
        bubbles.push(bubble)
    }
}

function mousePressed() {
  var bubble = {
            x: random(width),
            y: random(height),
            radius: random(5, 150)
        };
        bubbles.push(bubble) // add bubbles which are random
}

function draw() {
    background(255);
    noStroke(); // remove stroke of the bubbles

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            if (mouseIsPressed) {
                bubbles.splice(i, 1); // remove this bubble
            }
            fill(0, 200, 200, 255); // change color to green
        } else {
            fill(255, 0, 100, 100); // bubble will be pink without mouse.
        }

        ellipse(bubble.x, bubble.y, bubble.radius*2);
        bubble.x += random(-5, 5); 
        bubble.y += random(-9, 9); // bubble will move up and down violently
    };
}
