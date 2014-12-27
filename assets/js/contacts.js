function initialize() {
    var myLatlng = new google.maps.LatLng(50.51042796927612,30.456339865922928);
    var myOptions = {
        zoom: 14,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker(
        {
            position: myLatlng,
            map: map,
            title:"Salon Expert"
        });

    var contentString = '<div style="color: #222222; width:207px; text-align: center;"> <h1>SalonExpert</h1>' +
        'Автозаводская 41, 207.<br> ' +
        'тел: 80961619878<br>'+
        '<a href = "mailto:gmail@salonexpert.com" style="color: #780078">gmail@salonexpert.com</a><br><br>'+
        '</div>'

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    infowindow.open(map,marker);
}

function scrl() {

    $("body").animate({"scrollTop":'449'},1800);
    $("html").animate({"scrollTop":'449'},1800);
}

$(window).load(function () {
    //$('#pre_loader').fadeOut('slow')
    scrl()
});

$(document).ready(function()
{
    initialize()
});