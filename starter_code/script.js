 //window.onload = function() {

  //document.getElementById("start-button").onclick = function() {
   // startGame();
  //};

//   var flappyGame = {
//     canvas : document.createElement("canvas"),
//     start : function() {
//         this.canvas.width = 430;
//         this.canvas.height = 630;
//         this.context = this.canvas.getContext("2d");
//         document.body.insertBefore(this.canvas, document.body.childNodes[0]);
//         // this.interval = setInterval(updateGameArea, 20);
//     },
//     clear : function() {
//       this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
//   }

// };

  //function startGame() {
    // var img = new Image();   
    // img.src = '../starter_code/images/bg.png';
    // setInterval( function() {
    //   // flappyGame.clear();
    //   flappyGame.start();
    //   flappyGame.context.drawImage(img, 0, 0,img.height,img.width)
    // }, 1000)
    // flappyGame.updateCanvas();
//}

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;

var img = new Image();
img.src = '../starter_code/images/bg.png';
var backgroundImage = {
  img: img,
  x: 0,
  speed: -1,

  move: function() {
    this.x += this.speed;
    this.x %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.x, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.x + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.x - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  requestAnimationFrame(updateCanvas);
  // b.draw();
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

var g = 0;
var gv = 0;

function flappyBird(x, y, vx, vy, radius) {
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
  this.radius = radius;
  this.color = "red";
}

flappyBird.prototype.draw = function () {
  ctx.save();
  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

//};

