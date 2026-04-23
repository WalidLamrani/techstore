var total = 0;


function afficherPage(page) {
    var toutes = document.getElementsByClassName("page");
    for (var i = 0; i < toutes.length; i++) {
        toutes[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
}



function ajouterAuPanier(nom, prix) {
    
    var ligne = "<tr><td>" + nom + "</td><td>" + prix + " €</td><td><button onclick='supprimerLigne(this, " + prix + ")'>X</button></td></tr>";

    
    document.getElementById("panierContenu").innerHTML += ligne;

    total = total + prix;
    document.getElementById("total").innerHTML = "Total : " + total + " €";

    alert(nom + " ajouté !");
}



function supprimerLigne(bouton, prix) {
   
    bouton.parentNode.parentNode.remove();

    
    total = total - prix;
    document.getElementById("total").innerHTML = "Total : " + total + " €";
}



function rechercher() {
    var mot = document.getElementById("barreRecherche").value;
    alert("Vous recherchez : " + mot);
}



afficherPage("accueil");
