// Le total commence à 0
var total = 0;


// Changer de page
function afficherPage(page) {
    var toutes = document.getElementsByClassName("page");
    for (var i = 0; i < toutes.length; i++) {
        toutes[i].style.display = "none";
    }
    document.getElementById(page).style.display = "block";
}


// Ajouter un produit au panier
function ajouterAuPanier(nom, prix) {
    // Je fabrique une ligne de tableau
    var ligne = "<tr><td>" + nom + "</td><td>" + prix + " €</td><td><button onclick='supprimerLigne(this, " + prix + ")'>X</button></td></tr>";

    // Je l'ajoute à la fin du tableau
    document.getElementById("panierContenu").innerHTML += ligne;

    // J'ajoute le prix au total
    total = total + prix;
    document.getElementById("total").innerHTML = "Total : " + total + " €";

    alert(nom + " ajouté !");
}


// Supprimer une ligne du panier
function supprimerLigne(bouton, prix) {
    // Je remonte à la ligne <tr> et je la supprime
    bouton.parentNode.parentNode.remove();

    // J'enlève le prix du total
    total = total - prix;
    document.getElementById("total").innerHTML = "Total : " + total + " €";
}


// Rechercher
function rechercher() {
    var mot = document.getElementById("barreRecherche").value;
    alert("Vous recherchez : " + mot);
}


// Au démarrage, afficher l'accueil
afficherPage("accueil");
