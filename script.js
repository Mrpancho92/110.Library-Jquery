import $ from 'jquery';

// const btn = $('#btn');

// console.log(btn);
$(function() {
    $('.list-item:first').on('mouseenter', function() {
      $(this).toggleClass('active');
    });

    
    $('.list-item:eq(2)').on('click', function() {
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(4)').on('click', function() {
        $('.image:odd').animate({
            opacity: 'toggle',
            height: 'toggle'
        }, 2000);
    });
    
    $('.list-item:eq(3)').on('click', function() {
     // Тесты: Добавим новый див после всех дивов
     $(".wrapper").after('<div class="ansicht_gross" style="height:100px; width:100%; background-color: green;">NEW DIV</div>');
     const src = $('.wrapper').find('img').attr('src');
     $(".ansicht_gross").append(`<img id="theImg" style=left:100px; src = ${src} />`);
     
    });

});
