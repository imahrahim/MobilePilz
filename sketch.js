var socket;
let buttons = [];

function setButtons() {
  let border = 100;
  let buttonSize = 50;
  let maxAttempts = 50;

  for (let i = 1; i <= 8; i++) {
    let button = createButton(i.toString());
    let overlaps = true;
    let attempts = 0;
    while (overlaps && attempts < maxAttempts) {
      button.position(random(border, width - border - buttonSize), random(border, height - border - buttonSize));
      overlaps = buttons.some((otherButton) => isOverlap(button, otherButton));
      attempts++;
    }
    if (attempts >= maxAttempts) {
      console.warn("Could not find a non-overlapping position for button " + i);
    }
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
  background(4, 47, 16);

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
