$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
//   (function () {
//     $('#search-hamburger').on('click', function() {
//       $('#search-hamburger>.bar').toggleClass('animate');
//       $('.hamburger-menu').toggleClass('down');
//     });
//     $('.hamburger-menu a').on('click', function() {
//       $('#search-hamburger>.bar').toggleClass('animate');
//       $('.hamburger-menu').toggleClass('down');
//     })
//   })();
  
  // Добавление класса active пунктам меню --------------------------------
  $('.type li a').click(function(){
    $(".type li a").removeClass('active');
    $(this).addClass('active');
  });
//-------------------------------------------------------------------------
// Переключение между табами, добавление класса active и скрытие контента ----------
  $(".tab_content").hide();
  $(".tab_content:first").show();
  /* в режиме вкладок */
  $(".block__menu a").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".block__menu a").removeClass("active");
    $(this).addClass("active");
  });
  //---------------------------------------------------------------------
  //Кнопки ---------------------------------------------------------------
  // $("#btn-type").click(function () {
  //   $(".tab_content").hide();
  //   var createTask = $(this).attr("rel");
  //   $("#" + createTask).fadeIn();
  //   $(this).addClass("active");
  // });
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  $("#create_profile").hide();
  /* в режиме вкладок */
  $("#btn-create_profile").click(function () {
    $(".tabl").hide();
    $("#create_profile").show();
    var activeTab = $(".block__menu a").attr("rel");
    $("#" + activeTab).fadeIn();
  });
  
  $(".btn-back_to_profiles").click(function () {
    $("#create_profile").hide();
    $(".tabl").show();
    var btnPprof = $(".buttons a").attr("rel");
    $("#" + btnProf).fadeIn();
  });
//-------------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
//   var windowWidth = $(window).width();
//   if (windowWidth < 1070) $("header").addClass("mob-menu");
//   else $("header").removeClass("mob-menu");
//
//   $(window).resize(function () {
//     var windowWidth = $(window).width();
//     if (windowWidth < 1070) $("header").addClass("mob-menu");
//     else $("header").removeClass("mob-menu");
//   });
//----------------------------------------------------------
  
  $(function() {
    var items = $(".accordion__items");
    
    items.on("click",function(){
      if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).next().removeClass("open");
      } else {
        $(this).siblings().removeClass("active");
        $(this).next().siblings().removeClass("open");
        $(this).toggleClass("active");
        $(this).next().toggleClass("open");
      }
    });
  });


// ==============================================================
});















