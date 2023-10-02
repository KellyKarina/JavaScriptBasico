function verifica(){
    let num = parseInt(document.getElementById('num1').value);
    let resultado = document.getElementById('resultado');
    
    if(num % 2 == 0){
        resultado.value = 'PAR'
    }
    else{
        resultado.value = 'ÍMPAR'

    }

}
