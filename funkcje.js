// const imie = "Alicjaa";


// //Pierwszy sposób (można ją wywołać przed funckją)
// function pierwszaFunkcja() {
//     const suma =2+5; //(zmienna lokalna nie ma możliwości wykorzystać poza funkcją)
//     return console.log("To ja pierwsza funkcja! "+suma)
// }

// pierwszaFunkcja();

// //Drugi sposób (funkcja strzałkowa) (wywołujemy ją po funkcji)
// const drugaFunkcja = () => {
//     const suma =2+4;
//     return console.log("To ja druga funkcja! " + suma)
// }

// // drugaFunkcja();

// if(imie == "Alicja") {
//     pierwszaFunkcja();
// } else {
//     drugaFunkcja();
// }


function pierwszaFunkcja(wartosc1, wartosc2){
    const suma = wartosc1 + wartosc2;
    return console.log("To ja pierwsza funkcja! "+ suma)
}

pierwszaFunkcja(10,20)