//let radius = 10 ;
//let pi = 3.14;

//console.log(radius, pi);

// math operators +, -, *, /, **, %
//console.log( 10 / 2 );
//let result = pi * radius ** 2;
//let result = 4 * (14-2)**2;
//let likes= 20;
//likes= likes + 1;
//likes++;
//likes= likes*5;
//likes *= 2;
//likes += 10;

// concatenation way 
//const title = "That should be me";
//const author = "Delulu";
//const likes = 1000000;

//let result = "This Story is called " + title + " by " + author + "in 2024-2026" + " and has " + likes + " likes.";

//template string way
//let result = `This story is called ${title} by ${author} in 2024 and has over ${likes} likes.`;
//console.log(result);

//creating html templates
//let html =
    //`<h2>${title}</h2>
     //<p>by ${author}</p>
     // <span>This Story has over ${likes} likes!</span>`;
//console.log(html);

// boolean and comparisons 
//console.log(true, false, "true", "false");

//methods can return booleans
//let email = 'florabelle@gmail.com';
//let names = ['Panis', 'Florabelle', 'Karl'];

//let result = email.includes('@');
//let result = names.includes('Florabelle');
//console.log(result);    

// comparison operators >, <, >=, <=, ==, !=
//let age = 24;

//console.log (age == 24);
//console.log (age != 28);
//console.log (age > 20);
//console.log (age < 30);
//console.log (age <= 24);
//console.log (age >=18);

//let name = 'flora';

//console.log (name == 'flora');
//console.log (name == 'Flora');
//console.log (name > 'Flora');
//console.log (name > 'Karl');
//console.log (name >= 'Flora');
//console.log (name <= 'Flora');
//console.log (name != 'Karl');
 
//let age = 24;
// loose equality (different types can still be equal)
//console.log (age == 24);
//console.log (age == '24');
//console.log (age != 24);
//console.log (age != '24');

//strict comparison are not equal 
//console.log (age === 24);         
//console.log (age === '24');
//console.log (age !== 24);
//console.log (age !== '24');


// for loops 

//for(let i = 0; i < 5; i++){

  //console.log ('in loop:' , i);
//}
//console.log ('loop Finished');

//const names= ['Flora', 'Belle', 'Borata'];

//for (let i= 0; i < names.length; i++) {
    //console.log(names[i]);
    ///let html = `<div>${names[i]}</div>`;
    //console.log(html);
//}

//while loops
//const names= ['Flora', 'Belle', 'Borata'];

//let i = 0; 
//while (i < 5) {
    //console.log('in loop:', i);
    //i++;  
//}

//let i= 0;
//while (i < names.length) {
    //console.log(names[i]);
    //i++;  
//}

// do while loops
 // let i= 1;
  //do {
    //console.log( 'val of i is:', i);
    //i++;
  //} while (i < 5);



  //if Statements
   //const age = 24;

   //if (age > 20) {
    //console.log('you are over 20 years old');
   //}

   //const ninjas = ['florabelle', 'borata', 'panis'];

   //if (ninjas.length > 2) {
    //console.log("that's a lot of ninjas");
   //}


   //const password = 'kupala1234';

   //if (password.length >= 10) {
    //console.log('that password is long enough');
   //} else {
    //console.log('that password is too short');
  //}



   // else if statements
   //const password= 'p@assword122';

   //if (password.length >= 12) {
    //console.log('that password is mighty strong');
   //} else if (password.length >= 8) {
    //console.log('that password is long enough');
   //} else {
    //console.log('that password is too short');
   //}

   
   // logical operators: OR ||, AND &&, NOT !

   //const password= 'password';

   //if (password.length >= 12 && password.includes('@')) {
    //console.log('that password is mighty strong!');
   //} else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
    //console.log('that password is strong enough!');
   //} else {
    //console.log('that password is not strong enough');
   //}

   //logical NOT operator
   //let user = false;
   //if (!user) {
    //console.log('you must be logged in to continue');
   //}

   // break and continue
     //const scores = [50, 25, 0, 30, 100, 20, 10];

     //for (let i = 0; i < scores.length; i++) {
       //if (scores[i] === 0) {
         //continue;
       //}
       //console.log(scores[i]);
     //}




     //switch statements
    //  const grade = '50';

      //switch (grade) {
        ///case '50':
         // console.log('you got an A!');
          ///break;
        ///case 'B':
          //console.log('you got a B!');
          ///break;
        ///case 'C':
          //console.log('you got a C!');
          ///break;
        ///case 'D':
          ///console.log('you got a D!');
          ///break;
        ///case 'E':
          ///console.log('you got an E!');
          ///break;      
      ///default: 
     //   console.log('not a valid grade');
    ///}


    //variables and block scope
     //  let age = 30; 
     ///let name = 'karl';
     ///if (true) {
       /// let age = 40;
        ///let name = 'florabelle';
        ///console.log('inside 1st code block:', age, name);
     ///}
     ///console.log('outside code block:', age, name);