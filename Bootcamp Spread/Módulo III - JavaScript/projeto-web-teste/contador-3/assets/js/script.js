let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;
let btnAdd = document.getElementsByTagName("button")[1];
let btnSub = document.getElementsByTagName("button")[0];
btnAdd.disabled = false;
btnSub.disabled = false;
let x = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber == 10){
        btnAdd.disabled = true;

        //Alterando a cor do botão
        btnAdd.style.borderColor = "lightslategray";
        btnAdd.style.backgroundColor = "lightgrey";
        btnAdd.style.color = "lightslategray";

    }else if(currentNumber > -10 && btnSub.disabled == true){
        btnSub.disabled = false;

        //Retornando cor original
        btnSub.style.borderColor = "lightcoral";
        btnSub.style.backgroundColor = "rgb(253, 212, 212)";
        btnSub.style.color = "lightcoral";
    }
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;

    if(currentNumber == -10){
        btnSub.disabled = true;
        
        //Alterando a cor do botão
        btnSub.style.borderColor = "lightslategray";
        btnSub.style.backgroundColor = "lightgrey";
        btnSub.style.color = "lightslategray";

    }else if(currentNumber < 10 && btnAdd.disabled == true){
        btnAdd.disabled = false;

        //Retornando cor original
        btnAdd.style.borderColor = "lightcoral";
        btnAdd.style.backgroundColor = "rgb(253, 212, 212)";
        btnAdd.style.color = "lightcoral";
    }
}

btnAdd.addEventListener('click', increment)
btnSub.addEventListener('click', decrement)