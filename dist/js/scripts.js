(function ($) {

    $(document).ready(function () {

        jpeg_popup_cart();
        main_search_surname();
        search_surname_in_listing();
        shop_page_popup();
        surname_rough_page();

        $('.radioCoa').on('click', function(){
            let coa_url = $(this).find('img').attr('src');
            setCookie('coa-url', coa_url , {'expires': getCookieDate()});
            $('.top__image').attr('src',coa_url);
            $('input[name=product_options]').val($(this).attr('img_options'));
            $('input[name=coat_of_arm_img]').val($(this).attr('coat_of_arm_img'));

        });

        $(document).on('click','.remember__me', function(e){

            setCookie('coadb-me', $(this).data('surname') , {'expires': getCookieDate()});
            setCookie('coa-url', $(this).data('img') , {'expires': getCookieDate()});

        });

        $(document).on('click','.add_to_cart_div',function(e){
            e.preventDefault();
        })

    });

    function main_search_surname(){

        $('#searchform input[type=search]').on('keyup', function(){

                                        let search = $.trim($(this).val());
                                        let $results = $('#search-result');

                                        if(search.length > 2){

                                            let data = {
                                                'action': 'surname_live_search',
                                                'search': search,
                                            };

                                            $.ajax({
                                                url: vars_ajax.ajax_url,
                                                data: data,
                                                type: 'POST',
                                                dataType: 'json',
                                                success: function (data) {
                                                    if (data && data.status === 'success') {
                                                        $results.find('.container').html(data.data);
                                                        $results.addClass('active');
                                                    }else{
                                                        $results.removeClass('active');
                                                        $results.find('.container').html();
                                                    }
                                                },
                                            });
                                        }else{
                                            $results.removeClass('active');
                                            $results.find('.container').html();
                                        }
                                    });

        $('#searchform').on('submit', function(e){
            e.preventDefault();

            let search = $.trim($(this).find('input[type=search]').val());

            let data = {
                    'action': 'surname_search',
                    'search': search,
                };

            $.ajax({
                    url: vars_ajax.ajax_url,
                    data: data,
                    type: 'POST',
                    dataType: 'json',
                    success: function (response) {
                        if (response) {
                            if (response.status === 'success') {
                                if(response.image !== ""){
                                    setCookie('coadb-me', response.surname , {'expires': getCookieDate()});
                                    setCookie('coa-url', response.image , {'expires': getCookieDate()});
                                }
                            }
                            window.location.href = response.url;
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    },
                });

        });
    }

    $('.variations_form, .product_cat-digital-jpg .cart, #coaShop form').keydown(function (e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    $('#product_search_surname').keydown(function (e) {
        if (e.keyCode == 13) {
            let search = $.trim($(this).val());
            let data = {
                'action': 'product_search_surname',
                'search': search,
            };
            $.ajax({
                url: vars_ajax.ajax_url,
                data: data,
                type: 'POST',
                dataType: 'json',
                success: function (response) {
                    if (response) {
                        if (response.status === 'success') {
                            if(response.image !== ""){
                                $('.form-row-surname').addClass('valid');
                                setCookie('coadb-me', response.id , {'expires': getCookieDate()});
                                setCookie('coa-url', response.image , {'expires': getCookieDate()});
                                $('.form-row-message, .genealogy-btn').addClass('d-none');
                                location.reload();
                            }
                        }else{
                            $('.form-row-surname').addClass('warn');
                            $('.form-row-slider, .form-row-num, .form-row-submit').addClass('d-none');
                            $('.form-row-message, .genealogy-btn').addClass('d-flex');
                        }
                    }
                },
                error: function (error) {
                    console.log(error);
                },
            });
        }
    });



    function load_surnames_by_step($content){
        var more = 1,
            page = 1;
        do{
                    let data = {
                            'action': 'surname_list_lazy_load',
                            'search': $content.data('tab'),
                            'page': page,
                        };

                        $.ajax({
                            url: vars_ajax.ajax_url,
                            data: data,
                            type: 'POST',
                            dataType: 'json',
                            async: false,
                            success: function ( data ) {

                                more = data['more'];
                                if(more == '1' || more == 1){
                                    page = page+1;
                                }

                                $content.find('ul').append( data['html'] );

                            },
                            error: function(){
                                more = 0;
                            }
                        });

        }while(more && page < 300);
    }

    function jpeg_popup_cart(){

        $('#CoaZoomPopup .slick-arrow').on('click', function(){
            set_popup_data();
        });

        $(document).on('click','.coa-section .gallery-slider .add-cart', function(){
            if($('#CoaZoomPopup').length > 0){
                set_popup_data();
            }
        });

        $(document).on('click','.gallery-slider .add-cart .add_to_cart_div', function(){
            let attr = $(this).parent('.content-wrapper').find('img').attr('src');
            if(attr){
                setCookie('coa-url', attr , {'expires': getCookieDate()});
            }
        });

        $(document).on('click','#CoaZoomPopup .add_to_cart_div', function(){
            let attr = $('#coaZoomSlider .slick-active img').attr('src');
            if(attr){
                setCookie('coa-url', attr , {'expires': getCookieDate()});
            }
        });
    }

    function set_popup_data(){
        let $item = $('#CoaZoomPopup .slick-current .item');

        $('#CoaZoomPopup .version').html('#'+$item.attr('img_num'));
        $('#CoaZoomPopup .add_to_cart_div').attr('img_options',$item.data('options'));
        $('#CoaZoomPopup .add_to_cart_div').attr('coat_of_arm_img',$item.data('img'));

        $('#CoaZoomPopup .popup-footer li a').each(function(){
            $(this).attr('href',$(this).data('base')+$item.find('img').attr('src'));
        });
    }


    function search_surname_in_listing(){

        $('#searchFullInput').on('keyup', function() {
                                            let search = $.trim($(this).val());

                                            if(search.length > 2){
                                                $('.tabs-content').removeClass('active');
                                                $('.search-tab-content').addClass('active');

                                                let data = {
                                                    'action': 'surname_list_live_search',
                                                    'search': search,
                                                };

                                                $.ajax({
                                                    url: vars_ajax.ajax_url,
                                                    data: data,
                                                    type: 'POST',
                                                    dataType: 'json',
                                                    success: function (data) {
                                                        if (data && data.status === 'success') {
                                                            $('.search-tab-content>.info-alert').addClass('info-alert--hidden');
                                                            $('.search-tab-content ul').html(data.data);
                                                        }else{
                                                            $('.search-tab-content ul').html('');
                                                            $('.search-tab-content>.info-alert').removeClass('info-alert--hidden');
                                                        }
                                                    },
                                                });
                                            }else{
                                                $('.tabs-content').addClass('active');
                                                $('.search-tab-content').removeClass('active');
                                            }
                                    });

        $('.surnames-full-search').on('submit', function(e){
            e.preventDefault();
        });
    }

    function shop_page_popup(){
        if( !getCookie('coa-url1') && $('#coaShop').length > 0){
            $('#coaShop').addClass('active');
            $('#coaShop p.warn').hide();
            $('#coaShop .btn-done').hide();
        }

        $('#coaShop input').keydown(function (e) {
            if (e.keyCode == 13) {
                let search = $.trim($(this).val()),
                    $form = $('#coaShop form');
                let data = {
                    'action': 'product_search_surname',
                    'search': search,
                };
                $.ajax({
                    url: vars_ajax.ajax_url,
                    data: data,
                    type: 'POST',
                    dataType: 'json',
                    success: function (response) {
                        if (response) {
                            if (response.status === 'success') {
                                if(response.image !== ""){
                                    $form.removeClass('default').addClass('valid').removeClass('no-match');

                                    $('#coaShop .coa-shop-slider').html(response.images_html);

                                    $('#coaShopSlider').removeClass("slick-initialized slick-slider");
                                    $('#coaShopSlider').slick({
                                        slidesToShow: 4,
                                        slidesToScroll: 1
                                    });

                                    setCookie('coadb-me', response.id , {'expires': getCookieDate()});
                                    setCookie('coa-url', response.image , {'expires': getCookieDate()});
                                    $('#coaShop .coa-shop-slider').show();
                                    $('#coaShop p.warn').hide();
                                    $('#coaShop .btn-done').show();

                                }else{
                                    $form.removeClass('default').removeClass('valid').addClass('no-match');
                                    $('#coaShop .coa-shop-slider').hide();
                                    $('#coaShop p.warn').show();
                                    $('#coaShop .btn-done').hide();
                                }
                            }else{
                                $form.removeClass('default').removeClass('valid').addClass('no-match');
                                $('#coaShop .coa-shop-slider').hide();
                                $('#coaShop p.warn').show();
                                $('#coaShop .btn-done').hide();
                            }
                        }
                    },
                    error: function (error) {
                        console.log(error);
                    },
                });
            }
        });

        $(document).on('click','#coaShop .item', function(e){
            e.preventDefault();
            $('#coaShop .item').removeClass('active');
            $(this).addClass('active');
        });

        $('#coaShop .btn-done').on('click', function(e){
            e.preventDefault();
            let coa_url = $('#coaShop .item.active img').attr('src');
            setCookie('coa-url', coa_url , {'expires': getCookieDate()});
            location.reload();
        });

    }

    function surname_rough_page() {
        if($('.dig-add-to-cart-variations').length > 0){
            let value = $('.crest-slider .slick-active .item img').data('rating');
            if(value){
                change_digitalization_value(value);
            }
        }

        $('#crestSlider .slick-arrow').on('click', function(){
            let value = $('.crest-slider .slick-active .item img').data('rating');
            if(value){
                change_digitalization_value(value);
            }
        });
    }

    function change_digitalization_value(value) {
        let $select = $('.dig-add-to-cart-variations');
        $select.val(value);

        let $option = $select.find('option:selected');
        $('.dig-add-to-cart span').html('$'+$option.data('price'));
    }

})( jQuery );
