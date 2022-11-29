const $html = document.querySelector("#html");
const $claro = document.querySelector("#claro");
const $normal = document.querySelector("#normal");
const $escuro = document.querySelector("#escuro");

$escuro.addEventListener("click", function() {
    $html.classList.remove("light-mode");
    $html.classList.add("dark-mode");
})

$normal.addEventListener("click", function() {
    $html.classList.remove("light-mode");
    $html.classList.remove("dark-mode");
})

$claro.addEventListener("click", function() {
    $html.classList.remove("dark-mode");
    $html.classList.add("light-mode");
})

const lista = [
    {
        "pergunta": "Qual é a base do sistema de numeração Octal?",
        "alternativas": [
            {"id": 'a1', "descricao": "16", "correta": false},
            {"id": 'a2',"descricao": "10", "correta": false},
            {"id": 'a3',"descricao": "8", "correta": true},
            {"id": 'a4',"descricao": "2", "correta": false}
        ]
    },
    {
        "pergunta": "Quanto é 100110 (binário) em Octal?",
        "alternativas": [
            {"id": 'a1', "descricao": "42", "correta": false},
            {"id": 'a2',"descricao": '38', "correta": false},
            {"id": 'a3',"descricao": '62', "correta": false},
            {"id": 'a4',"descricao": "46", "correta": true}
        ]
    },
    {
        "pergunta": "Para representar os números decimais são usados 10 símbolos, são eles:",
        "alternativas": [
            {"id": 'a1', "descricao": 'Do 1 ao 10', "correta": false},
            {"id": 'a2',"descricao": 'Do 2 ao 9', "correta": false},
            {"id": 'a3',"descricao": 'Do 0 ao 9', "correta": true},
            {"id": 'a4',"descricao": 'Do 5 ao 15', "correta": false}
        ]
    },
    {
        "pergunta": "O número 44444 em hexadecimal é igual a:",
        "alternativas": [
            {"id": 'a1', "descricao": "F00C", "correta": false},
            {"id": 'a2',"descricao": "AD9C", "correta": true},
            {"id": 'a3',"descricao": "J55A", "correta": false},
            {"id": 'a4',"descricao": "A00F", "correta": false}
        ]
    },
    {
        "pergunta": "Quantos sistemas de numeração existem?",
        "alternativas": [
            {"id": 'a1', "descricao": "6", "correta": false},
            {"id": 'a2',"descricao": "8", "correta": false},
            {"id": 'a3',"descricao": "4", "correta": true},
            {"id": 'a4',"descricao": "2", "correta": false}
        ]
    },
    {
        "pergunta": "Considerando-se os números 22B e 11E em hexadecimal, é correto afirmar que a diferença entre esses dois números, também em hexadecimal, é igual a:",
        "alternativas": [
            {"id": 'a1', "descricao": '10D', "correta": true},
            {"id": 'a2',"descricao": '103', "correta": false},
            {"id": 'a3',"descricao": '11D', "correta": false},
            {"id": 'a4',"descricao": '12F', "correta": false}
        ]
    },
    {
        "pergunta": "Quantos bits tem o sistema de númeração octal?",
        "alternativas": [
            {"id": 'a1', "descricao": "6", "correta": false},
            {"id": 'a2',"descricao": "1", "correta": false},
            {"id": 'a3',"descricao": "3", "correta": true},
            {"id": 'a4',"descricao": "9", "correta": false}
        ]
    },
    {
        "pergunta": "Sistema de numeração é um sistema no qual um conjunto de códigos são representados por letras de uma forma inconsistente.",
        "alternativas": [
            {"id": 'a1', "descricao": "Verdadeiro", "correta": false},
            {"id": 'a2',"descricao": "Falso", "correta": true}
        ]
    },
    {
        "pergunta": "O número 17 em binário é igual a:",
        "alternativas": [
            {"id": 'a1', "descricao": "10011", "correta": false},
            {"id": 'a2',"descricao": "11100", "correta": false},
            {"id": 'a3',"descricao": "00010", "correta": false},
            {"id": 'a4',"descricao": "10001", "correta": true}
        ]
    },
    {
        "pergunta": "Qual o sistema de numeração mais utilizado atualmente?",
        "alternativas": [
            {"id": 'a1', "descricao": "Decimal", "correta": true},
            {"id": 'a2',"descricao": "Binário", "correta": false},
            {"id": 'a3',"descricao": "Octal", "correta": false},
            {"id": 'a4',"descricao": "Libras", "correta": false}
        ]
    }
]


