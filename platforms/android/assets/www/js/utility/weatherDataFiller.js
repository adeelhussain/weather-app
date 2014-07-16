/**
 * Created by ABDULMOIZ on 6/22/2014.
 */
function fillWeatherData (data){
    location_ = new Location();
    var countryName ;
    countryCodes.forEach(function(country){
        if(country.code == data.sys.country)
            countryName = country.name;

    });



    location_.setAttributes({
        city: null,//needs to fill
        region: data.name,//needs to fill
        country: countryName
    });

    temperature = new Temperature();
    var k_temp =   data.main.temp;
    var c_temp = kelvinToCentigrade(k_temp);
    var f_temp = kelvinToFahrenheit(k_temp);
    temperature.setAttributes({
        temperatureK:k_temp,
        temperatureF:f_temp,
        temperatureC:c_temp,
        min_temp:{kelvin:data.main.temp_min,celsius:kelvinToCentigrade(data.main.temp_min),fahrenheit:kelvinToFahrenheit(data.main.temp_min)},
        max_temp:{kelvin:data.main.temp_max,celsius:kelvinToCentigrade(data.main.temp_max),fahrenheit:kelvinToFahrenheit(data.main.temp_max)}
    });
    wind = new Wind();
        wind.setAttributes({
            speed: data.wind.speed + 'km' ,
            direction: data.wind.deg + '  degree'

        });



    weather = new Weather();
    weather.setdayNightTime({
        sunset:data.sys.sunset*1000,
        sunrise:data.sys.sunrise*1000
    });
    weather.setAttribute(

        {   icon: data.weather[0].icon,
            main: data.weather[0].main,
            description:data.weather[0].description,
            pressure:data.main.pressure,
            seaLevel:data.main.sea_level,
            groundLevel:data.main.grnd_level,
            humidity:data.main.humidity}
    );

    window.dataSet =  {
        weather: weather,
        wind: wind,
        temperature: temperature,
        location: location_

    }



}
