const imiona = ["Jaś", "Krzyś", "Ola", "Tomasz"];
const imiona2 = ["Rafał", "Wojtek", "Karola"]

//1. Weryfikacja długości tablicy
//console.log(imiona.length > 2)


//2. Dostawanie się do elementów tablicy -> indexy zaczynają się od wartości 0
//console.log(imiona[2])

//3.Nadpisywanie elementu w tablicy
//imiona[0] = "Wojtek"
//console.log(imiona)

//4.Dodawanie elementu do tablicy
//imiona.push("Ania")
//console.log(imiona)

//5. Usuwanie elementów z końca tablicy
//imiona.pop();
//imiona.pop();
//console.log(imiona)

//6. Usuwanie elementu  z początku tablicy
// imiona.shift();
// console.log(imiona)


//7. Dodawanie elementu na początku tablicy
//imiona.unshift("Karol");
//console.log(imiona)

//8. Usuwanie konkretnego elementu z tablicy
// const indexElement = imiona.indexOf("Krzyś")
// imiona.splice(indexElement, 1)
// console.log(imiona)

//9. Przerobienie tablicy  na string
// const string = imiona.join("-");
// console.log(string);

//10. Odwracanie elementów w tablicy
// imiona.reverse();
// conole.log(imiona)

//11. Sortowanie tablicy 
//imiona.sort().reverse();
//console.log(imiona)

//12. Mapowanie elementów tablicy
// imiona.map(imie => {
//     if(imie.length > 5) {
//         console.log("Imie: " + imie + " ma więcej niż 5 znaków")
//     } else {
//         console.log("Imie: " + imie + " ma mniej niż 5 znaków")
//     }
// })

//13. Łączenie tablic
const imiona3 = imiona.concat(imiona2);
console.log(imiona3)