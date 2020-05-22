$(function(){

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
  

      // モーダル
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

    // 左上メニュー
    $('button.gmenu').on('click', function(){
      $(this).toggleClass('-open');
      $('.gnav').toggleClass('-open');
    });
    


    // フェードイン
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
        }else if (scroll == 0){
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



  //scroll
  $(".scrollTop").click(function(){
      $('button.gmenu').removeClass('-open');
      $('.gnav').removeClass('-open');
      $('body, html').delay(1000).animate({scrollTop:0}, 600, 'swing');
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
  });