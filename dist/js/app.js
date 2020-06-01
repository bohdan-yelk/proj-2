/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

/**
 * Uncomment @babel/polyfill if you use some features from ES5+ (for IE11 compatibility)
 * E.g. Promise, Map, Set and so on
 */
// import '@babel/polyfill'

/**
 * Import utils
 */



(function ($) {
  Object(_utils__WEBPACK_IMPORTED_MODULE_0__["log"])('Ready'); //  ---- NAVIGATION ----
  //    1. main slider on homepage
  //    2. reviews slider
  //    3. gallery product slider on surname CoA page
  //    4. popup slider on surname CoA page
  //    5. slider coa on internal product page
  //    6.  popup CoA slider on Shop page
  //    7. slider owner on about us page
  //    8. slider useful on about us page
  //       choice coa on Shop page in popup slider
  //    9. choice coa on internal product slider
  //   10. masonry on Testimonials page
  //   11. dropdown accordion on FAQ page
  //   12. custom pagination(1/4) in slick slider on surname rough page
  //   13. animation picture at game-section on homepage
  //   14. popup click
  //   15. payment steps on service page
  //   16. checkout steps tabs
  //   17. choice payment method on service page
  //   18. choice different address on checkout
  //   19. fixed steps block on scroll
  //   20. submenu nav
  //   21. glossary page - show/hide details
  //   22. color product
  //   23. product +/-
  //   24. tabs "abc" on surname page
  //   25. suname search on Surname page
  //   26. burger button animation
  //   27. color slider mobile only on product page
  //   28. custom select

  $('#searchFullInput').keypress(function (event) {
    if (event.which == '13') {
      event.preventDefault();
    }
  });
  $('#searchInput').keypress(function (event) {
    if (event.which == '13') {
      event.preventDefault();
    }
  }); // ---- main slider on homepage ----

  $('#mainSlider').slick({
    dots: true
  }); // ---- reviews slider ----

  $('#reviewsSlider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    // slidesToScroll: 1,
    variableWidth: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false,
        adaptiveHeight: true
      }
    }]
  }); // ---- gallery product slider on surname CoA page ----

  $('#gallerySlider').slick({
    dots: true,
    // variableWidth: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // infinite: true,
    customPaging: function customPaging(slider, i) {
      var thumb = $(slider.$slides[i]).data();
      return '<a>' + i + '</a>';
    },
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 769,
      settings: {
        // arrows: false,
        slidesToShow: 3
      }
    }, {
      breakpoint: 569,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1 // arrows: false,
        // variableWidth: true

      }
    }, {
      breakpoint: 569,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true // variableWidth: true

      }
    }]
  }); // function limitSlickDots() {
  //   var dotsList = $('#gallerySlider .slick-dots')
  //   var dotsItem = $('#gallerySlider .slick-dots li')
  //   var gallerySlider = $('#gallerySlider')
  //   var currentDot = $('#gallerySlider .slick-dots li.slick-active')
  //   var dotCount = currentDot.index()
  //   currentDot.next().addClass('after')
  //   currentDot.next().next().addClass('after')
  //   currentDot.next().next().next().addClass('after')
  //   $('#gallerySlider').on('afterChange', function (event, slick, currentSlide) {
  //     // console.log($('#gallerySlider .slick-dots li.slick-active'), dotsItem)
  //   })
  //   // gallerySlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
  //   //   var currGallerySlide = $(slick.$slides.get(currentSlide))
  //   //   if( dotsGallery.index().)
  //   //   console.log(currentDot.index())
  //   // })
  // }
  // limitSlickDots()

  function limitDotsSlick() {
    var dotsGallery = $('#gallerySlider .slick-dots li'); // currentDot.next().addClass('after')
    // currentDot.next().next().addClass('after')
    // currentDot.next().next().next().addClass('after')

    $('#gallerySlider').on('click', function () {
      var currentDot = $('#gallerySlider .slick-dots li.slick-active');
      console.log(currentDot);
      dotsGallery.removeClass('before after');
      currentDot.prev().addClass('before').prev().addClass('before');
      currentDot.next().addClass('after').next().addClass('after');

      if (!currentDot.prev().length) {
        currentDot.next().next().next().addClass('after').next().addClass('after');
      }

      if (!currentDot.prev().prev().length) {
        currentDot.next().next().next().addClass('after');
      }

      if (!currentDot.next().length) {
        currentDot.prev().prev().prev().addClass('before').prev().addClass('before');
      }

      if (!currentDot.next().next().length) {
        currentDot.prev().prev().prev().addClass('before');
      }
    }); // $('#gallerySlider .slick-dots li').on('click', function () {
    //   dots.removeClass('before after')
    //
    // })

    dotsGallery.eq(0).click();
  }

  limitDotsSlick(); // Slick Selector.
  // ---- popup slider on surname CoA page ----

  $('#coaZoomSlider').slick({
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }); // ---- slider coa on internal product page ----

  $('#productSliderCoa').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false
  }); // ---- popup CoA slider on Shop page ----

  $('#coaShopSlider').slick({
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: false
  }); // ---- slider owner on about us page ----

  $('#ownerSlider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  }); // ---- slider useful on about us page ----

  $('#usefulSlider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 2,
    // slidesToScroll: 1,
    variableWidth: true,
    // infinite: false,
    // swipeToSlide: true,
    // draggable: true,
    responsive: [{
      breakpoint: 568,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: true
      }
    }]
  }); // ---- choice coa on Shop page in popup slider ----

  function choiceCoaPopupShop() {
    var $coaItemPopup = $('#coaShopSlider .item');
    var $coaLinkPopup = $('#coaShopSlider #radioCoaPopup');
    $($coaLinkPopup).on('click', function (e) {
      e.preventDefault();
      $coaItemPopup.removeClass('active');
      $(this).parent($coaItemPopup).addClass('active');
    });
  }

  choiceCoaPopupShop(); // ---- choice coa on internal product slider ----

  function choiceCoaProd() {
    var $coaSlider = $('#productSliderCoa');
    var $coaItem = $('#productSliderCoa .item');
    var $coaLink = $('#productSliderCoa .radioCoa');
    $coaLink.on('click', function (e) {
      e.preventDefault();
      $coaItem.removeClass('active');
      $(this).parent($coaItem).addClass('active');
    }); // hide arrows and :after if child elements <= 4

    $coaSlider.each(function (index) {
      var $slidesNum = $(this).find('.slick-slide').length;

      if ($slidesNum <= 4) {
        $(this).parent('.form-row-slider').addClass('hide');
      } else {
        $(this).parent('.form-row-slider').removeClass('hide');
      }
    }); // hide prev arrow and show if  slider swipe

    $coaSlider.find('.slick-prev').hide();
    $coaSlider.on('afterChange', function () {
      $(this).find('.slick-prev').show();
    });
  }

  choiceCoaProd(); // ---- masonry on Testimonials page ----
  // $('#grid').masonry({
  //   horizontalOrder: true,
  //   itemSelector: '.grid-item',
  //   columnWidth: '.grid-sizer',
  //   percentPosition: true,
  //   gutter: 30
  // })
  // ---- dropdown accordion on FAQ page ----

  function dropList() {
    var $dropItem = $('.faq-list li');
    var $dropLink = $('.dropLink');
    var $dropContent = $('.drop-content');
    $dropContent.hide();
    $dropLink.on('click', function (e) {
      e.preventDefault(); // $('html').animate({scrollTop: $(this).offset().top})
      // $('html').scrollTop($(this).get(0).scrollIntoView({ behavior: 'smooth' }))
      // $(this).on('transitionend', function(event) {
      //   $(this).get(0).scrollIntoView({ behavior: 'smooth' })
      // });
      // $(this).one('transitionend', function(event) {
      //   if (event.originalEvent.propertyName === 'transform') {
      //     $(this).get(0).scrollIntoView({ behavior: 'smooth' });
      // }
      // });

      $dropLink.parent($dropItem).removeClass('active').find($dropContent).hide('slow');

      if (!$(this).hasClass('clicked')) {
        $dropLink.removeClass('clicked');
        $(this).addClass('clicked');
        $(this).parent($dropItem).addClass('active').find($dropContent).show({
          duration: 'slow',
          complete: function complete() {
            $('html, body').animate({
              scrollTop: $(this).parent().offset().top
            });
          }
        });
      } else {
        $(this).removeClass('clicked');
        $(this).parent($dropItem).removeClass('active').find($dropContent).hide('slow');
      }
    });
  }

  dropList(); // function dropList() {
  //   var $dropItem = $('.faq-list li')
  //   var $dropLink = $('.dropLink')
  //   var $dropContent = $('.drop-content')
  //   $dropContent.hide()
  //   $dropLink.on('click', function (e) {
  //     e.preventDefault()
  //     // $('html').animate({scrollTop: $(this).offset().top})
  //     // $('html').scrollTop($(this).get(0).scrollIntoView({ behavior: 'smooth' }))
  //     // $(this).on('transitionend', function(event) {
  //     //   $(this).get(0).scrollIntoView({ behavior: 'smooth' })
  //     // });
  //     $(this).one('transitionend', function(event) {
  //       if (event.originalEvent.propertyName === 'transform') {
  //         $(this).get(0).scrollIntoView({ behavior: 'smooth' });
  //     }
  //     });
  //     $dropLink.parent($dropItem).removeClass('active').find($dropContent).hide('slow')
  //     if (!$(this).hasClass('clicked')) {
  //       $dropLink.removeClass('clicked')
  //       $(this).addClass('clicked')
  //       $(this).parent($dropItem).addClass('active').find($dropContent).show('slow')
  //     } else {
  //       $(this).removeClass('clicked')
  //       $(this).parent($dropItem).removeClass('active').find($dropContent).hide('slow')
  //     }
  //   })
  // }
  // dropList()
  // ---- change color on cart page in product row-item ----

  function colorOnCart() {
    var spanCartColor = $('.woocommerce-cart-form').find('.row-item.tshirt .color').attr('data-color');
    $('.woocommerce-cart-form').find('.row-item.tshirt .color').css('background-color', '#' + spanCartColor);
    var spanSummaryColor = $('.block-cart-sum').find('.content .color').attr('data-color');
    $('.block-cart-sum').find('.content .color').css('background-color', '#' + spanSummaryColor);
  }

  colorOnCart(); // ---- custom pagination(1/4) in slick slider on surname rough page  ----

  var $status = $('.pagingInfo');
  var $slickElement = $('#crestSlider');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    // no dots -> no slides
    if (!slick.$dots) {
      return;
    } // currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)


    var i = (currentSlide ? currentSlide : 0) + 1; // use dots to get some count information

    $status.text(i + '/' + slick.$dots[0].children.length);
  });
  $slickElement.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: false
  }); // ---- animation picture at game-section on homepage ----

  function initAnimation() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2000;
    var items = document.querySelectorAll('.js-item');
    var leftItems = document.querySelectorAll('.js-item-left');
    var rightItems = document.querySelectorAll('.js-item-right');
    var opacityClass = 'opacity';
    var index = 0;

    function toggleClass(arr) {
      arr.forEach(function (el, i) {
        if (index === i) {
          el.classList.add(opacityClass);
        } else {
          el.classList.remove(opacityClass);
        }
      });
    }

    function nextTick() {
      toggleClass(leftItems);
      toggleClass(rightItems);
      index = index === items.length / 2 - 1 ? 0 : index + 1;
    }

    setInterval(nextTick, time);
  }

  initAnimation(2000); // ---- popup click ----

  $('a.pic').on('click', function (e) {
    e.preventDefault();
    var $coaPopup = $('#CoaZoomPopup');
    var $coaSlider = $('#coaZoomSlider');
    var $coaIndex = $(this).attr('data-ind');
    $coaSlider.slick('slickGoTo', $coaIndex);
    $coaPopup.addClass('active');
  });
  $('#btnVideo').on('click', function () {
    $('#videoPopup').addClass('active');
  });
  $('.btn-close').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.popup').removeClass('active');
  });
  setTimeout(function () {
    $('#SurnamePopup').addClass('active');
  }, 2000); // ---- payment steps on service page ----

  function stepTabs() {
    var $next = $('.btn-next');
    var $prev = $('.btn-back');
    var $currentIndex = 0;
    var $numStep = $('#stepsList li');
    var $contentStep = $('.steps-content');
    var cahngeConstVal = $currentIndex;
    $next.on('click', function (e) {
      e.preventDefault();
      $currentIndex++;
      $numStep.removeClass('active').eq($currentIndex).addClass('active');
      $contentStep.removeClass('active').eq($currentIndex).addClass('active');
    });
    $prev.on('click', function (e) {
      e.preventDefault();
      $currentIndex--;
      $numStep.removeClass('active').eq($currentIndex).addClass('active');
      $contentStep.removeClass('active').eq($currentIndex).addClass('active');
    });
  }

  stepTabs(); // ---- checkout steps tabs ----

  function stepCheckout() {
    var $continue = $('.btn-continue');
    var $currentStep = 0;
    var $itemStep = $('#checkoutStepList li');
    var $itemStepLink = $('#checkoutStepList a');
    var $tabCheck = $('.tab-checkout');
    $continue.on('click', function (e) {
      e.preventDefault();

      if (!checkAllFelds(null, $('.tab-checkout.active').next())) {
        return;
      }

      $currentStep++;
      $itemStep.removeClass('active').eq($currentStep).addClass('active');
      $tabCheck.removeClass('active').eq($currentStep).addClass('active');
    });
    $itemStepLink.on('click', function (e) {
      e.preventDefault();
      var activeListItemIndex = $itemStepLink.index($(this));
      var newTab = $tabCheck[activeListItemIndex];

      if (activeListItemIndex > $currentStep && !checkAllFelds(null, newTab)) {
        return;
      } else if (activeListItemIndex < $currentStep) {
        setValid();
      }

      $currentStep = $(this).parents($itemStep).index();
      $itemStep.removeClass('active').eq($currentStep).addClass('active');
      $tabCheck.removeClass('active').eq($currentStep).addClass('active');
    });
  }

  function setInvalid() {
    $('.tab-checkout.active').find('.btn-continue').css({
      opacity: '0.6',
      pointerEvents: 'none'
    });
    $('.block-checkout').find('#checkoutStepList').addClass('invalid');
    checkValidClass();
  }

  function setValid() {
    $('.block-checkout').find('#checkoutStepList').removeClass('invalid');
    $('.tab-checkout.active').find('.btn-continue').css({
      opacity: '1',
      pointerEvents: 'inherit'
    });
    checkValidClass();
  }

  stepCheckout();

  function checkValidClass() {// $('#checkoutStepList').each(function () {
    //   if (!$(this).hasClass('invalid')) {
    //     $(this).find('li a').css('pointer-events', 'inherit')
    //   } else {
    //     // $(this).find('li.active ~ li a').css('pointer-events', 'none')
    //   }
    // })
  }

  checkValidClass();
  var hideTabForm = $('.div--form.form-hide').parents('.tab-checkout');
  var hideFormRadios = hideTabForm.find('input[name="ship_to_different_address"]');
  var regExEmeil = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  var regExPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,20}(\s*)?$/;
  var regExPostcode = /^[A-Za-z0-9\s]+$/;
  checkAllFelds();
  hideFormRadios.on('input', function () {
    $(this).trigger('focusout');
  });

  function validFieldsCheckout() {
    var formCheck = $('.tab-checkout .div--form');
    var inputForm = formCheck.find('input');
    inputForm.focusout(checkAllFelds);
  }

  function checkAllFelds(e, newTab) {
    var isValid = true;
    var prevTabs = !newTab ? $('.tab-checkout.active') : $(newTab).prevAll('.tab-checkout');
    prevTabs.each(function () {
      console.log($(this).get(0), hideTabForm.get(0));

      if ($(this).get(0) === hideTabForm.get(0) && hideFormRadios.prop('checked') === true) {
        isValid = true;
        return;
      }

      $(this).find('input:not([type="hidden"])').each(function () {
        if ($(this).attr('id') === 'billing_phone' && !regExPhone.test($('#billing_phone').val()) || $(this).attr('id') === 'billing_email' && !regExEmeil.test($('#billing_email').val()) || $(this).attr('id') === 'billing_postcode' && !regExPostcode.test($('#billing_postcode').val()) || $(this).attr('id') !== 'billing_address_2' && $(this).attr('id') !== 'shipping_address_2' && !$(this).val().trim()) {
          if (e && e.target === $(this).get(0)) {
            $(this).css('border-color', '#a00');
          }

          setInvalid();
          isValid = false;
        } else {
          $(this).css('border-color', '#eee');
        }
      });

      if (!isValid) {
        return;
      }
    });

    if (isValid) {
      setValid();
    }

    return isValid;
  }

  validFieldsCheckout(); // ---- choice payment method on service page ----

  function choicePay() {
    var $form = $('.block-payment form');
    var $inputPay = $(' .input-radio');
    console.log('pay');
    $inputPay.on('click', function () {
      $inputPay.parents('.custom-check').removeClass('active');

      if ($(this).prop('checked')) {
        $(this).parents('label').addClass('active');
      }
    });
  }

  choicePay(); // ---- choice different address on checkout ----

  function differentAddress() {
    var $form = $('.block-toggle-addres .toggle');
    var $inputToggle = $('.block-toggle-addres .toggle input');
    $('.form-hide').hide();
    $inputToggle.on('click', function () {
      $inputToggle.parents('label').removeClass('active');

      if ($(this).prop('checked')) {
        $(this).parents('label').addClass('active');
      }

      if ($(this).hasClass('show') && $(this).prop('checked')) {
        $(this).parents('.block-toggle-addres').find('.form-hide').show('slow');
      } else if ($(this).hasClass('hide') && $(this).prop('checked')) {
        $(this).parents('.block-toggle-addres').find('.form-hide').hide('slow');
      }
    });
  }

  differentAddress(); // ---- show-hide
  // ---- fixed steps block on scroll ----
  // $(function () {
  //   if ($(window).width() > 992) {
  //     $(window).scroll(
  //       (function fix_element() {
  //         $('#fixedOnScroll')
  //           .parents('.wcopc')
  //           .css($(window).scrollTop() > 220 ? {position: 'fixed', top: '10px'} : {position: 'relative', top: 'auto'})
  //         if (!$('#fixedOnScroll').parents('.wcopc').length) {
  //           $('#fixedOnScroll').css(
  //             $(window).scrollTop() > 220 ? {position: 'fixed', top: '10px'} : {position: 'relative', top: 'auto'}
  //           )
  //         }
  //         return fix_element
  //       })()
  //     )
  //   }
  // })
  // ---- change content on crest-setcion

  function crestContent() {
    var crestContent = $('.crest-section .block-content').find('.surname-rough-desc');
    var contentAttr = crestContent.attr('id');
    $('#crestSlider').on('afterChange', function (currentSlide) {
      var slideAttr = $('.slick-current').find('.item').attr('data-id');
      $('.surname-rough-descriptions').each(function (index) {
        contentAttr = slideAttr;
        crestContent.removeClass('active');

        if (slideAttr === contentAttr) {
          $('#' + contentAttr).addClass('active');
        }
      });
    });
  } // function genealogyPayment() {
  //   var genealogyItem = $('#genealogy-checkout .payment_methods .payment-item .custom-check')
  //   genealogyItem.on('click', function)
  // }
  // genealogyPayment()


  crestContent(); // function scrollFixed() {
  //   var windowTop = $(window).scrollTop()
  //   var nextSection = $('.product-section')
  //   var divHeight = $('.cart-section #fixedOnScroll').height()
  //   var padding = $('#header').height()
  //   divHeight = Math.floor(divHeight)
  //   if( windowTop + divHeight > nextSection - padding ) {
  //     $('.cart-section#fixedOnScroll').css({position: 'relative', top: 'auto'})
  //   } else if ( windowTop + divHeight < nextSection.scrollTop()) {
  //     $('.cart-section #fixedOnScroll').css({position: 'fixed', top: '10px'})
  //   }
  // }
  // // scrollFixed()
  // $(function(){
  //   $(window).scroll(scrollFixed)
  //   scrollFixed()
  // })
  // function scrollFixed() {
  //   var areaScroll = $('.cart-section').height()
  //   var fixedBlock = $('#fixedOnScroll')
  //   var bottomPosFixedBlock = fixedBlock.height().toFixed()
  //   bottomPosFixedBlock = Number(bottomPosFixedBlock)
  //   $(window).scroll(function(){
  //     var x = fixedBlock.offset()
  //     if ( $(window).scrollTop() > 220) {
  //       fixedBlock.css({position: 'fixed', top: '10px'})
  //     } else (
  //       fixedBlock.css({position: 'relative', top: 'auto'})
  //     )
  //     if((x.top + bottomPosFixedBlock) >= areaScroll) {
  //       fixedBlock.css({position: 'relative', top: 'auto'})
  //     } else if ((x.top + bottomPosFixedBlock) < areaScroll) {
  //       fixedBlock.css({position: 'fixed', top: '10px'})
  //     }
  //   })
  // }
  // scrollFixed()
  // $(function () {
  //   $(window).scroll(
  //     (function fix_element() {
  //         if( (window).scrollTop() > 220 ) {
  //           $('#fixedOnScroll').css({position: 'fixed', top: '10px'})
  //         } else {
  //           $('#fixedOnScroll').css({position: 'relative', top: 'auto'})
  //         }
  //       )
  //       return fix_element
  //     })()
  //   )
  // })
  // function stopFixed() {
  //   var areaScroll = $('.cart-section').height()
  //   var fixedBlock = $('#fixedOnScroll')
  //   var bottomPosFixedBlock = fixedBlock.height().toFixed()
  //   bottomPosFixedBlock = Number(bottomPosFixedBlock)
  //   $(window).scroll(function () {
  //     var x = fixedBlock.offset()
  //     // fixedBlock.removeClass('stopFixed')
  //     if ( (x.top + bottomPosFixedBlock) >= areaScroll) {
  //       // fixedBlock.addClass('stopFixed')
  //       fixedBlock.css( "position" , "absolute")
  //     } else if ((x.top + bottomPosFixedBlock) < areaScroll) {
  //       // fixedBlock.removeClass('stopFixed')
  //       fixedBlock.css({"top": "10px", "position" : "fixed", "bottom" : "inherit"})
  //     }
  //   })
  // }
  // stopFixed()
  // function stopFixed() {
  //   var heightAreaScroll = $('section.cart-section').height()
  //   var heightCounter = 0
  //   var scroll = $(window).scrollTop() + $(window).height()
  //   var offset = $element.offset().top
  //   $(window).scroll(function () {
  //   })
  // }
  // stopFixed()
  // ---- submenu nav ----

  function navMob() {
    $('.has-submenu a').on('click', function () {
      $(this).parents('.has-submenu').addClass('active');
      $(this).parents('.has-submenu').find('.submenu').addClass('active');
      $('#wrapper').addClass('active');

      if ($(window).width() > 991) {
        $(document).mouseup(function (e) {
          if (!$('.submenu').is(e.target) && $('.submenu').has(e.target).length === 0) {
            $('.submenu').removeClass('active');
            $('#wrapper').removeClass('active');
          }
        });
      }
    });
    $('.menu-back-mob a').on('click', function (e) {
      e.stopPropagation();
      $(this).parents('#wrapper').removeClass('active');
      $(this).parents('.submenu').removeClass('active');
      $(this).parents('.has-submenu').removeClass('active');
    });
  }

  navMob(); // ---- glossary page - show/hide details ----

  function glossaryDetails() {
    var $showBtn = $('.glossary-list .show');
    var $hideBtn = $('.glossary-list .hide');
    var $glossaryList = $('.glossary-list');
    $glossaryList.children('li').removeClass('active');
    $glossaryList.children('li').find('.content p').hide();
    $showBtn.on('click', function (e) {
      e.preventDefault();
      $glossaryList.children('li').removeClass('active');
      $(this).parents('li').addClass('active');

      if ($glossaryList.children('li').hasClass('active')) {
        var thisOffset = $glossaryList.position().top;
        $showBtn.parents('li').find('.content p').hide();
        $(this).parents('li').find('.content p').show();
        setTimeout(function () {
          $(this).parents('li').find('.content p').show();
        }, 4000);

        if ($(window).width() >= 1024) {
          $('html,body').animate({
            scrollTop: thisOffset
          }, 'slow');
        }
      }
    });
    $hideBtn.on('click', function (e) {
      e.preventDefault();
      $(this).parents('li').find('.content p').hide('slow');
      $(this).parents('li').removeClass('active');
    });
  }

  glossaryDetails(); // ---- color product ----
  // function changeColor() {
  //   $('#colorList .color-item a').on('click', function (e) {
  //     e.preventDefault()
  //     $('#colorList .color-item').removeClass('active')
  //     $(this).parent().addClass('active')
  //     var $colorValue = $(this).css('background-color')
  //     $('#chaneColor').find('img').css('background-color', $colorValue)
  //   })
  // }
  // changeColor()

  function changeColor() {
    $('#colorList').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
        breakpoint: 9999,
        settings: 'unslick'
      }, {
        breakpoint: 568,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          arrows: true,
          // variableWidth: true,
          dots: false
        }
      }]
    });
    $('#colorList .color-item a').on('click', function (e) {
      e.preventDefault();
      $('#colorList .color-item').removeClass('active');
      $(this).parent().addClass('active');
      var $colorValue = $(this).css('background-color');
      $('#chaneColor').find('img').css('background-color', $colorValue);
    });
  }

  changeColor(); // $('#colorList').on('click', function(e){
  //   var slideCLicked = $(e.currentSlide).attr('data-slick-index')
  // });
  // ---- product +/- ----

  $('.num-in span').click(function () {
    var $inputNum = $(this).parents('.num-block').find('input.in-num');

    if ($(this).hasClass('minus')) {
      var count = parseFloat($inputNum.val()) - 1;
      count = count < 1 ? 1 : count;

      if (count < 2) {
        $(this).addClass('dis');
      } else {
        $(this).removeClass('dis');
      }

      $inputNum.val(count);
    } else {
      var count = parseFloat($inputNum.val()) + 1;
      $inputNum.val(count);

      if (count > 1) {
        $(this).parents('.num-block').find('.minus').removeClass('dis');
      }
    }

    $inputNum.change();
    return false;
  });

  function updateCartBtn() {
    $('.in-num').on('change', function () {
      $(this).parents('.block-shopping-list').find('.actions button[name="update_cart"]').removeAttr('disabled');
    });
  }

  updateCartBtn(); // ---- tabs "abc" on Surname page ----

  $('ul.tabs-list-glossary').on('click', 'li:not(.active)', function (e) {
    var abcIndex = $('ul.tabs-list-glossary li').attr('data-index');
    var abcLink = $('ul.tabs-list-glossary li a');
    e.preventDefault();
    console.log($(this));
    $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
  }); // about us form

  function validSelect() {
    var sentForm = $('.order-wood-section .wpcf7-form');
    var select = $('.order-wood-section .wpcf7-form select.wpcf7-form-control');
    var btnGetPrice = $('.wpcf7-submit');
    sentForm.each(function () {
      console.log(select.children('option').eq(0).val(), 'val select');

      if (select.children('option').eq(0).is(':selected')) {
        $(this).find('.wpcf7-submit').css({
          'pointer-events': 'none',
          opacity: '.6'
        });
      }

      select.on('change', function () {
        if (!$(this).children('option').eq(0).is(':selected') && $(this).children('option').is(':selected')) {
          sentForm.find('.wpcf7-submit').css({
            'pointer-events': 'inherit',
            opacity: '1'
          });
        } else if ($(this).children('option').eq(0).is(':selected')) {
          sentForm.find('.wpcf7-submit').css({
            'pointer-events': 'none',
            opacity: '.6'
          });
        }
      }); // console.log(select.index(), 'test select')
      // if ( select.filter(':selected').eq() === 0 )
    });
  }

  validSelect(); // ---- suname search on Surname page ----

  function searchSurname() {
    if ($('#glossaryList').length) {
      var onInput = function onInput(event) {
        var isEmptyList = true;

        for (var i = 0; i < glossaryItems.length; i += 1) {
          if (glossaryItems[i].textContent.trim().toLowerCase().indexOf(event.target.value.toLowerCase()) === 0) {
            glossaryItems[i].closest('li').classList.remove('hidden-item');

            if (isEmptyList) {
              isEmptyList = false;
            }
          } else {
            glossaryItems[i].closest('li').classList.add('hidden-item');
          }
        }

        isEmptyList ? alert.classList.remove('info-alert--hidden') : alert.classList.add('info-alert--hidden');
      };

      var input = document.getElementById('searchInput'); // var glossaryList = document.getElementById('glossaryList')

      var glossaryItems = document.querySelectorAll('.glossary-list li h3');
      var alert = document.getElementById('infoAlert');

      if (input) {
        input.addEventListener('input', onInput);
      }
    }
  }

  searchSurname();

  function upScroll() {
    var uplink = $('body').find('a.up-scroll');
    uplink.on('click', function () {
      $('html,body').animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 500);
    });
    $(window).scroll(function () {
      var scrollVar = $(window).scrollTop();
      var winHeight = $(window).height();

      if (scrollVar > winHeight) {
        uplink.addClass('active');
      } else {
        uplink.removeClass('active');
      }
    });
  }

  upScroll(); // ---- burger button animation ----

  $('.burger').click(function () {
    $('#header').toggleClass('active');
    $('#nav').toggleClass('active');
  });
  $('.btn-close-menu').on('click', function () {
    $('#header').removeClass('active');
    $('#nav').removeClass('active');
  }); // ---- color slider mobile only on product page ----
  // ---- anchor links Surname CoA page ----

  $('.coa-section nav ul li a').on('click', function (e) {
    e.preventDefault();
    var fixedOffset = 130;
    $('html, body').stop().animate({
      scrollTop: $(this.hash).offset().top - fixedOffset
    }, 1000);
  });
  $('.custom-select').on('click', function () {
    var size = $('.select-selected').text();
    $('#size').val(size);
    $('#size').trigger('change');
  });
  var color = $('#colorList .color-item').attr('data-color');
  $('#color').val(color);
  $('#color').trigger('change');
  $('#colorList .color-item').on('click', function () {
    color = $(this).attr('data-color');
    $('#color').val(color);
    $('#color').trigger('change');
  });
  $('.custom-select, #colorList .color-item').on('click', function () {
    if (0 < $('input.variation_id').val() && null != $('input.variation_id').val()) {
      $('.price-new').html($('div.woocommerce-variation-price > span.price').html()).append('<p class="availability">' + $('div.woocommerce-variation-availability').html() + '</p>');
    } else {
      $('.price-new').html($('div.hidden-variable-price').html());
    }
  }); // --- fly cart ---
  // function customFly() {
  //   $(".xt_woofc-product-image").find('a').on({
  //     mouseenter: function () {
  //       $(this).animate('slow').css('margin-left', '12px')
  //     },
  //     mouseleave: function () {
  //       $(this).animate('slow').css('margin-left', '0')
  //     }
  // })
  // }
  // customFly()
  // ---- custom select ----

  var x, i, j, selElmnt, a, b, c;
  /* Look for any elements with the class "custom-select": */

  x = document.getElementsByClassName('custom-select');

  for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0];
    /* For each element, create a new DIV that will act as the selected item: */

    a = document.createElement('DIV');
    a.setAttribute('class', 'select-selected');
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */

    b = document.createElement('DIV');
    b.setAttribute('class', 'select-items select-hide');

    for (j = 1; j < selElmnt.length; j++) {
      /* For each option in the original select element,
          create a new DIV that will act as an option item: */
      c = document.createElement('DIV');
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener('click', function (e) {
        /* When an item is clicked, update the original select box,
              and the selected item: */
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName('select')[0];
        h = this.parentNode.previousSibling;

        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName('same-as-selected');

            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute('class');
            }

            this.setAttribute('class', 'same-as-selected');
            break;
          }
        }

        h.click();
      });
      b.appendChild(c);
    }

    x[i].appendChild(b);
    a.addEventListener('click', function (e) {
      /* When the select box is clicked, close any other select boxes,
          and open/close the current select box: */
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
    });
  }

  function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
        except the current select box: */
    var x,
        y,
        i,
        arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');

    for (i = 0; i < y.length; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }

    for (i = 0; i < x.length; i++) {
      if (arrNo.indexOf(i)) {
        x[i].classList.add('select-hide');
      }
    }
  }
  /* If the user clicks anywhere outside the select box,
      then close all select boxes: */


  document.addEventListener('click', closeAllSelect); // end custom select

  /* --------  Apply global listeners  -------- */
})(window.jQuery);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: log */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/**
 * Color log message.
 * The log message created via this function won't be removed for production as well
 *
 * @param {*} arguments
 */
var log = function log() {
  var _console;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (_console = console).info.apply(_console, ['%c[DEBUG]', 'color: #ffaa00'].concat(args));
};

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 1:
/*!*************************************************!*\
  !*** multi ./src/js/app.js ./src/scss/app.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! ./src/scss/app.scss */"./src/scss/app.scss");


/***/ })

/******/ });