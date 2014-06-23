/**
 * Created by Hsmsharique on 6/15/2014.
 */


function Temperature(){
    var  temperature = {temperatureK:null,temperatureF:null,temperatureC:null,min_temp:null,max_temp:null};

    this.setAttributes = function(temp){
        temperature = temp;
    };
    this.getAttributes = function(){
        return temperature;
    };


}

