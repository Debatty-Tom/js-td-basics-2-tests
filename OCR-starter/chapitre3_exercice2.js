// Baccalauréat

/* 
- Stockez la moyenne (numérique) d'un candidtat dans une constante
- Ecrivez un test qui affiche dans la console
	* "Le candidat est recalé"" si la cote est inférieure à 10
	* "Le candidat est reçu" si la cote est entre 10 et 12
	* "Le candidat est reçu avec mention" si la cote est supérieur ou égale à 12
*/
const moyenne = 14;
if (moyenne < 10) {
    console.log(`Le candidat est recalé (${moyenne})`);
} else if (10 <= moyenne && moyenne < 12) {
    console.log(`Le candidat est reçu (${moyenne})`);
} else {
    console.log(`Le candidat est reçu avec mention (${moyenne})`);
}
