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

  

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
