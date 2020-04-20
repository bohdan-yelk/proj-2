import jQuery from 'jquery'
// Enable wow.js if it is needed
import {WOW} from 'wowjs'
import 'slick-carousel'
import jQueryBridget from 'jquery-bridget'
import Masonry from 'masonry-layout'

jQueryBridget('masonry', Masonry)

// Enable popper.js and bootstrap if they are needed
// import 'popper.js'
// import 'bootstrap'

// Allow to use jQuery in a global scope
/* global */
window.jQuery = jQuery
new WOW({
  offset: 200,
  mobile: false
}).init()

var msnry = new Masonry('.grid', {
  horizontalOrder: true
})
