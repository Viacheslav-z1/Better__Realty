// const { active } = require("browser-sync");

$(function () {
  $('[data-fancybox="gallery"]').fancybox({
    // Options will go here
  });
  $('[data-fancybox="images"]').fancybox({
    afterLoad: function (instance, current) {
      var pixelRatio = window.devicePixelRatio || 1;

      if (pixelRatio > 1.5) {
        current.width = current.width / pixelRatio;
        current.height = current.height / pixelRatio;
      }
    }
  });

  $('.menu__btn , .menu__btn-close').on('click',function () {
    $('.menu__box').toggleClass('active');
    $('body').toggleClass('lock'); 
    $('.wrapper').toggleClass('lock');
  });
})