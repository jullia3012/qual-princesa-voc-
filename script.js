let atual = 0;
let perguntaAtual;
let historiaFinal = "";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn");
const telaInicial = document.querySelector(".tela-inicial");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

const perguntas = [
    {
        enunciado: "Você acabou de chegar ao Reino Encantado e encontrou uma carta secreta. Qual decisão você toma?",
        alternativas: [
            {
                texto: "Abrir a carta imediatamente para descobrir o segredo.",
                afirmacao: "Você demonstrou curiosidade e coragem ao enfrentar o desconhecido.",
                proxima: 1,
            },
            {
                texto: "Entregar a carta para a guarda real do castelo.",
                afirmacao: "Você preferiu agir de forma prudente e respeitar as regras do reino.",
                proxima: 1,
            }
        ]
    },
    {
        enunciado: "No castelo, um grande baile real está prestes a começar, mas um feitiço foi lançado. O que você faz?",
        alternativas: [
            {
                texto: "Usar a magia dos livros da biblioteca para desfazer o feitiço.",
                afirmacao: "Sua sabedoria e sede de conhecimento salvaram a festa de todos.",
                proxima: 2,
            },
            {
                texto: "Procurar a ajuda dos seus amigos animais na floresta.",
                afirmacao: "Sua empatia e trabalho em equipe mostraram a força da verdadeira amizade.",
                proxima: 2,
            }
        ]
    },
    {
        enunciado: "O reino precisa escolher uma nova líder. Como você deseja ser lembrada?",
        alternativas: [
            {
                texto: "Como uma princesa valente que luta na linha de frente por seu povo.",
                afirmacao: "Sua bravura inspirou gerações no Reino Encantado!"
            },
            {
                texto: "Como uma líder justa e bondosa que realiza os sonhos de todos.",
                afirmacao: "Sua bondade trouxe uma era de ouro e prosperidade para o reino!"
            }
        ]
    }
];

botaoIniciar.addEventListener('click', iniciaJogo);
botaoJogarNovamente.addEventListener('click', jogarNovamente);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = 'none';
    caixaPerguntas.classList.add("mostrar");
    caixaAlternativas.classList.add("mostrar");
    mostraPergunta();
}

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    if (opcaoSelecionada.proxima !== undefined) {
        atual = opcaoSelecionada.proxima;
    } else {
        atual++;
    }
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Fim da sua jornada!";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultado.classList.add("mostrar");
}

function jogarNovamente() {
    caixaResultado.classList.remove("mostrar");
    iniciaJogo();
}
