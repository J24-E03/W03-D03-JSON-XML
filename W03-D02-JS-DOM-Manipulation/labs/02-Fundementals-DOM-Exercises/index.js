
let password = "password123e"

if(password.length>=8 && password.toLowerCase().includes("e")){
    console.log('Your account has been made')
}
else{
    console.log("password must be above 8 characters AND the letter e")
}



let myStudents = ["Aron", "Martine", "Kathrin", "Kai", "Maryam", "Sumayya", "Marcel", "Paul","Mihai"]

let newStudents = ["John","Bob"]

function addNames(namesArr){
    let addedNames = ''

    for(let i =0; i<namesArr.length;i++){
        if(namesArr[i]==="Kathrin"){
            addedNames = addedNames + " " + 'Kathrin Zirbes'
            continue

        }
        addedNames = addedNames + " " + namesArr[i]
        console.log(namesArr[i])
    }

    console.log(addedNames)
}

addNames(myStudents)



let myStudent = {
    name:"John",
    occupation: "Sales",
    languages:["English","German"],
    address:{
        streetName:"Main Street",
        zipCode:51736
    }
}


console.log(myStudent.address.streetName)


