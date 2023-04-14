var socket;

let border = 100;
let x = 0;
let y = 50;

let n = 0;
let button;


function setButtons() {
  const buttons = [];
  const buttonNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  for (let i = 0; i < buttonNumbers.length; i++) {
    let button;
    do {
      x = random(border, 375-border);
      y = random(border, 812-border);
      button = createButton(buttonNumbers[i]);
      button.position(x, y);
    } while (buttons.some((b) => isOverlap(button, b)));
    button.id("b" + buttonNumbers[i]);
    button.mousePressed(() => {
      n = buttonNumbers[i];
      socket.emit("message", n);
      console.log(n);
    });
    buttons.push(button);
  }
}

function isOverlap(button1, button2) {
  const rect1 = button1.elt.getBoundingClientRect();
  const rect2 = button2.elt.getBoundingClientRect();
  return !(
    rect1.right < rect2.left ||
    rect1.left > rect2.right ||
    rect1.bottom < rect2.top ||
    rect1.top > rect2.bottom
  );
}

  

function setup() {
  createCanvas(400, 900);
  pixelDensity(5.0);
  background(4, 47, 16);
  //  socket = socket.io.connect('http://localhost:3000');
  socket = io.connect("https://dda-miflck.herokuapp.com/");

  // Callback function
  socket.on("message", (data) => {
    console.log("callback from server", data);
  });
  // gets called when new client arrives
  socket.on("client connected", (data) => {
    console.log("client added", data);
  });
  
setButtons()
}

function draw() {
 // background(4, 47, 16);
  //setButtons();
}

