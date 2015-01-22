var pos=0

$(document).ready(function()
{
    //alert($('#set').css("left"))
   // alert($('.logos').css("width"))


    //$('.logo').addClass(".test")


   // var pos=-1* parseFloat($('#set').css("width"))

    //$('.logo').addClass('test');


    $('.logo').each(
        function(i)
        {
           pos+=(parseInt($(this).width())+60)
           // alert($(this).width())
        }
    )

    //alert(pos/2)
    if($(window).width() < pos) go1()
    res()

   //$('#set').animate({left:-(400 + 4*60)},11000, "linear", function(){allowClick=true})
});

function go1()
{
    $('#set').animate({left:-pos/3},pos*7, "linear", function()
    {
        $('#set').css("left", 0)
        go1()
    })
}

$(window).resize(function()
{
    res()
});

function res()
{

    w = $(window).width()

    num=Math.floor(w/280)
    marg=(w-num*280)/num
    marg/=2
    $('.logosT').css(
        {
            "margin-left":29 + marg,
            "margin-right":29 + marg
        }
    )

    maxH=0

    $(".logosT").each(function(ind, el)
    {
        h=parseInt($(el).height())
        if(maxH < h){maxH=h}
    })

    $(".logosT").each(function(ind, el)
    {
       $(el).height(maxH)
    })
}