
$(document).ready(function () {
  var ids = new Array();
  $('[id]').each(function () {
    ids.push($(this).attr("id"));
  });
  var pg_ids = new Array();
  ids.forEach(e => {
    if (e.substring(0, 2) == "pg") {
      pg_ids.push(e);
    }
  });
  let ids_length = pg_ids.length;
  let i = 0;
  // let curr_id = pg_ids[i];
  pg_dots(i);
  function pg_dots(i) {
    let html = "";
    for (let n = 0; n <= i; n++) {
      html += "<img src='images/icons/black_filled.png'>";
    }
    for (let k = i; k < ids_length - 1; k++) {
      html += "<img src='images/icons/white_filled.png'>";
    }
    $('.page_nav').html(html);
  }
  function nextPg() {
    // console.log("front clicked");
    i++;
    // console.log("i:" + i);
    // curr_id = pg_ids[i];
    $('#pg_' + (i)).removeClass("hidden");
    $('#apg_' + (i)).removeClass("hidden");
    $('#pg_' + (i)).removeClass("fadeLeft");
    $('#pg_' + (i)).addClass("fadeRight");
    $('#pg_' + (i - 1)).addClass("hidden");
    $('#apg_' + (i - 1)).addClass("hidden");
    pg_dots(i);
    // ctx.clearRect(0, 0, w, h);
  }
  function backPg() {
    // console.log("back clicked");
    i--;
    // curr_id = pg_ids[i];
    $('#pg_' + (i + 1)).addClass("hidden");
    $('#apg_' + (i + 1)).addClass("hidden");
    $('#pg_' + (i)).removeClass("hidden");
    $('#apg_' + (i)).removeClass("hidden");
    $('#pg_' + (i)).addClass("fadeLeft");
    $('#pg_' + (i)).removeClass("fadeRight");
    pg_dots(i);
    // ctx.clearRect(0, 0, w, h);
  }

  $(".front_arrow").click(nextPg);
  $(".back_arrow").click(backPg);

  // $("#save").click(function (e) {

  //   var dataURL = canvas.toDataURL('image/png').replace("image/png", "image/octet-stream");
  //   // console.log(dataURL);
  //   $(".display img").src = dataURL;

  // });

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

// function color(obj) {
//   x = "black"

// }

function draw() {
  ctx.beginPath();
  ctx.moveTo(prevX, prevY);
  ctx.lineTo(currX, currY);
  ctx.strokeStyle = x;
  ctx.lineWidth = y;
  ctx.stroke();
  ctx.closePath();
}

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