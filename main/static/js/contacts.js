function initialize() {
    var myLatlng = new google.maps.LatLng(50.51042796927612,30.456339865922928);
    var myOptions = {
        zoom: 15,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title:"Hello World!",
      animation: google.maps.Animation.BOUNCE
    });
}




$(document).ready(function()
{
    initialize()
});