// ## types ## 

let um = "um";

console.log(um);

typeof um; //string

um = 1; //number

typeof um;

// ## strings ##

let nome = "Paixão";
let sobrenome = "Lucas";

typeof nome; //string

nome.concat(sobrenome);

let concatenado = nome.concat(sobrenome);

typeof concatenado; //string

concatenado.length;

// return object
let exemplo = new String("19cm");

typeof exemplo; //string - object

exemplo.length;

let vazio = "";

typeof vazio; //string

console.log(nome[1]); //return index -a

//types of concatenate
concatenado = nome + " " + sobrenome;

concatenado = nome + "\n\n" + sobrenome;

concatenado = `${nome} ${sobrenome}`;

concatenado = `${nome}

${sobrenome}`;

concatenado = nome + "\"" + sobrenome;

let frase = "Bora um dotinha pae?";

//split, include, starts, ends and replace method
frase.split("");

frase.split(" ");

console.log(frase);

frase.includes("dotinha");

frase.startsWith("B");

frase.endsWith("?");

frase.replace(",", "!");

let stringModificada = frase.replace(",", "!");


// ## numbers ##

let num = 100;

100 + 3;

100 / 5;

console.log(num)

num / 3;

num * 5;

num % 2;

num2 = 101;

num2 % 2;

typeof Math; //object

Math.PI;

let fiveByThree = 5 / 3;

console.log(fiveByThree);

Math.floor(fiveByThree); //round to floor

Math.ceil(fiveByThree); // round to ceil

let percent = "10%";

percent + "%";

typeof percent; //number

percent.toString() //change to string

// ## boolean ## 

let validation = 3 === 0;

console.log(validation); // false

validation = 3 === 3;

validation = 3 > 4;

validation = 3 > 2;

validation = 3 >= 2;

validation.toString();

!validation; //opposite 

// ## arrays ##

let array = [];

let array = new Array(); //old method

array.push(3);

array[3];

array.push(2);

console.log(array); // 3, 2

array.pop(); //removes the final number of the list

array.push(2);

array.push(5);

array.shift(); //removes the first number of the list

array.unshift(); //add a number in the first position

console.log(array);

// return array index
for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.includes(3); //false

array.every(item => item === 5); 
//check if all items are 5

array.some(item => item === 5);
//check if something is 5

// ## objects ##

let obj = {};

typeof obj; //object

obj.name = "Julia";

console.log(obj);

obj.age = 20

Object.values(obj); //print the objects

Object.keys(obj); //print the keys

let person = {
    adress: "Rua 2",
    age: 20,
    name: "Julia"
}

person.name; //return name

person["name"]; //return name

person["numberOfSiblings"] = 3; 
//add a new key in the object

console.log(person);

let mom = "nameOfMom";

person[mom] = "Maria";
//add var mom in the object

person.mom = "Marta";
//create and add a var in to object

// ## empty, undefined and null ##

console.log(abacaxi);

typeof abacaxi; //undefined

let abacaxi 

typeof abacaxi; //undefined

let abacaxi = "";

console.log(abacaxi);

typeof abacaxi; //string

abacaxi = null;

typeof abacaxi; //null

abacaxi === true; //false

abacaxi === false; //false

let fruta = abacaxi; //undefined

console.log(fruta); //null

let fruta = abacaxi === false; //undefined

console.log(fruta); //false

!abacaxi; //true(#falsy values#)

let maca; //undefined

!maca; //true

undefined === false; //false



