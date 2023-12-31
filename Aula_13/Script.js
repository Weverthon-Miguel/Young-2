const QUESTOES_QUIZ = [
    {
        questao:'Melhor professor',
        a:'Daniel',
        b:'Rodrigo',
        c:'Diego',
        d:'Arthur',
        correta:'c'
    },
    {
        questao:'2+8*4=???',
        a:'20',
        b:'40',
        c:'34',
        d:'24',
        correta:'c'
    },
    {
        questao:'A lua é considerada:',
        a:'Planeta',
        b:'Satelite natural',
        c:'Estrela',
        d:'Meteoro',
        correta:'b'
    },
    {
        questao:'Palavras que dão carácteristicas são:',
        a:'Substantivos',
        b:'Adjetivos',
        c:'Conjunções',
        d:'Interjeições',
        correta:'b'
    },
    {
        questao:'O Brasil possue quantos UF´s',
        a:'26',
        b:'28',
        c:'30',
        d:'25',
        correta:'a'
    },
    {
        questao:'Pedro Alvares Cabral chegou ao Brasil em:',
        a:'26/03/1500',
        b:'22/04/1550',
        c:'30/07/1700',
        d:'22/04/1500',
        correta:'d'
    }
]

const TITULO_QUIZ = document.querySelector('.titulo-questao')
const ALTERNATIVA_A = document.getElementById('texto-a')
const ALTERNATIVA_B = document.getElementById('texto-b')
const ALTERNATIVA_C = document.getElementById('texto-c')
const ALTERNATIVA_D = document.getElementById('texto-d')
const BOTAO = document.getElementById('enviar')
const RESPOSTAS = document.querySelectorAll('.resposta')
const CONTEINER_QUIZ = document.querySelector('.conteiner-quiz')

let questao_atual = 0
let qtd_corretas = 0



function carregar_questoes() {
    desmarcar()
    const QUESTAO = QUESTOES_QUIZ[questao_atual]
    TITULO_QUIZ.innerHTML = QUESTAO.questao
    ALTERNATIVA_A.innerHTML = QUESTAO.a
    ALTERNATIVA_B.innerHTML = QUESTAO.b
    ALTERNATIVA_C.innerHTML = QUESTAO.c
    ALTERNATIVA_D.innerHTML = QUESTAO.d
}

function desmarcar() {
    RESPOSTAS.forEach((resp_elemento) => {
        resp_elemento.checked = false
    })
}

function pegar_resposta() {
    let resp = undefined

    RESPOSTAS.forEach((resposta) => {
        if (resposta.checked){
            resp = resposta.id;    
        }
    })

    return resp
}

BOTAO.addEventListener('click', () => {
    const RESP_PLAYER = pegar_resposta()
    const TOTAL_PERGUNTAS = QUESTOES_QUIZ.length
    console.log(RESP_PLAYER)

    if (RESP_PLAYER) {
        if(RESP_PLAYER === QUESTOES_QUIZ[questao_atual].correta) {
            qtd_corretas++
        }
        questao_atual++
        if (questao_atual < TOTAL_PERGUNTAS) {
            carregar_questoes()
        }
        else {
            CONTEINER_QUIZ.innerHTML = `<h1 class="resetar">Você acertou ${qtd_corretas}/${TOTAL_PERGUNTAS} questões </h1>
            <button class= resetar-btn" onclick= 'location.reload()'> Resetar </button>`
        }
    }
    else {
        console.log('Escolha algo')
    }
})                                                                                                                                                                                        

carregar_questoes()
