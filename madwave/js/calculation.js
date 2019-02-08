function calc() {
        if (+$("#quantity-head").val() > 0) {
            /*НАЧАЛО -> чтобы расчеты появились когда количество шапочек польше ноля*/
            $(".info-detail:not(.info-detail.post), .info-result:not(.info-result.post)").addClass('d-block');


            /*НАЧАЛО -> чтобы расчеты появились когда количество шапочек польше ноля*/
            /*Базовые цены для доставки*/
            let pricesDelivery = {
                'Start-silicon': [40, 60, 100, 130, 160, 200, 240, 300, 350, 385, 420, 445, 470, 485, 500, 550], //цены долларах за каждый интервал
                'Standart-silicon': [30, 50, 70, 85, 100, 115, 130, 155, 180, 200, 220, 235, 250, 260, 270, 300],
                'Volume-silicon': [40, 60, 100, 130, 160, 200, 240, 300, 350, 385, 420, 445, 470, 485, 500, 550],
                'Latex': [30, 50, 70, 85, 100, 115, 130, 155, 180, 200, 220, 235, 250, 260, 270, 300]
            };


            /*Базовые цены для типов шапочек*/
            let Prices = {
                'Start-silicon': 4.8,
                'Standart-silicon': 0.9,
                'Volume-silicon': 0.95,
                'Latex': 0.39
            };

            /*Цены за количества цветов логотипа*/
            let PricesLogoColor = {
                'Start-silicon':   [0.46, 0.46, 0.46, 0.46, 0.46, 0.46],
                'Standart-silicon':[0.16, 0.26, 0.36, 0.46, 0.56, 0.66],
                'Volume-silicon':  [0.16, 0.26, 0.36, 0.46, 0.56, 0.66],
                'Latex':           [0.06, 0.10, 0.14, 0.18, 0.22, 0.26]
            };


            /*Переменные*/
            let type = $("#tab-1 input[name='type-head']:checked").val(),
                count = +$('#quantity-head').val(),         //Количество шапочек
                basePrice,                                  //Цена за шапочку определенного типа
                basePriceFull = 0,                          //Цена за количество шапочек определенного типа
                deliveryFullPrice = 0,                      //Цена за доставку определенного количества шапочек определенного типа
                numOnePrice,                                //Цена нанесения нумерации с одной стороны
                numQuantityAscending = 0,                   //Количество шапочек с нумерацией по возрастанию
                numQuantityDifferent = 0,                   //Количество шапочек с индивидуальной нумерацией
                numQuantityAll = 0,                         //Общие количество шапочек с нумерацией
                numFullPrice = 0,                           //Полная цена за нумерацию
                allFullPrice = 0,                           //Полная цена за все
                quantityFam = 0,                            //Количество фамилий
                quantityHeadFam = 0,                        //Количество шапочек с фамилиями
                famOnePrice,                                //Цена нанесения фамилии с одной стороны
                famFullPrice = 0,                           //Полная цена за фамилии
                famTrafaretPrice = PRICE_TRAFARET_FAMILY,   //Ценв на 1 трафарет на три фамилии
                famTrafaretFullPrice = 0,                   //Цена за все трафареты
                famTrafaretQuantity,                        //Количество трафаретов для фамилий
                logoPressFormPrice = PRICE_PRESSFORM_LOGO,  //Цена за прессформу(1 цвет в одном лого)
                logoQuantity = 0,                           //Количесво логотипов
                logoColorQuantity = 0,                      //Количество цветов в логотипах
                logoFullPrice = 0,                          //Полная цена за логотипы
                logoFullPricePressForm = 0,                 //Полная цена за пресформы к логотипам
                logoPaintPrice = PRICE_PAINT_LOGO,          //Стоимость отрисовки логотипа(устанавливается админом)
                logoCreatePrice = PRICE_CREATE_LOGO,        //Стоимость разработки логотипа(устанавливается админом)
                positionLogoSides = 0,                      //Количество сторон для печати логотипов
                positionLogoPrntCost = PRICE_POSITION_LOGO, //Стоимость печати в 1 цвет(должно устанавливаться админом)
                positionLogoFullPrice = 0,                  //Полная стоимомть за печать логотипов на сторонах
                customsPrice = 0,                           //Цена за таможню
                ndsPrice = 0;                               //НДС

            /*alert(type);
            alert(count);*/


            /*НАЧАЛО -> Считаем первую и вторую табу*/

            basePrice = Prices[type];
            if (count < 25) {
                basePrice += 0.5;
            }
            basePriceFull = (basePrice * count);
            $('.price-head-one').text(basePrice);
            $('.price-head-quantity').text(count);
            $('.price-head-full').text(basePriceFull.toFixed(2));
            /*КОНЕЦ -> Считаем первую и вторую табу*/

            /*НАЧАЛО -> Считаем доставку*/
            if (count < 50)
                deliveryFullPrice = pricesDelivery[type][0];
            else if (count < 100)
                deliveryFullPrice = pricesDelivery[type][1];
            else if (count < 151)
                deliveryFullPrice = pricesDelivery[type][2];
            else if (count < 200)
                deliveryFullPrice = pricesDelivery[type][3];
            else if (count < 301)
                deliveryFullPrice = pricesDelivery[type][4];
            else if (count < 350)
                deliveryFullPrice = pricesDelivery[type][5];
            else if (count < 451)
                deliveryFullPrice = pricesDelivery[type][6];
            else if (count < 500)
                deliveryFullPrice = pricesDelivery[type][7];
            else if (count < 651)
                deliveryFullPrice = pricesDelivery[type][8];
            else if (count < 700)
                deliveryFullPrice = pricesDelivery[type][9];
            else if (count < 801)
                deliveryFullPrice = pricesDelivery[type][10];
            else if (count < 850)
                deliveryFullPrice = pricesDelivery[type][11];
            else if (count < 901)
                deliveryFullPrice = pricesDelivery[type][12];
            else if (count < 950)
                deliveryFullPrice = pricesDelivery[type][13];
            else if (count < 1001)
                deliveryFullPrice = pricesDelivery[type][14];
            else
                deliveryFullPrice = pricesDelivery[type][15];

            $('.calc-price-delivery').addClass('d-block');
            $('.calc-price-delivery-full').text(deliveryFullPrice);

            /*КОНЕЦ  -> Cчитаем доставку*/

            /*НАЧАЛО -> Считаем логотипы и все что с ними связано*/
            $('.container-for-logos input[type="file"]').each(function () {
                if ($(this).val()) {
                    ++logoQuantity;
                    logoColorQuantity += +$(this).parents('.logo').find('.counter-input').val();
                }
            });

            if (logoQuantity > 0 && logoColorQuantity > 0) {
                if (!$('.calc-price-pressform-logo').hasClass('d-block'))
                    $('.calc-price-pressform-logo').addClass('d-block');


                logoFullPricePressForm = logoColorQuantity * logoPressFormPrice;
                $('.price-pressform').text(logoPressFormPrice);
                $('.price-pressform-color-quantity').text(logoColorQuantity);
                $('.price-pressform-full').text(logoFullPricePressForm);
                logoFullPrice = (logoColorQuantity * logoPressFormPrice) / count;

            }
            else {
                if ($('.calc-price-pressform-logo').hasClass('d-block'))
                    $('.calc-price-pressform-logo').removeClass('d-block');
            }

            if ($('#order-logo-paint').prop('checked')) {
                if (!$('.calc-price-create-or-paint-logo').hasClass('d-block')) {
                    $('.calc-price-create-or-paint-logo').addClass('d-block')
                }
                $('.calc-price-create-or-paint-logo-desc').text('- Стоимость отрисовки логотипа : ');
                $('.price-create-or-paint-logo-full').text(logoPaintPrice);
                logoFullPrice += logoPaintPrice;
            }
            if ($('#order-logo-create').prop('checked')) {
                if (!$('.calc-price-create-or-paint-logo').hasClass('d-block')) {
                    $('.calc-price-create-or-paint-logo').addClass('d-block')
                }
                $('.calc-price-create-or-paint-logo-desc').text('- Стоимость разработки логотипа : ');
                $('.price-create-or-paint-logo-full').text(logoCreatePrice);
                logoFullPrice += logoCreatePrice;
            }
            if (!$('#order-logo-paint').prop('checked') && !$('#order-logo-create').prop('checked')) {
                $('.calc-price-create-or-paint-logo').removeClass('d-block');
            }


            /*КОНЕЦ -> Считаем логотипы и все что с ними связано*/


            /*НАЧАЛО -> Считаем нумерацию*/
            if ($('#num-ascending').prop('checked') || $('#num-different').prop('checked')) {
                if (count < 26)
                    numOnePrice = 0.9;
                else if (count < 51)
                    numOnePrice = 0.9;
                else if (count < 101)
                    numOnePrice = 0.9;
                else if (count >= 101)
                    numOnePrice = 0.9;
                $('.calc-price-num-one').addClass('d-block');

                if ($('#num-position-left').prop('checked') && $('#num-position-right').prop('checked')) {
                    numOnePrice *= 2;
                    $('.price-num-desc').text('- Стоимость нумерации на 2 сторонах:');
                } else
                    $('.price-num-desc').text('- Стоимость нумерации на 1 стороне:');

                if($("#num-ascending").prop('checked')){
                    numQuantityAscending = (+$('#num-ascending-end').val() - +$('#num-ascending-begin').val())+1;
                }
                else{
                    numQuantityAscending = 0;
                }
                if($('#num-different').prop('checked')){
                    $('[name="num-different-quan[]"]:enabled:visible').each(function(){
                        numQuantityDifferent += +this.value;
                    });
                }
                else{
                    numQuantityDifferent = 0;
                }
                numQuantityAll = numQuantityAscending + numQuantityDifferent;

                numFullPrice = numOnePrice * numQuantityAll;
                $('.price-num-one').text(numOnePrice);
                $('.price-num-quantity').text(numQuantityAll);
                $('.price-num-full').text(numFullPrice.toFixed(2));
                $('.result-num-ascending-quantity').text(numQuantityAll);
            } else
                $('.calc-price-num-one').removeClass('d-block');

            /*КОНЕЦ -> Считаем нумерацию*/


            /*НАЧАЛО -> Считаем фамилии*/
            /*if ($('.tabs a[href="#tab-5"]').hasClass('done')) {*/
            $('.tab-5 .container-for-family input[name="family_quan[]"]').each(function(){
                quantityHeadFam += +$(this).val();
            });
            if (quantityHeadFam > 0) {
                $('.calc-price-fam-one').addClass('d-block');
                $('.calc-price-pressform-family').addClass('d-block');

                if ($('#family-position-left').prop('checked') && $('#family-position-right').prop('checked')) {
                    famOnePrice = 0.5;
                    $('.price-fam-desc').text('- Cтоимость фамилии на 2 стороны:')
                }
                else {
                    famOnePrice = 0.25;
                    $('.price-fam-desc').text('- Cтоимость фамилии на 1 сторону:')
                }

                famFullPrice = famOnePrice * quantityHeadFam;


                $('.price-fam-one').text(famOnePrice);
                $('.price-fam-quantity').text(quantityHeadFam);
                $('.price-fam-full').text(famFullPrice);


                /* Начало -> Считаем трафареты*/

                quantityFam = $('.tab-5 .container-for-family input[name="family_quan[]"]').length;

                famTrafaretQuantity = (quantityFam - (quantityFam % 3)) / 3;
                if (quantityFam % 3)
                    ++famTrafaretQuantity;

                famTrafaretFullPrice = famTrafaretQuantity * famTrafaretPrice;
                $('.price-pressform-family-trafaret').text(famTrafaretPrice);
                $('.price-pressform-family-trafaret-quantity').text(famTrafaretQuantity);
                $('.price-pressform-family-full').text(famTrafaretFullPrice);

                /*конец -> Считаем трафареты*/


            } else {
                $('.calc-price-fam-one').removeClass('d-block');
                $('.calc-price-pressform-family').removeClass('d-block');
            }
            /* }*/
            /*КОНЕЦ -> Считаем фамилии*/

            /*НАЧАЛО -> Считаем размещение*/
            if ($('.container-for-position input[name="logo-position-left[]"]:checked').length) {
                ++positionLogoSides;
            }
            if ($('.container-for-position input[name="logo-position-right[]"]:checked').length) {
                ++positionLogoSides;
            }
            if (positionLogoSides < 1) {
                $('.calc-price-logo-one-side').removeClass('d-block');
            }

            if (positionLogoSides == 1) {
                positionLogoFullPrice = (positionLogoPrntCost * positionLogoSides) * count;
                if (!$('.calc-price-logo-one-side').hasClass('d-block')) {
                    $('.calc-price-logo-one-side').addClass('d-block')
                }

                $('.price-logo-position-desc').text('- Стоимость печати лого на 1 стороне: ');
                $('.price-logo-one-side').text(positionLogoPrntCost);
                $('.price-logo-quantity').text(count);
                $('.price-logo-full').text(positionLogoFullPrice);
            }

            if (positionLogoSides == 2) {
                if (!$('.calc-price-logo-one-side').hasClass('d-block')) {
                    $('.calc-price-logo-one-side').addClass('d-block')
                }
                positionLogoFullPrice = (positionLogoPrntCost * positionLogoSides) * count;
                $('.price-logo-position-desc').text('- Стоимость печати лого на 2 сторонах: ');
                $('.price-logo-one-side').text(positionLogoPrntCost * positionLogoSides);
                $('.price-logo-quantity').text(count);
                $('.price-logo-full').text(positionLogoFullPrice);
            }


            /*КОНЕЦ -> Считаем размещение*/


            /*НАЧАЛО -> ОБЩИЙ ПОСЧЕТ*/
            allFullPrice = (basePriceFull + deliveryFullPrice) + numFullPrice + famFullPrice + famTrafaretFullPrice + logoFullPrice + positionLogoFullPrice;



            $('.calc-price-full').text((allFullPrice).toFixed(2));
            $('.calc-price-full-one-head').text((allFullPrice / count).toFixed(2));
            /*КОНЕЦ -> ОБЩИЙ ПОСЧЕТ*/

            /*НАЧАТЬ -> НДС И ТАМОЖНЯ*/
            if($('.tabs a[href="#tab-7"]').hasClass('active')){
                $('.info-detail.post, .info-result.post').removeClass('d-none');
                $('.info-detail.post, .info-result.post').addClass('d-block');

            }
            customsPrice = allFullPrice/10;
            $('.calc-price-customs-full').text(customsPrice.toFixed(2));
            ndsPrice = (allFullPrice + customsPrice)/5;
            $('.calc-price-nds-full').text(ndsPrice.toFixed(2));
            $('.calc-price-full-customs-nds').text((allFullPrice+customsPrice+ndsPrice).toFixed(2));
            /*КОНЕЦ -> НДС И ТАМОЖНЯ*/


        }
        else {
            $(".info-detail, .info-result").removeClass('d-block');

        }

    /*логотипы*/
    if($('.container-for-position input[name="logo-position-left[]"]:checked').length){
        if($('#type-head-start').prop('checked')) {
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.left .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.small-photo.left .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length+'_left_for_black.png"]').removeClass('d-none');

                $('.big-photo .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length +'_left_for_black.png"]').removeClass('d-none');
                $('.small-photo.active').click();
            }else{
                $('.small-photo.left .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.small-photo.left .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length+'_left.png"]').removeClass('d-none');
                $('.big-photo .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length +'_left.png"]').removeClass('d-none');
                /*$('.big-photo .print[src*="start_logo"][src*="left"]:not([src*="for_black"])').attr('src', 'img/print/start_logo_' + $('.container-for-position input[name="logo-position-left[]"]:checked').length + '_left.png');*/
                $('.small-photo.active').click();
            }

        }else{
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.left .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.small-photo.left .print[src*="logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length+'_left_for_black.png"]:not([src*="start"])').removeClass('d-none');
                $('.big-photo .print[src*="logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length +'_left_for_black.png"]:not([src*="start"])').removeClass('d-none');
                $('.small-photo.active').click();
               /* $('.big-photo .print[src*="logo"][src*="left"]:not([src*="start"])').attr('src', 'img/print/logo_' + $('.container-for-position input[name="logo-position-left[]"]:checked').length + '_left_for_black.png');*/

            }
            else{
                $('.small-photo.left .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="left"]').addClass('d-none');
                $('.small-photo.left .print[src*="logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length+'_left.png"]:not([src*="start"])').removeClass('d-none');
                $('.big-photo .print[src*="logo_'+$('.container-for-position input[name="logo-position-left[]"]:checked').length +'_left.png"]:not([src*="start"])').removeClass('d-none');
                $('.small-photo.active').click();
            }

        }
    }else {
        $('.small-photo.left .print[src*="logo"][src*="left"]').addClass('d-none');
        $('.big-photo .print[src*="logo"][src*="left"]').addClass('d-none');
        $('.small-photo.active').click();

    }

    if($('.container-for-position input[name="logo-position-right[]"]:checked').length){
        if($('#type-head-start').prop('checked')) {
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.right .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.small-photo.front .print[src*="logo"][src*="front"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="front"]').addClass('d-none');

                $('.small-photo.right .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_right_for_black.png"]').removeClass('d-none');
                $('.small-photo.front .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_front_for_black.png"]').removeClass('d-none');
                $('.big-photo .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_right_for_black.png"]').removeClass('d-none');
                $('.big-photo .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_front_for_black.png"]').removeClass('d-none');
                /*$('.big-photo .print[src*="start_logo"][src*="left_for_black"]').attr('src', 'img/print/start_logo_' + $('.container-for-position input[name="logo-position-left[]"]:checked').length + '_left_for_black.png');*/
                $('.small-photo.active').click();
            }else{
                $('.small-photo.right .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.small-photo.front .print[src*="logo"][src*="front"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="front"]').addClass('d-none');

                $('.small-photo.right .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_right.png"]').removeClass('d-none');
                $('.small-photo.front .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_front.png"]').removeClass('d-none');
                $('.big-photo .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_right.png"]').removeClass('d-none');
                $('.big-photo .print[src*="start_logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_front.png"]').removeClass('d-none');
                /*$('.big-photo .print[src*="start_logo"][src*="left"]:not([src*="for_black"])').attr('src', 'img/print/start_logo_' + $('.container-for-position input[name="logo-position-left[]"]:checked').length + '_left.png');*/
                $('.small-photo.active').click();
            }

        }else{
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.right .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.small-photo.front .print[src*="logo"][src*="front"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="front"]').addClass('d-none');

                $('.small-photo.right .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_right_for_black.png"]:not([src*="start"])').removeClass('d-none');
                $('.small-photo.front .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_front_for_black.png"]:not([src*="start"])').removeClass('d-none');
                $('.big-photo .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_right_for_black.png"]:not([src*="start"])').removeClass('d-none');
                $('.big-photo .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_front_for_black.png"]:not([src*="start"])').removeClass('d-none');

                $('.small-photo.active').click();
                /* $('.big-photo .print[src*="logo"][src*="left"]:not([src*="start"])').attr('src', 'img/print/logo_' + $('.container-for-position input[name="logo-position-left[]"]:checked').length + '_left_for_black.png');*/

            }else{
                $('.small-photo.right .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.small-photo.front .print[src*="logo"][src*="front"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="right"]').addClass('d-none');
                $('.big-photo .print[src*="logo"][src*="front"]').addClass('d-none');

                $('.small-photo.right .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_right.png"]:not([src*="start"])').removeClass('d-none');
                $('.small-photo.front .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_front.png"]:not([src*="start"])').removeClass('d-none');
                $('.big-photo .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_right.png"]:not([src*="start"])').removeClass('d-none');
                $('.big-photo .print[src*="logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length +'_front.png"]:not([src*="start"])').removeClass('d-none');

                $('.small-photo.active').click();
            }

        }

    }else{
        $('.small-photo.right .print[src*="logo"][src*="right"]').addClass('d-none');
        $('.small-photo.front .print[src*="logo"][src*="front"]').addClass('d-none');
        $('.big-photo .print[src*="logo"][src*="right"]').addClass('d-none');
        $('.big-photo .print[src*="logo"][src*="front"]').addClass('d-none');
        $('.small-photo.active').click();
    }




   /* if($('.container-for-position input[name="logo-position-right[]"]:checked').length){
        $('.small-photo.right .print[src*="logo"]').attr('src','img/print/logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_right.png');
        $('.small-photo.right .print[src*="logo"]').removeClass('d-none');
        $('.small-photo.front .print[src*="logo"]').attr('src','img/print/logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_front.png');
        $('.small-photo.front .print[src*="logo"]').removeClass('d-none');
        $('.big-photo .print[src*="logo"][src*="right"]').attr('src','img/print/logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_right.png');
        $('.big-photo .print[src*="logo"][src*="front"]').attr('src','img/print/logo_'+$('.container-for-position input[name="logo-position-right[]"]:checked').length+'_front.png');
        if($('.small-photo.right').hasClass('active')){
            $('.small-photo.right.active').click();
        }
        if($('.small-photo.front').hasClass('active')){
            $('.small-photo.front.active').click();
        }
    }
    else {
        $('.small-photo.right .print[src*="logo"]').addClass('d-none');
        $('.small-photo.right.active').click();
        $('.small-photo.front .print[src*="logo"]').addClass('d-none');
        $('.small-photo.front.active').click();
    }*/
    /*логотипы*/


    /*Нумериция*/
    if($('#num-position-left').prop('checked') && ($('#num-ascending').prop('checked') || $('#num-different').prop('checked'))){
        if($('#type-head-start').prop('checked')){
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.left .print[src="img/print/start_number_left_for_black.png"]').removeClass('d-none');
                $('.small-photo.left .print[src="img/print/start_number_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left_for_black.png"]').addClass('d-none');
            }else{
                $('.small-photo.left .print[src="img/print/start_number_left.png"]').removeClass('d-none');
                $('.small-photo.left .print[src="img/print/start_number_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left_for_black.png"]').addClass('d-none');
            }
        }
        else{
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.left .print[src="img/print/start_number_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/start_number_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left_for_black.png"]').removeClass('d-none');
            }else{
                $('.small-photo.left .print[src="img/print/start_number_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/start_number_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left.png"]').removeClass('d-none');
                $('.small-photo.left .print[src="img/print/number_left_for_black.png"]').addClass('d-none');
            }
        }
        $('.small-photo.active').click();

    }
    else {
        $('.small-photo.left .print[src="img/print/start_number_left.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/start_number_left_for_black.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/number_left.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/number_left_for_black.png"]').addClass('d-none');
        $('.small-photo.active').click();

    }
    if($('#num-position-right').prop('checked') && ($('#num-ascending').prop('checked') || $('#num-different').prop('checked'))){
        if($('#type-head-start').prop('checked')){
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.right .print[src="img/print/start_number_right_for_black.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front_for_black.png"]').removeClass('d-none');
                $('.small-photo.right .print[src="img/print/start_number_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front_for_black.png"]').addClass('d-none');
            }
            else{
                $('.small-photo.right .print[src="img/print/start_number_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/start_number_right.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front.png"]').removeClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front_for_black.png"]').addClass('d-none');
            }
        }
        else{
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.right .print[src="img/print/start_number_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/start_number_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right_for_black.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front_for_black.png"]').removeClass('d-none');
            }
            else{
                $('.small-photo.right .print[src="img/print/start_number_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/start_number_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_number_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front.png"]').removeClass('d-none');
                $('.small-photo.right .print[src="img/print/number_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/number_front_for_black.png"]').addClass('d-none');
            }
        }
        $('.small-photo.active').click();


    }
    else {
        $('.small-photo.right .print[src="img/print/start_number_right_for_black.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/start_number_front_for_black.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/start_number_right.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/start_number_front.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/number_right.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/number_front.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/number_right_for_black.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/number_front_for_black.png"]').addClass('d-none');
        $('.small-photo.active').click();
    }
    /*Нумериция*/

    /*фамилии*/
    if($('#family-position-left').prop('checked') && $('.container-for-family .family').length){
        if($('#type-head-start').prop('checked')){
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.left .print[src="img/print/start_family_left_for_black.png"]').removeClass('d-none');
                $('.small-photo.left .print[src="img/print/start_family_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left.png"]').addClass('d-none');
            }else{
                $('.small-photo.left .print[src="img/print/start_family_left.png"]').removeClass('d-none');
                $('.small-photo.left .print[src="img/print/start_family_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left.png"]').addClass('d-none');
            }
        }else{
            if($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo.left .print[src="img/print/start_family_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/start_family_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left_for_black.png"]').removeClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left.png"]').addClass('d-none');
            }else{
                $('.small-photo.left .print[src="img/print/start_family_left.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/start_family_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left_for_black.png"]').addClass('d-none');
                $('.small-photo.left .print[src="img/print/family_left.png"]').removeClass('d-none');
            }
        }
        $('.small-photo.active').click();
    }
    else {
        $('.small-photo.left .print[src="img/print/start_family_left.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/start_family_left_for_black.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/family_left_for_black.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/family_left.png"]').addClass('d-none');
        $('.small-photo.active').click();

    }

    if($('#family-position-right').prop('checked') && $('.container-for-family .family').length) {
        if ($('#type-head-start').prop('checked')) {
            if ($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')) {
                $('.small-photo.right .print[src="img/print/start_family_right_for_black.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front_for_black.png"]').removeClass('d-none');
                $('.small-photo.right .print[src="img/print/start_family_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front.png"]').addClass('d-none');
            }else{
                $('.small-photo.right .print[src="img/print/start_family_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/start_family_right.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front.png"]').removeClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front.png"]').addClass('d-none');
            }
        }else{
            if ($('#color-head-black').prop('checked') || $('#color-head-nautical').prop('checked') || $('#color-head-pearl-fleet').prop('checked')) {
                $('.small-photo.right .print[src="img/print/start_family_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/start_family_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right_for_black.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front_for_black.png"]').removeClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front.png"]').addClass('d-none');
            }else{
                $('.small-photo.right .print[src="img/print/start_family_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/start_family_right.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/start_family_front.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right_for_black.png"]').addClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front_for_black.png"]').addClass('d-none');
                $('.small-photo.right .print[src="img/print/family_right.png"]').removeClass('d-none');
                $('.small-photo.front .print[src="img/print/family_front.png"]').removeClass('d-none');
            }
        }
        $('.small-photo.active').click();
    }
    else {
        $('.small-photo.right .print[src="img/print/start_family_right_for_black.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/start_family_front_for_black.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/start_family_right.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/start_family_front.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/family_right_for_black.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/family_front_for_black.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/family_right.png"]').addClass('d-none');
        $('.small-photo.front .print[src="img/print/family_front.png"]').addClass('d-none');
        $('.small-photo.active').click();
    }


    /*фамилии*/


   /* if($('#type-head-start').prop('checked')){
        $('.small-photo.front .print[src="img/print/madwave_front.png"]').addClass('d-none');
        if($('.small-photo.front').hasClass('active')){
            $('.small-photo.front').click();
        }
    }
    else{
        $('.small-photo.front .print[src="img/print/madwave_front.png"]').removeClass('d-none');
        if($('.small-photo.front').hasClass('active')){
            $('.small-photo.front').click();
        }
    }

    if($('#type-head-start').prop('checked')) {
        $('.small-photo.front .print[src="img/print/madwave_front.png"]').addClass('d-none');
        $('.small-photo.left .print[src="img/print/madwave_left.png"]').addClass('d-none');
        $('.small-photo.right .print[src="img/print/madwave_right.png"]').addClass('d-none');
        if ($('.small-photo.front').hasClass('active')) {
            $('.small-photo.active').click();
        }
    }else{
        /*$('.small-photo.front .print[src="img/print/madwave_front.png"]').removeClass('d-none');
        $('.small-photo.left .print[src="img/print/madwave_left.png"]').removeClass('d-none');
        $('.small-photo.right .print[src="img/print/madwave_right.png"]').removeClass('d-none');*/
        /*if ($('.small-photo.front').hasClass('active')) {
            $('.small-photo.active').click();
        }
    }*/
  /* $('.container-radio input')
        .prop('disabled',false)
        .next('label')
        .addClass('order-0')
        .removeClass('no-active order-1');
    if($('#type-head-start').prop('checked')){
        $('.container-radio input:not(#color-head-black, #color-head-white, #color-head-light-grey, #color-head-lighter-blue)')
            .prop('disabled', true)
            .next('label')
            .addClass('no-active order-1');

    }
    if($('#type-head-volume').prop('checked')){
        $('#color-head-bright-red, #color-head-green-leaf, #color-head-nautical, #color-head-pearl-fleet ,#color-head-blue, #color-head-light-blue')
            .prop('disabled',true)
            .next('label')
            .addClass('no-active order-1');
    }
    if($('.container-radio input:checked').prop('disabled')){
        $('#color-head-black').click();
    }*/

   /* $('#color-head-black, #color-head-nautical, #color-head-pearl-fleet ').on('change',function (){
        if($(this).prop('checked')){
            $('.small-photo .print:not(.d-none)').each(function () {
                let url_full = $(this).attr('src').slice(0,-4),
                    new_url = url_full  + '_for_black.png';

                console.log(url_full);
                /*console.log(url_begin);
                console.log(url_middle);
                console.log(new_url);


                $(this).addClass('d-none');
                $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                $('.small-photo.active').click();

            });
        }
        else{
            if(!$('#color-head-black').prop('checked') || !$('#color-head-nautical').prop('checked') || !$('#color-head-pearl-fleet').prop('checked')){
                $('.small-photo .print[src*="_for_black"]:not(.d-none)').each(function () {

                    let new_url = $(this).attr('src').replace('_for_black','')

                    $(this).addClass('d-none');
                    $(this).parent().find('img[src="' + new_url + '"]').removeClass('d-none');
                    $('.small-photo.active').click();
                });
            }
        }
    });*/


}

