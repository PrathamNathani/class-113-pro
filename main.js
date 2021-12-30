function preload() {
  
}
function setup() {
  createCanvas(500, 450);
  video = createCapture(VIDEO);
}

function draw() {
  image(video,300,20,200,20)
  background("#c2f0da"); 
  rect(50,80,25,310);
  fill("#8bff42");
  stroke("#2e79f2");
  circle(60,50,63);
  rect(90,40,310,25);
  circle(425,50,63);
  rect(415,80,25,310);
  circle(430,405,63);
  rect(90,390,310,25);
  circle(60,405,63);
}