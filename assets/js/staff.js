$(document).ready(function()
{
    res();

    function checkWidth()
    {
         if(parseFloat($("body").css("width")) > parseFloat($("#nobr").css("width")) - 70)
        {
           return true
        }
        else return false;

    }

    //var timeout;
    var openId = "";
    var w;
    var totalW;
    var dontMove = false;
    $(".icoBox").addClass("rotate");
    $(".icoBox").css("-webkit-transition", "all .5s ease-in-out");
    $(".icoBox").removeClass("rotate");

    $(".colorBg").mouseenter(function(event)
    {
        if( $("body").css("margin-top") != "0px")return;

        if(openId!="")cls();

        var tempId = event.target.id;
        if(tempId.charAt(0) == "i" || tempId.charAt(0) == "o") tempId = tempId.substr(1, tempId.length - 1)

        var divId = "#id" + tempId;
        var id = "#" + tempId;

        var yPos = $(divId).css("top");
        if(parseInt(yPos) != -68) return;

        openId = tempId;
        $(divId).animate({top:-300, "background-position-y":"-77"},400, "easeOutQuint");
        //clearTimeout(timeout);
        $(id).addClass("rotate");
        //timeout = setTimeout(function()
       // {
            //$(".switcher").css("-webkit-transition", "all 2s ease-in-out");
       //}, 10);
    });

    $(".blackBg").mouseleave(function(event)
    {
        cls();
    });

    function cls ()
    {
        var divId = "#id" + openId;
        var id = "#" + openId;
        $(divId).animate({top:-68, "background-position-y":"0"},300,"easeOutQuint");
        //clearTimeout(timeout);
        $(id).css("-webkit-transition", "all 0.5s ease-in-out");
        $(id).removeClass("rotate");
        openId="";
    }

    function res(){

        w = $(window).width();
        dontMove=true;

        if(w >= 1350) {w /= 5; }
        else if(w >= 1080) {w /= 4;}
        else if(w >= 810) {w /= 3;}
        else if(w >= 540) {w /= 2;}

        totalW = $(".staff").size() * w;

        $("#nobr").css("width", totalW);
        $(".staff").css("width", w);

        $("#nobr").css("left", "0");
        hideB2();



        if(!checkWidth())
        {
            $("#stfB").css("display","inherit")
            $("#stfB1").fadeOut();
            $("#stfB2").fadeIn();

        }
        else
        {
            $("#stfB").css("display","none")
        }
    }

    $("#stfB2").click(function()
    {
        if(dontMove || stfB2Check(0))return;
        $("#stfB1").fadeIn();
        var bw=parseFloat($("body").css("width"));
        var nw=parseFloat($("#nobr").css("width"));
        var sw=parseFloat($(".staff").css("width"));
        dontMove=true;

        if(stfB2Check(sw))$("#stfB2").fadeOut();

        if( nw >  bw + 70)
        {
            var np = parseFloat($("#nobr").css("left"));
            var newPos = np - sw;
            $("#nobr").animate({left:newPos}, 1000,"easeInOutCubic", allowMove);
        }
    })

    $("#stfB1").click(function()
    {
        if(dontMove || stfB1Check(0))return;
        $("#stfB2").fadeIn();
        var bw=parseFloat($("body").css("width"));
        var nw=parseFloat($("#nobr").css("width"));
        var sw=parseFloat($(".staff").css("width"));
        dontMove=true;
        if(stfB1Check(sw))$("#stfB1").fadeOut();

         if( nw >  bw)
        {
            var np = parseFloat($("#nobr").css("left"));
            var newPos = np + sw;
            $("#nobr").animate({left:newPos}, 1000,"easeInOutCubic", allowMove);
        }
    })

    function stfB2Check(dt)
    {
        var bw=parseFloat($("body").css("width"));
        var nw=parseFloat($("#nobr").css("width"));
        var pos=parseFloat($("#nobr").css("left"));

       // alert("" + nw + " :" + pos +" :" + bw);

        if(nw+pos-dt < bw + 70)
        {
            return true;
        }
        else return false;
    }

    function stfB1Check(dt)
    {
        var pos=parseFloat($("#nobr").css("left"));

        if(pos+dt > -70)
        {
            return true;
        }
        else return false;
    }
    function allowMove()
    {
        dontMove=false;
    }

    function hideB2()
    {
        dontMove=false;
        if(stfB2Check(0))$("#stfB2").fadeOut();
    }
    function hideB1()
    {
        dontMove=false;
        if(stfB1Check(0))$("#stfB1").fadeOut();
    }

    $(window).resize(function()
    {
        res();
    });
});
