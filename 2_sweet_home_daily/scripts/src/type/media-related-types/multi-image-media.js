function MultiImageMedia(dateAndNum) {
    this.type = MEDIA_TYPE_MULTI_IMAGE;
    this.src = Media.getSrcFilePaths(dateAndNum);
    this.generateMediaDOM = function() {
        return HtmlGenerator.generateMultiImageMediaDOM(this.src);
    };
    this.addEventListeners = function() {
        MultiImageMedia.addClickEventHandlerForShrinkImg();
        MultiImageMedia.addClickEventHandlerForExpandImg();
    };
}
MultiImageMedia.addClickEventHandlerForShrinkImg = function() {
    $("." + HTML_CLASS_SHRINK_IMG).click(function() {
        removeClassCurrentImgFromCurrentShrinkImgDOM();
        replaceExpandImgSrcWithClickedShrinkImgSrc(this);
        $(this).addClass(HTML_CLASS_CURRENT_IMG);
        
        $(this).data(IS_CLICKED, true);
    });
};
MultiImageMedia.addClickEventHandlerForExpandImg = function() {
    $("#" + HTML_ID_EXPAND_IMG).click(function() {
        let firstShrinkImgDOM = getFirstShrinkImgDOM(this);
        let currentShrinkImgDOM = getCurrentShrinkImgDOM(this);
        let nextShrinkImgDOM = getNextShrinkImgDOM(currentShrinkImgDOM, firstShrinkImgDOM);
        replaceExpandImgSrcWithNextShrinkImgSrc(this, nextShrinkImgDOM);
        $(currentShrinkImgDOM).removeClass(HTML_CLASS_CURRENT_IMG);
        $(nextShrinkImgDOM).addClass(HTML_CLASS_CURRENT_IMG);
        
        $(this).data(IS_CLICKED, true);
    });
};

function removeClassCurrentImgFromCurrentShrinkImgDOM() {
    let currentExpandImgSrc = $("#" + HTML_ID_EXPAND_IMG).attr(HTML_PROPERTY_SRC);    
    let currentShrinkImgDOM = $("."+HTML_CLASS_SHRINK_IMG).filter($(`img[src="${currentExpandImgSrc}"]`));
    $(currentShrinkImgDOM).removeClass(HTML_CLASS_CURRENT_IMG);
}

function replaceExpandImgSrcWithClickedShrinkImgSrc(clickedDOM) {        
    let clickedShrinkImgSrc = $(clickedDOM).attr(HTML_PROPERTY_SRC);
    let expandImgDOM = $("#" + HTML_ID_EXPAND_IMG);
    expandImgDOM.attr(HTML_PROPERTY_SRC, clickedShrinkImgSrc);
}

function getFirstShrinkImgDOM(expandImgDOM) {
    let firstImgSrc = $(expandImgDOM).prop(HTML_PROPERTY_DATA_VALUE);
    return $("." + HTML_CLASS_SHRINK_IMG).filter($(`img[src="${firstImgSrc}"]`));
}

function getCurrentShrinkImgDOM(currentExpandImgDOM) {
    let currentImgSrc = $(currentExpandImgDOM).attr(HTML_PROPERTY_SRC);
    return $("." + HTML_CLASS_SHRINK_IMG).filter($(`img[src="${currentImgSrc}"]`));
}

function getNextShrinkImgDOM(currentShrinkImgDOM, firstShrinkImgDOM) {
    return $(currentShrinkImgDOM).next().attr(HTML_PROPERTY_SRC)!=undefined ? $(currentShrinkImgDOM).next() : $(firstShrinkImgDOM);
}

function replaceExpandImgSrcWithNextShrinkImgSrc(expandImgDOM, nextShrinkImgDOM) {
    $(expandImgDOM).attr(HTML_PROPERTY_SRC, $(nextShrinkImgDOM).attr(HTML_PROPERTY_SRC));
}

export {
    MultiImageMedia
};