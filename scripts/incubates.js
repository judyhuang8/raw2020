var currentProject, title, authors, description;
var fullView = false;

function toggleImage() {
  $('#incubates-img').toggleClass("img-normal");
  $("#incubates-img").toggleClass("img-hover");
}



function showContent() {
  fullView = true;
  $("#readmore").css("display", "none");
  document.getElementById('outerwrapper').style.display = "flex";
  toggleImage();
  $('#incubates-img').css("left", "25%");
  $('#incubates-img').css("height", "60vh");
}

function hideContent() {
  fullView = false;
  document.getElementById('outerwrapper').style.display = "none";
  $('#incubates-img').css("left", "50%");
  $('#incubates-img').css("height", "75vh");
}

function updateContent() {
  // hide empty state and show project
  $("#emptystate").css("display", "none");
  $("#incubates-full").removeClass("hidden");

  // update images
  $("#incubates-img").attr("src", "images/incubates/full-img-" + currentProject + ".png");
  $("#incubates-img-full").attr("src", "images/incubates/full-img-" + currentProject + ".png");

  // change nav fill to black
  $("#nav-path-" + currentProject).attr("fill", "black");

  // change other navs to gray
  for (i = 1; i <= 4; i++) {
    if (i !== currentProject) {
      $("#nav-path-" + i).attr("fill", "#909090");
    } else {
      $("#nav-path-" + i).attr("fill", "black");
    }
  }

  // show image, hide empty state
  $(".content").removeClass("hidden");
  $(".emptystatecontent").addClass("hidden");

  // update text content
  switch (currentProject) {
    case 1:
      title = "Heart-Tube-Heart: Designing a “connector” for story-telling and unexpected bonding";
      authors = "Sheri Guo, Connie Liu, Benji Magin, Mikail Maqsood, Joseph Yoon";
      description = "Heart-Tube-Heart is an installation intended to be located on the Milstein Hall walkway at Cornell University for Medium RAW Expo. The installation consists of multiple sets of height adjustable pipes that loops over the walkway. People can interact with each other through the pipe without being able to directly see each other, removing any social or visual preconceptions. People are able to press buttons that correspond to various questions that serve as conversation starters, facilitating storytelling and helping people to quickly build deeper connections with others.";
      bgcolor = "yellow";
      break;
    case 2:
      title = "No-Body: Redesigning Restroom Signage";
      authors = "Lauren Lam, Hahnbee Lee";
      description = "We are No-Body, a team dedicated to redesigning the bathroom sign to be more inclusive. The current binary bathroom sign is not an accurate representation of gender and forces people to categorize themselves into two categories. The gender neutral sign is an attempt at being inclusive, but its distinguishment of an “other” brings unnecessary attention to the trans community. Our redesign focuses on distinguishing bathrooms by the objects that reside inside of them instead of focusing on the bodies of the people that use them. We decided on this redesign because we believe that no body could represent everybody.";
      bgcolor = "blue"
      break;
    case 3:
      title = "Fibers: Designing an Inclusive Clothing Community Platform";
      authors = "Erika Hauschild, Fiona Rath<br>With help from Chelsea choi, Sarah Mirae Kim, Stephanie Zheng";
      description = "We are FIBERS, a team dedicated to Furthering the Inclusion of Bodies Everywhere through a Reliable Search. Our website provides a one stop shop for specialized and adaptive clothing with options to tailor your body with a simple fix. This clothing search engine helps physically and mentally disabled users experience the ease of dressing every day.";
      bgcolor = "peach"
      break;
    case 4:
      title = "FVSO: Fact and Opinion Checker";
      authors = "Olivia Gee, Varun Iyengar, Iris Kim, Ami Mehta, Valentin Porcellini";
      description = "Our solution centers on headline indexing and analysis. Roy Clark of the Poynter Institute once stated “in an ideological war, one side or another will try to use language as a weapon.” Evidently, buzzwords and loaded language are powerful tools that shape public opinion.";
      bgcolor = "orange"
      break;
    default:
      title = "";
      authors = "";
      description = "";
  }

  var colors = ["blue", "yellow", "peach", "orange"];
  colors.forEach(function (color) {
    $("body").removeClass(color);

  })

  $("#title").html(title);
  $("#authors").html(authors);
  $("#description").html(description);
  $("body").addClass(bgcolor);
}



$(document).ready(function () {

  // $("#incubates-full").addClass("hidden");

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

  // nav click

  // Heart Tube Heart
  $("#incubates-nav-small-1").on("click", function () {
    currentProject = 1;
    updateContent();
    hideContent();
  });

  // No-Body
  $("#incubates-nav-small-2").on("click", function () {
    currentProject = 2;
    updateContent();
    hideContent();
  });

  // Fibers
  $("#incubates-nav-small-3").on("click", function () {
    currentProject = 3;
    updateContent();
    hideContent();
  });

  // FVSO
  $("#incubates-nav-small-4").on("click", function () {
    currentProject = 4;
    updateContent();
    hideContent();
  });

  // image click and hover functionality
  $("#incubates-img").on("click", function () {
    if (fullView == false) {
      showContent();
    }
  });

  $("#incubates-img").hover(function () {
    if (fullView == false) {
      toggleImage();
      // $("#incubates-img").css("height", "80vh");
      // $("#incubates-img").css("transform", "translate(-50%, -55%)");
      $("#readmore").css("display", "inline-block");
    }
  },
    function () {
      if (fullView == false) {
        toggleImage();
        $("#readmore").css("display", "none");
      }
    });

  $("#incubates-x").on("click", function () {
    hideContent();

  })
});