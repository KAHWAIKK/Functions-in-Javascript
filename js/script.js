//FUNCTION DECLARATION SYNTAX by Dave Gray

//Functions provide reusable code

function sum(num1 , num2){
    return num1 + num2;
}

console.log(sum(4,3));

//Another Example

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf('@'));
    //
}

console.log(getUserNameFromEmail('Kahwaikagwima@com'));//console prints kahwaikagwima

//Anonymous functions and arrow functions

const getUserNameFromEmailA = (email) =>{
    return email.slice(0, email.indexOf('@'));
};

console.log(getUserNameFromEmail('Kahwaidefkagwima@gwema.com'));
//console returns Kahwaidefkagwima

//Another Example

const toProperCase = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase('qWERtyKEYparD'));//console returns Qwertykeypard

//values that are passed into a function are called parameters

//Another Example

//function declaration

function greet(){
    console.log('Hello')
};

greet();


//function expression
//We can also store function in a variable

const speak = () =>{
    console.log('Goodday!')
}

speak();

/* HOISTING */

//HOISTING WORKS WITH FUNCTION DECLARATIONS BUT IT DOESNT WORK WITH FUNCTION EXPRESSIONS Hoisting is a concept whereby a function can be down at the bottom of the script file but it can be revoked anywhere within the script, even up there.

//its  s good code practice to always use function expressions

//PASSING VALUES INTO FUNCTIONS

const speakA = (name) =>{
    console.log(`Goodday ${name}`)
}

speakA('Kevin');//the value passed inside when invoking the function is called arguements

//  INSTANCES WHERE WE WOULD WANT A FUNCTION RETURN A VALUE TO US

const calcArea = (radius)=>{
 var  areaA = 3.142 * radius**2;
 return areaA;
};

const AREA = calcArea(5);
console.log(AREA);//console returns 78.55

//ANOTHER EXAMPLE-- Turning regular functions into arrow functions

const bill = function(productPrice, tax){
    let total = 0;
    for( let x = 0; x<productPrice.length; x++){
        total += productPrice[x] + productPrice[x] * tax;
    }
    return total
}

console.log(bill([2,6,8],0.6));//console prints 25.6

//converting this into an arrow function

const billA = (productPrice, tax)=>{
    let total = 0;
    for( let x = 0; x<productPrice.length; x++){
        total += productPrice[x] + productPrice[x] * tax;
    }
    return total
}

console.log(billA([2,10,8],0.6));//console prints 25.6

//We use methods on any data types or objects using the dot notation.

/* CALLBACKS */

//Callbacks are functions that are passed in as parameters inside of other functions

//Example

const FuncA = (callbackFunc)=>{
    //do something
    let valueA = 50;
    callbackFunc(45);
}

FuncA(
    (valuexx)=>{
        //do something
        console.log(valuexx)
    }
);

//valuexx is the name of the callback function

/* For Each */

const people = ['mario','luigi','bill','shaun','chun-li','kahwai','pascal']

const logPerson = (person ,index)=>{
    console.log(`- How are ${person}`)//console returns 0 - How are mario
}


people.forEach(logPerson);
//logPerson is the callback function

const peopleA = ['mario','luigi','bill','shaun','chun-li','kahwai','pascal']

let html = '';
peopleA.forEach(
    (person)=>{
        //create an html template
        html += `<li style="color:crimson">${person}</li>`
    }
);

console.log(html);
const ul = document.querySelector(".people")
ul.innerHTML = html;

