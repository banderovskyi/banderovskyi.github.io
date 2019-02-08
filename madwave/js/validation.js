$(function() {
    $.validator.prototype.checkForm = function() {
        this.prepareForm();
        for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
            let els = $('[name="'+elements[i].name+'"]:visible').toArray();//this.findByName(elements[i].name);
            if (els.length != undefined && els.length > 1) {
                for (var cnt = 0; cnt < els.length; cnt++) {
                    this.check(els[cnt]);
                }
            } else {
                this.check(elements[i]);
            }
        }
        return this.valid();
    };

    $.validator.prototype.resetElements = function( elements ) {
        var i;

        if ( this.settings.unhighlight ) {
            for ( i = 0; elements[ i ]; i++ ) {
                let els = $('[name="'+elements[i].name+'"]:visible').toArray();//this.findByName(elements[i].name);
                if (els.length != undefined && els.length > 1) {
                    for (var cnt = 0; cnt < els.length; cnt++) {
                        this.settings.unhighlight.call( this, els[cnt],
                            this.settings.errorClass, "" );
                    }
                }
                this.settings.unhighlight.call( this, elements[ i ],
                    this.settings.errorClass, "" );
                $(this).find("[name='" + elements[ i ].name + "']").removeClass( this.settings.validClass );
            }
        } else {
            elements
                .removeClass( this.settings.errorClass )
                .removeClass( this.settings.validClass );
        }
    };

    $.validator.addMethod("numFullQuantity", function(value, element) {
            let a = 0,
                b = 0,
                c = 0,
                q = 0;

            if($('[name="num_ascending_end"]:visible:enabled') && $('[name="num_ascending_begin"]:visible:enabled')){
                a = $('[name="num_ascending_end"]:visible:enabled').val();
                b = $('[name="num_ascending_begin"]:visible:enabled').val();
            }
            $('[name="num-different-quan[]"]:visible:enabled').each(function(){
                    c += +$(this).val();
            });
            if(a+b>0){
                q = ((a-b)+1)+c;
            }
            else{
                q = c;
            }


            //return isNaN(a + b + c) || (q <= +$('#quantity-head').val());
            return  q <= +$('#quantity-head').val();
        },
        "Количество шапочек в заказе меньше чем указанно в нумерации");


    /*$.validator.addMethod("numAscendingTrueInterval", function(value, element) {
            let a = parseFloat($('[name="num_ascending_end"]:visible:enabled').val()),
                b = parseFloat($('[name="num_ascending_begin"]:visible:enabled').val()),
                c = parseFloat($('[name="num_ascending_step"]:visible:enabled').val());

            return isNaN(a + b + c) || !((a-b)%c) ;
        },
        "Указан неверный интервал");*/
    /*$.validator.addMethod("numDifferentQuantity", function(value, element) {

        let numDifferentQuantity = 0;
            $('.num-different-piece .counter-input').each(function(){
                numDifferentQuantity+= +this.value;
            });
        return numDifferentQuantity <= +$('#quantity-head').val();

        },
        "Количество шапочек меньше чем указано в нумерации.");*/


    $.validator.addMethod("familyCount", function(value, element) {
        let $families = $('.container-for-family input[name="family_quan[]"]'),
            familiesQuantity = 0;
            $families.each(function(){
                familiesQuantity += +this.value;
            });
            return familiesQuantity <= +$('#quantity-head').val();
    },"Количество фамилий больше чем количество шапочек. Уменьшите количество фамилий или добавьте количество шапочек");

    $('#logo-no').on('click', function(){
        $('input[name="logo-file[]"]').rules('remove','extension');
        $('input[name="logo-file[]"]').rules('add', {
            extension: "jpg|png",
            messages:{
                extension:"Выберите файл с расширением jpg, png или удалите"
            }
        });
    });
    $('#logo-yes').on('click', function(){
        $('input[name="logo-file[]"]').rules('remove','extension');
        $('input[name="logo-file[]"]').rules('add', {
            extension: "cdr|pdf|ai",
            messages:{
                extension:"Выберите файл с расширением cdr, pdf,ai или eps или удалите"
            }
        });
    });

    $('form').validate({
        groups: {
            NumAscendingGroup: "num_ascending_begin num_ascending_end"
        },
        rules: {
            "logo-file[]":{
                required: true,
                extension: "cdr|pdf|ai|eps"
            },
            num_ascending_begin: {
                required: true,
                digits: true,
                numFullQuantity:true,
            },
            num_ascending_end: {
                required: true,
                digits: true,
                numFullQuantity:true,
            },

            "num-different-numder[]":{
                required: true,
                digits: true,
            },
            "num-different-quan[]":{
                numFullQuantity: true
            },
            "family[]": {
                required: true,
            },
            "family_quan[]":{
                familyCount: true,
            },
            "quantity-head":{
                min:1
            },
            "contacts-email":{
                email: true,
            },
        },
        messages:{
            "logo-file[]":{
                required: "Выберите файл или удалите",
                extension: "Выберите файл с расширением cdr, pdf, ai или eps или удалите"
            },
            num_ascending_begin:{
                digits: "В этом поле должны быть только цифры",
                required: "Это поле обязательно для заполнения"

            },
            num_ascending_end:{
                digits: "В этом поле должны быть только положительные цифры",
                required: "Это поле обязательно для заполнения",
            },
            "num-different-numder[]":{
                required: "Введите номер или удалите",
                digits: "В этом поле должны быть только цифры"
            },
            "family[]": {
                required: "Введите фамилию или удалите"
            },
            "quantity-head":{
                min: "Укажите количество шапочек"
            },
        },
        errorClass: "error",
        errorElement: "div",
        errorPlacement: function(error, element) {
            /*if (element.attr("name") == "num_ascending_begin" || element.attr("name") == "num_ascending_end" || element.attr("name") == "num_ascending_step" ) {
                error.appendTo(element.parents('.container-for-ascending'));
            } else {
                error.insertAfter(element);
            }*/
            error.appendTo(element.parents('.item'));
        },
        /*highlight: function(element, errorClass) {
            $(element).addClass('error error-input');
        },
        unhighlight: function(element, errorClass) {
            $(element).removeClass('error error-input');
        },*/
    });
});