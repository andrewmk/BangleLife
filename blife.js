var x = new Array(12);
for (var i = 0; i < x.length; i++) {
  x[i] = new Array(12);
}

var y = new Array(12);
for (var i = 0; i < y.length; i++) {
  y[i] = new Array(12);
}

var world = [x, y];
var generation = 0;

function drawIt(generation) {
  var i, j;
  //g.clear();
  for (i=10; i<240; i+=20) {
    for (j=10; j<240; j+=20) {
      cell = world[generation][(j-10)/20][(i-10)/20];
      if (cell) {
        g.setColor(1, 1, 1);
        g.fillCircle(i, j, 5);
      }
      else {
        //g.drawCircle(i, j, 5);
        g.setColor(0, 0, 0);
        g.fillCircle(i, j, 5);
      }
    }
  }
}

function doInit() {
  var i, j;
  for (i=10; i<240; i+=20) {
    for (j=10; j<240; j+=20) {
      cell = Math.round(Math.random());
      x[(i-10)/20][(j-10)/20] = cell;
      y[(i-10)/20][(j-10)/20] = cell;
    }
  }
  g.clear();
}

setWatch(function() {
  doInit();
  generation = 0;
  drawIt(generation);
}, BTN, {edge:"rising", debounce:50, repeat:true});

doInit();

//while(true) {
  drawIt(generation);
  generation = 1 - generation;
  drawIt(generation);

setTimeout(function() {
        doInit();
        drawIt(0);
  setTimeout(function() {
        doInit();
        drawIt(0);
    }, 1000*1);
    }, 1000*1);
//}
