function calcular(){
   
    const num1 = document.getElementById('num1').value
    
    const numeros = num1.split(",").map(Number);

    const soma = numeros.reduce((total, numero) => total + numero, 0 );
    const media = soma / numeros.length;

    document.getElementById('resultado').value = media;
    

}
