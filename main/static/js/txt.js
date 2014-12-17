function res(){

    w = $(window).width();

    popupRemove();

    deltaX=200;

    if(w >= 1900) {w /= 4;}
    else if(w >= 1300) {w /= 3;}
    else if(w >= 800) {w /= 2;}

    totalW = $(".s1").size() * w;

    //$("#nobr").css("width", totalW);
    $(".s1").css("width", w - 122);


    maxH=0;

    $(".hgh").each(function(ind, el)
    {
        h=parseInt($(el).height())
        if(maxH < h){maxH=h;}
    });

    $(".s1").each(function(ind, el)
    {
       $(el).height(maxH + 47)
    });
}

$(".abs").click(function(event)
{
    blackLayer();
    gotoScript="get_secret/"
    sect=$(event.target).attr("name")

    switch (sect)
    {
        case "promo":gotoScript="get_promo/";break
    }

    $.get("../"+gotoScript, {s_id:$(event.target).attr("id")}, function(data) {
        popup(data.h, data.d, 600, null);
    });
})

$(document).ready(function()
{
    res();

    $(window).resize(function()
    {
        res();
    });
});
