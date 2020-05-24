
$(document).ready(function () {
  var ids = new Array();
  // console.log("ids:" + ids);
  $('[id]').each(function () {
    ids.push($(this).attr("id"));
  });
  let ids_length = ids.length;
  let i = 0;
  let curr_id = ids[i];

  function nextPg() {
    console.log("front clicked");
    i++;
    curr_id = ids[i];
    // console.log("curr-id" + i);
    $('#pg_' + (i)).removeClass("hidden");
    // console.log("removed");
    $('#pg_' + (i - 1)).addClass("hidden");
    ctx.clearRect(0, 0, w, h);
  }
  function backPg() {
    console.log("back clicked");
    i--;
    curr_id = ids[i];
    $('#pg_' + (i + 1)).addClass("hidden");
    $('#pg_' + (i)).removeClass("hidden");
    ctx.clearRect(0, 0, w, h);
  }

  $(".front_arrow").click(nextPg);
  document.keyup = function (e) {
    console.log("front pressed");
    if (e.keyCode == 39) {
      nextPg
    }
  };
  $(".back_arrow").click(backPg);
  document.keyup = function (e) {
    console.log("back pressed");
    if (e.keyCode == 38) {
      backPg
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
  console.log("initalized")
  canvas = document.getElementById('can');
  ctx = canvas.getContext("2d");
  w = window.innerWidth * .72;
  ctx.canvas.width = w;
  // console.log(w);
  h = window.innerHeight * .83;
  ctx.canvas.height = h;
  // console.log(h);

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