/*
TESTS - PRÉPA 1
Ecrire un programme JS qui calcule la facture d’un client qui achète N articles vendus au prix x
sachant qu’on accorde 10% de ristourne si le client achète au moins 20 articles.
*/

const nbrArticle = 'N';
const prixArticle = 'X';
const facture = 'N'*'X';
if (nbrArticle > 20) {
    facture-((10*facture)/100)
}
