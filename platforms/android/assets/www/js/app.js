/**
 * Created by mr.adi180live.com on 7/15/2014.
 */
'use strict';

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceReady Event Handler
    onDeviceReady: function () {

        //alert(JSON.stringify(navigator));
        weatherRequest(function () {

            var weather = dataSet.weather.getAttribute();
            var location = dataSet.location.getAttributes();
            var temperature = dataSet.temperature.getAttributes();

            callAjax('svgs/weather/' + weather.icon + '.svg', function (data) {
                document.getElementById('forecastIcon').innerHTML = data;

                document.getElementById('forecastIcon').className += 'animated fadeInUp';


            });

            document.getElementById("timeStamp").innerHTML = getTimeStamp();
            setInterval(function () {
                document.getElementById("timeStamp").innerHTML = getTimeStamp();
            }, 60000);

            setTimeout(function () {
                document.getElementById("region").innerHTML = location.region;
                document.getElementById("region").className += 'animated fadeInUp';
            }, 500);
            if (location.region.length > 10) {
                document.getElementById("region").style.fontSize = "30px"
            } else if (location.region.length > 15) {
                document.getElementById("region").style.fontSize = "25px"
            }
            setTimeout(function () {
                document.getElementById("temp").innerHTML = parseInt(temperature.temperatureC) + "&deg;C";
                document.getElementById("temp").className += 'animated fadeInUp';
            }, 1000)


        });

        document.getElementById("menuButton").addEventListener("click", function () {
            document.body.className = document.body.className + " shatter";
        });

        var themes = ["avocado", "nectarine", "noni", "jamun", "raisin", "berry", "strawberry", "Cherymoya"];
        shatterThemes();
        function shatterThemes() {

            themes.forEach(function (val, key, arr) {
                var themeSnippet = '<div class="col-xs-4">'
                    + '<div class="col-xs-12 themes">'
                    + '<img class="img-responsive img-thumbnail" src="img/themesImages/' + val + '.png">'
                    + '<span class="visible-xs">' + val + '</span>'
                    + '</div>'
                    + '</div>';

                document.getElementById("shatter").innerHTML += themeSnippet;
            });

            [].forEach.call(document.getElementsByClassName("themes"), function (element, key) {
                element.addEventListener("click", function () {
                    document.body.className = "alert alert-info " + this.innerText;
                    document.body.className.replace("shatter", "");
                })
            })
        }


    }
};
app.initialize();

/*
weatherRequest(function () {

    var weather = dataSet.weather.getAttribute();
    var location = dataSet.location.getAttributes();
    var temperature = dataSet.temperature.getAttributes();

    callAjax('svgs/weather/' + weather.icon + '.svg', function (data) {
        document.getElementById('forecastIcon').innerHTML = data;

        document.getElementById('forecastIcon').className += 'animated fadeInUp';


    });

    document.getElementById("timeStamp").innerHTML = getTimeStamp();
    setInterval(function () {
        document.getElementById("timeStamp").innerHTML = getTimeStamp();
    }, 60000);

    setTimeout(function () {
        document.getElementById("region").innerHTML = location.region;
        document.getElementById("region").className += 'animated fadeInUp';
    }, 500);
    if (location.region.length > 10) {
        document.getElementById("region").style.fontSize = "30px"
    } else if (location.region.length > 15) {
        document.getElementById("region").style.fontSize = "25px"
    }
    setTimeout(function () {
        document.getElementById("temp").innerHTML = parseInt(temperature.temperatureC) + "&deg;C";
        document.getElementById("temp").className += 'animated fadeInUp';
    }, 1000)


});

document.getElementById("menuButton").addEventListener("click", function () {
    document.body.className = document.body.className + " shatter";
});

var themes = ["avocado", "nectarine", "noni", "jamun", "raisin", "berry", "strawberry", "Cherymoya"];
shatterThemes();
function shatterThemes() {

    themes.forEach(function (val, key, arr) {
        var themeSnippet = '<div class="col-xs-4">'
            + '<div class="col-xs-12 themes">'
            + '<img class="img-responsive img-thumbnail" src="img/themesImages/' + val + '.png">'
            + '<span class="visible-xs">' + val + '</span>'
            + '</div>'
            + '</div>';

        document.getElementById("shatter").innerHTML += themeSnippet;
    });

    [].forEach.call(document.getElementsByClassName("themes"), function (element, key) {
        element.addEventListener("click", function () {
            document.body.className = "alert alert-info " + this.innerText;
            document.body.className.replace("shatter", "");
        })
    })
}*/
