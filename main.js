const prompt = require('prompt-sync')();{
    function afficherCandidats(liste){
        if (liste.length === 0){
            console.log("aucun candidat trouvé.")
            return;
        }
        for(let i = 0; i<liste.length; i++){
            let Count = liste[i]
            console.log(
            (i + 1) + ". CIN :" + Count.CIN +
            " | " + Count.prenom +" "+ Count.nom + 
            " |  partipolitique:" + Count.partiPolitique + 
            " | age :" + Count.age +
            " | votes :" + Count.electeurs.length)
        }
    }
    
    function TrierCandidatsDecroissant(liste){
        for(let i = 0;i< liste.length-1; i++){
            for(let j = 0;j<liste.length-1-i; j++){
                if(liste[j].electeurs.length < liste[j+1].electeurs.length){
                    let temp = liste[j]
                    liste[j]= liste[j+1]
                    liste[j+1] = temp
                }
            }
        }
        return liste;
    } 

    function filtrerParParti(liste, partiRecherche) {
        let resultat = [];
        for (let i = 0; i < liste.length; i++){
            let partiCandidat = liste[i].partiPolitique.toLowerCase();
            let partiSaisi = partiRecherche.toLowerCase();
            if (partiCandidat === partiSaisi) {
                resultat[resultat.length] = liste[i];
            }
        }
        return resultat;
    }
    function verifierSiElecteurAdejaVote(liste, CINElecteur){
        for(let i = 0; i<liste.length; i++){
            for (let j = 0; j<liste[i].electeurs.length; j++){
                if (liste[i].electeurs[j] === CINElecteur){
                    return true;
                }
            }
        }
        return false;
    }
    function chercherCandidatParCin(liste, cinRecherche){
            for(let i = 0; i < liste.length; i++){
                if (liste[i].CIN.toUpperCase() === cinRecherche.toUpperCase()) {
                    return liste[i];
            }
        }
        return null;
}
function chercherCandidatParNom(liste , NomRecherche){
    let resultat = []
    for ( let i = 0; i < liste.length; i++){
        if (liste[i].nom.toLowerCase() === NomRecherche.toLowerCase()){
            resultat.push(liste[i])
        }
    }
    return resultat;

} 
function affichageStatique(liste){
    console.log("\n========================== STATISTIQUES DE L'ÉLECTION ============================");
    console.log("a. Nombre total de candidats");
    console.log("b. Nombre total de votes exprimés");
    let sousChoix = prompt("Choisissez une option (a ou b) : ");
    switch (sousChoix.trim().toLowerCase()) {
        case "a":
            console.log("\nLe nombre total de candidats : " + liste.length);
            break;
        case "b":
            let totalVotes = 0;
            for (let i = 0; i < liste.length; i++){
                totalVotes += liste[i].electeurs.length;
            }
            console.log("\n● Nombre total de votes : " + totalVotes);
            break;
            default:
                console.log("Option invalide !");
}
}

  let candidats = [{
	CIN : "HA213453",
	nom : "Akhannouch",
	prenom : "Aziz",
	partiPolitique : "parti A",
	age: 65,
	electeurs: ["AB121314" , "AC212324", "AD313234"]
},
{
    CIN : "FA812354",
	nom : "Benkirane",
	prenom : "Abdelilah",
	partiPolitique : "parti C",
	age: 72,
	electeurs: ["BA151617" , "BC252627" ,]
},
{
    CIN : "AB942316",
	nom : "Lekjaa",
	prenom : "Fouzi",
	partiPolitique : "parti D",
	age: 55,
	electeurs: ["CA353637" , "CB454647", "CD565758", "CE656768"]
},
{
     CIN : "AA121234",
	nom : "Elhilaly",
	prenom : "Amin",
	partiPolitique : "parti E",
	age: 30,
	electeurs: ["DA353666"]
}
 
];
let choix ;
  do{
    console.log("\n==========================menu=============================")
    console.log("1: Ajouter un nouveau candidat")
    console.log("2: Ajouter plusieurs candidats à la fois")
    console.log("3:Afficher la liste des candidats")
    console.log("4:Voter pour un candidat")
    console.log("5:Modifier les informations d'un candidat")
    console.log("6: Supprimer un candidat ")
    console.log("7:Rechercher des candidats")
    console.log("8 :Statistiques de l'élection")
    console.log("0:quitter")

    choix = prompt("Tapez votre choix : ")
    switch(choix){
        case "1":
            let CIN = prompt("tapez le CIN: ")
            let nom = prompt("tapez le nom : ")
            let prenom = prompt ("tapez le prenom : ")
            let partiPolitique = prompt("tapez la partiPolitique : ")
            let age = Number(prompt ("tapez l'age : "))
            candidats.push({
            CIN : CIN,
            nom : nom,
            prenom : prenom,
            partiPolitique : partiPolitique, 
            age :age,
            electeurs: []
            });
            console.log(" Candidat ajouté avec succès !");
            console.log("\n=======================Nouvelle liste des candidats============================");
            afficherCandidats(candidats)
            break;
         case "2":
                let nombre = Number(prompt("combien de condidats voulez-vous ajouter ?"));
                if (isNaN (nombre) || nombre <= 0){
                    console.log("nombre invalide")
                }
                for (let i = 0; i<nombre; i++){
                    console.log("saisie du candidat " + (i+1))
                    let CIN = prompt("tapez le CIN: ")
                    let nom = prompt("tapez le nom : ")
                    let prenom = prompt ("ecrire le prenom : ")
                    let partiPolitique = prompt("tapez la partiPolitique : ")
                    let age = Number(prompt ("tapez l'age : "))
                    candidats.push({
                    CIN : CIN,
                    nom : nom,
                    prenom : prenom,
                    partiPolitique : partiPolitique, 
                    age : age,
                    electeurs: []
                 });
                }
                 console.log(nombre +" candidats ajoutés avec succès !");
                 console.log("\n============================Nouvelle liste des candidats==================================");
                 afficherCandidats(candidats);
                break;
             case "3":
                console.log("\n============================AFFICHER LA LISTE DES CANDIDATS=================================");
                console.log("a. Afficher la liste normale");
                console.log("b. Trier par nombre de votes (Ordre décroissant)");
                console.log("c. Filtrer par parti politique");
               let sousChoix = prompt("Choisissez une option (a, b ou c) : ");

               switch (sousChoix) {
               case "a":
               console.log("\n================================ Liste normale ==============================================");
               afficherCandidats(candidats);
               break;
               case "b":
                console.log("\n===============================classement des gagnants========================================")
                let listeTriee = TrierCandidatsDecroissant(candidats);
                afficherCandidats (listeTriee)
                break;
                case "c":
                    let parti = prompt("Entrez le nom du parti politique : ");
                    console.log("\n--- Candidats du parti : " + parti + " ---");
                    let listeFiltree = filtrerParParti(candidats, parti);
                    afficherCandidats (listeFiltree);
                    break;

               }
                break;
                case "4":
                    console.log("\n===================================voter pour un candidats====================================")
                    let CINElecteur = prompt("Entrez votre CIN (Électeur) : ");
                    if (verifierSiElecteurAdejaVote(candidats, CINElecteur)){
                        console.log("\n Vous avez déjà voté et vous  n’avez pas le droit de  modifier votre vote ni de voter à nouveau")
                        break;
                    }
                    let CINCandidat = prompt("Entrez le CIN du candidat pour lequel vous voulez voter : ");
                    let candidatTrouve = chercherCandidatParCin(candidats, CINCandidat); 
                    if (candidatTrouve !== null){
                       candidatTrouve.electeurs.push(CINElecteur);
                        console.log("\n Votre vote a été enregistré avec succès pour " + candidatTrouve.prenom + " " + candidatTrouve.nom + " !");
                    }else{
                        console.log("\n Aucun candidat trouvé avec ce CIN.");
                    }
                    break; 
                    case "5":
                        console.log("=========================modifier les informations d'un candidat==========================")
                        let CinRechercher = prompt("entrez CIN du candidat à modifier ")
                        let candidat = chercherCandidatParCin(candidats , CinRechercher)

                        if (candidat !== null){
                            console.log("\n Candidat trouvé : " + candidat.prenom + " " + candidat.nom)
                            console.log("1 : modifier la partiPolitique")
                            console.log("2 : modifier l'age")
                            let option = prompt("Choisissez une option 1 ou 2 : ");
    
                           switch(option){ 
                           case "1":{
                                   let nouveauPartiPolitique = prompt ("entrez nouveau partiPolitique ")
                                    if (nouveauPartiPolitique.trim() !== ""){
                                      candidat.partiPolitique = nouveauPartiPolitique
                                      console.log("\n Parti politique modifié avec succès ")
                                    }else{
                                          console.log("\n Modification annulée ")
                                        }
                                        break;
                                    }
                            case "2":{
                                    let nouvelAge = Number(prompt("entrer le nouveau age "))
                                    if(!isNaN (nouvelAge) && nouvelAge > 0 ){
                                      candidat.age = nouvelAge
                                      console.log("\n l'age modifié avec succès ")
                                    }else{
                                         console.log("\n modification annulée ")
                                    }
                                    break;
                                    }
                                    default:
                                    console.log("\n Option invalide")
                            } 
                            }else{
                                 console.log("\n Aucun candidat trouvé avec ce CIN")
                        }
                        break;
                        case "6":
                        console.log("=================================supprimer un candidat=======================================")
                            let cinASupprimer = prompt("Entrez le CIN du candidat à supprimer : ")
                            let index = -1
                            for (let i = 0; i < candidats.length; i++){
                                 if (candidats[i].CIN.toUpperCase() === cinASupprimer.toUpperCase()){
                                    index = i;
                                    break;
                                 }
                            }
                            if (index !== -1){
                               let candidatSupprime = candidats[index];
                               candidats.splice(index,1)
                              console.log("\n" + candidatSupprime.prenom + " " + candidatSupprime.nom + " a été bien supprimé !"); 
                            }else{
                                 console.log("\n Aucun candidat trouvé avec ce CIN.");
                            }
                            break;
                            case "7":
                                console.log("======================================Rechercher des candidats=============================")
                                let nomCherche = prompt("entrer le nom de candidat : ")
                                let CandidatTrouve = chercherCandidatParNom(candidats , nomCherche)
                                if (CandidatTrouve.length > 0){
                                    console.log("\n====================Candidat(s) trouvé(s)=========================")
                                    afficherCandidats(CandidatTrouve);
                                }else{
                                    console.log("\n Aucun candidat trouvé avec ce nom")
                                }
                                break;
                                case "8":
                                    affichageStatique(candidats);
                                    break;

                                case "0":
                                    console.log("quitter...")
                                    break;
                                    default:
                                        console.log("Choix invalide, veuillez réessayer")
                            }
                            if (choix !== "0"){
                                prompt("\nAppuyez sur Entrée pour continuer...")
                            }                     
                         }
                          while(choix !== "0");
        }