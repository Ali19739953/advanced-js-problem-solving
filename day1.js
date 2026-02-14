//Day 1 tasks
//loops
// Q1 Print  NUmbers  from 1 to N:


console.log("----------------Question 1----------------")


const num =parseInt(10);
console.log(typeof(num))

for(let i =0;i<=num;i++){

console.log(i)
}


// Q2:Print Number from N to 1

console.log("----------------Question 2----------------")


for(let i =num;i>=0;i--){

console.log(i)
}


// q3: Print number from n to 1 using same loop condition as q1
console.log("----------------Question 3----------------")

for(let i =0;i<=num;i++){
console.log(num-i)
}


// q4: Print all even numbers from 1 to N
console.log("----------------Question 4----------------")

//we can use the same variable num
 
for(let i=0;i<=num;i++){

 if(i%2==0){
    console.log(i)
 }
 else{
    console.log("no eeven nums")
 }
}

//q5:Sum of N natural numbers:
//we can use same num var.
//Time complexcity is Big 0(n)
//for this you can use the formula directly it will be much faster.
console.log("----------------Question 5----------------")
let sum=0;
for(let i=1;i<=num;i++){
  
 sum=sum+i;
    
}
console.log("reuslt is",sum)


//q6: Find factorial of N number:
//we dont use num since its value is 10. we hardcode the 5 value here.
console.log("----------------Question 6----------------")
let factorial=1
for(let i=5;i>=1;i--){

    factorial= factorial*i
    // 1=1*5=5
    // 5=5*4=20
    // 20=20*3=60
    // 60=60*2=120
    // 120=120*1=120
   
}
console.log("factorial of num is: ",factorial)



// q7: Sum of all even numbers

console.log("----------------Question 7----------------")

//we can use same num var here
let summ=0;
for(let i=1;i<=num;i++){

if(i%2==0){
console.log(i)
summ=summ+i

}
console.log("result is",summ)
}


//q8: Print square of numbers from 1 to N
//we can use same num var
console.log("----------------Question 8----------------")

for(let i=0;i<=num;i++){
   console.log(`square of ${i} is ${i*i}`)
}






