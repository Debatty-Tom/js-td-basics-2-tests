// Jour suivant

/* 
- Stockez le jour actuel (nom du jour, type texte) dans une constante
- Ecrivez des tests qui stockent dans une variable le nom du jour suivant dans chaque cas de figure 
et, si le nom du jour qui se trouve dans la constante n'est pas un des 7 de jours de la semaine,
affiche dasn la console "Erreur : jour non reconnu !"
- Testez si la variable qui conntienyt le nom du jour n'ets pas vide et,
dans ce cas, affichez dans la console le message "Demain, nous serons …"
*/


const getDay = new Date().getDay();
const dayNames = ["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"];
const currentDay = dayNames[getDay];
switch (currentDay) {
    case "dimanche":
        console.log("Demain nous seront lundi");
        break;
    case "lundi":
        console.log("Demain nous seront mardi");
        break;
    case "mardi":
        console.log("Demain nous seront mercredi");
        break;
    case "mercredi":
        console.log("Demain nous seront jeudi");
        break;
    case "jeudi":
        console.log("Demain nous seront vendredi");
        break;
    case "vendredi":
        console.log("Demain nous seront samedi");
        break;
    case "samedi":
        console.log("Demain nous seront dimanche");
        break;
    default:
        console.log("Erreur : jour non reconnu !");
        break;
}

