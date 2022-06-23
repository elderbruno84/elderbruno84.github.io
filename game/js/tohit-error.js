function toHit(theCards) {
    theCards.forEach(function(element) {
        element.classList.add("hited");
    });
}
    
function error(theCards) {
    theCards.forEach(function(element) {
        element.classList.add("error");
    });

    setTimeout(function() {
        theCards.forEach(function(element) {
            element.classList.remove("uncovered");
            element.classList.remove("error");
        });
}, 1000);
}
