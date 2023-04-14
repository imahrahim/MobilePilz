var socket;

let border = 50;
let x = 0;
let y = 50;

let n = 0;
let button1;
let button2;
let button3;
let button4;
let button5;
let button6;
let button7;
let button8;

function setup() {
  createCanvas(windowWidth, windowHeight);
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
  background(4, 47, 16);

  x = windowWidth / 2;
  let abstand = (windowHeight - border * 2) / 8;
  console.log(abstand);

  button1 = createButton("1");
  button1.position(x, y);
  //button1.style ('background-color', '#717bc1');
  button1.mousePressed(changeM1);
  button2 = createButton("2");
  button2.position(x, y + abstand);
 // button2.style ('background-color', '#979446');
  button2.mousePressed(changeM2);
  button3 = createButton("3");
  button3.position(x, y + abstand * 2);
 // button3.style ('background-color', '#ae66b1');
  button3.mousePressed(changeM3);
  button4 = createButton("4");
  button4.position(x, y + abstand * 3);
  //button4.style ('background-color', '#59a270');
  button4.mousePressed(changeM4);
  button5 = createButton("5");
  button5.position(x, y + abstand * 4);
  //button5.style ('background-color', '#bf637d');
  button5.mousePressed(changeM5);
  button6 = createButton("6");
  button6.position(x, y + abstand * 5);
 // button6.style ('background-color', '#74b3c9');
  button6.mousePressed(changeM6);
  button7 = createButton("7");
  button7.position(x, y + abstand * 6);
  //button7.style ('background-color', '#bc764f');
  button7.mousePressed(changeM7);
  button8 = createButton("8");
  button8.position(x, y + abstand * 7);
  //button8.style ('background-color', '#4c707b');
  button8.mousePressed(changeM8);
}

function draw() {
  //background(220);
}

function changeM1() {
  n = 1;

  socket.emit("message", 1);
  console.log(n);
}
function changeM2() {
  n = 2;
  socket.emit("message", 2);
  console.log(n);
}
function changeM3() {
  n = 3;
  socket.emit("message", 3);
  console.log(n);
}
function changeM4() {
  n = 4;
  socket.emit("message", 4);
  console.log(n);
}
function changeM5() {
  n = 5;
  socket.emit("message", 5);
  console.log(n);
}
function changeM6() {
  n = 6;
  socket.emit("message", 6);
  console.log(n);
}
function changeM7() {
  n = 7;
  socket.emit("message", 7);
  console.log(n);
}
function changeM8() {
  n = 8;
  socket.emit("message", 8);
  console.log(n);
}
