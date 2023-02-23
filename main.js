console.log('acá');
//declaro variables y referencio el DOM
let entrada = document.getElementById('datoJS');
let salida = document.getElementById('salidaJS');
let reloj = document.getElementById('relojJS');
let resultado = numAleat(1, 20);/*inicia c/n° al azar y luego va guardando el resultado de las operaciones*/
let numeroOperaciones = 5;
let tiempo = 30; //El tiempo q' tiene el user p/resolver las operaciones.
let aciertos = 0;              
let idIntervalos; //guarda el id del evento intervalos



/*---------------------------------------------------------------------FUNCIONES------------------------------------*/

function comprueba(){
    if (entrada.value == resultado){
        salida.innerHTML = 'CORRECTO';
        entrada.value = ''; //p/ir borrando lo q' escriba el user.

        if(++aciertos < numeroOperaciones){
        nuevaOperacion(resultado);                 
        }
        else{
            salida.innerHTML = '¡VICTORIA!';
            location.reload;
        }
 
    }
    else{
        salida.innerHTML = 'ERROR';
        location.reload();
}
}

//nueva operación basándome en el resultado actual.
function nuevaOperacion(numAnterior){
    let numNuevo;
    let operador;
    let caracterOperador;
    let pregunta;

    //obtengo el segundo operando de la operación:
    numNuevo = numAleat(20, 80);
    operador = numAleat(1, 2); //1 = +; 2 = -;

    switch(operador){
        case 1: 
        caracterOperador = '+';
        resultado = numAnterior + numNuevo;
        break;
        case 2: 
        caracterOperador = '-';
        resultado = numAnterior - numNuevo;
        break;
    }

//------------------------------------------------------------muestro al user la operación--------------------------

pregunta = numAnterior + '' + caracterOperador + '' + numNuevo + ' =';
document.getElementById('preguntaJS').innerHTML = pregunta;

}


function numAleat(limInf, limSup){
    return limInf + Math.floor( Math.random() * (limSup - limInf + 1) );
}

/*-------------------------------------------------------------------------------------------------------------------*/
/*Programo el botón para verificar si se ha resuelto bien la operación cuando se le hace 'click' | enter | Intro-------*/

document.getElementById('botonJS').addEventListener('click', comprueba);
window.addEventListener('keydown', function(e){

    if (e.keycode == 13) comprueba();//q' se ejecute comprueba solo si se presionó Intro

});

nuevaOperacion(resultado);