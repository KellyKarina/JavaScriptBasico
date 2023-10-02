function temperatura() {
    var conversorTemperatura = parseFloat(document.getElementById('entrada').value);
    var resultado = document.getElementById('resultado');

    
    var fahrenheit = (conversorTemperatura - 32) * (5 / 9); 
    document.getElementById('resultado').value = fahrenheit;

}

function temperatura1() {
    var conversorTemperatura1 = document.getElementById('entrada1').value;
    var resultado1 = document.getElementById('resultado1');

    var celcius = (conversorTemperatura1 * 9/5) + 32;
    document.getElementById('resultado1').value = celcius
}