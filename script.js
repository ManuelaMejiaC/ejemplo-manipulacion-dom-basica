
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const form = document.querySelector('#form');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');


/* form.addEventListener('submit', sumarInputValues); 
//en un addEventListener no se añaden paréntesis para la función, primero pregunta qué evento queremos escuchar (click) y luego quiere saber cual función debe mandar a llamar, si se le ponen los paréntesis es como ejecutar dos veces la función. 

function sumarInputValues(event) {
    //console.log({event});
    event.preventDefault(); //no ejecute lo que por evento debe ejecutar (es decir, que no actualice la pag)
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
} */

btn.addEventListener('click', sumarInputValues); 

function sumarInputValues(event) {
    //console.log({event});
    //event.preventDefault(); 
    const sumaInputs = Number(input1.value) + Number(input2.value);
    pResult.innerText = "Resultado: " + sumaInputs;
    
}