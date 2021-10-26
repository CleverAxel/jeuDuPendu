const LETTRE_PROPOSEE = document.getElementById("lettreProposee");
const SEND_LETTRE = document.getElementById("sendLettreProposee");
const MOT_A_DEVINER = document.getElementById("motADeviner");

const FOUND_WORD = document.getElementById("foundWord");


let motChoisi = choixAleatoireDuMot();
let motCache = "";
console.log(motChoisi);
for(let i = 0; i < motChoisi.length; i++){
    motCache += "_";
}
MOT_A_DEVINER.innerHTML = motCache;


SEND_LETTRE.addEventListener("click", () =>{
    rechercheLettreDansMot(LETTRE_PROPOSEE.value[0]);
    LETTRE_PROPOSEE.value = "";
});


/********************************************************* */

function rechercheLettreDansMot(parametre_lettre){
    for(let i = 0; i < motChoisi.length; i++){
        if(parametre_lettre == motChoisi[i]){
            motCache = remplaceLettre(i, parametre_lettre, motCache);
        }
    }
    MOT_A_DEVINER.innerHTML = motCache;
    if(motCache == motChoisi){
        FOUND_WORD.innerHTML = "GAGNÉ";
    }
}

/*************************************************************** */

function remplaceLettre(parametre_positionLettre, parametre_lettre, parametre_motCache){
    let motCacheRevele = "";
    for(let i = 0; i < parametre_motCache.length; i++){
        if(parametre_positionLettre == i){
            motCacheRevele += parametre_lettre;
        } else{
            motCacheRevele += parametre_motCache[i];
        }
    }
    return motCacheRevele;
}

/*Cette fonction tirera un mot aléatoirement à partir du tableau
"listeMot" et le retournera*/
function choixAleatoireDuMot(){
    let listeMot = [
        "abricot",
        "pomme",
        "poire",
        "television",
        "ordinateur",
        "bouteille",
        "feuille",
        "stylo",
        "drapeau",
        "serviette",
        "souris",
        "papier",
        "vetement",
        "disque",
        "tiroir"
    ]
    return listeMot[Math.floor(Math.random() * listeMot.length)]
}