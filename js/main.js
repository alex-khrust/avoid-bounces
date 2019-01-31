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
// -----------------------------------------------------------------------
  // popup ---------------------------------------------
  var elements1 = $('.affiliate, .affiliate>.modal');
  
  $('#affiliate').click(function(){
    elements1.addClass('active');
  });
  
  $('.close-modal').click(function(){
    elements1.removeClass('active');
  });
  //-------
  var elements2 = $('.login, .login>.modal');
  
  $('#login').click(function(){
    elements2.addClass('active');
  });
  
  $('.close-modal').click(function(){
    elements2.removeClass('active');
  });
  //-------
  var elements3 = $('.registration, .registration>.modal');
  
  $('#registration').click(function(){
    elements3.addClass('active');
  });
  
  $('.close-modal').click(function(){
    elements3.removeClass('active');
  });
  //----------------------------------------------------------
// Прокрутка к выбранному пункту меню ------------------------------
  $('nav ul li a').click(function(e) {
    
    e.preventDefault();
    
    var menuLink = $(this).attr('href');
    var sectionDist = $(menuLink).offset().top;
    
    $('html, body').animate({scrollTop: sectionDist}, 1200);
  });
//-----------------------------------------------------------------------
// Добавление класса active пунктам меню --------------------------------
  // $('.type li a').click(function(){
  //   $(".type li a").removeClass('active');
  //   $(this).addClass('active');
  // });
//-------------------------------------------------------------------------
// Переключение между табами, добавление класса active и скрытие контента ----------
//   $(".tab_content").hide();
//   $(".tab_content:first").show();
//   /* в режиме вкладок */
//   $(".block__menu a").click(function () {
//     $(".tab_content").hide();
//     var activeTab = $(this).attr("rel");
//     $("#" + activeTab).fadeIn();
//     $(".block__menu a").removeClass("active");
//     $(this).addClass("active");
//   });
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
  // $("#create_profile").hide();
  // /* в режиме вкладок */
  // $("#btn-create_profile").click(function () {
  //   $(".tabl").hide();
  //   $("#create_profile").show();
  //   var activeTab = $(".block__menu a").attr("rel");
  //   $("#" + activeTab).fadeIn();
  // });
  //
  // $(".btn-back_to_profiles").click(function () {
  //   $("#create_profile").hide();
  //   $(".tabl").show();
  //   var btnPprof = $(".buttons a").attr("rel");
  //   $("#" + btnProf).fadeIn();
  // });
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
// Слайдер slick----------------------------------------------------------
  $('#slider-about').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    arrows: false,
    nextArrow: '.btn-team__slider--up',
    prevArrow: '.btn-team__slider--dawn'
  });
  
  //----------------------------------------------------------
// Аккордион ---------------------------------------------
  $(function() {
    var items = $(".accordion__items");
    
    items.on("click",function(){
      if($(this).hasClass("active")) {
        // $(this).removeClass("active");
        // $(this).next().removeClass("open");
      } else {
        $(this).siblings().removeClass("active");
        $(this).next().siblings().removeClass("open");
        $(this).toggleClass("active");
        $(this).next().toggleClass("open");
      }
    });
  });
  //----------------------------------------------------------
  

// ==============================================================
});















