var top = document.getElementById('topButton')
window.onscroll = function() {
    "use strict";

    if (document.body.scrollTop >= 800 || document.documentElement.scrollTop >= 800) {
        top.document.getElementById('topButton').className = " show";
    } else {
        top.document.getElementById('topButton').className = " hidden";
    }
}