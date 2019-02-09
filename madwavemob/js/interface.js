$(function() {
    $('form input').on('change', function () {
        $('form').validate().resetForm();
        $('form').valid();
    });

    /*НАЧАЛО -> Первый пукнт*/
    $('.container-for-type').on('click', function() {
         $(this).parent()
             .find('.container-for-type.active')
             .removeClass('active');
        $(this).addClass('active');
        $(this).find('input[name="type-head"]').prop('checked', true);
            if($(this).find('.container-for-size').length){
            $('.container-for-size input').prop('disabled', false);
        }
        else{
            $('.container-for-size input').prop('disabled', true);
        }
        calc();

    });


    /*КОНЕЦ -> Первый пукнт*/




    /*НАЧАЛО -> Удаление элементов*/
    $('.remove-btn').on('click', function () {

        $(this).parent().remove();
        $('.tabs .active').removeClass('done');
        calc();

    });
    /*КОНЕЦ -> Удаление элементов*/

    $('form input').on('change', function () {
        $('.tabs .active').removeClass('done');
    });


    /*НАЧАЛО -> Счетчики*/



    $('.counter-minus').on('click', function() {
        let $input = $(this).parent().find('.counter-input');

        if($input.prop('disabled'))
            return;

        $input.val(+$input.val() - 1)
            .change();
    });

    $('.counter-plus').on('click', function() {
        let $input = $(this).parent().find('.counter-input');

        if($input.prop('disabled'))
            return;

        $input.val(+$input.val() + 1)
            .change();
    });

    $('.counter-input').on('keypress', function (e) {
        function getChar(event) {
            if (event.which == null) {
                if (event.keyCode < 32) return null;
                return String.fromCharCode(event.keyCode) // IE
            }

            if (event.which != 0 && event.charCode != 0) {
                if (event.which < 32) return null;
                return String.fromCharCode(event.which) // остальные
            }

            return null; // специальная клавиша
        }

        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) return;

        var chr = getChar(e);

        // с null надо осторожно в неравенствах,
        // т.к. например null >= '0' => true
        // на всякий случай лучше вынести проверку chr == null отдельно
        if (chr == null) return;

        if (chr < '0' || chr > '9') {
            return false;
        }

    });

    $('.counter-input').on('input', function (e) {
        this.value = +this.value;
    });


    $('.counter-input').on('change', function() {
        let $this = $(this),
            min = +$this.data('min') || 1,
            max = +$this.data('max') || Infinity;

        if (isNaN(parseFloat($this.val())) || isNaN($this.val())){
            $this.val(min);
            return;
        }

        if (+$this.val() < min)
            $this.val(min);
        else if (+$this.val() > max)
            $this.val(max);
    });

    $('.tab-3 .counter-input').on('change', function() {
        let count = 0;
        $('.tab-3 .logo .counter-input:enabled').each(function () {
            count += +this.value;
        });

        if (count > MAX_LOGO_COLOR_QUANTITY)
            this.value--;
    });
    $('.tab-3 .container-for-logo-no-color-quatity .counter-input').on('change', function() {
        if ($(this).val() > MAX_LOGO_COLOR_QUANTITY)
            this.value--;
    });


    /*КОНЕЦ -> Счетчики*/

    /*НАЧАЛО -> Добавление логотипов*/
    $('.add-logo-btn').on('click', function () {
        let $parent = $(this).parent(),
            number = (+$parent.find('.logo:last-child ').data('number') || 0) + 1;

        if($parent.find('.logo').length >= MAX_LOGO_QUANTITY) {
            $parent.find('.error-block')
                .text("Достигнуто максимальное количество логотипов(" + MAX_LOGO_QUANTITY + " логотипа)")
                .fadeIn()
                .delay(7000)
                .fadeOut();
            return;
        }

        let count = 0;
        $('.tab-3 .logo .counter-input:enabled').each(function () {
            count += +this.value;
        });
        if (count >= MAX_LOGO_COLOR_QUANTITY) {
            $parent.find('.error-block')
                .text("Достигнуто максимальное суммарное количество цветов в логотипах(" + MAX_LOGO_COLOR_QUANTITY + " цветов)")
                .fadeIn()
                .delay(7000)
                .fadeOut();
            return;
        }


        let $logo = $parent.find('.logo-template')
            .clone(true);
            $logo
                .toggleClass('d-none d-flex logo-template logo')
                .data('number', number)
                .find('.logo-desc')
                .append(number)
                .parent()
                .appendTo(
                    $parent.find('.container-for-logos')
                );
            $logo.find('input[name="logo-file[]"]')
                .attr("id","logo-file"+number);

        $('.tabs .active').removeClass('done');

        $('.tab-6 .container-for-position .position-logo').remove();
        $('#tab-3 .logo').each(function() {
             $('.tab-6').find('.position-logo-template')
                .clone(true)
                .toggleClass('position-logo-template position-logo d-none d-flex')
                .data('number', $(this).data('number'))
                .find('.name-object')
                .append($(this).data('number'))
                .parent()
                .appendTo($('.tab-6').find('.container-for-position'));
        });
        calc();
    });
    /*КОНЕЦ -> Добавление логотипов*/


    /*НАЧАЛО -> Добавление индивидуальной нумерации*/
    $('.add-num-different-btn').on('click', function () { // переделать на заебись
        let $parent = $(this).parent();
        let number = (+$parent.find('.num-different-piece:last-child ').data('number') || 0) + 1;

        let $numDifferent = $parent.find('.num-different-piece-template')
            .clone(true);
        $numDifferent
            .toggleClass('d-none d-flex num-different-piece-template num-different-piece')
            .data('number', number)
            .appendTo(
                $parent.find('.container-for-different')
            ).find('input')
            .prop('disabled', !$('#num-different').prop('checked'));
        $numDifferent.find('input[name="num-different-numder[]"]')
            .attr("id","num-different-numder"+number);
        $numDifferent.find('input[name="num-different-quan[]"]')
            .attr("id","num-different-quan"+number);
        calc();
    });
    /*КОНЕЦ  -> Добавление индивидуальной нумерации*/


    /*НАЧАЛО -> Добавление фамилий*/
    $('.add-family-btn').on('click', function () {
        let $parent = $(this).parent();
        let number = (+$parent.find('.family:last-child ').data('number') || 0) + 1;

        let $family = $parent.find('.family-template')
            .clone(true);

        $family
            .toggleClass('d-none d-flex family-template family')
            .data('number', number)
            .appendTo(
                $parent.find('.container-for-family')
            );
        $family.find('input[name="family[]"]')
            .attr("id","family"+number);
        $family.find('input[name="family_quan[]"]')
            .attr("id","family_quan"+number);
        calc();
    });

    /*КОНЕЦ  -> Добавление фамилий*/



    /*НАЧАЛО -> Третья таба*/
    $(".container-subtabs-btn input[type='radio']").on('change', function(){
        let msg = (this.id == "logo-yes")
            ? 'Загрузите ваши логотипы'
            : 'У меня есть логотип не в кривых';
        let msg2 = (this.id == "logo-yes")
            ? 'Загрузите ваш логотип в формате CDR, PDF, Ai, EPS'
            : 'Загрузите ваш логотип в формате JPG, PNG';


        $('.subtab-title').text(msg);
        $('.logo-prompt-1').text(msg2);
        $('#tab-3 .subtab .no-bar').toggleClass("d-none");
        $('#tab-3 .subtab .container-for-no-logo').toggleClass("d-none");
        $('#tab-3 .subtab .no-bar input').prop('disabled', (this.id == "logo-yes")/*!$(this).prop('disabled')*/);
        $('#tab-3 .subtab .container-for-no-logo input').prop('disabled', (this.id == "logo-yes")/*!$(this).prop('disabled')*/);
        $('#tab-3 .subtab hr').toggleClass("d-none");

    });

    $('#order-logo-create').on('change', function(){
        $('.counter-input , textarea').prop("disabled", !$(this).prop('checked'));
    });
    /*КОНЕЦ -> Третья таба*/

    /*НАЧАЛО -> Четвертая таба*/
    $('#num-ascending').on('change', function(){
        $('.container-for-ascending input').prop('disabled', !$(this).prop('checked'));
    });

    $('#num-different').on('click', function(){
        $('.container-for-different input').prop('disabled', !$(this).prop('checked'));
    });

    /*КОНЕЦ -> Четвертая таба*/


    /*НАЧАЛО -> Кнопка Далее.*/

    let tab_functions = {
        '#tab-1': function() {

            $('.container-radio input')
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
            }
        },
        '#tab-2': function() {

            //return 'Ошибка';

        },
        '#tab-3': function() {

            if (tab_functions['#tab-1']())
                return 'Заполните первую вкладку';
            if (tab_functions['#tab-2']())
                return 'Заполните вторую вкладку';


            $('.tab-6 .container-for-position .position-logo').remove();

            $('#tab-3 .logo').each(function() {
                $('.tab-6').find('.position-logo-template')
                    .clone(true)
                    .toggleClass('position-logo-template position-logo d-none d-flex')
                    .data('number', $(this).data('number'))
                    .find('.name-object')
                    .append($(this).data('number'))
                    .parent()
                    .appendTo($('.tab-6').find('.container-for-position'));
            });

        },
        '#tab-4': function() {

            if($('#num-ascending').prop('checked') || $('#num-different').prop('checked')){
                $('.tab-6 .position-num')
                    .removeClass('d-none')
                    .addClass('d-flex')
                    .find('input[type="checkbox"]')
                    .prop('disabled', false);
            }else{
                $('.tab-6 .position-num')
                    .removeClass('d-flex')
                    .addClass('d-none')
                    .find('input[type="checkbox"]')
                    .prop('disabled', true);
            }
        },
        '#tab-5': function() {

           /* $('.tab-5 .container-for-family input[name="family[]"]').each(function(){
                if(!$(this).val())
                    $(this).parent().remove();
            });*/

            if ($('.tab-5 .container-for-family input[name="family[]"]').length)
                $('.tab-6 .position-family')
                    .removeClass('d-none')
                    .addClass('d-flex')
                    .find('input[type="checkbox"]')
                    .prop('disabled', false);
            else
                $('.tab-6 .position-family')
                    .removeClass('d-flex')
                    .addClass('d-none')
                    .find('input[type="checkbox"]')
                    .prop('disabled', true);

        },
        '#tab-6': function() {

        },
        '#tab-7': function() {

        }
    };



    /*НАЧАЛО -> Кнопка Далее*/
    $('.btn-continue').on('click', function(){
        $('.tabs .active').parent()
            .next()
            .find('a')
            .click();
    });
    /*КОНЕЦ -> Кнопка Далее*/


    /*НАЧАЛО -> Кнопка Пропустить*/
    $('.btn-skip').on('click', function(){
        let $tab = $('.tabs .active').parent()
            .next()
            .find('a');
        if(!$tab.length)
            return;
        $('.elements > div').hide();
        $($tab.prop("hash")).show();

        $('h3').text($tab.data('title'));
        $('.tabs a').removeClass('active next-active');
        $tab.addClass('active')
            .parent()
            .next()
            .find('a')
            .addClass('next-active');

    });
    /*КОНЕЦ -> Кнопка Пропустить*/

    /*НАЧАЛО -> Скрываем все пункты и вешаем стили на кнопки сверху*/
    $(".tabs a").on("click", function (e) {
        if($('form').valid() || $('.tabs a[href="#tab-7"]').hasClass('active')) {


            e.preventDefault();
            let $tab = $('.tabs .active'),
                msg = tab_functions[$tab.prop("hash")]();
            if (msg) {
                $($tab.prop("hash")).find('.error-block')
                    .text(msg)
                    .fadeIn()
                    .delay(7000)
                    .fadeOut();
                return;
            }
            $tab.addClass('done');


            $('.elements > div').hide();
            $(this.hash).show();
            $('h3').text($(this).data('title'));
            $('.tabs a').removeClass('active next-active');
            $(this).addClass('active')
                .parent()
                .next()
                .find('a')
                .addClass('next-active');
            if($('#tab-7[style="display:block;"]') && $('.tabs a[href="#tab-7"]').hasClass('active')){
                $('#calc-form .photo-block').addClass('d-none');
                $('#calc-form .main-block').removeClass('col-lg-5 offset-lg-1 flex-column');
                $('#calc-form .main-block').addClass('col-12');
                $('#calc-form .main-block .elements').addClass('col-12 col-lg-7');
                $('#calc-form .main-block .calculation').addClass('col-12 col-lg-5 flex-column-reverse justify-content-end end-calculation');
                $('#calc-form .main-block .calculation .calculation-info').addClass('mt-0');

                $('.btn-skip, .btn-continue').addClass('d-none');
                $('.btn-continue[type="submit"]').removeClass('d-none');
            }
            else{
                $('#calc-form .photo-block').removeClass('d-none');
                $('#calc-form .main-block').addClass('col-lg-5 offset-lg-1 flex-column');
                $('#calc-form .main-block .elements').removeClass('col-12 col-lg-7');
                $('#calc-form .main-block .calculation').removeClass('col-12 col-lg-5  justify-content-end');
                $('#calc-form .main-block .calculation .calculation-info').removeClass('mt-0')

                $('.btn-skip, .btn-continue').removeClass('d-none');
                $('.btn-continue[type="submit"]').addClass('d-none');
            }
            calc();
        }
    });
    /*КОНЕЦ -> Скрываем все пункты и вешаем стили на кнопки сверху*/


    /*НАЧАЛО -> для чекбокслов на третьей табе*/

    $('#order-logo-paint').on('change', function(){
        if($(this).prop('checked')){
            $('#order-logo-create').prop('checked',false);
        }
    });
    $('#order-logo-create').on('change', function(){
        if($(this).prop('checked')){
            $('#order-logo-paint').prop('checked',false);
        }
    });


    /*КОНЕЦ -> для чекбокслов на третьей табе*/

    /*НАЧАЛО -> Событие на изменение надписи в логотипах если фаил добавлен*/
    $('input[name="logo-file[]"]').on('change', function(){
        $(this).parent('label').addClass('selected');
        $(this).parent().find('span').text('Фаил выбран');
    });

    /*НАЧАЛО -> Маска для инпута phone*/
    $("#contacts-phone").mask("8(999) 999-99-99");
    /*КОНЕЦ  -> Маска для инпута phone*/

    /*КОНЕЦ  -> Событие на изменение надписи в логотипах если фаил добавлен*/

    $('form').on('input', function(){
        calc();
        $('form').valid();
    });
    $('form').on('change', function(){
        $('form').valid();
        calc();
    });


    /*НАЧАЛО -> В размещении нельзя снимать check с обоих элементов*/
    $('.position-logo-template .checkbox-btn').on('click', function(){
      if($(this).find('input[type=checkbox]').prop('checked')){
          $(this).parent().find("input[type=checkbox]:not(:checked)").prop('checked', true);
      }
    });
    $('.position-num .checkbox-btn, .position-family .checkbox-btn ').on('click', function(){
        if($('#' + $(this).attr('for')).prop('checked')){
            $(this).parent().find("input[type=checkbox]:not(:checked)").prop('checked', true);
        }
    });
    /*КОНЕЦ  -> В размещении нельзя снимать check с обоих элементов*/

    /*НАЧАЛО -> Чтобы удалялись логотипы при смене вкладки*/

    $('#logo-yes, #logo-no').on('change', function(){
        $('.container-for-logos .logo .remove-btn').click();
        calc();
    });

    /*КОНЕЦ  -> Чтобы удалялись логотипы при смене вкладки*/


    /**/
    $("form").on('submit', function(e) {
        if ($(this).valid())
            $.ajax({
                type: "POST",
                url: $(this).attr('action'),
                data: new FormData(this),
                processData: false,
                contentType: false,
                success: function(data)
                {
                    alert(data); // show response from the php script.
                },
                error: function (data) {
                    alert('Ошибка' + data);
                },
            });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
    /**/
    /*-------ДЕЙСТВИЯ--------*/
   /* $('.add-logo-btn').click();
    $('.add-num-different-btn').click();*/
    /*$('.add-family-btn').click();*/
});