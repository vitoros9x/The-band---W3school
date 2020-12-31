var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    if (!$(".header").hasClass("fixed")) {
      $(".header").stop().addClass("fixed").css("top", "-50px").animate(
        {
          top: "0px",
        },
        1000
      );
    }
  } else {
    $(".header").removeClass("fixed");
  }
});

$(".header-mobile__menu-btn").click(function () {
  $(".header-mobile__menu-dropdown").toggle();
});
