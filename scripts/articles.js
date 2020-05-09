$(document).ready(function () {
  var ids = new Array();
  $('[id]').each(function () {
    ids.push($(this).attr("id"));
  });
  let ids_length = ids.length;
  let i = 0;
  let curr_id = ids[i];
  // console.log(curr_id);

  function nextPg() {
    console.log("front clicked");
    i++;
    console.log(i);
    curr_id = ids[i];
    // if (curr_id != ids[ids_length - 1]) {
    $('#pg_' + (i)).removeClass("hidden");
    $('#pg_' + (i - 1)).addClass("hidden");
    ctx.clearRect(0, 0, w, h);
    // document.getElementById("can").style.display = "none";
    // } else {
    //   console.log("last");
    //   $('#pg_' + (i)).removeClass("hidden");
    //   $('#pg_' + (i - 1)).addClass("hidden");
    // }
  }

  function backPg() {
    console.log("back clicked");
    i--;
    console.log(i);
    curr_id = ids[i];
    // if (curr_id != ids[0]) {
    $('#pg_' + (i + 1)).addClass("hidden");
    $('#pg_' + (i)).removeClass("hidden");
    ctx.clearRect(0, 0, w, h);
    // document.getElementById("canvasimg").style.display = "none";
    // } else {
    //   console.log("first");
    //   $('#pg_' + (i + 1)).addClass("hidden");
    //   $('#pg_' + (i)).removeClass("hidden");
    // }
  }
  $(".front_arrow").click(nextPg);
  document.keyup = function (e) {
    console.log("front pressed");
    if (e.keyCode == 39) {
      nextPg()
    }
  };
  $(".back_arrow").click(backPg);
  document.keyup = function (e) {
    if (e.keyCode == 38) {
      backPg()
    }
  };


});

var canvas, ctx, flag = false,
  prevX = 0,
  currX = 0,
  prevY = 0,
  currY = 0,
  dot_flag = false;

var x = "black",
  y = 2;

function init() {
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  w = canvas.width;
  h = canvas.height;

  canvas.addEventListener("mousemove", function (e) {
    findxy('move', e)
  }, false);
  canvas.addEventListener("mousedown", function (e) {
    findxy('down', e)
  }, false);
  canvas.addEventListener("mouseup", function (e) {
    findxy('up', e)
  }, false);
  canvas.addEventListener("mouseout", function (e) {
    findxy('out', e)
  }, false);
}

function color(obj) {
  x = "black"
  // if (x == "white") y = 14;
  // else y = 2;

}

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

// function erase() {
//   var m = confirm("Want to clear");
//   if (m) {
//     ctx.clearRect(0, 0, w, h);
//     document.getElementById("canvasimg").style.display = "none";
//   }
// }

// function save() {
//   document.getElementById("canvasimg").style.border = "2px solid";
//   var dataURL = canvas.toDataURL();
//   document.getElementById("canvasimg").src = dataURL;
//   document.getElementById("canvasimg").style.display = "inline";
// }

function findxy(res, e) {
  if (res == 'down') {
    prevX = currX;
    prevY = currY;
    currX = e.clientX - canvas.offsetLeft;
    currY = e.clientY - canvas.offsetTop;

    flag = true;
    dot_flag = true;
    if (dot_flag) {
      ctx.beginPath();
      ctx.fillStyle = x;
      ctx.fillRect(currX, currY, 2, 2);
      ctx.closePath();
      dot_flag = false;
    }
  }
  if (res == 'up' || res == "out") {
    flag = false;
  }
  if (res == 'move') {
    if (flag) {
      prevX = currX;
      prevY = currY;
      currX = e.clientX - canvas.offsetLeft;
      currY = e.clientY - canvas.offsetTop;
      draw();
    }
  }
}