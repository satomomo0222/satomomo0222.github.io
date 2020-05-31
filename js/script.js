$(function(){
  var stopload = function(){
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
  }

  // loading animation 1秒は見せる
  window.onload = function() {
    this.setTimeout(stopload,1000);
  }

  // 遅くても3秒で消す
  setTimeout(stopload, 3000);

  
  
  // raindrops

  $('#example6').raindrops(
    {color:'#D8EBE9',
    waveLength:200,
    canvasHeight:400,
    rippleSpeed: 0.001,
    frequency: 5,
    density: 0.04});
    $('.example5').raindrops(
      {color:'#fff',
      waveLength:200,
      canvasHeight:400,
      rippleSpeed: 0.001,
      frequency: 5,
      density: 0.04});
  

      // modal
    $('.js-modal-open1').on('click',function(){
      $('.js-modal1').fadeIn();
      return false;
    });
    $('.js-modal-close1').on('click',function(){
      $('.js-modal1').fadeOut();
      return false;
    });

    $('.js-modal-open2').on('click',function(){
      $('.js-modal2').fadeIn();
      return false;
    });
    $('.js-modal-close2').on('click',function(){
      $('.js-modal2').fadeOut();
      return false;
    });
    $('.js-modal-open3').on('click',function(){
      $('.js-modal3').fadeIn();
      slick();
      return false;
    });
    $('.js-modal-close3').on('click',function(){
      $('.js-modal3').fadeOut();
      return false;
    });


    const slick = function(){
      $('.slick01').slick({
        arrows:false,
        asNavFor:'.slick02',
        asNavFor:'.slick03',
      });    
      $('.slick02').slick({
          asNavFor:'.slick01',
          asNavFor:'.slick03',
          focusOnSelect: true,
          slidesToShow:2,
          slidesToScroll:1,
          centerMode:true,
          arrows:false,
      });
      $('.slick03').slick({
        asNavFor:'.slick01',
        asNavFor:'.slick02',
        arrows:false,
        infinite: true,
        fade: true,
        cssEase: 'linear'
      });
    }

    $('.slick-next').on('click', function () {
      $('.slick01').slick('slickNext');
    });
    $('.slick-prev').on('click', function () {
      $('.slick01').slick('slickPrev');
    });


    // left menu
    $('button.gmenu').on('click', function(){
      $(this).toggleClass('-open');
      $('.gnav').toggleClass('-open');
    });
    

    // fadein
    $(window).scroll(function(){
      $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight +100){
          $(this).addClass('scrollin');
        } else {
          $(this).removeClass('scrollin');
        }
      });
    });
    $(window).scroll(function(){
      $('.fadein2').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > 0){
          $(this).addClass('scrollin');
        }else if (scroll <= 0){
          $(this).removeClass('scrollin');
        }
      });
    });
    $(window).scroll(function(){
      $('.fadeout').each(function(){
        var elemPos = $(this).offset().top,
            scroll = $(window).scrollTop(),
            windowHeight = $(window).height();
        if (scroll > 0){
          $(this).addClass('scrollout');
        }else if (scroll == 0){
          $(this).removeClass('scrollout');
        }
      });
    });


  //auto scroll
  $(".scrollTop").click(function(){
      $('button.gmenu').removeClass('-open');
      $('.gnav').removeClass('-open');
      $('body, html').animate({scrollTop:0}, 600, 'swing');
      return false;
  });
  $(".scroll1").click(function(){
    $('button.gmenu').removeClass('-open');
    $('.gnav').removeClass('-open');
    $('body, html').animate({scrollTop:$('.section1').offset().top - 300}, 600, 'swing');
    return false;
  });
  $(".scroll2").click(function(){
    $('button.gmenu').removeClass('-open');
    $('.gnav').removeClass('-open');
    $('body, html').animate({scrollTop:$('.section2').offset().top - 300}, 600, 'swing');
    return false;
  });
  $(".scroll3").click(function(){
    $('button.gmenu').removeClass('-open');
    $('.gnav').removeClass('-open');
    $('body, html').animate({scrollTop:$('.section3').offset().top - 300}, 600, 'swing');
    return false;
  });
  $(".scroll4").click(function(){
    $('button.gmenu').removeClass('-open');
    $('.gnav').removeClass('-open');
    $('body, html').animate({scrollTop:$('.section4').offset().top - 300}, 600, 'swing');
    return false;
  });
  $(".scrollDown").click(function(){
    $('body, html').animate({scrollTop:$('.section1').offset().top - 300}, 1000, 'swing');
    return false;
  });
  });