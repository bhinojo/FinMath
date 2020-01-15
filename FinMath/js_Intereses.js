var capital = 0;
var tasa = 0;
var plazo = 0;
var resultado = 0;
var capitalCompuesto = 0;
var tasaCompuesto = 0;
var plazoCompuesto = 0;
var resultadoCompuesto = 0;
var coeficienteCompuesto = 0;

//Funcion que calcula Interes Simple y Complejo

function calcularInteres() {

            //Tomo variables para interes Simple

            capital = document.getElementById('capital').value;
            tasa = document.getElementById('tasa').value;
            plazo = document.getElementById('plazo').value;

            //Tomo variables para Interes Compuesto

            capitalCompuesto = document.getElementById('capitalCompuesto').value;
            tasaCompuesto = document.getElementById('tasaCompuesto').value;
            plazoCompuesto = document.getElementById('plazoCompuesto').value;

            //Calculo Interes Simple

            resultado = Number(capital) + (((Number(tasa) / 100) * Number(capital)) * Number(plazo));

            //Imprimo Interes Simple

            document.getElementById('resultado').value = resultado.toFixed(6);

            //Calculo Interes Compuesto

            coeficienteCompuesto = Math.pow(Number(1 + ((Number(tasaCompuesto) / 100))), Number(plazoCompuesto));

            resultadoCompuesto = Number(coeficienteCompuesto) * Number(capitalCompuesto);

            //Imprimo Interes Compuesto

            document.getElementById('resultadoCompuesto').value = resultadoCompuesto.toFixed(6);

        }