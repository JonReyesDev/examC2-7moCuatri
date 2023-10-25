let btnMostrar = document.querySelector('.btnMostrar');
let select = document.querySelector('#numeros');
let tabla = document.querySelector('.tabla-container');

const mostrar = (numero) => {
    tabla.innerHTML = "";
    for(let i = 1; i <= 10; i++){
        let fila = `<div class="fila">
        <img src="../img/${numero}.png" class="n1">
        <img src="../img/x.png" class="x">
        <img src="../img/${i}.png" class="n2">
        <img src="../img/=.png" class="equal">`;
        let num = `${numero * i}`;
        if(num < 10) {
            fila += `<img src="../img/${numero * i}.png" class="equal">
            </div>`;
        }
        else if(num < 99) {
            fila += `<img src="../img/${num[0]}.png" class="n1">
            <img src="../img/${num[1]}.png" class="n2">
            </div>`;
        }
        else {
            fila += `<img src="../img/${num[0]}.png" class="n1">
            <img src="../img/${num[1]}.png" class="n2">
            <img src="../img/${num[2]}.png" class="n1">
            </div>`;
        }
        tabla.innerHTML += fila;
    }
}

btnMostrar.onclick = () => {
    mostrar(select.value);
}