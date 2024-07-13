const textArea = document.querySelector(".container-interacoes-texto");
const botoes = document.querySelectorAll(".container-interacoes-criptografia-botoes");
console.log(botoes);

const verificarAcao = ((event) => {

    const btnClicado = event.target.id;

    // Método de verificação

    if (btnClicado === "criptografar") {
        const mensagem = document.querySelector(".container-interacoes-texto").value;
        if (mensagem.length > 0) {
            if (!caractereInvalido(mensagem)) {
                criptografarTexto();
            } else {
                alert(caractereInvalido(mensagem));
            }
        } else {
            alert("Insira ao menos 1 caractere para realizar a criptografia.");
        }
    } else if (btnClicado === "descriptografar") {
        const mensagem = document.querySelector(".container-interacoes-texto").value;

        if (mensagem.length > 0) {
            if (!caractereInvalido(mensagem)){
                decriptografarTexto(mensagem);
            }else{
                alert(caractereInvalido(mensagem));
            }
            
        } else {
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

    const resultado = arrayCaracteres.map(caractere => {
        // Verifica se o caractere está no dicionário de vogais
        if (caractere in dicionario) {
            return dicionario[caractere]; // Substitui pelo código correspondente
        } else {
            return caractere; // Mantém o caractere original se não estiver no dicionário
        }
    }).join(''); // Junta todos os caracteres transformados em uma única string

    const btnClipboard = document.querySelector("#clipboard");
    
    const filhosResultado = document.querySelectorAll(".container-resultado h2, .container-resultado img");
    filhosResultado.forEach((item) =>{
        item.setAttribute("style", "display:none");
    })

    const textoFinal = document.querySelector(".mensagem-resultado-auxiliar");
    const divTextoFinal = document.querySelector(".mensagem-resultado-textos");
    const containerResultado = document.querySelector(".container-resultado-retorno-mensagem");
    
    containerResultado.setAttribute("style", "align-content: baseline");
    
    
    divTextoFinal.classList.add("exibido");
    textoFinal.innerText = resultado;

    
    btnClipboard.setAttribute("style","display:block");

    return resultado;


})

const decriptografarTexto = ((mensagem) => {

    const substituicoes =
    {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }

    const mensagemDecriptografada = mensagem.replace(/ai|enter|imes|ober|ufat/g, match => substituicoes[match]);

    const filhosResultado = document.querySelectorAll(".container-resultado h2, .container-resultado img");
    filhosResultado.forEach((item) =>{
        item.setAttribute("style", "display:none");
    })

    const textoFinal = document.querySelector(".mensagem-resultado-auxiliar");
    const divTextoFinal = document.querySelector(".mensagem-resultado-textos");
    const containerResultado = document.querySelector(".container-resultado-retorno-mensagem");
    
    containerResultado.setAttribute("style", "align-content: baseline");
    divTextoFinal.classList.add("exibido");
    textoFinal.innerText = mensagemDecriptografada;

    const btnClipboard = document.querySelector("#clipboard");
    btnClipboard.setAttribute("style","display:block");

    

})

botoes.forEach((btn, index) => {
    btn.addEventListener("click", verificarAcao)

})


const caractereInvalido = (mensagem) => {
    let arrayCaracteresInvalidos = [];

    if (/[0-9]/.test(mensagem)) {
        arrayCaracteresInvalidos.push("Caractere numérico encontrado.");
    }

    if (/['A-Z']/.test(mensagem)) {
        arrayCaracteresInvalidos.push("Letra maiúscula encontrada.");
    }

    if (/[áéíóúâêîôûàèìòùãõäëïöüçÁÉÍÓÚÂÊÎÔÛÀÈÌÒÙÃÕÄËÏÖÜÇ]/.test(mensagem)) {
        arrayCaracteresInvalidos.push("Acento encontrado.");
    }

    if (/[^a-zA-Z0-9\s]/.test(mensagem)) {
        arrayCaracteresInvalidos.push("Caractere especial encontrado.");
    }

    let mensagemErro = "Foram encontrados os seguintes erros: \n\n"
    let mensagemInfo = "\n\nInsira apenas caracetes minúsculos e sem acento para realizar a operação.";
    return arrayCaracteresInvalidos.length > 0 ? mensagemErro + arrayCaracteresInvalidos.join("\n") + mensagemInfo : false;
}


const clipboarText = () => {
    const texto = document.querySelector(".exibido");
    const msgClip = navigator.clipboard.writeText(texto.innerText);
    msgClip.then(() =>{

        alert('Texto copiado com sucesso da àrea de transferência.');
        
    }).catch(err => {
        alert(err);
    });

    const replacedMessage = document.querySelector(".mensagem-resultado-auxiliar");
    replacedMessage.innerText = "Nenhuma mensagem";
}

const btnClipboard = document.querySelector("#clipboard");
btnClipboard.addEventListener("click",clipboarText)