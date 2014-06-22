/**
 * Created by Hsmsharique on 6/15/2014.
 */
function Location (){
    var attributes = {city:null,region:null,country:null};
    this.setAttributes = function(att){
        attributes = att;

    }
    this.getAttributes = function(){return attributes;};


}