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
         $.get("../get_work/", function(data) {
                // Відобразити результат
                alert(data.param1)
        });

        bigFotoAdd(event.target.id);
    });

    function bigFotoAdd(p_url) {

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

        $('body').eq(0).append(divB);

        $(divB).animate({opacity:'0'},0);
        $(divB).animate({opacity:'.87'},700);

        //$(divB).fadeIn('slow');

        minW=wh;
        if(minW>ww)minW=ww;

        boxW=minW-40;
        if(boxW > 600)boxW=600;

        boxH=boxW;



        var div = $('<div>').css({
            position: "absolute",
            top: $(window).height() / 2 - 45 + $(window).scrollTop() + "px",
            left: $(window).width() / 2 - 5 + "px",
            width: 10 + 'px',
            height: 10 + 'px',
            overflow: "hidden",
            "background-color": "#000",
            padding: "20px"
        });

        $('body').eq(0).append(div);

        $(div).animate({opacity:'0'},0);

        $(div).animate({
            width:boxW + "px", height:boxH + "px",
            top: $(window).height() / 2 - boxW/2 + $(window).scrollTop() + "px",
            left: $(window).width() / 2 - boxH/2 + "px", opacity:'1'
        },700,"easeInOutQuart");



        var img = $('<img id="dynamic">'); //Equivalent: $(document.createElement('img'))

        //alert(event);

        img.attr('src', p_url);
        $(img).css({
             width: 10 + 'px',height: 10 + 'px'
        });
        img.appendTo(div);

        $(img).animate({opacity:'0'},0);

        $(img).animate({
            width:boxW + "px", height:boxH + "px", opacity:'1'
        },700,"easeInOutQuart");

        $(div).addClass("close");
        $(img).addClass("close");
        $(divB).addClass("close");

        $(".close").click(function(event)
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
