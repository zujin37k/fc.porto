$(function() {

    //トップへ戻る
    $('#top-btn').click(function(){
        $('html,body').animate({ 
          'scrollTop': 0 
        }, 'slow');
      });


    //slide
    /*function toggleChangeBtn() {
        var slideIndex = $('.slide').index($('.active'));
        $('.slide-btn').show();
        if (slideIndex == 0) {
          $('.prev-btn').hide();
        // 「3」の部分を、lengthメソッドを用いて書き換えてください
        } else if (slideIndex == $('.slide').length - 1) {
          $('.next-btn').hide();
        }
    }
      
    */

    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');
    });
    
    
    /*  
    $('.slide-btn').click(function() {
        var $displaySlide = $('.active');
        $displaySlide.removeClass('active');
        if ($(this).hasClass('next-btn')) {
          $displaySlide.next().addClass('active');
        } else {
          $displaySlide.prev().addClass('active');
        }
        toggleChangeBtn();
    });  */


    $('.social-icon').hover(
        function(){
          $(this).children('span').animate({
            'font-size':'30px'
          }, 300);
        },
        function(){
          $(this).children('span').animate({
            'font-size':'24px'
          }, 300);
        }
      );

    //headerボタン移動    
    $('header a').click(function(){
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position 
        }, 500);
    });
      

}); 
