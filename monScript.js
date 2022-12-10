
// Les variables besoin pour mon JS déclarer au début de celui ci
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
        animationAtk()
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

//fonction pour faire apparaitre l'animation d'attaque sur les monstres
function animationAtk(){

    document.getElementById("animationDmg").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg").hidden=true;
    },1500);

}

function animationAtk2(){

    document.getElementById("animationDmg2").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg2").hidden=true;
    },1500);

}

function animationAtk3(){

    document.getElementById("animationDmg3").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg3").hidden=true;
    },1500);

}

//animation pour les dégats des héros
function animationRiposte4(){

    document.getElementById("animationDmg4").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg4").hidden=true;
    },1500);

}

function animationRiposte5(){

    document.getElementById("animationDmg5").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg5").hidden=true;
    },1500);

}

function animationRiposte6(){

    document.getElementById("animationDmg6").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg6").hidden=true;
    },1500);

}

function animationRiposte7(){

    document.getElementById("animationDmg7").hidden=false

    setTimeout(function(){

        document.getElementById("animationDmg7").hidden=true;
    },1500);

}

//Fonction riposte aléatoire
function riposteAleatoire(){


}

//Fonction pour faire disparaitre les héros quand ils n'on plus de pv et ne plus pouvoir intéragir avec
function mortHeros(){


}

//fFonction pour faire disparaitre les monstres quand ils n'on plus de pv et ne plus pouvoir intéragir avec
function mortMonstres(){


}

//Selection hero et affichage unique de son menu

function selectionHeros(){


}

//Les actions ne sont pas utilisable plusieurs fois d'affiler
function singleAction (){
    
}