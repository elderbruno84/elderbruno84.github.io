function uncover() {
    var uncovereds;
    var totalUncovered = document.querySelectorAll(".uncovered:not(.hited)");

    if (totalUncovered.length > 1) {
        return;
    }

    this.classList.add("uncovered");

    uncovereds = document.querySelectorAll(".uncovered:not(.hited)");

    if (uncovereds.length < 2) {
        return;
    }

    compare(uncovereds);    
}

// Function to compare cards
function compare(cardsToCompare) {
    if (cardsToCompare[0].dataset.valor === cardsToCompare[1].dataset.valor) {
        toHit(cardsToCompare);
    }   else {
        error(cardsToCompare);
        }
}
