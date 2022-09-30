var totalSaisi;
var monnaieSaisi;
var aRendre;
var nbre10euros;
var nbre5euros;
var nbre1euro;

var message10 = document.getElementById('IDmessage10');
var message5 = document.getElementById('IDmessage5');
var message1 = document.getElementById('IDmessage1');

IDmessage10.innerHTML = "0";
IDmessage5.innerHTML = "0";
IDmessage1.innerHTML = "0";

function calculerMonnaie(){

    totalSaisi = document.getElementById('IDtotal').value;
    monnaieSaisi = document.getElementById('IDmonnaie').value;

    aRendre = monnaieSaisi - totalSaisi;
    nbre10euros = 0;
    while(aRendre >= 10){
        nbre10euros = nbre10euros + 1;
        aRendre = aRendre - 10;
    }
    nbre5euros = 0;
    while(aRendre >= 5){
        nbre5euros = nbre5euros + 1;
        aRendre = aRendre - 5;
    }
    
    message10.innerHTML = nbre10euros;
    message5.innerHTML = nbre5euros;
    message1.innerHTML = aRendre;

}
document.getElementById('button').addEventListener('click', calculerMonnaie, false);
