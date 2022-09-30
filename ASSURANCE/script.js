var Age;
var Permis;
var Accident;
var Fidelite;
var compteurPrime;
var bouton = document.getElementById('button');//Cette méthode renvoie un objet Element dont la propriété Button
var message = document.getElementById('message');

function afficherAssurance()//On utilise la fonction
{
    var Accident = document.getElementById('IDAccident').value;
    if(Accident >= 3){//La condition, si plus ou egal à 3 accident : refuse
        message.innerHTML = '<div class="alert alert-dark" role="alert">Refuse</div>'
    }
    else//
    {
        compteurPrime = 0;
        var Age = document.getElementById('IDAge').value;
        var Permis = document.getElementById('IDAnnee').value;
        var Fidelite = document.getElementById('IDFidelite').value;

        if(Age > 25)
        {
            compteurPrime = compteurPrime + 1;
        }
        if(Permis > 2)
        {
            compteurPrime = compteurPrime + 1;
        }
        if(Fidelite > 1)
        {
            compteurPrime = compteurPrime + 1;
        }
        compteurPrime = compteurPrime - Accident;
        console.log(compteurPrime);

        switch(compteurPrime)
        {
            case 3: message.innerHTML = '<div class="alert alert-primary" role="alert">Bleu</div>'
            break;
            case 2: message.innerHTML = '<div class="alert alert-success" role="alert">Vert</div>'
            break;
            case 1: message.innerHTML = '<div class="alert alert-warning" role="alert">Orange</div>'
            break;
            case 0: message.innerHTML = '<div class="alert alert-danger" role="alert">Rouge</div>'
            break;
            case -1: message.innerHTML = '<div class="alert alert-dark" role="alert">Refusé</div>'
            break;
            
        }
    }
}
bouton.addEventListener('click', afficherAssurance, false);