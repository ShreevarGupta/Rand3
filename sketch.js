var block;
var rand;

function setup() {

    createCanvas(200, 200);

    rand = random(1,5);

}

function draw() {

    background("yellow");

    text(rand, 40, 100);

    drawSprites();
   
}