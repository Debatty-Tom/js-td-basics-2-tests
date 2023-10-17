/*
TESTS - PRÉPA 2 : Les restos du cœur
Un magasin accorde une remise de 10% si l’achat est supérieur à 25€.
Quand la remise est supérieure à 5€, le magasin verse 10% de celle-ci aux restos du cœur
avec un maximum de 2€.
Ecrire le programme JS qui, à partir du montant des achats,
calcule et affiche la somme versée aux restos du cœur.
*/

/* Tester avec des montants d'achat de
- 20€ (pas de remise, pas de montant versé)
- 30€ (remise de 3€, pas de montant versé)
- 60€ (remise de 6€, 0.6€ versés)
- 100€ (remise de 10€, 1€ versés)
- 200€ (remise de 20€, 2€ versés)
- 1000€ (remise de 100€, 2€ versés)
*/
const montantAchat = 1000;
let remise;
let don;
if (montantAchat < 25){
    remise = 0;
} else {
    remise = (1/10)*montantAchat;
}
if (remise < 5) {
    don = 0;
} else {
    don = (1/10)*remise;
}
if (don <= 0) {
    console.log('n\'hésitez pas à faire un don aux restos du coeur')
} else if (don <= 2){
    console.log(`merci pour votre don de ${don}€ aux resto du coeur`)
} else {
    don = 2;
    console.log(`merci pour votre don de ${don}€ aux resto du coeur`)
}