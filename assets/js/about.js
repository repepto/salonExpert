var maxW=0

$(window).load(function () {
    $('#pre_loader').fadeOut('slow')

    $('.wdt60').find('img').each(function(indx, element){
        if(maxW<$(element).width())
        {
            maxW=$(element).width()
        }
    });
    res();
});

$(window).resize(function()
{
    res();
});

function res(){

    w = $(window).width();

    wl=w*60/100+'px'
    wr=w*40/100+'px'

    if(parseFloat(wl)<maxW+120)
    {
        if(w-(maxW+120)>300)
        {
            $('.wdt60').css({'width':(maxW + 120) + 'px'})
            $('.wdt40').css({'width':(w-(maxW+120)) + 'px'})
        }
        else
        {
            $('.wdt60').css({'width':'100%'})
            $('.wdt40').css({'width':'100%'})
        }
    }
    else
    {
        $('.wdt60').css({'width':wl})
        $('.wdt40').css({'width':wr})
    }
}