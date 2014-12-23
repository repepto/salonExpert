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

//____________________________


var ua = navigator.userAgent.toLowerCase();
var isOpera = (ua.indexOf('opera')  > -1);
var isIE = (!isOpera && ua.indexOf('msie') > -1);

function getDocumentHeight() {
    return Math.max(document.compatMode != 'CSS1Compat' ? document.body.scrollHeight : document.documentElement.scrollHeight, getViewportHeight());
}

function getViewportHeight() {
    return ((document.compatMode || isIE) && !isOpera) ? (document.compatMode == 'CSS1Compat') ? document.documentElement.clientHeight : document.body.clientHeight : (document.parentWindow || document.defaultView).innerHeight;
}

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
        $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px");
    return this;
}


function scrollWidth() {
    var div = $('<div>').css({
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100px",
        height: "100px",
        visibility: "hidden",
        overflow: "scroll"
    });

    $('body').eq(0).append(div);

    var width = div.get(0).offsetWidth - div.get(0).clientWidth;

    div.remove();

    return width;
}

function popWork(p_url, hed, des)
{

    var img = new Image()

    img.src = p_url
    img.id="dynamic"
    img.onerror = function (e) { alert('ошибка при загрузке изображения') }
    if(img.complete)
    {
        popup(hed, des, img.width, img)
        return
    }

    else img.onload = function (e) {

        popup(hed, des, img.width, img)
    }
}

function popup(hed, des, wdth, addObj)
{
    var header = hed
    var description = "<p>" + des + "</p>"

    var divCl = $('<div>').css({
        position:"absolute",
        top: "7px",
        right: "0"
    });
    $(divCl).addClass("nav")
    $(divCl).append("&nbsp;&nbsp;закрыть&nbsp;&nbsp;")




    $(divCl).click(function(event)
    {
        popupRemove();
    });

    var div = $('<div>').css({
        width:wdth+"px",
        height:0,
        overflow: "hidden",
        "background-color": "#303030",
        padding: "20px",
        "z-index":778,
        opacity:'0'
    });
    $(div).center()

    var divH = $('<div>').css({position:"absolute", width:wdth+"px"});



    $('body').append(div);



    $(div).attr("id","close2")

    $(divH).append(header)
    $(divH).append(divCl)
    $(divH).append("<hr style='margin-top:21px'>")
    $(divH).append(description)
    if(addObj != null)$(divH).append(addObj)
    $(div).append(divH)

    $(divH).imagesLoaded(function()
    {
        $('#status1').remove()

        var hght=$(divH).outerHeight()

        var pTop=Math.max(0, (($(window).height() - hght) / 2) +
            $(window).scrollTop()) - 20 + "px";

        if(hght > $(window).height())
        {
            var pTop=$(window).scrollTop()
            var bh=getDocumentHeight()
            var dth = pTop + hght - bh + 37
            if(dth>0)
            {
                $("#close1").css({height:(bh+dth)+"px"})
            }
        }


        var pLeft=Math.max(0, (($(window).width() - $(div).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px";

        $(div).animate({opacity:'0'},0);
        $(div).animate({
            height:hght + "px",
            top: pTop,
            left: pLeft,
            opacity:'1'
        },700,"easeInOutQuart");
    })
}


function blackLayer() {

    wh = $(window).height();
    ww = $(window).width();


    var divB = $('<div>').css({
        position: "absolute",
        top:  "0px",
        left: "0px",
        width: ww+"px",
        height: getDocumentHeight(),
        "background-color": "#000",
        "z-index":777
    });

    var pre = $('<div>')
    $(pre).attr('id','status1')
    $(pre).center()
    $(pre).animate({opacity:'0'},0);
    $(pre).animate({opacity:'.87'},1400);


    $('body').append(divB);
    $('body').append(pre)

    $(divB).animate({opacity:'0'},0);
    $(divB).animate({opacity:'.87'},700);

    $(divB).attr("id","close1");
}

$(".abs").click(function(event)
{
    blackLayer();
    gotoScript="get_secret/"
    sect=$(event.target).attr("name")

    switch (sect)
    {
        case "promo":gotoScript="get_promo/";break
        case "staff":
            $.get("../get_staff/", {s_id:$(event.target).attr("id")}, function(data) {
            popWork(data.p, data.h, data.d)
        }); return; break;
        case "work":
            $.get("../get_work/", {w_id:parseInt(event.target.id), s_id:parseInt($(event.target).attr("sid"))}, function(data) {
            popWork(data.p, data.h, data.d)
        }); return; break;
    }

    $.get("../"+gotoScript, {s_id:$(event.target).attr("id")}, function(data) {
        popup(data.h, data.d, 600, null);
    });
})

function popupRemove() {

    topPos = parseInt($("#close2").css("top")) + parseInt($("#close2").css("height"))/2

    $("#close2").animate({
            height: "0px",
            opacity:"0",
            top: topPos+"px"
        },700,"easeInOutQuart", function(){$("#close2").remove()}
    );

    $("#close1").animate({
            opacity:"0"
        },700,"easeInOutQuart", function(){$("#close1").remove();}
    );
}



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



$(window).load(function()
{
    $('#pre_loader').fadeOut('slow');
});
