function suma(){
    const primerdigito = parseInt(prompt('Escriba el primer digito'))
    const segundodigito = parseInt(prompt('Escriba el segundo digito'))

    let sumas = (primerdigito + segundodigito)

    alert('La suma de ambos digitos es de ' + sumas)

}

function opMatematicas(){
    const primerdigito = parseInt(prompt('Escriba el primer digito'))
    const segundodigito = parseInt(prompt('Escriba el segundo digito'))

    let sumas = (primerdigito + segundodigito)
    let resta = (primerdigito - segundodigito)
    let multiplicacion = (primerdigito * segundodigito)
    let division = (primerdigito / segundodigito)
    alert('La suma de los digitos es de ' + sumas + ' la resta de los digitos es de ' + resta + ' la multiplicacion de los digitos es de ' + multiplicacion + ' la division de los digitos es de ' + division)
}

function cuadrado(){
    const primerdigito = parseInt(prompt('Escriba el primer digito'))

    let cuadrado = (primerdigito * primerdigito)

    alert('el cuadrado del numero es de ' + cuadrado)
}

function area(){
    const base = parseInt(prompt('Escriba la base del triangulo'))
    const altura = parseInt(prompt('Escriba la altura del triangulo'))

    let area = ((base * altura) / 2)

    alert('el area del triangulo es de ' + area)
}

function conversion(){
    const metro = parseInt(prompt('Escriba una unidad en metros'))

    let decimentros = ( metro * 10) 
    let centimentros = ( decimentros * 10)
    let milimetros = ( centimentros * 10 )
    
    alert('los decimetros son ' + decimentros + ' los centrimetros son ' + centimentros + ' los milimetros son ' + milimetros)
}

function mayorq(){
    const pnumero = parseInt(prompt('Escriba el primer digito'))
    const snumero = parseInt(prompt('Escriba el segundo numero'))

    if (pnumero === snumero) {
        alert('Ambos números son iguales')
    } else if (pnumero > snumero) {
        alert('El número mayor es ' + pnumero)
    } else {
        alert('El número mayor es ' + snumero)
    }
}

function menorq(){
    const pnumero = parseInt(prompt('Escriba el primer digito'));
    const snumero = parseInt(prompt('Escriba el segundo numero'));
    const tnumero = parseInt(prompt('Escriba el tercer digito'));


    if (pnumero === snumero && snumero === tnumero) {
        alert('Todos los números son iguales');
    } else if (pnumero <= snumero && pnumero <= tnumero) {
        alert('El número menor es ' + pnumero);
    } else if (snumero <= pnumero && snumero <= tnumero) {
        alert('El número menor es ' + snumero);
    } else {
        alert('El número menor es ' + tnumero);
    }
}


// axa

function promedio() {
    alert("Este algoritmo determina el promedio de calificaciones ingresadas por el usuario");

    let nombreEstudiante = prompt("Ingrese el nombre del estudiante:");
    let materia = prompt("Ingrese la materia:");

    let calificaciones = [];
    let cantidadNotas = parseInt(prompt("Ingrese la cantidad de calificaciones que desea registrar:"));

    while (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        cantidadNotas = parseInt(prompt("Por favor, ingrese un número válido para la cantidad de calificaciones:"));
    }

    for (let i = 1; i <= cantidadNotas; i++) {
        let calificacion;
        do {
            calificacion = parseFloat(prompt("Ingrese la calificación #" + i + " (entre 0 y 10):"));
        } while (isNaN(calificacion) || calificacion < 0 || calificacion > 10);
        calificaciones.push(calificacion);
    }

    let sumaCalif = 0;
    for (let calificacion of calificaciones) {
        sumaCalif += calificacion;
    }
    let promedio = sumaCalif / calificaciones.length;

    let estado = promedio >= 4.5 ? "Aprobaste" : "Reprobaste";

    alert("Estudiante: " + nombreEstudiante + 
        "\nMateria: " + materia + 
        "\nPromedio de calificaciones: " + promedio.toFixed(2) + 
        "\nEstado: " + estado);
}

// axa
function parimpar(){
    const pnumero = parseInt(prompt('Escriba el numero'))

    if(pnumero % 2 === 0){
        alert('El numero ' + pnumero + ' es par')
    }

    else{
        alert('El numero ' + pnumero + ' es impar')
    }
}

function inversion(){
    const inversion = parseInt(prompt('Escriba el total a invertir'))

    let ganancia = (inversion*0.08)
    let total = (ganancia + (inversion))


    alert ('El total de la inversion es de ' + total + ' su ganancia es de ' + ganancia)
}

function rango(){
    let minimo = Infinity;
    let maximo = -Infinity;
    
    let cantidad = parseInt(prompt('¿Cuántos números vas a ingresar?'));
    
    for (let i = 0; i < cantidad; i++) {
        let numero = parseInt(prompt('Escribe el número ' + (i + 1)));
        
        if (numero < minimo) {
            minimo = numero;
        }
        if (numero > maximo) {
            maximo = numero;
        }
    }
    
    // Mostrar los resultados
    alert('El número mínimo es ' + minimo);
    alert('El número máximo es ' + maximo);
}

function factorial() {
    const numero = parseInt(prompt('Escriba un número para calcular su factorial'));

    let factorial = 1;

    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }


    alert('El factorial de ' + numero + ' es ' + factorial);
}

function tasasInt() {
    alert("Este algoritmo calcula el interés simple y compuesto basado en el monto, la tasa de interés y el tiempo.");

    let montoInicial = parseFloat(prompt("Ingrese el monto inicial (capital):"));
    while (isNaN(montoInicial) || montoInicial <= 0) {
        montoInicial = parseFloat(prompt("Por favor, ingrese un monto inicial válido:"));
    }

    let tasaInteres = parseFloat(prompt("Ingrese la tasa de interés anual (en porcentaje, por ejemplo, 5 para 5%):"));
    while (isNaN(tasaInteres) || tasaInteres <= 0) {
        tasaInteres = parseFloat(prompt("Por favor, ingrese una tasa de interés válida:"));
    }

    let tiempo = parseInt(prompt("Ingrese el tiempo (en años):"));
    while (isNaN(tiempo) || tiempo <= 0) {
        tiempo = parseInt(prompt("Por favor, ingrese un tiempo válido:"));
    }

    tasaInteres = tasaInteres / 100;

    let interesSimple = montoInicial * tasaInteres * tiempo;
    let montoFinalSimple = montoInicial + interesSimple;

    let montoFinalCompuesto = montoInicial * Math.pow((1 + tasaInteres), tiempo);
    let interesCompuesto = montoFinalCompuesto - montoInicial;

    alert("Resultados:\n" +
        "Monto inicial: $" + montoInicial.toFixed(2) + "\n" +
        "Tasa de interés anual: " + (tasaInteres * 100).toFixed(2) + "%\n" +
        "Tiempo: " + tiempo + " años\n\n" +
        "Interés Simple: $" + interesSimple.toFixed(2) + "\n" +
        "Monto Final (Simple): $" + montoFinalSimple.toFixed(2) + "\n\n" +
        "Interés Compuesto: $" + interesCompuesto.toFixed(2) + "\n" +
        "Monto Final (Compuesto): $" + montoFinalCompuesto.toFixed(2));
}
