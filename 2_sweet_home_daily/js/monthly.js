window.onload = function() {
    tabPage({
        pageMain: 'polaroid-grid-id',
        pageNav: 'pageNav',
        pagePrev: 'prev',
        pageNext: 'next',
        eachPageItemNum: 6,
        activeClass: 'active',
    });

    function tabPage(tabPage) {
        var pageMain = document.getElementById(tabPage.pageMain);
        var pageNav = document.getElementById(tabPage.pageNav);
        var pagePrev = document.getElementById(tabPage.pagePrev);
        var pageNext = document.getElementById(tabPage.pageNext);

        /////
        // 1. Calculate total page number(len)
        /////
        var eachPageItemNum = tabPage.eachPageItemNum;
        var len = Math.ceil(pageMain.children.length / eachPageItemNum);
        console.log("len = " + len);
        var pageList = '';

        /////
        // 2. Put total page number(len) onto canvas(pageNav.innerHTML)
        /////
        for(var i=0; i<len; i++) {
            pageList += '<a href="javascript:;">' + (i+1) + '</a>';
        }
        pageNav.innerHTML = pageList;

        /////
        // 3. Set the 1st page(pageNav.childNodes[0]) to be 'active'
        /////
        pageNav.childNodes[0].className = tabPage.activeClass;

        /////
        // 4. Make a copy of the current pageMain(pageMain_orig) 
        /////
        var pageMain_orig = document.getElementById(tabPage.pageMain).cloneNode(true); //ythsup

        /////
        // 5. Clear the current pageMain
        /////
        pageMain.innerHTML = "";

        /////
        // 6. Put the first X(eachPageItemNum) items onto the current pageMain (=> draw the inital canvas)
        //    {Effect} After this, we can see "Item 1" and "Item 2" on pageMain
        /////
        for(var t=0; t<eachPageItemNum; t++) {
            pageMain.innerHTML += pageMain_orig.children[t].outerHTML;
        }

        /////
        // 7. For each page
        /////
        var currentChildIndex = 0;
        for(var i=0; i<pageNav.children.length; i++) {
            pageNav.children[i].index = i; //this line must be outside of "pageNav.children[i].onclick = function()"

            /////
            // 8. If click on a page number
            /////
            pageNav.children[i].onclick = function() {
                console.log("this.index = " + this.index);

                // 8-1. Clear every page's className
                for(var t=0; t<pageNav.children.length; t++) {
                    pageNav.children[t].className = '';
                }

                // 8-2. Set the current page(this)'s className to be 'active'
                this.className = tabPage.activeClass; //"this" = "pageNav.children[i]"

                // 8-3. Set current index(currentChildIndex)
                currentChildIndex = this.index;

                // 8-4. ?
                //remove tabPage.ini tabPage.ini = currentChildIndex;

                // 8-5. Draw the i-th page
                pageMain.innerHTML = "";
                var startIndex = currentChildIndex * eachPageItemNum;
                console.log("startIndex: " + startIndex);
                for(var t=0; t<eachPageItemNum; t++) {
                    pageMain.innerHTML += pageMain_orig.children[startIndex+t].outerHTML;
                }
            };
        }

        pageNext.onclick = function() {
            if(currentChildIndex == len-1) {
                //alert('Reach last page');
                return false;
            }
            pageNav.children[currentChildIndex+1].onclick();
        };

        pagePrev.onclick = function() {
            if(currentChildIndex == 0) {
                //alert('Reach the first page');
                return false;
            }
            pageNav.children[currentChildIndex-1].onclick();
        };
    }
}