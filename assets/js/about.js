var maxW=0

$(window).load(function () {

     $('.wdt60').find('img').each(function(indx, element){

         $(element).css({'max-width':$(element).width()})
         $(element).css({'max-height':$(element).height()})

    });

    res();
});

$(window).resize(function()
{
    res();
});

function res(){

    w = $(window).width();

    if(parseFloat(w) < 770)
    {
        $('.wdt60').css({'width':'99%'})
        $('.wdt40').css({'width':'100%'})
    }
    else
    {
        $('.wdt60').css({'width':'60%'})
        $('.wdt40').css({'width':'40%'})
    }

    //alert(parseFloat($('.wdt60').width()) + ';;;wdt60');
   // alert(parseFloat(w) + ';;;w');

    $('.wdt60').children().each(function(indx, element){

        pw=parseFloat($('.wdt60').width()) - 120
       // alert(pw);

        $(element).css({'width':pw})
    });

    $('.wdt40').children().each(function(indx, element){

        pw=parseFloat($('.wdt40').width()) - 120
       // alert(pw);

        $(element).css({'width':pw})
    });


    $('.wdt60').find('img').each(function(indx, element){

        pw=parseFloat($(element).parent().width())
        curW = parseFloat($(element).width())
       // alert(pw);

        $(element).css({'width':pw})

        divider = curW/pw
        hw=parseFloat($(element).height())
        hw/=divider
        $(element).css({'height':hw})
    });
}