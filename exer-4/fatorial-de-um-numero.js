
function resultado() {
    var num1 = parseInt(document.getElementById('num1').value);
    var resultado = document.getElementById('resultado');

    if (!isNaN(num1) && num1 >= 1) {
        let fatorial = 1;
        for(let i =2; i<= num1; i++){
            fatorial *=i;
           
        }
        resultado.value = fatorial;
    }  
    else {
       alert('insira um numero inteiro')
    }


}


