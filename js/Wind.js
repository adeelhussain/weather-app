/**
 * Created by Hsmsharique on 6/15/2014.
 */


function Wind(){
   // var attributes = {chill:null,direction:null,speed:null};
    var attributes = {speed: null,direction: null};

    this.setAttributes = function(att){
      attributes = att;

    };
    this.getAttributes = function(){
        return attributes;
    };



}
