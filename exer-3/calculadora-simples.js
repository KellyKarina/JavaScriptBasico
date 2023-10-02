function soma(operacoes) {
    var entrada1 = parseInt(document.getElementById('entrada1').value);
    var entrada2 = parseInt(document.getElementById('entrada2').value);

    var resultado;

    switch (operacoes) {
        case 'adicao':
            resultado = entrada1 + entrada2;
            break;
            

        case 'subtracao':
            resultado = entrada1 - entrada2;
            break;


        case 'divisao':
            resultado = entrada1 / entrada2;
            break;


        case 'multiplicacao':
            resultado = entrada1 * entrada2;
            break;


        default:
            resultado = 'operaçao invalida';
    }

    document.getElementById('saida').value = resultado;

}

