var bubbles = [];

function setup() {
    createCanvas(600, 600);

    for (var i = 0; i < 10; i++) {
        var bubble = {
            x: random(width),
            y: random(height),
            radius: random(5, 150)
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
        bubbles.push(bubble)
}

function draw() {
    background(255);
    noStroke();

    for (var i = 0; i < bubbles.length; i++) {
        var bubble = bubbles[i];

        if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
            fill(0, 200, 200, 400);
        } else {
            fill(255, 0, 100, 100);
        }

        ellipse(bubble.x, bubble.y, bubble.radius*2);
        bubble.x += random(-5, 5);
        bubble.y += random(-9, 9);
    };
}
