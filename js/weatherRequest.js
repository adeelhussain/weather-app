/**
 * Created by ABDULMOIZ on 6/22/2014.
 */

    ////////////////////
//window.w_req = weatherRequest;
function weatherRequest(callback){
function createRequest() {
    var result = null;
    if (window.XMLHttpRequest) {
        // FireFox, Safari, etc.
        result = new XMLHttpRequest();

        console.log(xmlhttp)
        var xmlhttp=new XMLHttpRequest();
        if (typeof xmlhttp.overrideMimeType != 'undefined') {
            result.overrideMimeType('text/xml'); // Or anything else
        }
    }
    else if (window.ActiveXObject) {
        // MSIE
        result = new ActiveXObject("Microsoft.XMLHTTP");
    }
    else {
        // No known mechanism -- consider aborting the application
    }
    return result;
}

var req = createRequest(); // defined above
// Create the callback:
req.onreadystatechange = function() {
    if (req.readyState != 4) return; // Not there yet
    if (req.status != 200) {
        // Handle request failure here...
        return;
    }
    // Request successful, read the response
    var resp = req.responseText;
    // ... and use it as needed by your app.
    console.log('---->')

    fillWeatherData(JSON.parse(resp));
    window.resp = resp;
    console.log(resp)
    callback()
}

//var url = 'https://search.yahoo.com/sugg/gossip/gossip-gl-location/?appid=weather&output=sd1&p2=pt&command=%5Bkarachi%5D';



var lat,lon;

var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log('Latitude : ' + crd.latitude);
    console.log('Longitude: ' + crd.longitude);
    console.log('More or less ' + crd.accuracy + ' meters.');
    console.log(crd);
    lat =  crd.latitude;
    lon = crd.longitude;
    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon;
    console.log(url);
    req.open("GET", url, true);
    req.send()

};

function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
};

navigator.geolocation.getCurrentPosition(success, error, options);


}