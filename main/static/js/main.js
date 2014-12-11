$(function(){
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top < 449) {
            $("#fix").css({top: '0', position: 'relative'});
            $("#head").css({"margin-bottom": '0px'});
        }
        else {
            $("#fix").css({top: '-1px', position: 'fixed'});
            $("#head").css({"margin-bottom": '62px'});
        }
    });
});

/*$("form").submit(function(event){
	var error = false;

	$(this).find("[type=search]").each(function(){
        if (!$(this).val().length) {
			$(this).focus();
			error = true;
			return false; // Only exits the “each” loop
		}
	});
	if (error) {
		event.preventDefault();
	}
});*/

$("form").submit(function(event){
	if (invalid()) {
		event.preventDefault();
	}
});

function invalid(){
    var error = false;
    if (!$("input").val().length) {
		return true
	}
	if (error) {
		return false
	}
}

$("#search").click(function(){
    if (invalid()) {
		event.preventDefault();
	} else $("form").submit()
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