function criarPergunta(texto){
    let pergunta = document.createElement('p')
    pergunta.appendChild(document.createTextNode(texto))

    return pergunta
}

function criarAlternativa(a){
    return `
        <div>
            <input type="radio" id="${a.id}" name="alternativa" value="${a.descricao}" data-correta="${a.correta}">
            <label for="${a.id}">${a.descricao}</label>
        </div>
    `
}

var perguntaIndiceAtual = 0
const proximaPerguntaLink = document.querySelector('button#proxima')
const anteriorPerguntaLink = document.querySelector('button#anterior')
let pontuação = 0;
let pontuaçãoInicial = - 100;

function carregarPergunta() {
    
    document.querySelector('#pergunta').innerHTML = ""

    let item = lista[perguntaIndiceAtual]
    let perguntaTexto = criarPergunta(item.pergunta)
    
    document.querySelector('#pergunta').appendChild(perguntaTexto)

    
    let alternativasHtml = ""
    item.alternativas.forEach(a => {
        alternativasHtml += criarAlternativa(a)
    });

    document.querySelector('#pergunta').innerHTML += alternativasHtml
}

window.addEventListener('load', function(){
    carregarPergunta()
})

function escolhido() {
    var res = '';
    const items = document.getElementsByName('alternativa');
    for (var i = 0; i < items.length; i++) {
      if (items[i].checked) {
        res = items[i].value
        break;
      }
    }  
    return res;
}
  
  function verificar() {
    const res = escolhido();
    if (res) {
        for (let i = 0; i < lista[perguntaIndiceAtual - 1].alternativas.length; i++) { 
            let veriValue = lista[perguntaIndiceAtual - 1].alternativas[i].descricao;
            let veriTrue = lista[perguntaIndiceAtual - 1].alternativas[i].correta;
            if(res == veriValue){
                if(veriTrue == true){
                    pontuação += 100;
                    pontuaçãoInicial += 100;
                    console.log("Resposta Correta!")
                } else {
                    console.log("Resposta Incorreta!")
                }
            }
        }
    }
}

function antiBurla(){
    if(pontuação > 0 && pontuaçãoInicial == pontuação - 100){
        pontuação -= 100;
    }
}

function criarPontuação(texto){
    let pergunta = document.createElement('h1')
    pergunta.appendChild(document.createTextNode(texto))

    return pergunta
}

function carregarPontuação() {
    
    document.querySelector('#pergunta').innerHTML = ""
    proximaPerguntaLink.innerHTML = "Recomeçar"

    let pontuaçãoGeral = ""
    if(pontuação <= 200){
        pontuaçãoGeral = `Que pena, quase lá, você obteve apenas ${pontuação} dos ${lista.length * 100} pontos!`
    } else if(pontuação > 200 && pontuação <= 500){
        pontuaçãoGeral = `Muito bem! Você obteve ${pontuação} dos ${lista.length * 100} pontos!`
    } else if(pontuação > 500 && pontuação <= 900){
        pontuaçãoGeral = `Extraordinário! A um passo de gabaritar. Você obteve ${pontuação} dos ${lista.length * 100} pontos!`
    } else{
        pontuaçãoGeral = `Uau, temos um novo Albert Einstein aqui! Você obteve ${pontuação} dos ${lista.length * 100} pontos!`
    }

    let perguntaTexto = criarPergunta(pontuaçãoGeral)
    
    document.querySelector('#pergunta').appendChild(perguntaTexto)
}


proximaPerguntaLink.addEventListener('click', function(){
    perguntaIndiceAtual++
    verificar()
    if(perguntaIndiceAtual >= 10){
        carregarPontuação()
        perguntaIndiceAtual = -1;
        pontuação = 0;
    } else {
        carregarPergunta()
        proximaPerguntaLink.innerHTML = "Próxima"
    }
    console.log(pontuação)
})