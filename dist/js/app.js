(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=6)})({6:function(a,b,c){c(8),a.exports=c(7)},7:function(){},8:function(a,b,c){'use strict';c.r(b);var d=function(){for(var a,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return(a=console).info.apply(a,['%c[DEBUG]','color: #ffaa00'].concat(c))};(function(f){function e(a){for(var b=!0,c=0;c<m.length;c+=1)0===m[c].textContent.trim().toLowerCase().indexOf(a.target.value.toLowerCase())?(m[c].classList.remove('hidden-item'),b&&(b=!1)):m[c].classList.add('hidden-item');b?n.classList.remove('info-alert--hidden'):n.classList.add('info-alert--hidden')}function g(a){var b,c,d,e=[];for(b=document.getElementsByClassName('select-items'),c=document.getElementsByClassName('select-selected'),d=0;d<c.length;d++)a==c[d]?e.push(d):c[d].classList.remove('select-arrow-active');for(d=0;d<b.length;d++)e.indexOf(d)&&b[d].classList.add('select-hide')}d('Ready'),f('#mainSlider').slick({dots:!0}),f('#reviewsSlider').slick({dots:!1,arrows:!1,slidesToShow:2,slidesToScroll:1,variableWidth:!0}),f('#gallerySlider').slick({dots:!0}),f('#coaZoomSlider').slick({dots:!1,slidesToShow:1,slidesToScroll:1}),f('#productSliderCoa').slick({dots:!1,slidesToShow:4,slidesToScroll:1,variableWidth:!0,infinite:!1}),function(){var a=f('#productSliderCoa'),b=f('#productSliderCoa .item'),c=f('#productSliderCoa #radioCoa');c.on('click',function(a){a.preventDefault(),b.removeClass('active'),f(this).parent(b).addClass('active')}),a.each(function(){var a=f(this).find('.slick-slide').length;4>=a?f(this).parent('.form-row-slider').addClass('hide'):f(this).parent('.form-row-slider').removeClass('hide')}),a.find('.slick-prev').hide(),a.on('afterChange',function(){f(this).find('.slick-prev').show()})}();var h=f('.pagingInfo'),k=f('#crestSlider');k.on('init reInit afterChange',function(a,b,c){if(b.$dots){var d=(c?c:0)+1;h.text(d+'/'+b.$dots[0].children.length)}}),k.slick({slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!1}),function(){function a(a){a.forEach(function(a,b){h===b?a.classList.add(g):a.classList.remove(g)})}function b(){a(e),a(f),h=h===d.length/2-1?0:h+1}var c=0<arguments.length&&arguments[0]!==void 0?arguments[0]:2e3,d=document.querySelectorAll('.js-item'),e=document.querySelectorAll('.js-item-left'),f=document.querySelectorAll('.js-item-right'),g='opacity',h=0;setInterval(b,c)}(2e3),f('a.pic').on('click',function(){f('#CoaZoomPopup').addClass('active')}),f('#btnVideo').on('click',function(){f('#videoPopup').addClass('active')}),f('.btn-close').on('click',function(){f(this).parents('.popup').removeClass('active')}),setTimeout(function(){f('#SurnamePopup').addClass('active')},5e3),f('.has-submenu').on('click',function(){f(this).find('.submenu').addClass('active'),f('#wrapper').addClass('active'),f(document).mouseup(function(a){f('.submenu').is(a.target)||0!==f('.submenu').has(a.target).length||(f('.submenu').removeClass('active'),f('#wrapper').removeClass('active'))})}),function(){var a=f('#colorList li a'),b=f('#colorList li');a.on('click',function(a){a.preventDefault(),b.removeClass('active'),f(this).parent().addClass('active');var c=f(this).css('background-color');void 0,f('#chaneColor').find('img').css('background-color',c)})}(),f('.num-in span').click(function(){var a=f(this).parents('.num-block').find('input.in-num');if(f(this).hasClass('minus')){var b=parseFloat(a.val())-1;b=1>b?1:b,2>b?f(this).addClass('dis'):f(this).removeClass('dis'),a.val(b)}else{var b=parseFloat(a.val())+1;a.val(b),1<b&&f(this).parents('.num-block').find('.minus').removeClass('dis')}return a.change(),!1}),f('ul.tabs-list').on('click','li:not(.active)',function(a){a.preventDefault(),f(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs-content').removeClass('active').eq(f(this).index()).addClass('active')});var l=document.getElementById('searchInput'),m=document.querySelectorAll('#surnameList li'),n=document.getElementById('infoAlert');l&&l.addEventListener('input',e);var o,p,i,j,q,a,b;for(o=document.getElementsByClassName('custom-select'),p=0;p<o.length;p++){for(j=o[p].getElementsByTagName('select')[0],q=document.createElement('DIV'),q.setAttribute('class','select-selected'),q.innerHTML=j.options[j.selectedIndex].innerHTML,o[p].appendChild(q),a=document.createElement('DIV'),a.setAttribute('class','select-items select-hide'),i=1;i<j.length;i++)b=document.createElement('DIV'),b.innerHTML=j.options[i].innerHTML,b.addEventListener('click',function(){var a,b,c,d,e;for(d=this.parentNode.parentNode.getElementsByTagName('select')[0],e=this.parentNode.previousSibling,b=0;b<d.length;b++)if(d.options[b].innerHTML==this.innerHTML){for(d.selectedIndex=b,e.innerHTML=this.innerHTML,a=this.parentNode.getElementsByClassName('same-as-selected'),c=0;c<a.length;c++)a[c].removeAttribute('class');this.setAttribute('class','same-as-selected');break}e.click()}),a.appendChild(b);o[p].appendChild(a),q.addEventListener('click',function(a){a.stopPropagation(),g(this),this.nextSibling.classList.toggle('select-hide'),this.classList.toggle('select-arrow-active')})}document.addEventListener('click',g)})(window.jQuery)}});