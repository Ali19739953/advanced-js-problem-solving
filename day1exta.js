//q1: Print all numbers divisible by 3 and 5 up to N 

console.log("----------------Question 1----------------")

let num =parseInt(100)
result=[]
for(let i=1;i<=num;i++){
    //We will use here the logical operator "AND" to check if both numbers are divisible or not.
    if(i%3==0 && i%5==0){
        console.log("Number is divisible",i)
        result.push(i)
    }
}
    console.log(result)


//q2: Find the sum of all odd numbers up to N numbers

console.log("----------------Question 2----------------")
//We will use same num variable
result=[]
sum=0;
for(let i=1;i<=num;i++){
if(i%2!=0){
    result.push(i)
   sum=sum+i;
}
}
 console.log("The list of odd numbers are : ",result)
 console.log("The Sum is: ",sum)
   
console.log("----------------Question 3----------------")
 //q3: Print the cubes of numbers from 1 to N
 //again we can use the same variable.
 for(let i=0;i<=num;i++){
    //To print the cube just multiply the number itself by 3
    // To get the cube of a number, multiply it by itself 3 times
    cube=i*i*i;
      console.log(`cube of ${i} is ${cube}`)

 }

console.log("----------------Question 4----------------")
//q4:Print only the numbers that are both even and perfect sqquares
//we can use the same variable 
perfect=[];
for(let i=0;i<=num;i++){
    /// Check for numbers that are both even and perfect squares
    // Using built-in Math.sqrt() is efficient and avoids calculating square roots manually
    //its time we start using built in functions, no one in prod will do everything from scratch
    if(i%2==0 && Math.sqrt(i) % 1 === 0){
        console.log("The numbers that are both perfect square and even is:",i)
perfect.push(i)
    }
}
console.log(perfect)