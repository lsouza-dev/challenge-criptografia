const textArea = document.querySelector(".container-interacoes-texto");
const botoes = document.querySelectorAll(".container-interacoes-criptografia-botoes");
console.log(botoes);

const verificarAcao = ((event) => {

    const btnClicado = event.target.id;
    
    // Método de verificação

    if(btnClicado === "criptografar")
    {
        const mensagem = document.querySelector(".container-interacoes-texto").value;
        if(mensagem.length > 0)
        {
            criptografarTexto();
        }
        else
        {
            alert("Insira ao menos 1 caractere para realizar a criptografia.");
        }
        
    }
    else 
    if(btnClicado === "descriptografar")
    {
        const mensagem = document.querySelector(".container-interacoes-texto").value;

        if(mensagem.length > 0)
        {
            decriptografarTexto(mensagem);
        }
        else
        {
            alert("Insira a mensagem que deseja descriptografar antes de realizar a ação.")
        }
    }

})


const criptografarTexto = (() => {

    const mensagem = document.querySelector(".container-interacoes-texto").value;
    const arrayCaracteres = [...mensagem];
    const dicionario = {
        'a': 'ai',
        'e': 'enter',
        'i': 'imes',
        'o': 'ober',
        'u': 'ufat'
    };
    
    const resultado =arrayCaracteres.map(caractere => {
        // Verifica se o caractere está no dicionário de vogais
        if (caractere in dicionario) {
            return dicionario[caractere]; // Substitui pelo código correspondente
        } else {
            return caractere; // Mantém o caractere original se não estiver no dicionário
        }
    }).join(''); // Junta todos os caracteres transformados em uma única string


    console.log(resultado);
    return resultado;

    
})

const decriptografarTexto = ((mensagem) =>{

    const substituicoes = 
    {
        "ai" : "a" ,
        "enter" : "e" ,
        "imes" : "i" ,
        "ober" : "o" ,
        "ufat" : "u" 
    }

    const mensagemDecriptografada = mensagem.replace(/ai|enter|imes|ober|ufat/g,match => substituicoes[match]);

    console.log(mensagemDecriptografada)
    
})

botoes.forEach((btn,index) => {
    btn.addEventListener("click",verificarAcao) 
    
})
