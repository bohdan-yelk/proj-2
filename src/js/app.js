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
    $('#CoaZoomPopup').addClass('active')
  })

  $('#btnVideo').on('click', function() {
    $('#videoPopup').addClass('active')
  })

  $('.btn-close').on('click', function(){
    $(this).parents('.popup').removeClass('active')
  })

  setTimeout(function(){
    $('#SurnamePopup').addClass('active');
  },5000)

  // submenu nav

   $('.has-submenu').on('click', function(){
     $(this).find('.submenu').addClass('active')
     $('#wrapper').addClass('active')

     $(document).mouseup(function(e){
      if(!$('.submenu').is(e.target) && $('.submenu').has(e.target).length === 0) {
        $('.submenu').removeClass('active')
        $('#wrapper').removeClass('active')
      }
     })
   })

   // color product 

   $('#colorList li a').on('click', function(e){
    e.preventDefault()
    $('#colorList li').removeClass('active')
    $(this).parent().addClass('active')
   })

   // product +/-

    $('.num-in span').click(function () {
        var $input = $(this).parents('.num-block').find('input.in-num');
      if($(this).hasClass('minus')) {
        var count = parseFloat($input.val()) - 1;
        count = count < 1 ? 1 : count;
        if (count < 2) {
          $(this).addClass('dis');
        }
        else {
          $(this).removeClass('dis');
        }
        $input.val(count);
      }
      else {
        var count = parseFloat($input.val()) + 1
        $input.val(count);
        if (count > 1) {
          $(this).parents('.num-block').find(('.minus')).removeClass('dis');
        }
      }
      
      $input.change();
      return false;
    });

    $('ul.tabs-list').on('click', 'li:not(.active)', function(e) {
      e.preventDefault()
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active')
    })

    // suname search on Surname page    

        var input = document.getElementById('searchInput');
    var surnameItems = document.querySelectorAll('#surnameList li');
    var alert = document.getElementById('infoAlert');

    function onInput(event) {
      var isEmptyList = true;

      for (var i = 0; i < surnameItems.length; i += 1) {
        if (
          surnameItems[i].textContent
          .trim()
          .toLowerCase()
          .indexOf(event.target.value.toLowerCase()) === 0
        ) {
          surnameItems[i].classList.remove("hidden-item");

          if (isEmptyList) {
            isEmptyList = false;
          }
        } else {
          surnameItems[i].classList.add("hidden-item");
        }
      }

      isEmptyList
        ? alert.classList.remove('info-alert--hidden')
        : alert.classList.add('info-alert--hidden');
    }

    input.addEventListener('input', onInput);

    // custom select

          var x, i, j, selElmnt, a, b, c;
      /* Look for any elements with the class "custom-select": */
      x = document.getElementsByClassName("custom-select");
      for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /* For each element, create a new DIV that will act as the selected item: */
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /* For each element, create a new DIV that will contain the option list: */
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
          /* For each option in the original select element,
          create a new DIV that will act as an option item: */
          c = document.createElement("DIV");
          c.innerHTML = selElmnt.options[j].innerHTML;
          c.addEventListener("click", function(e) {
              /* When an item is clicked, update the original select box,
              and the selected item: */
              var y, i, k, s, h;
              s = this.parentNode.parentNode.getElementsByTagName("select")[0];
              h = this.parentNode.previousSibling;
              for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  y = this.parentNode.getElementsByClassName("same-as-selected");
                  for (k = 0; k < y.length; k++) {
                    y[k].removeAttribute("class");
                  }
                  this.setAttribute("class", "same-as-selected");
                  break;
                }
              }
              h.click();
          });
          b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
          /* When the select box is clicked, close any other select boxes,
          and open/close the current select box: */
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("select-hide");
          this.classList.toggle("select-arrow-active");
        });
      }

      function closeAllSelect(elmnt) {
        /* A function that will close all select boxes in the document,
        except the current select box: */
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
          if (elmnt == y[i]) {
            arrNo.push(i)
          } else {
            y[i].classList.remove("select-arrow-active");
          }
        }
        for (i = 0; i < x.length; i++) {
          if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
          }
        }
      }

      /* If the user clicks anywhere outside the select box,
      then close all select boxes: */
      document.addEventListener("click", closeAllSelect);

    // end custom select

  /* --------  Apply global listeners  -------- */
})(window.jQuery)
