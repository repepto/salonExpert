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

    img.onload = function (e) {

        popup(hed, des, img.width, img)
    }
}

function popup(hed, des, wdth, addObj)
{
    header = "<h1 id='workH1' style='display:inline'>"+ hed+"</h1>"
    description = "<p id='workP'>" + des + "<br><br></p>"

    var divCl = $('<div>').css({
        float:"right",
        height: "24px",
        padding: "7px",
        "padding-bottom": "0"
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
        padding: "20px"
    });
    $(div).center()


    $('body').eq(0).append(div);

    $(div).attr("id","close2")

    $(div).append(header)
    $(div).append(divCl)
    $(div).append(description)


    if(addObj!=null)hght=addObj.height+27;
    else hght=0
    hght+=$('#workH1').height()
    hght+=$('#workP').height()



    var pTop=Math.max(0, (($(window).height() - hght) / 2) +
        $(window).scrollTop()) - 20 + "px";


    var pLeft=Math.max(0, (($(window).width() - $(div).outerWidth()) / 2) +
        $(window).scrollLeft()) + "px";

    $(div).animate({opacity:'0'},0);
    $(div).animate({
        height:hght + "px",
        top: pTop,
        left: pLeft,
        opacity:'1'
    },700,"easeInOutQuart");

    if(addObj != null)div.append(addObj)
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
        "background-color": "#000"
    });

    $('body').eq(0).append(divB);

    $(divB).animate({opacity:'0'},0);
    $(divB).animate({opacity:'.87'},700);

    $(divB).attr("id","close1");
}

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






$(document).ready(function() {
    res();

    var step;
    var allowClick=true;


    function res(){
        w = $(window).width()

        popupRemove();

        bw = parseInt(w/2) - 68;


        $(".serviceImg").css("width", bw/2 - 5);
        $(".serviceImg").css("width", bw/2 - 5);

        $(".service").css("width", bw);

        step=bw/2+8.5;
        //$(".serviceImg").css("margin-right", imgW);

        $(".scrollAble").css("left",0);



        $(".bService").each(function(indx, el){

           if($(el).attr("id") != undefined) n = $(el).attr("id").charAt(0);

            if(n=="l")
            {
               $(el).removeClass("na");
                $(el).addClass("nav");
            }
           else
            {
               $(el).removeClass("nav");
                $(el).addClass("na");
            }

        });

        maxH=0;

        $(".val").each(function(ind, el)
        {
            h=parseInt($(el).height())
            if(maxH < h){maxH=h;}
        });

        $(".serviceDiv").each(function(ind, el)
        {
           $(el).height(maxH + 20)
        });

    }

    $(window).resize(function()
    {
       res();
    });

    $(".bb").click(function(event)
    {

        if(!allowClick)return;

        var tempId = event.target.id;
        var dir = -1;


        id=tempId.substr(1, tempId.length - 1);
        divId="#s"+id;

        if(tempId.charAt(0) == "l")
        {
            dir=1;

            //if(parseInt($(divId).css("left")) == 0)
            {
                $('#r' + id).removeClass("na");
                $('#r' + id).addClass("nav");
            }
            //else
            if(parseInt($(divId).css("left")) <= -step * ($(divId).children().length - 3) + 2)
            {
                if(parseInt($(divId).css("left")) <= -step * ($(divId).children().length - 2) + 2) return;
                $('#l' + id).removeClass("nav");
                $('#l' + id).addClass("na");
            }

        }
        else
        {
            //if(parseInt($(divId).css("left")) == -step * ($(divId).children().length - 2))
            {
                $('#l' + id).removeClass("na");
                $('#l' + id).addClass("nav");
            }
            //else
            if(parseInt($(divId).css("left")) >= -step-2)
            {
                if(parseInt($(divId).css("left")) >= -2) return;
                $('#r' + id).removeClass("nav");
                $('#r' + id).addClass("na");
            }
        }

        pos = parseInt($(divId).css("left"));

        $(divId).animate({left:pos-step*dir},800, "easeOutQuart", function(){allowClick=true;});
        allowClick=false;
    });

    $(".serviceImg").click(function(event)
    {
        $.get("../get_work/", {w_id:event.target.id, s_id:$(event.target).attr("sid")}, function(data) {
                // Відобразити результат
            blackLayer();
            popWork(data.p, data.h, data.d);

        });
    });

});
