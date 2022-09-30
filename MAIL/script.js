var emailSaisi;
var emailSaisiCoupe;
var positionArobase;

var message = document.getElementById('IDmessage');

function verifProposition()
{

    emailSaisi = document.getElementById('IDEmail').value;

    if(emailSaisi.includes('@') && emailSaisi.includes('.')){
        positionArobase = emailSaisi.indexOf('@');
        emailSaisiCoupe = emailSaisi.substring(positionArobase);
        if(emailSaisiCoupe.includes('.')){
            message.innerHTML = '<span class="text-success">Adresse email valide !<span>';
    }else{
            message.innerHTML = '<span class="text-danger">Adresse email invalide !<span>';
    }

    }else{
        message.innerHTML = '<span class="text-danger">Adresse email invalide !<span>';
    }
}
document.getElementById('IDEmail').addEventListener('keydown', verifProposition, false);
