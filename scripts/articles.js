$(document).ready(function () {
  var ids = new Array();
  $('[id]').each(function () {
    ids.push($(this).attr("id"));
  });
  let ids_length = ids.length;
  let i = 0;
  let curr_id = ids[i];
  // console.log(curr_id);

  $(".front_arrow").click(function () {
    console.log("front clicked");
    i++;
    console.log(i);
    curr_id = ids[i];
    if (curr_id != ids[ids_length - 1]) {
      $('#pg_' + (i)).removeClass("hidden");
      $('#pg_' + (i - 1)).addClass("hidden");
    } else {
      console.log("last");
      $('#pg_' + (i)).removeClass("hidden");
      $('#pg_' + (i - 1)).addClass("hidden");
    }
  });

  $(".back_arrow").click(function () {
    console.log("back clicked");
    i--;
    console.log(i);
    curr_id = ids[i];
    if (curr_id != ids[0]) {
      $('#pg_' + (i + 1)).addClass("hidden");
      $('#pg_' + (i)).removeClass("hidden");
    } else {
      console.log("first");
      $('#pg_' + (i + 1)).addClass("hidden");
      $('#pg_' + (i)).removeClass("hidden");
    }
  });
});