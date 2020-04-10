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

  // reviews slider

  $('#reviewsSlider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  })

  // gallery product slider on surname CoA page

  $('#gallerySlider').slick({
    dots: true
  })

  // popup slider on surname CoA page

  $('#coaZoomSlider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  })

  let $status = $('.pagingInfo')
  let $slickElement = $('#crestSlider')
  
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    // no dots -> no slides
    if(!slick.$dots){
      return
    }
  
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1
    // use dots to get some count information
    $status.text(i + '/' + (slick.$dots[0].children.length))
  })

  $slickElement.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      infinite: false
  })

  // animation picture at game-section on homepage

    function initAnimation(time = 2000) {
      const items = document.querySelectorAll('.js-item')
      const leftItems = document.querySelectorAll('.js-item-left')
      const rightItems = document.querySelectorAll('.js-item-right')
      const opacityClass = 'opacity'
      let index = 0

      function toggleClass(arr) {
        arr.forEach((el, i) => {
          if (index === i) {
            el.classList.add(opacityClass)
          } else {
            el.classList.remove(opacityClass)
          }
        })
      }

      function nextTick() {
        toggleClass(leftItems)
        toggleClass(rightItems)

        index = index === items.length / 2 - 1 ? 0 : index + 1
      }

      setInterval(nextTick, time)
  }

  initAnimation(2000)

  //popup click 

  $('a.pic').on('click', function() {
    $('#CoaZoom').addClass('active')
  })

  $('.btn-close').on('click', function(){
    $(this).parents('.popup').removeClass('active')
  })

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
