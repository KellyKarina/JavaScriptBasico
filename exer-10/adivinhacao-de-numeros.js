const numeros = Math.floor(Math.random() * 100) + 1;

function verificar(){
    const tentativas = parseInt(document.getElementById('entrada').value);
    const resultado = document.getElementById('resultado');

    if(isNaN(tentativas)){
        resultado.textContent = 'insira um número válido';
    }
    else{
        if(tentativas < numeros){
            resultado.textContent = 'o número é maior que o digitado';
        }
        else if (tentativas > numeros){
            resultado.textContent = 'o número é menor que o digitado';
        }
        else{
            resultado.textContent = `você acertou o número é ${numeros}, show!!!`
        }
    }
}