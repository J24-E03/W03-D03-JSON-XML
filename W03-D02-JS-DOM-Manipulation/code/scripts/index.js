
console.log("Test")

let myName = "Omar"

console.log(myName)

let students = ["Maryam","Aron","Mihai","Kai"]

console.log(students[1])

// for(starting point; stopping point; incrementation/decrementation)

for(let i =0; i<students.length; i++){
    console.log(students[i])
}


// 2 parts of working with functions

// 1.declaring the function

// 2. calling the function


// 1. declaring a function

function sayHello(){

    console.log("Hello Paul")
}


// 2. calling the function
sayHello()

sayHello()

sayHello()



// parameter
function sayHelloBetter(name, city){
    console.log("Hello " + name + " form " + city)
}

sayHelloBetter("Kai", "Berlin")

sayHelloBetter("Maryam", "Munich")


// DOM Manipulation

// getting an element from the html file by its id
let firstH1 = document.getElementById("first-h1")

console.log(firstH1)

// changing the content of an html element
firstH1.innerHTML = "Changed in the JS file"


// all attributes in html can be edited in the JS using dot notation

let myLinkTag = document.getElementById("link-tag")

// changing the href attribute
myLinkTag.href = "https://digitalcareerinstitute.org/"

myLinkTag.innerHTML = "Digital Career Institute"

myLinkTag.style.backgroundColor = "red"


const warning = document.getElementById("warning")

let realPassword = "password13"

if(realPassword =="password123"){
    warning.style.display = "none"
}
else{
    warning.style.display = "block"
}


let allLis = document.getElementsByClassName("all-lis")

console.log(allLis)

for(let i =0; i<allLis.length; i++){
    console.log(allLis[i])
}


// allLis[0].innerHTML = "NEW VALUE"


const allH1s = document.getElementsByTagName("h1")

console.log(allH1s)


// turns string into number
console.log( Number("1"))



let container = document.getElementById('container')

// creating a new element
let newH1 = document.createElement("h1")

newH1.innerHTML = "Added New H1"

// adding the newly created element to the page
container.appendChild(newH1)


let lisExercise = document.getElementsByClassName("all-lis")

console.log(lisExercise)

// lisExercise.style.backgroundColor= "red"

console.log(7%2)




function alertMe(){
    for(let i=0; i<lisExercise.length;i++){
        // lisExercise[i].style.backgroundColor="blue"
    
        if(Number(lisExercise[i].innerHTML) %2 === 0){
            console.log('even number ' + lisExercise[i].innerHTML)
            
        }
        else if(Number(lisExercise[i].innerHTML) %2 === 1){
    
            console.log('number is odd ' + lisExercise[i].innerHTML )
            lisExercise[i].innerHTML += " is an odd number"
        }
    }
    alert("Button has been clicked")
}




function clickButton(){
    console.log("Button has been clicked attribute")
}




let button = document.getElementById('button')

// with event listeners we dont have the on
button.addEventListener('click',function(){

    for(let i=0; i<lisExercise.length;i++){
        // lisExercise[i].style.backgroundColor="blue"
    
        if(Number(lisExercise[i].innerHTML) %2 === 0){
            console.log('even number ' + lisExercise[i].innerHTML)
            
        }
        else if(Number(lisExercise[i].innerHTML) %2 === 1){
    
            console.log('number is odd ' + lisExercise[i].innerHTML )
            lisExercise[i].innerHTML += " is an odd number"
        }
    }
    console.log("Button has been clicked")
})