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
        nuevaOperacion(resultado);                 //REVER!
        }else{
            salida.innerHTML = '¡VICTORIA!';
            location.reload;
        }
 
    }else{
        salida.innerHTML = 'ERROR';
        location.reload();
}

function nuevaOperacion(){

}



/*-------------------------------------------------------------------------------------------------------------------*/
/*Programo el botón para verificar si se ha resuelto bien la operación cuando se le hace 'click' | enter | Intro-------*/

document.getElementById('botonJS').addEventListener('click', comprueba);
window.addEventListener('keydown', function(e){

    if (e.keycode == 13) comprueba();//q' se ejecute comprueba solo si se presionó Intro

});