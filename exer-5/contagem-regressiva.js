function contagem() {
    var num1 = parseInt(document.getElementById('num1').value);
    var resultado1 = document.getElementById('resultado');


    if (!isNaN(num1) && num1 > 1) {

        let cont = num1;
        let resultado2 = '';
        do {
            resultado2 += cont + '\n';

            cont--;

        } while (cont >= 1);
        resultado1.textContent = resultado2;

    }
    else{
        alert('DIGITE UM NÚMERO MAIOR QUE 1')
    }


}

