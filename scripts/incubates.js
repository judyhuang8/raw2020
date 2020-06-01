var currentProject, title, overview, authors, description, link;
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
  $('#incubates-img').css("height", "50vh");
}

function hideContent() {
  fullView = false;
  document.getElementById('outerwrapper').style.display = "none";
  $('#incubates-img').css("left", "50%");
  $('#incubates-img').css("height", "65vh");
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
      $("#nav-path-" + i).attr("fill", "rgba(0, 0, 0, 0)");
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
      title = "Heart-Tube-Heart";
      overview = "Connector for Storytelling and Unexpected Bonding";
      authors = "Sheri Guo, Connie Liu, Benji Magin, Mikail Maqsood, Xin Wen, and Joseph Yoon";
      description = "Heart-Tube-Heart is an installation intended to be located on the Milstein Hall walkway at Cornell University for Medium RAW Expo. The installation consists of multiple sets of height adjustable pipes that loops over the walkway. People can interact with each other through the pipe without being able to directly see each other, removing any social or visual preconceptions. People are able to press buttons that correspond to various questions that serve as conversation starters, facilitating storytelling and helping people to quickly build deeper connections with others.";
      bgcolor = "yellow";
      link = "https://medium.com/@connie_liu/heart-tube-heart-designing-a-connector-for-storytelling-d49b1767a0b3";
      break;
    case 2:
      title = "No-Body";
      overview = "Restroom Signage Redesign";
      authors = "Lauren Lam and Hahnbee Lee";
      description = "No-Body is a restroom signage redesign. The current binary bathroom sign is not an accurate representation of gender and forces people to categorize themselves into two categories. The gender neutral sign is an attempt at being inclusive, but its distinguishment of an “other” brings unnecessary attention to the trans community. Our redesign focuses on distinguishing bathrooms by the objects that reside inside of them instead of focusing on the bodies of the people that use them. We decided on this redesign because we believe that no body could represent everybody.";
      bgcolor = "blue";
      link = "https://medium.com/@hl985/no-body-a-bathroom-sign-redesign-69d8d24d3665";
      break;
    case 3:
      title = "FIBERS";
      overview = "Adaptive Clothing Search Engine and Community Platform";
      authors = "Erika Hauschild and Fiona Rath with help from Chelsea choi, Sarah Mirae Kim, Stephanie Zheng";
      description = "FIBERS (Furthering the Inclusion of Bodies Everywhere through a Reliable Search) is a website that enables those with disabilities to easily find clothing for their needs. This is made possible through two components of our website: the search engine and community. Our search engine assists users through the process of finding clothing that suits their bodies. The FIBERS community is a place for customers of all disabilities to share their fashion tips and recommendations. We realized that customers know their bodies best and need a platform to voice their past experiences with fashion. ";
      bgcolor = "peach";
      link = "https://medium.com/@esh79/fibers-affordable-fashion-for-people-with-disabilities-6ff8989de6c3";
      break;
    case 4:
      title = "FVSO";
      overview = "A More Neutral Approach to Media";
      authors = "Olivia Gee, Varun Iyengar, Iris Kim, Ami Mehta, and Valentin Porcellini";
      description = "FVSO (Fact vs. Opinion) is a Web extension that promotes news literacy and critical thinking by quantifying the volume of objective versus subjective language in the media. It’s a tool that allows the user to view headlines from a range of sources side by side, on a spectrum that ranges from totally objective to totally subjective. The goal here is to showcase the differences in levels of objectivity and subjectivity in the headlines and articles of popular news media sources in a way that gives the reader a full awareness of any potential bias they have when choosing their new source. We also hope for users to think more critically about the sources they select, and to become more attuned to authorial bias in the news that they read.";
      bgcolor = "orange";
      link = "https://medium.com/@ong2/fvso-a-more-neutral-approach-to-media-3a3da6ac69e";
      break;
    default:
      title = "";
      overview = "";
      authors = "";
      description = "";
      link = "";
      bgcolor = "white";
  }

  var colors = ["white", "blue", "yellow", "peach", "orange"];
  colors.forEach(function (color) {
    $("body").removeClass(color);

  })

  $("#title").html(title);
  $("#overview").html(overview);
  $("#authors").html(authors);
  $("#description").html(description);
  $("body").addClass(bgcolor);
  $("#casestudy-link").attr("href", link);
}



$(document).ready(function () {

  // $("#incubates-full").addClass("hidden");

  // nav hover effect
  $("#incubates-nav-small-1").hover(function () {
    $("#hoverblob-1").html("<img src='images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>Heart-Tube-Heart</p>");
    $("#incubates-nav-small-1").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-1").html("");
    $("#incubates-nav-small-1").css("cursor", "default");
  });

  $("#incubates-nav-small-2").hover(function () {
    $("#hoverblob-2").html("<img src='images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>No-Body</p>");
    $("#incubates-nav-small-2").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-2").html("");
    $("#incubates-nav-small-2").css("cursor", "default");
  });

  $("#incubates-nav-small-3").hover(function () {
    $("#hoverblob-3").html("<img src='images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>Fibers</p>");
    $("#incubates-nav-small-3").css("cursor", "pointer");
  }, function () {
    $("#hoverblob-3").html("");
    $("#incubates-nav-small-3").css("cursor", "default");
  });

  $("#incubates-nav-small-4").hover(function () {
    $("#hoverblob-4").html("<img src='images/incubates/hover-blob.png' class='hoverblob'><p class='hoverblob-text'>FVSO</p>");
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