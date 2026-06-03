//arguments & parameters
  //const speak = function(name= "Karl", time = "morning") {
    //console.log(`good ${time}! ${name}!`);
  //};
  //speak("Flora"); //good morning!, Flora!
  //speak(); //good morning!, Karl!


  //returning values
    
   // const calculateArea = function(radius) {
      //  return 3.14 * radius**2;
   // };

    //const area = calculateArea(5);
    //console.log(area);

    //Object Literals 


const blogs = [
    { title: 'Plan A, make Flora my GF, love for her: ♾️ ' },
    { title: 'Plan B, make Flora my Wife, love for her: ♾️ ' },
    { title: 'Plan C, make Flora the Mother of our Children, love for her: ♾️ '  },
]

console.log(blogs);


// Math Object

//console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 5.6;
console.log(Math.round(area)); 
console.log(Math.floor(area)); 
console.log(Math.ceil(area));
console.log(Math.trunc(area));

//random numbers
const random = Math.random();
console.log(random);

console.log(Math.round(random * 500));


//Primitive values 

let scoreOne = 50; 
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//Reference values

 const userOne = { name: "Karl", age: 20 };
const userTwo = userOne;

console.log(userOne, userTwo);

const userThree = { name: "Flora", age: 20 };
const userFour = userThree;

console.log(userThree, userFour);

