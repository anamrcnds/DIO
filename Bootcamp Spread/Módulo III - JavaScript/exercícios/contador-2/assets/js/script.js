var currentNumberWrapper = document.getElementById("currentNumber")
var currentNumber = 0
var btnAdd = document.getElementsByTagName("button")[1]
var btnSub = document.getElementsByTagName("button")[0]


function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

btnAdd.addEventListener('click', increment)
btnSub.addEventListener('click', decrement)
