
console.log("Test")


let myName = "Omar2"


console.log(myName)




console.log(`${myName} Again`)




/* 

Data types in Javascript

1. String

2. Number

3. Boolean

4. Array

5. Object

6. Null

7. Undefined

*/


let myArr = [1,2,3,"Value",5]

// loop through the array and check if the value is a number

// console.log(typeof myArr[4])

for(let i =0; i<myArr.length;i++){
    if(typeof myArr[i] === "number")
   console.log("Value is a number")
}



let mainH1 = document.getElementById("main-header")

console.log(mainH1)


mainH1.innerHTML = "New Text"


let catPicture = document.getElementById("cat-picture")


console.log(catPicture)

catPicture.src = "https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGRvZ3xlbnwwfHwwfHx8MA%3D%3D"

catPicture.style.width="200px"


function sayHello(name ){

    console.log("Hello from the JS file " + name)
}

