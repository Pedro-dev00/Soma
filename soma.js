function somar() {
    let a = document.querySelector('#txt1').value
    let b = document.querySelector('#txt2').value
    //Covertendo os valores em números
    a = parseFloat(a);
    b = parseFloat(b)

    //Verificando se os valores são números válidos
    if(isNaN(a) || isNaN(b)){
    console.log('Insira os valores');
    return;
}
let resultado = a + b;
let res = document.querySelector('#res');
res.innerHTML = 'O resultado da soma é: ' + resultado;
}