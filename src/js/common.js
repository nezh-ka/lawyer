$(document).ready(function(){
    const $primaryColor = '#ff0036';
    const $neutralPrimary = '#262626';

    //Аккордеон
    $('.about__inner').hide();
    
    $('.about__block').click(function() {
        const $this = $(this);

        if($this.next().hasClass('show')){
            $this.next().removeClass('show');
            $this.next().slideUp(350);
            $this.css('color', $neutralPrimary);
            $this.children('.about__icon').html('<i class="fas fa-plus-circle"></i>');
        } else {
            $this.parent().parent().find('.about__inner').removeClass('show');
            $this.parent().parent().find('.about__inner').slideUp(350, function() {
                $this.parent().parent().find('.about__icon').html('<i class="fas fa-plus-circle"></i>');
                $this.parent().parent().find('.about__block').css('color', $neutralPrimary); // не работает!!!
            });
            $this.next().addClass('show');
            $this.next().slideDown(350, function() {
                $this.css('color', $primaryColor);
                $this.children('.about__icon').html('<i class="fas fa-minus-circle"></i>');
            });
        }

    }); // click

    $('.about__block').hover(
        function() {
            $(this).css({
                'color': $primaryColor,
                'transition': 'all .3s'
            });
        },

        function() {
            $(this).css('color', $neutralPrimary);
        }
    ); // hover

    // Анимирую плавный переход к якорным ссылкам
    $(function(){
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            
            var sc = $(this).attr("href"),
                dn = $(sc).offset().top;
            
            $('html, body').animate({scrollTop: dn}, 1000);
        });
    });

    // Навигация
    $('#mobile').hide();

    $('.menu-icon-wrapper').on('click', () => {
        $('#mobile').slideToggle();
    });

    $('.navigation__link-mobile').on('click', () => {
        $('#mobile').slideUp();
        $('.menu-icon').removeClass('menu-icon-active');
    });

}); //ready

// Анимация иконки навигации 
document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
}