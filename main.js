const prompt = require('prompt-sync')();{
    function afficherCandidats(liste){
        if (liste.length === 0){
            console.log("aucun candidat trouvé.")
            return;
        }
        for(let i = 0; i<liste.length; i++){
            let C = liste[i]
            console.log(
            (i + 1) + ". CIN :" + C.CIN +
            " | " + C.prenom +" "+ C.nom + 
            " |  partipolitique:" + C.partiPolitique + 
            " | age :" + C.age +
            " | votes :" + C.electeurs.length)
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
            let partiCandidat = liste[i].partiPolitique.trim().toLowerCase();
            let partiSaisi = partiRecherche.trim().toLowerCase();
            if (partiCandidat === partiSaisi) {
                resultat[resultat.length] = liste[i];
            }
        }
        return resultat;
    }

  let candidats = [{
	CIN : "HA213453",
	nom : "Akhannouch",
	prenom : "Aziz",
	partiPolitique : "Rassemblement National des Independants ",
	age: 65,
	electeurs: []
},
{
    CIN : "FA812354",
	nom : "Benkirane",
	prenom : "Abdelilah",
	partiPolitique : "Parti de la Justice et du Developpement",
	age: 72,
	electeurs: []
},
{
    CIN : "AB942316",
	nom : "Lekjaa",
	prenom : "Fouzi",
	partiPolitique : "Independant",
	age: 55,
	electeurs: ["JI236585"]
}
 
];
let choix ;
  do{
    console.log("\n----------------menu------------------")
    console.log("1: Ajouter un nouveau candidat")
    console.log("2: Ajouter plusieurs candidats à la fois")
    console.log("3:Afficher la liste des candidats")
    console.log("4:Voter pour un candidat")
    console.log("5:Modifier les informations d'un candidat")
    console.log("6: Supprimer un candidat ")
    console.log("7:Rechercher des candidats")
    console.log("8:Statistiques de l'élection")
    console.log("0:quitter")

    choix = prompt("Tapez votre choix : ")
    switch(choix){
        case "1":
            let CIN = prompt("tapez le CIN: ")
            let nom = prompt("tapez le nom : ")
            let prenom = prompt ("ecrire le prenom : ")
            let partiPolitique = prompt("tapez la partiPolitique : ")
            let age = Number(prompt ("tapez l'age : "))
            candidats[candidats.length] ={
            CIN : CIN,
            nom : nom,
            prenom : prenom,
            partiPolitique : partiPolitique, 
            age :age,
            electeurs: []
            };
            console.log(" Candidat ajouté avec succès !");
            console.log("\n---- Nouvelle liste des candidats ---");
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
                    candidats[candidats.length] = {
                    CIN : CIN,
                    nom : nom,
                    prenom : prenom,
                    partiPolitique : partiPolitique, 
                    age : age,
                    electeurs: []
                 };
                }
                 console.log(nombre +" candidats ajoutés avec succès !");
                 console.log("\n---- Nouvelle liste des candidats ---");
                 afficherCandidats(candidats);
                break;
             case "3":
                console.log("\n--- AFFICHER LA LISTE DES CANDIDATS ---");
                console.log("a. Afficher la liste normale");
                console.log("b. Trier par nombre de votes (Ordre décroissant)");
                console.log("c. Filtrer par parti politique");
               let sousChoix = prompt("Choisissez une option (a, b ou c) : ");

               switch (sousChoix) {
               case "a":
               console.log("\n--- Liste normale ---");
               afficherCandidats(candidats);
               break;
               case "b":
                console.log("\n-----classement des gagnants (Ordre décroissant)------")
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
                case "0":
                console.log("quitter..")
                break;
                default:
                    console.log("Choix invalide, veuillez réessayer")

    }
    if (choix !== "0") {
        prompt("\nAppuyez sur Entrée pour continuer...");
    }

  }
  while (choix !== "0");
}