const pesoInicial=document.getElementById("peso")
const alturaInicial=document.getElementById("alt")
const info=document.getElementById("info")
function calcular(){
    let pes=+pesoInicial.value;
    let alt=+alturaInicial.value;
    let imc;
    if(alt>65.24 && alt<300){
        function cal(){
            altura=alt/100;
            return altura;
        }
        alt=cal(alt);
    }
    if(pes<700 && pes>3.4 && alt<=3 && alt>0.6524){
        imc=pes/Math.pow(alt, 2);
        if(imc>40){
            info.textContent=imc.toFixed(2);
            info.style.backgroundColor = "red";
        }else if(imc>35){
            info.textContent=imc.toFixed(2);
            info.style.backgroundColor = "orange";
        }else if(imc>30){
            info.textContent=imc.toFixed(2);
            info.style.backgroundColor = "greenyellow";
        }else if(imc>25){
            info.textContent=imc.toFixed(2);
            info.style.backgroundColor = "green";
        }else if(imc>18.5){
            info.textContent=imc.toFixed(2);
            info.style.backgroundColor = "aqua";
        }else if(imc>0){
            info.textContent=imc.toFixed(2);
            info.style.backgroundColor = "Blue";
        }
    }else{
        alert('Unos de los datos es erroneo')
    }
}
function reset(){
    info.textContent="";
    pesoInicial.value = "";
    alturaInicial.value = "";
    info.style.backgroundColor = "";
}