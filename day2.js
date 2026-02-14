//---------Day2- Condtions and logics-------------

//Here I will solve more condtions and logics questions.
//I will solve in a basic way for you all to understand.

// Q1:Find the maximum of 3 numbers
//now we can do this in various ways depending on the input of the user, for ex: arrays, var and so on.
//I will create a function
// You can use math.max function as well but thats not the point of these Solutions.
console.log("----------------Question 1----------------")
function findmax(a,b,c){

if(a>=b && a>=c){
    
    console.log(" greater",a)
}
else if(b>=c && b>=a){
    console.log(" greater",b)
}
else{
    console.log(" greater",c)
}
}

//We call the function here.
findmax(100,100,11)


console.log("----------------Question 2----------------")

// Q2:Check if the number is positive negative or Zero
//Here you can use return as well to return the values, that is a better option as well. It just returns the value from the fucntion.
function checknum(num){
    parseInt(num)

    if(num>0){
console.log("number is postive ")
    }
    else if(num==0){
        console.log("number is Zero")
    }
    else{
       console.log("number is negative") 
    }
}
checknum(19)



//Q3:Calculate the electricity Bill
//Example Units =230
//Output : Total Bill 600AED
//Example logic: 
// 0-100 Units -10 AED per unit
// 101-200 Units -15 AED per unit
// 201-300 Units -26 AED per unit
// Above 300 Units -38 AED per unit

console.log("----------------Question 3----------------")
//Now we can do this using many ways. 
// Dont copy this solution, every dev can think of various ways to do it.
function checkbill(units){
//convert into integer
units = parseInt(units)

console.log("The units value is :",units)
let prevunit=0;
let nextunit=0;
let finalunit=0;
let totalunits = 0
let result=0
if(units<=100){
    totalunits=units*10
console.log("your Bill:",totalunits)

}
else if(units>100 && units<=200){
prevunit=(100*10)

  totalunits=(units-100)*15
  result=prevunit+totalunits
console.log("your Bill is:",result)
}
 else if(units>200 && units<=300){
prevunit=(100*10)
nextunit=(100*15)
totalunits=(units-200)*26
result=prevunit+totalunits+nextunit
    console.log("your Bill is:",result)
}
else{
prevunit=(100*10)
nextunit=(100*15)
finalunit=(100*26)
    totalunits=(units-300)*38
    result=prevunit+nextunit+finalunit+totalunits
    console.log("your Bill is:",result)
}
}

checkbill(101)


//Q4:Check if a character is a vowel or a constant

console.log("----------------Question 4----------------")

function checkchar(a){
    const lowercase= a.toLowerCase()
    if(lowercase== "a" || lowercase== "e" || lowercase== "i" || lowercase== "o" || lowercase== "u"){
        console.log("The character is a vovel")
    }
else if (!isNaN(a)) {
   console.log("The char is number")
}
    else{
        console.log("The char is consotant")
    }
}
checkchar('1')



//q5: Check if a year is leap year or not.

console.log("----------------Question 5----------------")
// Rules to check if a year is leap year

// If a year is divisible by 4 → it’s a candidate.

// But if that year is divisible by 100 → it is not a leap year.

// Unless it is also divisible by 400 → then it is a leap year.
function checkLeap(year) {
    // Convert to integer 
    year = parseInt(year);

    if (year % 400 === 0) {
        console.log(year + " is a leap year");
    } 
    else if (year % 100 === 0) {
        console.log(year + " is not a leap year");
    } 
    else if (year % 4 === 0) {
        console.log(year + " is a leap year");
    } 
    else {
        console.log(year + " is not a leap year");
    }
}