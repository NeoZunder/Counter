const btnIncrease = document.getElementById("btn-increase");
const btnReset = document.getElementById("btn-reset");
const btnDecrease = document.getElementById("btn-decrease");

var contador = 0;
const screen = document.getElementById("screen");
      screen.textContent = `${contador}`;


function estiloContador(){
    if(contador<0){
        screen.style.color = "red";
    }else{
        screen.style.color = "rgb(0, 255, 42)";
    }
}

btnIncrease.addEventListener("click", (e)=>{
    contador++;
    screen.textContent = `${contador}`
    estiloContador()
})

btnReset.addEventListener("click", (e)=>{
    contador = 0;
    screen.textContent = `${contador}`;
    estiloContador()
    
})

btnDecrease.addEventListener("click", (e)=>{
    contador--;
    screen.textContent = `${contador}`
    estiloContador()
})



