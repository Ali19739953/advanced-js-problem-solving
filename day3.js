//day3

// Q1: Print right angled triangle
console.log("----------------Question 1----------------")
function rightangle(rows){
    
    for (let i=1;i<=rows;i++){
      let sign=''
        for(let j=0;j<i;j++){

            sign+='*'
           
        }
         console.log(sign)
    }

}

rightangle(5)



// Q1: Print inverted right angled triangle
console.log("----------------Question 2----------------")
function rightangleinv(rows){
    
    for (let i=rows;i>=1;i--){
      let sign=''
        for(let j=0;j<i;j--){
            sign+='*'
           
        }
         console.log(sign)
    }

}

//  rightangleinv(5)
console.log("----------------Question 3----------------")
function pattern1(rows){
    for(let i=0;i<rows;i++){
    
        let sign = ''
        for(let j=0;j<rows;j++){
            sign += '*'
        }
        console.log(sign)
    }
}
// pattern1(4)
console.log("----------------Question 4----------------")
function pattern2(rows){
    for(let i=0;i<rows;i++){
              let sign = ''
        for(let j=0;j<rows;j++){
            sign += '*'
        }
        console.log(sign)
    }
}
pattern2(5)

console.log("----------------Question 4----------------")
function pattern2(rows){
    for(let i=0;i<rows;i++){
              let sign = ''
        for(let j=0;j<rows;j++){
            sign += '*'
        }
        console.log(sign)
    }
}
pattern2(5)


//print pyramid pattern

console.log("----------------Question 5----------------")
function pyramid(rows){
    for(let i = 1; i <= rows; i++){
        let line = ''

        // spaces
        for(let s = 0; s < rows - i; s++){
            line += ' '
        }

        // stars
        for(let j = 0; j < (2*i) - 1; j++){
            line += '*'
        }

        console.log(line)
    }
}

pyramid(5)

console.log("----------------Question 6----------------")
function star(rows){
    for(let i=0;i<rows;i++){
        let line=''
        for(let j=0;j<rows;j++){
            line+= '*'
        }
        console.log(line)
    }
}
star(5)

function numbers(rows){
    for(let i=0;i<rows;i++){
            let line=''
        for(let j=1 ;j<=rows;j++){
            line+=j
        }
        console.log(line)
    }
}
numbers(4)

console.log("----------------Question 7----------------")
function pattern3(rows){
    for(let i=0;i<rows;i++){
             let line=''
        for(let j=0;j<=i;j++){
             line+='*'
        }
        console.log(line)
    }
}
pattern3(3)
console.log("----------------Question 8----------------")
function pattern4(rows){
    for (let i=1;i<=rows;i++){
         let line=''
        for(let j=rows;j>=i;j--){
                line+='*'
        }
        console.log(line)
    }
}

pattern4(5)


console.log("----------------Question 9----------------")

function pattern5(rows){
    for(let i=1;i<=rows;i++){
         let line=''
        for(let j=1;j<=i;j++){
            line+=j
        }
        console.log(line)   
    }
}

pattern5(5)



console.log("----------------Question 10----------------")

function pattern6(rows){
    for(let i=1;i<=rows;i++){
         let line=''
        for(let j=1;j<=(rows+1)-i;j++){
             line+=j
        }
        console.log(line)   
    }
}
pattern6(3)



console.log("----------------Question 11----------------")
//odd number triangle
function pattern7(rows){
    for(let i=1;i<=rows;i++){
         let line=''
        for(let j=1;j<=i;j++){
            if(j%2!=0){
                line+=j
            }
        }
        console.log(line)   
    }
}
pattern7(4)


console.log("----------------Question 12----------------")

function hollow(rows){
    for(let i =1;i<=rows;i++){
         let line=''
         
       for(let j=1;j<=rows;j++){
        if(i===1 || i===rows || j===1 || j===rows){
            line= line+'*'
        }
            else {
                line =line +' '
            }
       }
       console.log(line)
    }
}
hollow(4)