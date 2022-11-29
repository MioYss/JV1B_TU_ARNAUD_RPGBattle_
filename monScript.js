maDiv = document.getElementById("maDiv");
maDiv2 = document.getElementById("maDiv2");
maDiv3 = document.getElementById("maDiv3");
maDiv4 = document.getElementById("maDiv4");
maDiv5 = document.getElementById("maDiv5");

pvJoueur1 = document.getElementById("pvJoueur1");
pvJoueur2 = document.getElementById("pvJoueur2");
pvJoueur3 = document.getElementById("pvJoueur3");
pvJoueur4 = document.getElementById("pvJoueur4");
pvMob1 = document.getElementById("pvMob1");
pvMob2 = document.getElementById("pvMob2");
pvMob3 = document.getElementById("pvMob3");

atkHeros1 = document.getElementById("atkHeros1");
atkHeros2 = document.getElementById("atkHeros2");
atkHeros3 = document.getElementById("atkHeros3");
atkHeros4 = document.getElementById("atkHeros4");

affichePvJoueur1 = document.getElementById("affichePvJoueur1");
affichePvJoueur2 = document.getElementById("affichePvJoueur2");
affichePvJoueur3 = document.getElementById("affichePvJoueur3");
affichePvJoueur4 = document.getElementById("affichePvJoueur4");
affichePvMob1 = document.getElementById("affichePvMob1");
affichePvMob2 = document.getElementById("affichePvMob2");
affichePvMob3 = document.getElementById("affichePvMob3");

affichage = document.getElementById("affichage");

// une div affichage pour tous les massages, comme dialogue ff
// div.onclick machin sur quoi on doit cliquer pas forcement texte
// div click a changer apres


atkHeros1.onclick = function() {
    if (maDiv) {
        affichage.innerHTML = "Le monstre perd 10 PV !";
            affichage.innerHTML = "Le monstre riposte ";
            pvJoueur1.innerHTML = pvJoueur1.innerHTML -(10)
        }
}



