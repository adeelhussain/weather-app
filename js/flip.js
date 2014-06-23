
[].forEach.call(document.getElementsByClassName("glyphicon-search") ,function(element, key){
    element.addEventListener("click", function() {
    var val = document.getElementsByClassName("card")[0];
    if (val.className.indexOf("flipped") + 1) {
        val.className = val.className.replace("flipped", "");
    }
    else {
        val.className = val.className + " flipped";
    }
    })
})