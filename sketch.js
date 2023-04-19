var socket;
let buttons = [];

function setButtons() {
  let borderY = 100;
  let borderX = 30;
  let buttonSize = 50;
  let maxAttempts = 50;
 let colors = [
  "#ff0000", //Button 0
    "#F3E6FF", // Button 1
    "#C2EFFF", // Button 2
    "#C7FFE6", // Button 3
    "#FFFCE6", // Button 4
    "#FFDBBF", // Button 5
    "#FFBFBF", // Button 6
    "#E6BFFF", // Button 7
    "#BFD9FF"  // Button 8
  ]
  

  for (let i = 0; i <= 8; i++) {
    let button = createButton(i === 0 ? "X" : i.toString());

    let overlaps = true;
    let attempts = 0;
    
    while (overlaps && attempts < maxAttempts) {
      let x = random(borderX, width - borderX - buttonSize);
      let y = random(borderY, height - borderY - buttonSize)
      button.position(x, y);
      overlaps = buttons.some((otherButton) => isOverlap(button, otherButton));
      attempts++;
    }
    if (attempts >= maxAttempts) {
      console.warn("Could not find a non-overlapping position for button " + i);
    }
    button.style('background-color', colors[i]);
    button.mousePressed(() => {
      n = i;
      socket.emit('message', n);
      console.log(n);
    });
    buttons.push(button);
  }
}



function isOverlap(button1, button2) {
  const rect1 = button1.elt.getBoundingClientRect();
  const rect2 = button2.elt.getBoundingClientRect();
  return (
    rect1.right >= rect2.left &&
    rect1.left <= rect2.right &&
    rect1.bottom >= rect2.top &&
    rect1.top <= rect2.bottom
  );
}

function setup() {
  createCanvas(375, 812);
  pixelDensity(5.0);
 

  socket = io.connect('https://dda-miflck.herokuapp.com/');
  socket.on('message', (data) => {
    console.log('callback from server', data);
  });
  socket.on('client connected', (data) => {
    console.log('client added', data);
  });

  setButtons();
}

function draw() {}
