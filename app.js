//Declaración de variables
let numeroGenerado = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

//Creación de funciones que titulen y nombren las cajas del juego
function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Creación de función que genere numero aleatorio 
function generarNumeroSecreto() {
    numeroGenerado =  Math.floor (Math.random()*numeroMaximo)+1;  
    console.log(numeroGenerado);
    console.log(ListaNumerosSorteados);
    //si ya sorteamos todos los numeros posibles:
    if (ListaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','¡Ya se sortearon todos los números secretos posibles!');
    }else {
        // si el numero generado está incluido en la lista:
   if (ListaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
   } else {
    ListaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
   }
    }
}
//Establecer las condiciones para el juego
function condicionesIniciales(){
    asignarTextoElemento('h1','Adivina el número secreto');
    asignarTextoElemento('p','Ingrese un número entre  1 y 10:');
    generarNumeroSecreto();
    intentos = 1;
}
//Inicio del juego:
condicionesIniciales();
//Optimizando codigo: creación de función que  permita limpiar caja
function LimpiadorCaja(){
    document.querySelector('#valorUsuario').value ='';
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

     if (numeroGenerado === numeroDeUsuario){
        asignarTextoElemento('p',`¡Felicidades! Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroGenerado > numeroDeUsuario){
            asignarTextoElemento('p','El número secreto es mayor');
        } else {
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++;
        LimpiadorCaja ();
    } 
    return;
}

//Reiniciar juego
function reiniciarJuego() {
    //limpiar caja
    LimpiadorCaja ();
    //indicar mensaje de intervalo de numeros
    //Generar el número aleatorio
    //generarNumeroSecreto
    //Inicializar el numero de intentos
    condicionesIniciales();
    //Desabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    return;
}
condicionesIniciales()
