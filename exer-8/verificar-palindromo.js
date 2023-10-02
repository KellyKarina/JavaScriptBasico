function palavra(){
    var palavra1 = document.getElementById('entrada').value;
    var resultado = document.getElementById('resultado');


    const palavraAoContrario = palavra1.split('').reverse().join('');


    if(palavra1 === palavraAoContrario){
        resultado.value = `é uma palavra palíndromo`

    }
    else{
        resultado.value = `não é uma palavra palíndromo`
    }

}