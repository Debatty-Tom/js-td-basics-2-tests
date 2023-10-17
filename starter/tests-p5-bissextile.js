/*
TESTS - PRÉPA 5 : Bissextile
Ecrire un programme qui teste si une année entrée par l’utilisateur est une année bissextile.
*/

/*
RAPPEL (en français) :
« Une année est bissextile si elle est multiple de 4, sauf pour les siècles non multiples de 400 »
OU 
« Une année est bissextile si elle est divisible par 4 mais pas par 100 ou bien si elle est divisible par 400 »
AUTREMENT DIT : 
	1. Les années divisibles par 4 sont bissextiles, pas les autres
	2. Exception : les années divisibles par 100 ne sont pas bissextiles
	3. Exception à l'exception : les années divisibles par 400 sont bissextiles
*/

/*
AIDES ( à regarder seulement si vous ne vous en sortez pas tout seul)
Etapes :
1. stockez l'année à tester dans une variable
2. écrivez le test et stockez le résultat dans une varable estBissextile
	* commencez par tester si l'année est divisible par 4
	* ajoutez ensuite le test pour voir si elle est divisible par 100
	* ajoutez en dernier le test pour voir si elle est divisible par 400
  On a donc :
												divisible par 4 ?
												
											OUI						NON
																	 |
									divisible par 100 ?				 |
																	 |
								OUI						NON			 |
														 |			 |
						divisible par 400 ?				 |			 |
														 |			 |
					OUI						NON			 |			 |
					 |						 |			 |			 |
					 B						 NB			 B			 NB
	
3. en fonction du résulat, affichez le message
	"… est une année bissextile" ou
	"… est une année non bissextile"	
4. Vérifiez votre programme pour tous les cas de figure :
	* une année non divisible par 4 (par ex. 2006)
	* une année divisible par 4 mais pas par 100 (par ex. 2004)
	* une année divisible par 100 mais pas par 400 (par ex. 2100)
	* une année divisible par 400 (par ex. 2000)
	Au cas où vous n'auriez pas encore bien saisi la règle, on est bien d'accord que
	2000 et 2004 sont bissextiles, 2006 et 2100 ne le sont pas :)
*/
var year = Number(prompt("Entrez une année :"));
var isBessextile;
if (year % 4 === 0) {
	if(year % 100 === 0) {
		if(year % 400 === 0) {
			isBessextile = true; // divisible par 100 et par 400
		} else{
			isBessextile = false; // divisible par 100 mais pas par 400
		}
	} else {
		isBessextile = true; // divisible par 4 mais pas par 100
	}
} else {
  isBessextile = false;
}
if(isBessextile){
	console.log(year + " est une année bissextile");
} else{
	console.log(year + " est une année non bissextile");
}
