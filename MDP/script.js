var mdpSaisi;
var regexMAj = new RegExp("[A-Z]");
var regexMin = new RegExp("[a-z]");
var regexChiffre = new RegExp("[0-9]");
var regexSpecial = new RegExp("\\W");
var compteurForce;
var message = document.getElementById('IDmessage');

function verifProposition()
{

    compteurForce = 0;
    mdpSaisi = document.getElementById('IDmdp').value;

    if(regexMAj.test(mdpSaisi))
    {
        compteurForce = compteurForce + 1;
    }
    if(regexMin.test(mdpSaisi))
    {
        compteurForce = compteurForce + 1;
    }
    if(regexChiffre.test(mdpSaisi))
    {
        compteurForce = compteurForce + 1;
    }
    if(regexSpecial.test(mdpSaisi))
    {
        compteurForce = compteurForce + 1;
    }
    if(mdpSaisi.length < 8)
    {
        compteurForce = compteurForce - 1;
    }
    switch(compteurForce)
    {
        case 4: message.innerHTML = '<span class="text-success">Très sécurisé !</span>';
        break;
        case 3: message.innerHTML = '<span class="text-success">Sécurisé !</span>';
        break;
        case 2: message.innerHTML = '<span class="text-warning">Moyen !</span>';
        break;
        case 1: message.innerHTML = '<span class="text-danger">Dangereux !!!</span>';
        break;
        case 0: message.innerHTML = '<span class="text-danger">Très dangereux !!!</span>';
        break;
        default:
            message.innerHTML = '';
    }
}
document.getElementById('IDmdp').addEventListener('keyup', verifProposition, false);
