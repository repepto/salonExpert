$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 448) {
            $("#fix").css({top: '0', position: 'relative'});
            $("#head").css({"margin-bottom": '0px'});
        }
        else {
            $("#fix").css({top: '0px', position: 'fixed'});
            $("#head").css({"margin-bottom": '62px'});
        }
    });
});


$(document).ready(function()
{

    //$("body").css("margin-top", "-1000px");

    $(window).load(function()
    {
        //$("body").animate({"margin-top":"0"},1000,"easeOutQuint");
        $('#pre_loader').fadeOut('slow');
    });



    /*$("br").click(function()
    {
        $(".head").animate({height:130}, 800, 'easeInOutQuart');
        $("#logo").animate({top:25, height:60}, 800, 'easeInOutQuart');
        //$(".logotype").slideUp(1000);
        $("head").animate({
            'background-position-x': '10%',
            'background-position-y': '20%'
        }, 800, 'easeInOutQuart')
    });*/
});