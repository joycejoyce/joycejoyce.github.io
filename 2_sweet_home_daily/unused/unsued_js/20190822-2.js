$(document).ready(function() {
    $('.shrink_pics img').click(function() {
        var picSrc = $(this).attr('src');
        var expandedPic = document.getElementById("expanded_pic");
        expandedPic.src = picSrc;
    });
    
    $('#expanded_pic').click(function() {
        var firstSrc = $(this).data('value');
        console.log("firstSrc: " + firstSrc);
        
        var curImgSrc_absolute = document.getElementById("expanded_pic").src;
        //console.log("curImgSrc_absolute: " + curImgSrc_absolute);
        
        var curImgSrc_relative = $(this).attr('src');
        //console.log("curImgSrc_relative: " + curImgSrc_relative);
        
        $('.shrink_pics').children('img').each(function() {
            var childImgSrc = $(this).attr('src');
            //console.log("childImgSrc: " + childImgSrc);
            if(childImgSrc == curImgSrc_relative) {
                var prevSiblingImgSrc = $(this).prevAll('img').first().attr('src');
                var nextSiblingImgSrc = $(this).nextAll('img').first().attr('src');
                //console.log("prevSiblingImgSrc: " + prevSiblingImgSrc);
                //console.log("nextSiblingImgSrc: " + nextSiblingImgSrc);
                
                var expandedPic = document.getElementById("expanded_pic");
                if(nextSiblingImgSrc != undefined) {
                    expandedPic.src = nextSiblingImgSrc;
                }
                else {
                    expandedPic.src = firstSrc;
                }
                return;
            }
        });
    });
});