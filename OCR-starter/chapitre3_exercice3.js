// Seconde suivante

/*
- Stockez dans trois variables
    * l'heure actuelle
    * les minutes actuelles
    * les secondes actuelles
- … (TODO)
*/

const currentTime = new Date();
const currentHour = currentTime.getHours();
const currentMinutes = currentTime.getMinutes();
const currentSecond = currentTime.getSeconds();
console.log(`il est ${currentHour}h ${currentMinutes}m ${currentSecond}s soit ${currentTime}`);