$(document).ready(function() {
    res();

    var step;
    var allowClick=true;

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

    function res(){
        w = $(window).width() //- scrollWidth();

        bigPhotoRemove();

         bw = parseInt(w/2) - 68;
       // bw = w/bw;

        //959

        /*if(bw>520)
        {
            paddingAdd = (bw - 520)/2;
            bw=520;
            $(".serviceImg").css("width", 240 + paddingAdd/2);
            $(".serviceImg").css("width", 240 + paddingAdd/2);
        }
         else if(bw<480)
        {
            bw=520;
            paddingAdd = (w - bw)/2;

            $(".serviceImg").css("width", 240 + paddingAdd);
            $(".serviceImg").css("width", 240 + paddingAdd);
        }

         else
        {
            $(".serviceImg").css("width", 240 + paddingAdd);
            $(".serviceImg").css("width", 240 + paddingAdd);
        }*/

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
            //alert(parseInt($(el).css("height")))
            h=parseInt($(el).height())
            if(maxH < h){maxH=h;}
        });

        $(".serviceDiv").each(function(ind, el)
        {
           $(el).height(maxH + 20)
        });
        //alert(maxHE)
    }

    $(window).resize(function()
    {
       res();
    });

    $(".bb").click(function(event)
    {

        if(!allowClick)return;
        //alert(event);
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
            bigFotoAdd(data.p, data.h, data.d);
        });
    });

    jQuery.fn.center = function () {
        this.css("position","absolute");
        this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
            $(window).scrollTop()) + "px");
        this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
            $(window).scrollLeft()) + "px");
        return this;
    }

    function bigFotoAdd(p_url, hed, des) {

        $("html,body").css("overflow","hidden");

        wh = $(window).height();
        ww = $(window).width();

        var divB = $('<div>').css({
            position: "absolute",
            top:  $(window).scrollTop() + "px",
            left: "0px",
            width: ww+"px",
            height: wh+"px",
            "background-color": "#000"
        });

        var divCl = $('<div>').css({
            float:"right",
            height: "24px",
            padding: "7px",
            "padding-bottom": "0"
        });
        $(divCl).addClass("nav")
        $(divCl).append("&nbsp;&nbsp;закрыть&nbsp;&nbsp;")

        $('body').eq(0).append(divB);

        $(divB).animate({opacity:'0'},0);
        $(divB).animate({opacity:'.87'},700);

        minW=wh;
        if(minW>ww)minW=ww;

        var img = new Image()
        img.src = p_url
        img.id="dynamic"
        img.onerror = function (e) { alert('ошибка при загрузке изображения') }
        img.onload = function (e) {

            var boxW=img.width
            var boxH=img.height

            var header = "<h1 id='workH1' style='display:inline'>"+ hed+"</h1>"
            var description = "<p id='workP'>" + des + "<br><br></p>"

            boxW+=40
            var div = $('<div>').css({
                width:boxW+"px",
                height:0,
                overflow: "hidden",
                "background-color": "#303030",
                padding: "20px"
            });
            $(div).center()



            alert($(div).width())


            $('body').eq(0).append(div);

            $(div).addClass("close")
            $(img).addClass("close")

            $(div).append(header)
            $(div).append(divCl)
            $(div).append(description)

            alert($(div).width())

            boxH+=$('#workH1').height()
            boxH+=$('#workP').height()+30

            div.append(img)

            var pTop=Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                $(window).scrollTop())-$(div).height() + "px"
            var pLeft=Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                $(window).scrollLeft()) + "px"

            $(div).animate({opacity:'0'},0);
            $(div).animate({
                height:boxH + "px",
                top: pTop,
                left: pLeft,
                opacity:'1'
            },700,"easeInOutQuart",function(){alert($(div).width())});
        }

       // var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))

        //alert(event);




        $(divB).addClass("close");

        $(divCl).click(function(event)
        {
            bigPhotoRemove();
        });
    }

    function bigPhotoRemove() {
        $(".close").animate({
            width:"0", height:"0",
            top: $(window).height() / 2 - 5 + $(window).scrollTop() + "px",
            left: $(window).width() / 2 - 5 + "px", opacity:'0'
            },700,"easeInOutQuart", function(){$(".close").remove(); $("html,body").css("overflow","auto");}
        );
    }
});
