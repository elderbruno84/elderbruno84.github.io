function sortCards() {
    var result = totalCard.sort(function() {
       return 0.5 - Math.random();
});
return result;

}

// Criando e inserindo uma div para cada elemento do array, com loop
function createCards() {  
    var table = document.querySelector("#table")
    var sortedCard = sortCards();
    table.innerHTML = ""  

    sortedCard.forEach(function(element){    
        var card = document.createElement("div");      
    
        card.innerHTML = 
        "<div class='card' data-valor= " +
        element +
        ">" +
        "<div class='card-contents'>" +   
        "<img class='img' src='" + 
        element +
        "'</img>"+            
        "</div>" +
        "</div>";        

        table.appendChild(card);
       
    });
}