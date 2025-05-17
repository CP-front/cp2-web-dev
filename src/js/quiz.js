//Evento que carrega a pagina automaticamente
document.addEventListener('DOMContentLoaded', ()=>{
    //Declarando as variaveis
    const pergunta = document.getElementById('pergunta');
    const resposta = document.getElementById('resposta');
    const proximaPergunta =document.getElementById('proximo');
    const mensagem = document.getElementById('message');
    const containerPerguntas =document.getElementById('container-perguntas');
    const containerResultado =document.getElementById('container-resultado');
    const listaResultado = document.getElementById('lista-resultado');
    const reiniciarBotao = document.getElementById('inicio-btn');
    
    //Declarando o array de perguntas
    const questoes =[
        "Você gosta de fazer viagens longas?",
        "Você deixa o carro guardado em garagem?",
        "Você costuma usar o carro mais para cidade, estrada ou ambos?",
        "Quantas pessoas costumam andar com você no carro?",
        "Qual é o seu orçamento máximo para comprar um carro?",
        "Você dá prioridade para economia de combustível, desempenho ou conforto?",
        "Você tem alguma preferência por câmbio manual ou automático?",
        "Tem algum estilo de carro que você prefere (hatch, sedan, SUV, picape)?",
        "Você costuma carregar bagagens, equipamentos ou precisa de bom porta-malas?",
        "Você pretende usar o carro para trabalho (ex: Uber, entregas) ou uso pessoal?",
    ];
    
    //Declarando as variaveis
    let perguntas =0;
    const respostas = [];
    
    //Criando a função de mostrar pergunta
    
    function mostrarPergunta(){
        if(perguntas <questoes.length){
            pergunta.textContent=questoes[perguntas];
            resposta.value='';
            mensagem.textContent='';
        }else{
            mostrarResultado();
        }
    }
    
    //Criando a função de mostrar resultado
    
    function mostrarResultado(){
        containerPerguntas.classList.add('hidden');
        containerResultado.classList.remove('hidden');
        listaResultado.innerHTML='';
    
        questoes.forEach((questoes,i)=>{
                const listaItem =document.createElement('li');
                listaItem.innerHTML=`<strong>${questoes}</strong><br>
                Sua Resposta: <span>${respostas[i]}</span>`
                listaResultado.appendChild(listaItem);
            })
        }
    
        //Função para a proxima pergunta
    
        function nextQuestao(){
            const respostaAtual = resposta.value.trim();
            if(respostaAtual === ''){
                mensagem.textContent="Por favor , digite sua resposta";
                return;
            }
            respostas.push(respostaAtual);
            perguntas++;
            mostrarPergunta();
        }
    
        function reiniciarQuiz(){
            perguntas =0;
            respostas.length =0;
            containerResultado.classList.add('hidden');
            containerPerguntas.classList.remove('hidden');
            mostrarPergunta();
        }
        proximaPergunta.addEventListener('click',nextQuestao);
        reiniciarBotao.addEventListener('click',reiniciarQuiz);
        mostrarPergunta();
    
    })