(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=6)})({6:function(a,b,c){c(8),a.exports=c(7)},7:function(){},8:function(a,b,c){'use strict';c.r(b);var d=function(){for(var a,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=arguments[d];return(a=console).info.apply(a,['%c[DEBUG]','color: #ffaa00'].concat(c))};(function(a){d('Ready'),a('#mainSlider').slick({dots:!0}),a('#reviewsSlider').slick({dots:!1,arrows:!1,slidesToShow:2,slidesToScroll:1,variableWidth:!0}),a('#gallerySlider').slick({dots:!0}),a('#coaZoomSlider').slick({dots:!1,slidesToShow:1,slidesToScroll:1});var b=a('.pagingInfo'),c=a('#crestSlider');c.on('init reInit afterChange',function(a,c,d){if(c.$dots){var e=(d?d:0)+1;b.text(e+'/'+c.$dots[0].children.length)}}),c.slick({slidesToShow:1,slidesToScroll:1,dots:!0,infinite:!1}),function(){function a(a){a.forEach(function(a,b){h===b?a.classList.add(g):a.classList.remove(g)})}function b(){a(e),a(f),h=h===d.length/2-1?0:h+1}var c=0<arguments.length&&arguments[0]!==void 0?arguments[0]:2e3,d=document.querySelectorAll('.js-item'),e=document.querySelectorAll('.js-item-left'),f=document.querySelectorAll('.js-item-right'),g='opacity',h=0;setInterval(b,c)}(2e3),a('a.pic').on('click',function(){a('#CoaZoomPopup').addClass('active')}),a('#btnVideo').on('click',function(){a('#videoPopup').addClass('active')}),a('.btn-close').on('click',function(){a(this).parents('.popup').removeClass('active')}),setTimeout(function(){a('#SurnamePopup').addClass('active')},5e3),a('.has-submenu').on('click',function(){a(this).find('.submenu').addClass('active'),a('#wrapper').addClass('active'),a(document).mouseup(function(b){a('.submenu').is(b.target)||0!==a('.submenu').has(b.target).length||(a('.submenu').removeClass('active'),a('#wrapper').removeClass('active'))})})})(window.jQuery)}});