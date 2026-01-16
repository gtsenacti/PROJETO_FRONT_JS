
var nome_pessoa, idade_pessoa, altura_pessoa, maioridade;

nome_pessoa = "Fábio";
idade_pessoa = 46;
altura_pessoa = 1.62;
maioridade;
//comparação de idade
if (idade_pessoa >= 18) {
    maioridade = " sou maior de idade."
}
else {
    maioridade = " sou menor de idade."
}

//console.log("Meu nome é " + nome_pessoa + " e " + maioridade);

//console.log("Meu nome é " + nome_pessoa + " e tenho " + altura_pessoa + " de altura.");

document.getElementById('p_teste').innerHTML = "Meu nome é " + nome_pessoa + " e " + maioridade;
document.getElementById('p_teste').style.color = "red";
document.getElementById('p_teste').style.fontSize = "48px";

function ir_para_vendas (){
    alert ("Você será direcionado para Vendas.");
    window.location.href = "vendas.html";
}