$(".showWork").click(function(event)
{
    blackLayer();
    $.get("../get_work/", {w_id:parseInt(event.target.id), s_id:parseInt($(event.target).attr("sid"))}, function(data) {
            // Відобразити результат
        popWork(data.p, data.h, data.d)
    });
});
