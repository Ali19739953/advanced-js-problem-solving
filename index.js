//Day 1 tasks
//loops
// Q1 Print  NUmbers  from 1 to N:


console.log("q1")


const num =parseInt(10);
console.log(typeof(num))

for(let i =0;i<=num;i++){

console.log(i)
}


// Q2:Print Number from N to 1

console.log("q2")


for(let i =num;i>=0;i--){

console.log(i)
}


// q3: Print number from n to 1 using same loop condition as q1
console.log("q3")

for(let i =0;i<=num;i++){
console.log(num-i)
}


// q4: Print all even numbers from 1 to N
console.log("q4")

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
let sum=0;
for(let i=1;i<=num;i++){
  
 sum=sum+i;
    
}
console.log("reuslt is",sum)