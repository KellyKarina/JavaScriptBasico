function tabuada() {
    var num1 = parseInt(document.getElementById('num1').value);
    var resultado1 = document.getElementById('resultado');


    if (num1 > 0) {

        let cont = 1;
        resultado1.value = '';
        do {
            const soma = num1 * cont
            resultado1.value+=  `${num1} x ${cont} = ${soma}\n`

            cont++;

        } while (cont <= 10);
        

    }
    else{
        alert('DIGITE UM VALOR ACIMA DE 0')
    }
}
