let time;
let scene = 1;
let plot=[];
let familyimg, friendimg, societyimg, selfimg;
let fa,fr,so,se;

function preLoad() {
  familyimg = loadImage(family_icon.png);
  friendimg = loadImage(friend.png);
  societyimg = loadImage(society.png);
  selfimg = loadImage(self.png);

}

function setup() {
  createCanvas(600, 400);
  rectMode(CENTER);
}

function draw() {
  background(0);
  fa=50;
  fr=50;
  so=50;
  se=50;
  // for(i=0,i<30,i++){
  // plot[i];
  // }
  if (scene == 1) {
    scene1();
  }
  if (scene == 2) {
    scene2();
  }
  if (scene == 3) {
    scene3();
  }
  if (scene == 4) {
    scene4();
  }
  if (scene == 5) {
    scene5();
  }
  print(fa);


}

function scene1() {
  time = millis();
  if (time < 1500) {
    textSize(40);
    fill(255);
    text("YOU ARE DEAD", width / 2 - 140, height / 2 + 20);
  }
  if (time > 1500) {
    text("YOU DIE AT THE AGE OF 21.", width / 2 - 270, height / 2 + 20);
  }
}

function scene2() {
  text("CLICK TO START", 150, 230);
}

function scene3() {
  text("1-Year Old",30, 60);
  noStroke();
  square(200, 200, 200);
  square(400, 200, 200);
  if (mouseX < 300) {
    fill(250, 0, 0);
    square(200, 200, 220);
    textSize(25);
    fill(250);
    text("Cry out loud",130,210);
  }
  if (mouseX > 300) {
    fill(0, 0, 250);
    square(400, 200, 220);
    textSize(25);
    fill(250);
    text("Keep it yourself",312,210);
  }
  // image(selfimg, 40, 100);
}

function scene4() {
  fill(255, 0, 0);
  text("Your mom hugged you and you felt better",80,210);
  se+=20;
  so-=10;
  fa+=30;
}

function scene5() {
  fill(0, 0, 255);
  text("Your family didn't notice you",150,210);
  se-=30;
  fa-=20;
}

function mousePressed() {
  if (scene <= 3) {
    scene++;
  }
  if (scene > 3 && mouseX < 300) {
    scene = 4;
  }
  if (scene > 3 && mouseX > 300) {
    scene = 5;
  }
}

class Plot {
  constructor() {
  }


}