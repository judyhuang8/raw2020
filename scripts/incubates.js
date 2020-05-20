function showContent() {
  document.getElementById('full-content').style.display = "flex";
  document.getElementById('incubates-blob-img').style.display = "none";
}

function hideContent() {
  document.getElementById('full-content').style.display = "none";
  document.getElementById('incubates-blob-img').style.display = "block";
}

$(document).ready(function () {

  // nav hover effect
  $("#incubates-nav-small-1").hover(function () {
    $("#hoverblob-1").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>Heart-Tube-Heart</p>");
  }, function () {
    $("#hoverblob-1").html("");
  });

  $("#incubates-nav-small-2").hover(function () {
    $("#hoverblob-2").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>No-Body</p>");
  }, function () {
    $("#hoverblob-2").html("");
  });

  $("#incubates-nav-small-3").hover(function () {
    $("#hoverblob-3").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>Fibers</p>");
  }, function () {
    $("#hoverblob-3").html("");
  });

  $("#incubates-nav-small-4").hover(function () {
    $("#hoverblob-4").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>FVSO</p>");
  }, function () {
    $("#hoverblob-4").html("");
  });


  // nav click transition
  // replace image, title, authors, html
  // replace full content html
  // onclick for image will already display correct content
  // replace nav blob with black

  // Heart Tube Heart
  $("#incubates-nav-small-1").on("click", function () {
    $("#title").html("Heart-Tube-Heart: Designing a “connector” for story-telling and unexpected bonding");
    $("#authors").html("Sheri Guo, Connie Liu, Benji Magin, Mikail Maqsood, Joseph Yoon");
    $("#incubates-blob-img").html('<img id="incubates-img" src="images/incubates/full-img-1.jpg" onclick="showContent()"></img>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-1.jpg">');
    $("#description").html('Heart-Tube-heart is an installation intended to be located on the Milstein Hall walkway at Cornell University for Medium RAW Expo. The installation consists of multiple sets of height adjustable pipes that loops over the walkway. People can interact with each other through the pipe without being able to directly see each other, removing any social or visual preconceptions. People are able to press buttons that correspond to various questions that serve as conversation starters, facilitating storytelling and helping people to quickly build deeper connections with others.');
  });

  // No-Body
  $("#incubates-nav-small-2").on("click", function () {
    $("#title").html("No-Body: Redesigning Restroom Signage");
    $("#authors").html("Lauren Lam, Hahnbee Lee");
    $("#incubates-blob-img").html('<img id="incubates-img" src="images/incubates/full-img-2.png" onclick="showContent()"></img>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-2.png">');
    $("#description").html('We met up at oishii bowl to discuss ideas about “diversity and inclusion”. In the midst of the conversation, Lauren suddenly had to use the bathroom. She noticed the gender-neutral bathroom sign and thought that it wasn’t inclusive and overall a poor design. That’s when we decided to redesign bathroom signs. Bathroom signs are so common that they are usually overlooked, but in reality they reveal how people are categorized. During the Jim Crow era, they were used to segregate black and white people. Today, they are widely used to separate people by the gender binary: men and women. Because bathroom signs are representations for how society categorizes people, it is important that the signs are inclusive.');
  });

  // Fibers
  $("#incubates-nav-small-3").on("click", function () {
    $("#title").html("Fibers: Designing an Inclusive Clothing Community Platform");
    $("#authors").html("Erika Hauschild, Fiona Rath<br>With help from Chelsea choi, Sarah Mirae Kim, Stephanie Zheng");
    $("#incubates-blob-img").html('<img id="incubates-img" src="images/incubates/full-img-3.png" onclick="showContent()"></img>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-3.png">');
    $("#description").html('Designing an Inclusive Clothing Community Platform');
  });

  // FVSO
  $("#incubates-nav-small-4").on("click", function () {
    $("#title").html("FVSO: Fact and Opinion Checker");
    $("#authors").html("Olivia Gee, Varun Iyengar, Iris Kim, Ami Mehta, Valentin Porcellini");
    $("#incubates-blob-img").html('<img id="incubates-img" src="images/incubates/full-img-4.jpg" onclick="showContent()"></img>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-4.jpg">');
    $("#description").html('Placeholder');
  });

});