/*var nome = "Eric Sousa";
var idade = 18;
var frase = "Não existe vida em outro planeta";
var n1 = 10
var n2 = 35
alert(nome +" tem " + idade + " anos");
console.log(frase.replace("Não", ""))
console.log(frase.toUpperCase());
console.log(n1 * n2)
*/

/*lista = ["uva", "pera", "maça"];
lista.push("laranja");
lista.pop();
console.log(lista);
console.log(lista.lenght())
console.log(lista.toString());
lista_r=lista.reverse();
console.log(lista_r);
console.log(lista_r.join("/"));
*/

/*var fruta = [{nome: "maçã" , cor: "vermelha"} , {nome: "uva" , cor: "roxa"}];
console.log(fruta[0].nome);
console.log(fruta[0].cor);
console.log(fruta[1].nome);
console.log(fruta[1].cor);
*/

/*var idade = prompt("qual sua idade?");

if (idade<18){
    alert("menor de idade");
}
else{
    alert("maior de idade");
}
*/

/*var count;
for(count = 0; count<=5; count++){
    console.log("dole "+count);
}
*/

/*var count = 0;
while (count<10){
    console.log(count);
    count++;
}
*/

/*var data = new Date();
alert(data.getMinutes());
alert(data.getHours())
*/

/*function soma(n1, n2){
    return n1 + n2;
}

function ValidaIdade(idade){
    var validar;
    if (idade < 18){
        return false;
    }
    else{
        return true;
    }
}

alert(soma(60, 20));
var idade = prompt("qual sua idade?");
console.log(ValidaIdade(idade));
*/

function botao(){
    document.getElementById("clicar").innerHTML = "<b>Obrigado por clicar</b>"
    //alert("Obrigado por clicar");
}

function redirecionar(){
    window.open("https://www.youtube.com/watch?v=s_eHTKuCkpc&t=0s");
    //window.location.href = "https://www.youtube.com/watch?v=s_eHTKuCkpc&t=0s"
}

function trocar(elemento){
    elemento.innerHTML = "Boa noite??";
    //document.getElementById("mousemove").innerHTML = "Só agradece";
    //alert("trocar texto");
}

function voltar(elemento){
    elemento.innerHTML = "passe o mouse aqui";
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
}

function load(){
    alert("ta pronto");
}

function FuncaoChange(elemento){
    console.log(elemento.value);
}






























