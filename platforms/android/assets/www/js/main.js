function weather_app(){
  var temp =   document.getElementById("temp").innerText;
    console.log(Math.degrees(25));
    var el = document.getElementById("body").style.backgroundImage;
    if(temp >Math.degrees(25)) { // full value is provided.
        console.log(temp)
        el.style.backgroundImage = "url('img/ww07.JPG')"; // change it
    }
}



/*
//inheritance
Wind.prototype = new Weather();
Location.prototype = new Weather();
Astronomy.prototype = new Weather();
Temperature.prototype = new Weather();


*/
