const nomObjet = ['Une chaise gaming', 'Uncostume d\'Halloween', 'Un barbecue', 'Une guitare', 'Un sac à main'];
const imageObjet = ['chaise.png', 'costume-haloween.png', 'grill.png', 'guitare.png', 'sac-a-main.png']
var prixPropose;
var prixMystere;
var nbreAleatoire;
var compteurTentative;
var image = document.getElementById('IDobjet');
var nomImage = document.getElementById('IDnomobjet');
var bouton = document.getElementById('bouton');
var message = document.getElementById('IDmessage');

var affichageTentative = document.getElementById('IDnbTentative');

function genererUnChiffre(valeurMax)
{
    return Math.floor(Math.random() * Math.floor(valeurMax));
}
    prixMystere = genererUnChiffre(100) + 1;
    nbreAleatoire = genererUnChiffre(5);

function afficherImage(valeur)
{
    return '<img src="./img/' + valeur + '" class="img-fluid" width="30%" alt="Responsive image">';
}
image.innerHTML = afficherImage(imageObjet[nbreAleatoire]);
nomImage.innerHTML = nomObjet[nbreAleatoire];
compteurTentative = 10;
affichageTentative.innerHTML = "Il vous reste "  + compteurTentative + " tentatives...";

function verifierProposition(){
    prixPropose = document.getElementById('IDprixPropose').value;
    if(compteurTentative == 0)
    {
        affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives...";
        message.innerHTML = "Désolé, vous avez perdu !<br> Le juste prix était de " + prixMystere + " euros";
        bouton.disabled = true;
    }else{
        if(prixPropose > prixMystere){
            message.innerHTML = "c'est moins !";
            compteurTentative--;
            affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives...";
        }
        if(prixPropose < prixMystere){
            message.innerHTML = "c'est plus !";
            compteurTentative--;
            affichageTentative.innerHTML = "Il vous reste" + compteurTentative + "tentatives...";
        }
        if(prixPropose == prixMystere){
            message.innerHTML = "Bravo vous avez gagné !";
            affichageTentative.innerHTML = "En " + compteurTentative + "tentatives...";
            bouton.disabled = true;
        }
    }
}
bouton.addEventListener('click', verifierProposition, false);