const prompt = require('prompt-sync')();{
  let candidats = [{
	CIN : "HA213453",
	nom : "Akhannouch",
	prenom : "Aziz",
	partiPolitique : "Rassemblement National des Indépendants ",
	age: 65,
	electeurs: []
},
{
    CIN : "FA812354",
	nom : "Benkirane",
	prenom : "Abdelilah",
	partiPolitique : "Parti de la Justice et du Développement",
	age: 72,
	electeurs: []
},
{
    CIN : "AB942316",
	nom : "Lekjaa",
	prenom : "Fouzi",
	partiPolitique : "Indépendant",
	age: 55,
	electeurs: []
}
 
];
let choix ;
  do{
    console.log("----------------menu------------------")
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
            let partiPolitique = prompt("tapez la partiPolitique")
            let age = Number(prompt ("tapez l'age : "))
            candidats.push({
            CIN : CIN,
            nom : nom,
            prenom : prenom,
            partiPolitique : partiPolitique, 
            age :age
            });
            console.log(candidats);
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
                    let partiPolitique = prompt("tapez la partiPolitique: ")
                    let age = Number(prompt ("tapez l'age : "))
                    candidats.push({
                    CIN : CIN,
                    nom : nom,
                    prenom : prenom,
                    partiPolitique : partiPolitique, 
                    age : age
                 });
                }
                console.log(nombre + " candidat(s) ajouté(s) avec succès !`")
                break;
             case "3":
                console.log(candidats)
                break;
                case "0":
                console.log("quitter..")
                break;
                default:
                    console.log("Choix invalide, veuillez réessayer")
    }

  }
  while (choix !== "0");
}