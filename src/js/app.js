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

  $('#reviewsSlider').slick({
    dots: false,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true
  })

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
