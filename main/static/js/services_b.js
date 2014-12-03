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
        w = $(window).width() - scrollWidth();

        bw = parseInt(w/480);
        bw = w/bw - 68;

        //959

        if(bw>520)
        {
            paddingAdd = (bw - 520)/2;
            bw=520;
            $(".service").css("margin-left", paddingAdd);
            $(".service").css("margin-right", paddingAdd);
        }
         else if(bw<480)
        {
            bw=520;
            paddingAdd = (w - bw)/2;

            $(".service").css("margin-left", paddingAdd);
            $(".service").css("margin-right", paddingAdd);
        }

         else
        {
            $(".service").css("margin-left", 0);
            $(".service").css("margin-right", 0);
        }

        $(".service").css("width", bw);


        imgW = parseInt(bw/240);
        imgW = (bw/imgW - 240) * 2;
        step=240+imgW;
        $(".serviceImg").css("margin-right", imgW);

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

        $(".serviceDiv").each(function(ind, el)
        {
            //alert(parseInt($(el).css("height")))
            h=parseInt($(el).css("height"));
            if(maxH < h){maxH=h;}
        });

        $(".serviceDiv").each(function(ind, el)
        {
           $(el).css("height", maxH);
        });

    }

    $(window).resize(function()
    {
        res();
    });

    $(".bb").click(function()
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

        $(divId).animate({left:pos-step*dir},1000, "easeOutQuint", function(){allowClick=true;});
        allowClick=false;
    });
});
