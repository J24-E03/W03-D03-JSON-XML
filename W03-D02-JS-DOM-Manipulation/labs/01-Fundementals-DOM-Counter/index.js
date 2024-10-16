
let count = document.getElementById("count")

function increaseCount(){

    count.innerHTML = Number(count.innerHTML) +1

}

function decreaseCount(){

    if(Number(count.innerHTML) > 0){
        count.innerHTML = Number(count.innerHTML) -1
    }


}