(function(w, d){
var scrollbar_width = 18;

var currentStyle = (d.body.currentStyle ? d.body.currentStyle : w.getComputedStyle(d.body, null));

// убрать margin справа
if(parseInt(currentStyle.marginRight) > 0)
{
    d.body.style.marginRight = 0;
}

var marginLeft = parseInt(currentStyle.marginLeft);
if(marginLeft > 0)
{
    scrollbar_width += marginLeft;
}

// выполняет код при изменении размеров окна
(d.body.onresize = function()
{
    d.body.style.width = (w.innerWidth - scrollbar_width)+'px';
})(); // сразу же и выполнить его

})(window, document);