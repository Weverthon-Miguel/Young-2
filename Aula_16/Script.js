const CEP = document.querySelector('#cep')
const ESTADO = document.querySelector('#state')
const CIDADE = document.querySelector('#city')
const LOGADOURO = document.querySelector('#rrua')
const BAIRRO = document.querySelector('#address')
const message = document.querySelector('#message')

CEP.addEventListener('focusout', async () => {

    
    const  resposta = await fetch(`https://cep.awesomeapi.com.br/json/${CEP.value}`);
    if(!resposta.ok) {
        throw await resposta.json();
    }
    const respostaCEP = await resposta.json();

    ESTADO.value = respostaCEP.state;
    CIDADE.value = respostaCEP.city; 
    LOGADOURO.value = respostaCEP.address;
    BAIRRO.value = respostaCEP.district;
    

  })
