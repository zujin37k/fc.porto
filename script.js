$(function() {

    //トップへ戻る
    $('#top-btn').click(function(){
        $('html,body').animate({ 
          'scrollTop': 0 
        }, 'slow');
    });


    $('.index-btn').click(function() {
        $('.active').removeClass('active');
        var clickedIndex = $('.index-btn').index($(this));
        $('.slide').eq(clickedIndex).addClass('active');
    });
    


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

    //hamburger
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
 
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});
