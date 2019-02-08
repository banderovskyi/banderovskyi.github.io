$(function(){













    /*$('.container-radio input').on('change', function() {

        if($(this).prop('checked') && !$('#type-head-start').prop('checked')){
            $('.small-photo.left img.picture').attr('src', 'img/photo/' + $(this).next('label').attr("for") +'_left.png');
            $('.small-photo.front img.picture').attr('src', 'img/photo/' + $(this).next('label').attr("for") + '_front.png');
            $('.small-photo.right img.picture').attr('src', 'img/photo/' + $(this).next('label').attr("for") +'_right.png');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            $('.small-photo.front .print[src="img/print/madwave_front.png"]').removeClass('d-none');
            $('.small-photo.left .print[src="img/print/madwave_left.png"]').removeClass('d-none');
            $('.small-photo.right .print[src="img/print/madwave_right.png"]').removeClass('d-none');
            if ($('.small-photo.front').hasClass('active')) {
                $('.small-photo.active').click();
            }
        }
        if($(this).prop('checked') && $('#type-head-start').prop('checked')){
            $('.small-photo.left img.picture').attr('src', 'img/photo/start-' + $(this).next('label').attr("for") +'_left.png');
            $('.small-photo.front img.picture').attr('src', 'img/photo/start-' + $(this).next('label').attr("for") + '_front.png');
            $('.small-photo.right img.picture').attr('src', 'img/photo/start-' + $(this).next('label').attr("for") +'_right.png');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            $('.small-photo.front .print[src="img/print/madwave_front.png"]').addClass('d-none');
            $('.small-photo.left .print[src="img/print/madwave_left.png"]').addClass('d-none');
            $('.small-photo.right .print[src="img/print/madwave_right.png"]').addClass('d-none');
            if ($('.small-photo.front').hasClass('active')) {
                $('.small-photo.active').click();
            }

        }
        $('.small-photo.active').click();

    });*/



    $('.container-for-type.first').click();
    $(window).on('load',function(){
        $('.small-photo.active').click();
    });


    $('.container-radio input').on('change', function() {
        if($(this).prop('checked') && $('#type-head-start').prop('checked')){
            $('.small-photo.left img.picture').attr('src', 'img/photo/start-' + $(this).next('label').attr("for") +'_left.jpg');
            $('.small-photo.front img.picture').attr('src', 'img/photo/start-' + $(this).next('label').attr("for") + '_front.jpg');
            $('.small-photo.right img.picture').attr('src', 'img/photo/start-' + $(this).next('label').attr("for") +'_right.jpg');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            $('.small-photo .print[src*="madwave"]').addClass('d-none');

            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photos-container .print[src*="start"]:not(.d-none)').each(function(){
                    let new_url = $(this).attr('src').slice(0, -4) +"_for_black.png";
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }else{
                $('.small-photos-container .print[src*="start"][src*="for_black"]:not(.d-none)').each(function(){
                    let new_url = $(this).attr('src').replace('_for_black','');
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }

            if ($('.small-photo').hasClass('active')) {
                $('.small-photo.active').click();
            }
        }
        if($(this).prop('checked') && !$('#type-head-start').prop('checked')){
            $('.small-photo.left img.picture').attr('src', 'img/photo/' + $(this).next('label').attr("for") +'_left.jpg');
            $('.small-photo.front img.picture').attr('src', 'img/photo/' + $(this).next('label').attr("for") + '_front.jpg');
            $('.small-photo.right img.picture').attr('src', 'img/photo/' + $(this).next('label').attr("for") +'_right.jpg');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photos-container .print[src*="madwave"]').addClass('d-none');
                $('.small-photos-container .print[src*="madwave"][src*="for_black"]').removeClass('d-none');

                $('.small-photos-container .print:not(.d-none):not([src*="madwave"]):not([src*="for_black"])').each(function(){
                    let new_url = $(this).attr('src').slice(0, -4) +"_for_black.png";
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }
            else{
                $('.small-photos-container .print[src*="madwave"]').addClass('d-none');
                $('.small-photos-container .print[src*="madwave"]:not([src*="for_black"])').removeClass('d-none');

                $('.small-photos-container .print:not(.d-none)[src*="for_black"]').each(function(){
                    let new_url = $(this).attr('src').replace('_for_black','');
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });

            }
            if($('.small-photos-container .print[src*="start"]:not(.d-none)').length > 0) {
                $('.small-photos-container .print[src*="start"]:not(.d-none)').each(function () {
                    let new_url = $(this).attr('src').replace('start_', '');
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }

            $('.small-photo.active').click();
        }
    });


    $('.container-for-type' ).on('click', function() {
        if($('#type-head-start').prop('checked')) {

            $('.small-photo.left img.picture').attr('src', 'img/photo/start-' + $('.container-radio input:checked').next('label').attr("for") +'_left.jpg');
            $('.small-photo.front img.picture').attr('src', 'img/photo/start-' + $('.container-radio input:checked').next('label').attr("for") + '_front.jpg');
            $('.small-photo.right img.picture').attr('src', 'img/photo/start-' + $('.container-radio input:checked').next('label').attr("for") +'_right.jpg');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));
            $('.small-photo .print[src*="madwave"]').addClass('d-none');


            $('.container-radio input:not(#color-head-black, #color-head-white, #color-head-light-grey, #color-head-lighter-blue)')
                .prop('disabled', true)
                .next('label')
                .addClass('no-active order-1');

            if($('.small-photo .print[src*="start"]:not(.d-none)').length <1) {
                $('.small-photo .print:not(.d-none):not([src*="madwave"])').each(function () {
                    $(this).attr('src', $(this).attr('src').replace('start_', ''));
                    let url_full = $(this).attr('src').slice(0, -4),
                        url_begin = url_full.substr(0, 10),
                        url_middle = url_full.substr(10),
                        new_url = url_begin + 'start_' + url_middle + '.png';
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();

                });
                if ($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')) {
                    $('.small-photos-container .print[src*="start"]:not(.d-none):not([src*="for_black"])').each(function () {
                        let new_url = $(this).attr('src').slice(0, -4) + "_for_black.png";
                        $(this).addClass('d-none');
                        $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                        $('.small-photo.active').click();
                    });
                }
            }
            $('.small-photo.active').click();

            /*if ($('.container-radio input#color-head-black, .container-radio input#color-head-nautical, .container-radio input#color-head-pearl-fleet').prop('checked')) {
                $('.small-photo .print:not(.d-none)').each(function () {
                    $(this).attr('src', $(this).attr('src').replace('start_',''));
                    $(this).attr('src', $(this).attr('src').replace('_for_black',''));
                    let url_full = $(this).attr('src').slice(0,-4),
                        url_begin = url_full.substr(0, 10),
                        url_middle = url_full.substr(10, url_full.length-4 ),
                        new_url = url_begin + 'start_' + url_middle + '_for_black.png';
                    /*console.log(url_full);
                    console.log(url_begin);
                    console.log(url_middle);
                    console.log(new_url);

                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();

                });
            }*/
        }

        if($('#type-head-standart').prop('checked')){
            $('.container-radio input')
                .prop('disabled',false)
                .next('label')
                .addClass('order-0')
                .removeClass('no-active order-1');
            if($('.small-photos-container .print[src*="start"]:not(.d-none)').length > 0) {
                $('.small-photos-container .print[src*="start"]:not(.d-none)').each(function () {
                    let new_url = $(this).attr('src').replace('start_', '');
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }

            $('.small-photo.left img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") +'_left.jpg');
            $('.small-photo.front img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") + '_front.jpg');
            $('.small-photo.right img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") +'_right.jpg');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo .print[src*="madwave"]:not([src*="for_black"])').addClass('d-none');
                $('.small-photo .print[src*="madwave"][src*="for_black"]').removeClass('d-none');
            }
            else{
                $('.small-photo .print[src*="madwave"]:not([src*="for_black"])').removeClass('d-none');
                $('.small-photo .print[src*="madwave"][src*="for_black"]').addClass('d-none');
            }


            $('.small-photo.active').click();

        }

        if($('#type-head-volume').prop('checked')){

            $('#color-head-bright-red, #color-head-green-leaf, #color-head-nautical, #color-head-pearl-fleet ,#color-head-blue, #color-head-light-blue')
                .prop('disabled',true)
                .next('label')
                .addClass('no-active order-1');

            if($('.small-photos-container .print[src*="start"]:not(.d-none)').length > 0) {
                $('.small-photos-container .print[src*="start"]:not(.d-none)').each(function () {
                    let new_url = $(this).attr('src').replace('start_', '');
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }

            $('.small-photo.left img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") +'_left.jpg');
            $('.small-photo.front img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") + '_front.jpg');
            $('.small-photo.right img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") +'_right.jpg');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo .print[src*="madwave"]:not([src*="for_black"])').addClass('d-none');
                $('.small-photo .print[src*="madwave"][src*="for_black"]').removeClass('d-none');
            }
            else{
                $('.small-photo .print[src*="madwave"]:not([src*="for_black"])').removeClass('d-none');
                $('.small-photo .print[src*="madwave"][src*="for_black"]').addClass('d-none');
            }

            $('.small-photo.active').click();
        }

        if($('#type-head-latex').prop('checked')){
            $('.container-radio input:checked').click();
            $('.container-radio input')
                .prop('disabled',false)
                .next('label')
                .addClass('order-0')
                .removeClass('no-active order-1');

            if($('.small-photos-container .print[src*="start"]:not(.d-none)').length > 0) {
                $('.small-photos-container .print[src*="start"]:not(.d-none)').each(function () {
                    let new_url = $(this).attr('src').replace('start_', '');
                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }

            $('.small-photo.left img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") +'_left.jpg');
            $('.small-photo.front img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") + '_front.jpg');
            $('.small-photo.right img.picture').attr('src', 'img/photo/' + $('.container-radio input:checked').next('label').attr("for") +'_right.jpg');
            $('.big-photo img.picture').attr('src', $('.small-photo.active img').attr("src"));

            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo .print[src*="madwave"]:not([src*="for_black"])').addClass('d-none');
                $('.small-photo .print[src*="madwave"][src*="for_black"]').removeClass('d-none');
            }
            else{
                $('.small-photo .print[src*="madwave"]:not([src*="for_black"])').removeClass('d-none');
                $('.small-photo .print[src*="madwave"][src*="for_black"]').addClass('d-none');
            }

            $('.small-photo.active').click();
        }

        if ($('.container-radio input:checked').prop('disabled')) {
            $('#color-head-black').click();
        }
    });



    /*Эта часть работает отлично*/
    $('.small-photo').on('click', function(){
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        let url  = $(this).find('img.picture').attr('src');
        $('.big-photo img.picture').attr('src', url);
        $('.big-photo .print:not(.d-none)').addClass('d-none');
        $(this).find('.print:not(.d-none)').each(function(){
            let urlOne = $(this).attr('src');
            $('.big-photo img.print[src="'+urlOne+'"]').removeClass('d-none');
        });
    });

    /*Эта часть работает отлично*/



    /*if($('#type-head-start').prop('checked')) {
        $('.small-photo.front .print[src="img/print/madwave_front.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/madwave_left.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/madwave_right.png"]').addClass('d-none');
        if ($('.small-photo.front').hasClass('active')) {
            $('.small-photo.active').click();
        }
    }else{
        $('.small-photo.front .print[src="img/print/madwave_front.png"]').removeClass('d-none');
        $('.small-photo.left .print[src="img/print/madwave_left.png"]').removeClass('d-none');
        $('.small-photo.right .print[src="img/print/madwave_right.png"]').removeClass('d-none');
        if ($('.small-photo.front').hasClass('active')) {
            $('.small-photo.active').click();
        }
    }*/

    /*
    else{
        $('.small-photo.front .print[src="img/print/madwave_front.png"]').addClass('d-none');
        if($('.small-photo.front').hasClass('active')){
            $('.small-photo.front').click();
        }
    }*/

});