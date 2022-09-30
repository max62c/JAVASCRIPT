var di=parseInt(Math.random()*mots.length) // On récupère un mot aléatoire dans le tableau des mots
var mot=mots[di][0];//On récupère un élément en utilisant cette syntaxe. On commence toujours à 0
var indice=mots[di][1];
var theme=mots[di][2];
var lmot=Array.from(mot);//On reprend le mot pour avoir un index en ordre.
document.getElementById("theme").innerHTML="Theme : "+theme;
var lettres_fausses=[];
var lettres_trouvees=[];
var lettres_jouees=[];
var sol;
var potteau;
var barre;
var corde;
var tete;
var corp;
var bras;
var jambegauche;
var jambedroite;
//On affecte les valeurs à une constante, car celle-ci est définitive et ne peut être modifiée.
const _svg=["sol","potteau","barre","barrecote","corde","tete","corp","bras","jambegauche","jambedroite"];

for(x=0;x<lmot.length;x++){//On défini une boucle sur la longueur du mot. x++ est un raccourci pour x=x+1
    if(lmot[x]=="-") lettres_trouvees.push(true);//On execute seulement si les 2 éléments sont trouvés et en fin de liste (push)
    else lettres_trouvees.push(false);//Sinon on passe à faux
}

var vies_restantes=10;//On défini le nombre de vies restantes
var fini=false;

function afficage_bonhomme(score){ //On affiche le pendu avec la fonction
    var svg_image = document.getElementById("pendu")//On affiche un résultat
    var total = 10// Nombre de vies
    var loop = total -score //On calcule le nombre de vies moins le score
    for (const elem of svg_image.children)
    {
        //on affiche les elements par apport au nombre de ses fautes et on efface le reste
        if(loop<=0)
        {
            elem.style.display = 'None'//On masque
        }else{
            elem.style.display = "block"//On affiche
            loop-=1
        }
    }
}

function aff(){//On calcule les lettre trouvées et fausses
    var affi="";
    for(x=0;x<lettres_trouvees.length;x++){
        if( lettres_trouvees[x] ) affi+=" "+lmot[x]
        else affi+=" _"
    }
    var lfs="";
    for(x=0;x<lettres_fausses.length;x++){
        if(x>0) lfs+=","
        lfs+=" "+lettres_fausses[x]
    }
    var ljs="";
    for(x=0;x<lettres_jouees.length;x++){
        if(x>0) ljs+=","
        ljs+=" "+lettres_jouees[x]
    }
    //alert(affi); On affiche les valeurs
    document.getElementById("mot").innerHTML=affi;
    document.getElementById("vies").innerHTML="Il vous reste "+ vies_restantes +" vies."
    afficage_bonhomme(vies_restantes)
    document.getElementById("lf").innerHTML="Lettres fausses : "+lfs;
    document.getElementById("lj").innerHTML="Lettres jouees : "+ljs;
}

function lettre(l){
    var bon=true;
    if(fini){
        bon=false;
        alert("La partie est finie");
    }
    else if(lettres_jouees.includes(l)){
        alert("Tu as déjà joué cette lettre !");
        bon=false;
    }
    else{ lettres_jouees.push( l ); }
    if(bon){
        var trouve=false;
        for(x=0;x<lmot.length;x++){
            if( lmot[x]==l ){
                lettres_trouvees[x]=true;
                trouve=true;
            }
        }
        if(!trouve){
            if(!(l in lettres_fausses)){
                lettres_fausses.push(l);
                vies_restantes-=1;
            }
        }
        
        aff();
        
        if(vies_restantes==1){
            alert("Indice : "+indice);
        }
        //AFFICHE PERDU
        if(vies_restantes<=0){
            alert("Et c'est ainsi que le pauvre monsieur se pendit ; VOUS AVEZ PERDU !");
            alert("Le mot était : "+mot);
            fini=true;
        }
        
        var gagne=true;
        for(x=0;x<lettres_trouvees.length;x++){
            if(!lettres_trouvees[x]){
                gagne=false;      
            }
        }
        if(gagne){
            alert("Vous avez Gagné !");
            alert("L'indice était : "+indice);
            fini=true;
        }
    }
}   

function restart(){//On rejoue
    di=parseInt(Math.random()*mots.length)
    mot=mots[di][0];
    indice=mots[di][1];
    theme=mots[di][2];
    lmot=Array.from(mot);
    document.getElementById("theme").innerHTML="Theme : "+theme;
    lettres_fausses=[];
    lettres_trouvees=[];
    lettres_jouees=[];

    for(x=0;x<lmot.length;x++){
        if(lmot[x]=="-") lettres_trouvees.push(true);
        else lettres_trouvees.push(false);
    }

    vies_restantes=10;
    fini=false;
    aff();
}

aff();