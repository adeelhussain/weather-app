function weather_app(){
  var temp =   document.getElementById("temp").innerText;
    console.log(Math.degrees(25));
    var el = document.getElementById("body").style.backgroundImage;
    if(temp >Math.degrees(25)) { // full value is provided.
        console.log(temp)
        el.style.backgroundImage = "url('img/ww07.JPG')"; // change it
    }
}

function Weather(){
	var units;
	this.setUnits = function(){
		//temperature distance pressure speed
	};
	this.getUnits=  function(){};
	var geoLocation;
	this.getGeoLocation = function(){return;};
	this.setGeoLocation = function(){
		//longitude latitude
	};
	var foreCastInfo = [];
	this.getForeCastInfo = function(){return;};
	this.setForeCastInfo = function() {
		//its array of objects with different day and date 
		//object have day date low high text and code properties in it

	};


}
function Wind(){
	var attributes = {chill:null,direction:null,speed:null};
	this.setAttributes = function(){

	}
	this.getAttributes = function(){return;};



}
function Location (){
			var attributes = {city:null,region:null,country:null};
			this.setAttributes = function(){}
			this.getAttributes = function(){return;};


}
function Astronomy(){
			var attributes = {sunrise:null,sunset:null};
			this.setAttributes = function(){}
			this.getAttributes = function(){return;};


}
function Temperature(){
		var attributes = {temperatureK:null,temperatureF:null,temperatureC:null};
			this.setAttributes = function(){

			}
			this.getAttributes = function(){return;};


}



//inheritance
Wind.prototype = new Weather();
Location.prototype = new Weather();
Astronomy.prototype = new Weather();
Temperature.prototype = new Weather();