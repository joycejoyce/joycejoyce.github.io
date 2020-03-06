function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    expandImg.alt = imgs.alt;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}

class SwitchPageConstants {
    constructor(lastNum) {
        this.lastNum = "30";
    }
}

$(document).ready(function(){
    $('.nextbtn').click(function(){
        var switchPageConstants = new SwitchPageConstants();

        var currentAlt = $('#expandedImg').attr('alt');
        console.log(currentAlt);

        if(currentAlt == switchPageConstants.lastNum) {
            return;
        }

        var nextAlt = parseInt(currentAlt)+1;
        console.log(nextAlt)

        var nextSrc = "../../resource_files/20190812/taichung_photos/Taichung_190814_0001%20(" + nextAlt + ").jpg";
        console.log(nextSrc)

        var expandImg = document.getElementById("expandedImg");
        expandImg.src = nextSrc;
        expandImg.alt = nextAlt.toString();

        var imgtext = document.getElementById("imgtext");
        imgtext.innerHTML = nextAlt.toString();
    });

    $('.prevbtn').click(function(){
        var currentAlt = $('#expandedImg').attr('alt');
        console.log(currentAlt);

        if(currentAlt == "1") {
            return;
        }

        var prevAlt = parseInt(currentAlt)-1;
        console.log(prevAlt)

        var prevSrc = "../../resource_files/20190812/taichung_photos/Taichung_190814_0001%20(" + prevAlt + ").jpg";
        console.log(prevAlt)

        var expandImg = document.getElementById("expandedImg");
        expandImg.src = prevSrc;
        expandImg.alt = prevAlt.toString();

        var imgtext = document.getElementById("imgtext");
        imgtext.innerHTML = prevAlt.toString();
    });
});