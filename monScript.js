
// Les variables besoin pour mon JS déclarer au début de celui ci
pvMonstre1 = document.getElementById("pvMonstre1")
monstre1 = document.getElementById("pvMonstre1")
pvHero1 = document.getElementById("pvHero1")
barrePv = document.getElementsByClassName("barrePv")
degatMonstres = 0;
cibleRandom = 0;

// Variable pour definir la valeur de l'actions des heros
var actionHeros1 = false;
var actionHeros2 = false;
var actionHeros3 = false;
var actionHeros4 = false;

//Variable pour definir si les héros utilise la defense
verifDefense1 = false
verifDefense2 = false
verifDefense3 = false
verifDefense4 = false


// Les fonctions pour les bouton d'actions des personnages jouables
function fcAttaqueheros1(){ //fonction attaquer du héro
    if (actionHeros1 == false){
        pvMonstre1.value -= 10;
        affichage.innerHTML = "Le monstre perd 10 PV !";
        actionHeros1 = true;
        animationAtk()
        mortMonstres()
        riposteMonstre();
        
    }
}
function defenseheros1(){ // fonction defendre du héro, ne peux pas subir de dégat durant cette phase
    if (actionHeros1 == false){
        affichage.innerHTML = "Vous ne pouvez pas subir de dégats !";
        actionHeros1 = true;
        verifDefense1 = true;
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
        verifDefense2 = true;
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
        verifDefense3 = true;
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
        verifDefense4 = true;
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
        riposteAleatoire()
        //pvHero1.value -= 10
        //console.log(pvHero1);

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

    cibleRandom = Math.floor(Math.random()*5)
    degatMonstres = Math.floor(Math.random()*20); 

    if(cibleRandom==1){
        if(verifDefense1==true){
          verifDefense1=false
        }else{
            document.getElementById("pvHero1")=document.getElementById("pvHero1")-=DegatMonstre  
        }
      }
  
      if(cibleRandom==2){
        if(verifDefense2==true){
            verifDefense2=false
        }else{
            document.getElementById("pvHero2")=document.getElementById("pvHero2")-=DegatMonstre  
        }
      }
  
      if(cibleRandom==3){
        if(verifDefense3==true){
            verifDefense3=false
        }else{
            document.getElementById("pvHero3")=document.getElementById("pvHero3")-=DegatMonstre  
        }
      }
      
      if(cibleRandom==4){
        if(verifDefense4==true){
            verifDefense4=false
        }else{
            document.getElementById("pvHero4")=document.getElementById("pvHero4")-=DegatMonstre  
        }
      }
  
      if(cibleRandom==0){
        dialoguehtml.innerHTML="Echec critique du monstre "
      }
      affichagehtml.innerHTML="Le monstre vous inflige " +  DegatMonstre
}

//Fonction pour faire disparaitre les héros quand ils n'on plus de pv et ne plus pouvoir intéragir avec
function mortHeros(){

    if (pvHero1<=0 && mort==false){ //si les hp du héros inféérieure ou égale à 0
        spriteHeros.style.visibility="hidden";      //fait disparaitre // Mettre une var spriteHeros = document.getElementById (""), changer les boite heros en id, refaire toute mon html et css par rapport au boite de heros qui deviennent des id plus des class
        mort=true
        dialoguehtml.innerHTML="Le heros mort !"
    }

}

//Fonction pour faire disparaitre les monstres quand ils n'on plus de pv et ne plus pouvoir intéragir avec
function mortMonstres(){
    if (pvMonstre1<=0){       
        document.getElementsByClassName("barrePv").visible=false;      //fait disparaitre
      affichage.innerHTML="Bien joué !";
    }
  }

//Selection hero et affichage unique de son menu

function selectionHeros(){


}

//Les actions ne sont pas utilisable plusieurs fois d'affiler
function singleAction (){
    
}