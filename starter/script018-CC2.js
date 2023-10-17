/*****************************
* CODING CHALLENGE 2
*/

/*
John et Mike jouent tous les deux au basket dans différentes équipes.
Lors des trois derniers jeux, L'équipe de John a marqué 89, 120 et 103 points,
alors que l'équipe de Mike a marqué 116, 94 et 123 points.

1. Calculez le score moyen de chaque équipe
2. Décidez quelle équipe gagne en moyenne (celle qui a le plus haut score moyen)
	et imprimez l'équipe gagnante dans la console avec son score moyen.
3. Changez ensuite les scores pour montrer différents gagnants.
	N'oubliez pas de prendre en compte qu'il pourrait y avoir un ex æquo (le même score moyen)
4. BONUS : Mary jour aussi au basket, et son équipe a marqué 97, 134 et 105 points.
	Comme avant, imprimez le gagnant en moyenne dans la console.
	INDICE : vous allez avoir besoin de l'opérateur && pour prendre la décision. 
5. Changez là aussi les scores pour générer différents gagnants,
	en gardant toujours en tête qu'il pourrait y avoir des ex æquos.

BONNE CHANCE 😀
*/

// sans bonus

const scoreJUn = 89;
const scoreJDeux = 120;
const scoreJTrois = 103;
const scoreMUn = 116;
const scoreMDeux = 94;
const scoreMTrois = 123;
const scoreMaUn = 97;
const scoreMaDeux = 134;
const scoreMaTrois = 105;
const moyenneMa = (scoreMaUn + scoreMaDeux + scoreMaTrois)/3;
const moyenneJ = (scoreJUn + scoreJDeux + scoreJTrois)/3;
const moyenneM = (scoreMUn + scoreMDeux + scoreMTrois)/3;
if (moyenneJ > moyenneM && moyenneJ > moyenneMa) {
    console.log(`La moyenne de John (${moyenneJ}) est plus grande que celle de Mark (${moyenneM}) et que celle de Marie (${moyenneMa})`);
} else if (moyenneJ > moyenneM && moyenneM === moyenneMa) {
    console.log(`La moyenne de John (${moyenneJ}) est plus grande que celle de Mark (${moyenneM}) qui est égal à celle de Marie (${moyenneMa})`);
} else if (moyenneMa > moyenneJ && moyenneMa > moyenneM) {
    console.log(`La moyenne de Marie (${moyenneMa}) est plus grande que celle de Mark (${moyenneM}) et que celle de John (${moyenneJ})`);
} else if (moyenneMa > moyenneM && moyenneM === moyenneJ) {
    console.log(`La moyenne de Marie (${moyenneMa}) est plus grande que celle de Mark (${moyenneM}) qui est égal à celle de John (${moyenneJ})`);
} else if (moyenneM > moyenneJ && moyenneM > moyenneMa) {
    console.log(`La moyenne de Mark (${moyenneM}) est plus grande que celle de Marie (${moyenneMa}) et que celle de John (${moyenneJ})`);
} else if (moyenneM > moyenneMa && moyenneMa === moyenneJ) {
    console.log(`La moyenne de Mark (${moyenneM}) est plus grande que celle de Marie (${moyenneMa}) qui est égal à celle de John (${moyenneJ})`);
}

// avec bonus


