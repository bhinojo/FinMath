var capital = 0;
var tasa = 0;
var plazo = 0;
var resultado = 0;
function calcularSimple() {

    capital = document.getElementById('capital').value;
    tasa = document.getElementById('tasa').value;
    plazo = document.getElementById('plazo').value;


    resultado = Number(capital) + (((Number(tasa)/100)*Number(capital))*Number(plazo));

    document.getElementById('resultado').value = resultado;

}