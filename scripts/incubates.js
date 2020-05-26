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
    $("#incubates-nav-small-1").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-1").html("");
    $("#incubates-nav-small-1").css("cursor", "default");
  });

  $("#incubates-nav-small-2").hover(function () {
    $("#hoverblob-2").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>No-Body</p>");
    $("#incubates-nav-small-2").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-2").html("");
    $("#incubates-nav-small-2").css("cursor", "default");
  });

  $("#incubates-nav-small-3").hover(function () {
    $("#hoverblob-3").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>Fibers</p>");
    $("#incubates-nav-small-3").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-3").html("");
    $("#incubates-nav-small-3").css("cursor", "default");
  });

  $("#incubates-nav-small-4").hover(function () {
    $("#hoverblob-4").html("<img src='/images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>FVSO</p>");
    $("#incubates-nav-small-4").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-4").html("");
    $("#incubates-nav-small-4").css("cursor", "default");
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
    $("#incubates-blob-img").html('<div class="square"><span></span><span></span><span></span><div class="content"><img id="incubates-img" src="images/incubates/blob-img-1.png" onclick="showContent()"></div>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-1.jpg">');
    $("#description").html('Heart-Tube-Heart is an installation intended to be located on the Milstein Hall walkway at Cornell University for Medium RAW Expo. The installation consists of multiple sets of height adjustable pipes that loops over the walkway. People can interact with each other through the pipe without being able to directly see each other, removing any social or visual preconceptions. People are able to press buttons that correspond to various questions that serve as conversation starters, facilitating storytelling and helping people to quickly build deeper connections with others.');
    $("#nav-path-1").attr("fill", "black");
    $("#nav-path-4, #nav-path-2, #nav-path-3").attr("fill", "#909090");
    hideContent();
  });

  // No-Body
  $("#incubates-nav-small-2").on("click", function () {
    $("#title").html("No-Body: Redesigning Restroom Signage");
    $("#authors").html("Lauren Lam, Hahnbee Lee");
    $("#incubates-blob-img").html('<div class="square"><span></span><span></span><span></span><div class="content"><img id="incubates-img" src="images/incubates/blob-img-2.png" onclick="showContent()"></div>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-2.png">');
    $("#description").html('We are No-Body, a team dedicated to redesigning the bathroom sign to be more inclusive. The current binary bathroom sign is not an accurate representation of gender and forces people to categorize themselves into two categories. The gender neutral sign is an attempt at being inclusive, but its distinguishment of an “other” brings unnecessary attention to the trans community. Our redesign focuses on distinguishing bathrooms by the objects that reside inside of them instead of focusing on the bodies of the people that use them. We decided on this redesign because we believe that no body could represent everybody.');
    $("#nav-path-2").attr("fill", "black");
    $("#nav-path-1, #nav-path-4, #nav-path-3").attr("fill", "#909090");
    hideContent();
  });

  // Fibers
  $("#incubates-nav-small-3").on("click", function () {
    $("#title").html("Fibers: Designing an Inclusive Clothing Community Platform");
    $("#authors").html("Erika Hauschild, Fiona Rath<br>With help from Chelsea choi, Sarah Mirae Kim, Stephanie Zheng");
    $("#incubates-blob-img").html('<div class="square"><span></span><span></span><span></span><div class="content"><img id="incubates-img" src="images/incubates/blob-img-3.png" onclick="showContent()"></div>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-3.png">');
    $("#description").html('We are FIBERS, a team dedicated to Furthering the Inclusion of Bodies Everywhere through a Reliable Search. Our website provides a one stop shop for specialized and adaptive clothing with options to tailor your body with a simple fix. This clothing search engine helps physically and mentally disabled users experience the ease of dressing every day.');
    $("#nav-path-3").attr("fill", "black");
    $("#nav-path-1, #nav-path-2, #nav-path-4").attr("fill", "#909090");
    hideContent();
  });

  // FVSO
  $("#incubates-nav-small-4").on("click", function () {
    $("#title").html("FVSO: Fact and Opinion Checker");
    $("#authors").html("Olivia Gee, Varun Iyengar, Iris Kim, Ami Mehta, Valentin Porcellini");
    $("#incubates-blob-img").html('<div class="square"><span></span><span></span><span></span><div class="content"><img id="incubates-img" src="images/incubates/blob-img-4.png" onclick="showContent()"></div>');
    $("#incubates-img-full").html('<img src="images/incubates/full-img-4.jpg">');
    $("#description").html('Placeholder: Our solution centers on headline indexing and analysis. Roy Clark of the Poynter Institute once stated “in an ideological war, one side or another will try to use language as a weapon.” Evidently, buzzwords and loaded language are powerful tools that shape public opinion.');
    $("#nav-path-4").attr("fill", "black");
    $("#nav-path-1, #nav-path-2, #nav-path-3").attr("fill", "#909090");
    hideContent();
  });

});