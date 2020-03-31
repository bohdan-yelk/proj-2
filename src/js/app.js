'use strict'

/**
 * Uncomment @babel/polyfill if you use some features from ES5+ (for IE11 compatibility)
 * E.g. Promise, Map, Set and so on
 */
// import '@babel/polyfill'

/**
 * Import utils
 */
import { log } from './utils'

/**
 * jQuery code
 */
;($ => {
  log('Ready')

  // main slider on homepage

  $('#mainSlider').slick({
    dots: true
  })

  // advantages section number count

    // var show = true
    // $(window).on("scroll load resize", function(){
    //   if(!show) return false

    //   let w_top = $(window).scrollTop(),
    //       e_top = $('#counter').offset().top,
    //       w_height = $(window).height(),
    //       d_height = $(document).height(),
    //       e_height = $('#counter').outerHeight()

    //       console.log(w_top + 200 + '' + e_top)

    //       if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top , w_height) {
    //         $('.spincrement')
    //       }
    // })

    // var a = 0;
    // $(window).scroll(function() {

    // var oTop = $('#counter').offset().top - window.innerHeight;
    // if (a == 0 && $(window).scrollTop() > oTop) {
    //   $('.counter-value').each(function() {
    //     var $this = $(this),
    //       countTo = $this.attr('data-count');
    //     $({
    //       countNum: $this.text()
    //     }).animate({
    //         countNum: countTo
    //       },

    //       {

    //         duration: 2000,
    //         easing: 'swing',
    //         step: function() {
    //           $this.text(Math.floor(this.countNum))
    //         },
    //         complete: function() {
    //           $this.text(this.countNum)
    //           //alert('finished');
    //         }

    //       })
    //   });
    //   a = 1
    // }

    // })

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
