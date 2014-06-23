document.getElementsByClassName("flip")[0].getElementsByClassName("glyphicon-search").forEach(function(element, key){
    element.addEventListener("click", function() {
    var val = this.getElementsByClassName("card")[0];
    if (val.className.indexOf("flipped") + 1) {
        val.className = val.className.replace("flipped", "");
    }
    else {
        val.className = val.className + " flipped";
    }
    })
})