var nombre1 = parseInt(prompt("Saisissez un premier nombre"));
var nombre2 = parseInt(prompt("Saisissez un second nombre"));

if (nombre1 < nombre2) {
    alert(nombre1 + " est inférieur à " + nombre2);
} else if (nombre1 === nombre2) {
    alert(nombre1 + " est égal à " + nombre2);
} else if (nombre1 > nombre2) {
    alert(nombre1 + " est supérieur à " + nombre2);
}
else {
    alert(nombre2 + " est supérieur à " + nombre1);
}
