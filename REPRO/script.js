var nbrePhotocop=0;
var prixTotal=0;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function effectuerCalcul(){
    // on recupere la valeur nbrePhotocop avec fontion .value
    nbrePhotocop = document.getElementById('IDvaleurSaisie').value;

    // Si nbrePhotocop <= 10...
    if(nbrePhotocop <= 10)
    {
        prixTotal = nbrePhotocop * 0.1;
        alert(prixTotal);
    }
    
    else if (nbrePhotocop <= 30)
    
    {
        prixTotal = 10 * 0.1 + (nbrePhotocop - 10) * 0.09;
        alert(prixTotal);
    }
    else
    {
        prixTotal = 10 * 0.1 + 20 * 0.09 + (nbrePhotocop - 30) * 0.08;
    }

    message.innerHTML = `Le prix total est de  : ${prixTotal} euros`;
}
// On ajoute un ecouteur
bouton.addEventListener('click', effectuerCalcul, false)
