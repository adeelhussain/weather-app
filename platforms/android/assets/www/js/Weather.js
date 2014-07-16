/**
 * Created by Hsmsharique on 6/15/2014.
 */
function Weather(){

    var dayNightTime = {sunrise:null,sunset:null};
    var info = {main: null,
        description:null,
        pressure:null,
        seaLevel:null,
        groundLevel:null,
        humidity:null};

    this.setdayNightTime = function(time){
        dayNightTime = time;
    };
    this.getdayNightTime = function(){
        return dayNightTime;
    }
    this.setAttribute = function (information){
        info = information;

    };
    this.getAttribute = function(){
        return info;
    };



    /* var units;
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
     */

}

