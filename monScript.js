
// une div affichage pour tous les massages, comme dialogue ff
// div.onclick machin sur quoi on doit cliquer pas forcement texte
// div click a changer apres

pvMonstre1 = document.getElementById("pvMonstre1")
monstre1 = document.getElementById("pvMonstre1")
pvHero1 = document.getElementById("pvHero1")

// Variable pour definir la valeur de l'actions des heros

var actionHeros1 = false;
var actionHeros2 = false;
var actionHeros3 = false;
var actionHeros4 = false;


// Les fonctions pour les bouton d'actions des personnages jouables
function fcAttaqueheros1(){ //fonction attaquer du héro
    if (actionHeros1 == false){
        pvMonstre1.value -= 10;
        affichage.innerHTML = "Le monstre perd 10 PV !";
        actionHeros1 = true;
        riposteMonstre();
    }
}
function defenseheros1(){ // fonction defendre du héro, ne peux pas subir de dégat durant cette phase
    if (actionHeros1 == false){
        affichage.innerHTML = "Vous ne pouvez pas subir de dégats !";
        actionHeros1 = true;
        riposteMonstre();
    }
    
}

function attaqueSpe1(){// fonction attaque spéciale qui fais plus de dégats

    if (actionHeros1 == false){
        pvMonstre1.value -= 30;
        affichage.innerHTML = "Le monstre perd 30 PV !"
        actionHeros1 = true;
        riposteMonstre();
    }

}


function fcAttaqueheros2(){

    if (actionHeros2 == false){
        pvMonstre1.value -= 10;
        affichage.innerHTML = "Le monstre perd 10 PV !";
        actionHeros2 = true;
        riposteMonstre();
    }

}

function defenseheros2(){

    if (actionHeros2 == false){
        affichage.innerHTML = "Vous ne pouvez pas subir de dégats !";
        actionHeros2 = true;
        riposteMonstre();
    }  

}

function attaqueSpe2(){

    if (actionHeros2 == false){
        pvMonstre1.value -= 30;
        affichage.innerHTML = "Le monstre perd 30 PV !"
        actionHeros2 = true;
        riposteMonstre();
    } 

}

function fcAttaqueheros3(){

    if (actionHeros3 == false){
        pvMonstre1.value -= 10;
        affichage.innerHTML = "Le monstre perd 10 PV !";
        actionHeros3 = true;
        riposteMonstre();
    } 

}

function defenseheros3(){

    if (actionHeros3 == false){
        affichage.innerHTML = "Vous ne pouvez pas subir de dégats !";
        actionHeros3 = true;
        riposteMonstre();
    } 
    
}

function attaqueSpe3(){
    if (actionHeros3 == false){
        pvMonstre1.value -= 30;
        affichage.innerHTML = "Le monstre perd 30 PV !"
        actionHeros3 = true;
        riposteMonstre();
    } 

}

function fcAttaqueheros4(){

    if (actionHeros4 == false){
        pvMonstre1.value -= 10;
        affichage.innerHTML = "Le monstre perd 10 PV !";
        actionHeros4 = true;
        riposteMonstre();
    } 
}

function defenseheros4(){

    if (actionHeros4 == false){
        affichage.innerHTML = "Vous ne pouvez pas subir de dégats !";
        actionHeros4 = true;
        riposteMonstre();
    } 
    
}

function attaqueSpe4(){

    if (actionHeros4 == false){
        pvMonstre1.value -= 30;
        affichage.innerHTML = "Le monstre perd 30 PV !";
        actionHeros4 = true;
        riposteMonstre()
    } 

}

// riposte des monstres quand chaque héro a attaquer
function riposteMonstre(){

    if ((actionHeros1 && actionHeros2) && (actionHeros3 && actionHeros4)){

        pvHero1.value -= 10
        console.log(pvHero1);
        affichage.innerHTML = "Les monstres ripostes et inflige 5 Pv chacun";

        actionHeros1 = false;
        actionHeros2 = false;
        actionHeros3 = false;
        actionHeros4 = false;
    }

}
