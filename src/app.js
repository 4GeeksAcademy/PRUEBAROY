import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  



for (let i = 0; i < 10; i++) {
  console.log("Hello!")
}


function aleatorio() {
	 for (let i=0 ; i<=10; i++)
		return Math.floor(Math.random() *4 ) + 1;
	
  }
console.log("numnero aleatorio ---->",aleatorio())

function getColor(colorNumber = 0) {

	//make sure the parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch (colorNumber) {
		case 1: return "red";

		case 2: return "yellow";

		case 3: return "blue";

		case 4: return "green";

		default: return "black";

	}
}

console.log("color------>",getColor(2))

let combo = aleatorio();

console.log("color definido------>",getColor(combo))



function sing(){
    let art = ""
    for (let i=0 ; i < 11; i++){
        if (i === 4) art +="there will be an answer,";
        else if (i === 10 ) art += "whisper words of wisdom,";
        else art +="let it be,";

    }
    return art;
}
  

//Your code above ^^^

console.log(sing());

let lyricM = "botles of milk on the wall,"
let chorus = "botles of milk"
let contraChorus = "Take one down and pass it around,"



// function Botellas(){

// let countdown = 5


// for (let i=countdown; i>= 1; i--){
// 	console.log(i, lyricM  , i ,chorus)
// 	console.log (contraChorus, i -1 , lyricM )
	
// 	if (i-1 === 1)
// 		console.log(" 1 bottle of milk in the wall, 1 bottle of milk ,Take one down and pass it around, no more bottles of milk on the wall.")
// }
// return i ;
// }
// Botellas()




// function song(){
//     for (let i = 99; i >= 0; i--) {
//         if (i == 1) {
//             console.log("1 bottle of milk on the wall, 1 bottle of milk. Take one down and pass it around, no more bottles of milk on the wall.");
//             continue
//         }  if (i == 0) {
//             console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");
//             continue
//         } if (i== 2) {
//             console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottle of milk on the wall.`);
//             continue
//         }  
//             console.log(`${i} bottles of milk on the wall, ${i} bottles of milk. Take one down and pass it around, ${i-1} bottles of milk on the wall.`);
//         }
//     }


// song()

var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
   
};


console.log(person.luckyNumbers)





person.luckyNumbers.pop();
person.luckyNumbers.push(33);
console.log(person.luckyNumbers)




var person = {
    name: "John",                //String
    lastName: "Doe",
    age: 35,                     //Number
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], //Array
    significantOther: person2   //Object, yes, the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var person3 = {
    name: "Jimmy",
    lastName: "Doe",
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
};


let anArray = [person.luckyNumbers,person2.luckyNumbers,person3.luckyNumbers]

console.log(anArray);


const initialValue = 0;
const sumWithInitial = anArray[0].reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
  );

  const initialValue1 = 0;
  const sumWithInitial1 = anArray[1].reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue1,
    );
  
    const initialValue2 = 0;
    const sumWithInitial2= anArray[2].reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue2,
      );
    
      console.log(sumWithInitial + sumWithInitial1 + sumWithInitial2)

      let myList = document.getElementsByTagName("tr");
      
     
      myList[3].style.background = "red";   // cambia el primer elemento a rojo
     
      document.getElementsByTagName("p")[0].innerHTML = "abc";
// innerHTML puede usarse para insertar contenido de texto o HTML, esto crea texto dentro de un elemento <div>

let divElem = document.getElementById("myFirstDiv");
let myNewHOne = document.createElement("h1");
let t = document.createTextNode("Hello World");
myNewHOne.appendChild(t);  // Esta linea añade el texto al <h1>  
divElem.appendChild(myNewHOne); // Esto añade el <h1> al elemento "myFirstDiv"

let tableElement = document.getElementById("people1");
let NewTr= document.createElement("tr");
let NewTh= document.createElement("td");
let NewTh1= document.createElement("td");
let NewTh2= document.createElement("td");
let testo = document.createTextNode ("josefa")
let testo1 = document.createTextNode ("josefa1")
let testo2 = document.createTextNode ("josefa2")
NewTh.appendChild(testo);
NewTh1.appendChild(testo1);
NewTh2.appendChild(testo2);
NewTr.appendChild(NewTh);
NewTr.appendChild(NewTh1);
NewTr.appendChild(NewTh2);
tableElement.appendChild(NewTr);

let element = document.getElementById("people1");
while (element.firstChild) {
    element.removeChild(element.firstChild);
}

let myUL = document.querySelector("ul");

let names = ['Tom Bombadil', 'Aragorn', 'Arwen', 'Boromir', 'Faramir', 'Saruman', 'Legolas'];

names.map(name=>{
	myUL.innerHTML += `<li>${name}</li>`; 
});

let LIs = document.querySelectorAll("li");

LIs.forEach(LI => LI.addEventListener('contextmenu', (e)=>{
	LI.parentNode.removeChild(LI);
}));

let counter = 0;
let caja = document.getElementById("testeo");
let increase = document.getElementById("increase");
let H1loading= document.createElement("h1");
let Pdeloading = document.createTextNode ("Loading");
caja.appendChild(H1loading);
H1loading.appendChild(Pdeloading);

increase.addEventListener('click', (e)=>{
    counter ++;
  

    H1loading.innerHTML = "The counter value is "+counter;
})

let decrease = document.getElementById("decrease");

decrease.addEventListener('click', (e)=>{
    counter --;
  

    H1loading.innerHTML = "The counter value is "+counter;
})



//-----AQUI EMPIEZA EL RANDOM CARD-----////
let NumeroCartas = [1,2,3,4,5,6,7,8,9,10,11,12];
let Palos = ["♦", "♥", "♠", "♣"];

const Randomnize =(arr)=>{
    return Math.floor(Math.random()* arr.length)
}
console.log(Randomnize(NumeroCartas));
console.log(Randomnize(Palos));

const resultadoCarta = arr => {
    return arr[Randomnize(arr)]
      }
      console.log(resultadoCarta(NumeroCartas))
      console.log(resultadoCarta(Palos))

let simbolo = document.getElementById("simbolo");
let NumeroCarta = document.getElementById("NumeroCarta");
let reset = document.getElementById("reset");


reset.addEventListener('click', (e)=>{
    
  

    NumeroCarta.innerHTML = resultadoCarta(NumeroCartas);
    simbolo.innerHTML = resultadoCarta(Palos);

})