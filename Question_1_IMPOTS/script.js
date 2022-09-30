var ageSaisi;
var sexeSaisi;
var bouton = document.getElementById('bouton');
var message = document.getElementById('message');

function verifierImposition(){
    // on recupere la valeur age et sexe avec fontion .value
    ageSaisi = document.getElementById('age-saisi').value;
    sexeSaisi = document.getElementById('sexe-saisi').value;
    // Si age >= 18 et H alors, ou si F et age >= 20 et si F..
    if(sexeSaisi == "H" && ageSaisi >= 18){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable</div>';
    }else if ((sexeSaisi == "F" && ageSaisi >=20) && (sexeSaisi == "F" && ageSaisi <= 35)){
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes imposable</div>';
    }else{
        message.innerHTML = '<div class="alert alert-danger" role="alert">Vous êtes non imposable</div>';
    }
}
// On ajoute un ecouteur
bouton.addEventListener('click', verifierImposition, false)
