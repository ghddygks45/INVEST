$(document).ready(function(){
  myHTMLInclude();
})

function myHTMLInclude() {
  var z, i, a, file, xhttp;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = xhttp.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          myHTMLInclude();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  fn_pub();
  fn_local_pub();
  fn_pub2();
}

function fn_pub(){
  $(".gnb-box > ul > li > a").each(function(){
      if(!$(this).next("ul").length == 0){
          $(this).addClass("has_dep3");
      }
  })

  var recommendSlider = {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      focusOnSelect: true
  }

  $(".header-content .recommend-slider-wrap .slider").slick(recommendSlider)      

  $(".lnb > ul > li > a").each(function(){
      if(!$(this).next("ul").length == 0){
          $(this).addClass("has_dep3");
      }
  })

  $("#family-site").change(function(e){
      window.open(this.value);
  })

  asideHeight = $(window).height() - 300;
  st = $(window).scrollTop();
  $(".aside-content").css("height",asideHeight);
  if(st > 0){
      $(".aside").addClass("fixed");
  } else {
      $(".aside").removeClass("fixed");
  }
}

function fn_active_menu(dep1,dep2,dep3){
	var dep1 = dep1 - 1;
	var dep2 = dep2 - 1;
  var dep3 = dep3 - 1;
  
  $(".gnb > ul > li").eq(dep1).find(">a").addClass("active");
  $(".gnb > ul > li > a.active + div .gnb-box > ul > li").eq(dep2).find(">a").addClass("active");
  $(".gnb > ul > li > a.active + div .gnb-box > ul > li").eq(dep2).find("ul li").eq(dep3).find(">a").addClass("active");
  $(".lnb > ul > li").eq(dep2).find(">a").addClass("active");
  $(".lnb > ul > li").eq(dep2).find("> ul > li").eq(dep3).find(">a").addClass("active");
} 

// local active menu
function fn_local_pub(){
  $(".gnb .dep2 > li > a").each(function(){
      if(!$(this).next("ul").length == 0){
          $(this).addClass("has_dep3");
      }
  })

  $(".lnb > ul > li > a").each(function(){
      if(!$(this).next("ul").length == 0){
          $(this).addClass("has_dep3");
      }
  })
}

function fn_local_active_menu(dep1,dep2,dep3){
	var dep1 = dep1 - 1;
	var dep2 = dep2 - 1;
  var dep3 = dep3 - 1;
  $(".gnb_wrap .gnb a").removeClass("active");

  $(".gnb .dep1 > li").eq(dep1).find(">a").addClass("active");
  $(".gnb .dep1 > li > a.active + div > .dep2 > li").eq(dep2).find(">a").addClass("active");
  $(".gnb .dep1 > li > a.active + div > .dep2 > li").eq(dep2).find("ul li").eq(dep3).find(">a").addClass("active");
  $(".lnb > ul > li").eq(dep2).find(">a").addClass("active");
  $(".lnb > ul > li").eq(dep2).find("> ul > li").eq(dep3).find(">a").addClass("active");
} 
