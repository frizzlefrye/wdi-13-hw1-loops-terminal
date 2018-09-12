//1. With interpolation you apply your variable inside 
// of a string and concatenation you write everything out 
// as a string 
// INTERPOLATION: const red = 2
//const blue = 5
//console.log(`Hello World ${red + blue}`)
//CONCATENATION: console.log("Hello World" +  " AND GOOD DAY");

//2. DRY stands for Don't Repeat Yourself, we should pay 
// attention to it because we don't want to repeat
//code that is almost identical to eachother when 
//we can condense it down

//3. you declare a variable at the top ex: let g =4;
// you assign when you change the value of in this case g 
// g = 7;
// and it can be defined depending where the declaration sits
// if your decleration is outside a for loop and your console.log
// is inside it will be undefined

//4. if you don't have to reassign variable use const
// because it will stand out and you'll know exactly 
// what it is, where as let can be reassigned and used 
// in loops that may have variable changes

//5. A parent directory is a higher directory that holds
// other files/folders "children directories" inside it

//6. if you want to know more about git you could use man git

//7. tab completion is awesome because it finishes your line
// for you and makes it so you avoid misspelling and its faster!

   const a = 4;
   const b = 53;
   const c = 57;
   const d = 16;
   const e = 'Kevin';
  

 console.log(a < b );
 console.log(c > d )
 console.log('Name' == 'Name');
 console.log(a < b < c );
 console.log(a != a < c );
 console.log(e == 'Kevin');
 console.log(48 == '48');


//Infinite Loop 1: It is an infinite loop because there is nothing
// telling the loop to stop/ there is no false

 //Infinite Loop 2: is not infinite because runProgram = false


 //we are declaring that letters = "A";
 let letters = "A"; 
 //we are assigning i the value of 0
let i = 0;
 //below we are defining the variable
while (i < 20) {
	letters += "A";
	i++;
}
// we are saying we want to render (letters)
console.log(letters);
// This code will run numbers 1 through 20
// I was wrong, it ran A 20 times, which makes more sense
// seeing as we are console.log(letters) which is +="A"

// The first part of the conrtol statement is initalization (i = 0;)
// The second part of the conrtol statement is condition i >= 999;
// The third part of the conrtol statement is final expression i++)


// a for loop repeats until the condition evaluates 
// false and a while loop will continue itslef as long as 
// the conditon evaluates to true
// they both repeat an action
for(i = 0; i<= 999; i++) {
	console.log (i);
}
 


for(i = 999; i >= 0; i--) {
	console.log(i);
}


for(i = 1; i <= 10; i++) {


console.log(`The value of i is ${i}`)

}







