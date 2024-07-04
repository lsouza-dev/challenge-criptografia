const textArea = document.querySelector("textarea");
const botoes = document.querySelectorAll(".conteudo-selecao-botoes");


const criptografarOuDesencriptografar = ((event) => {

    const btn = event.target;
    btn.classList.add("ativo");

    if(botoes[0].classList.contains("ativo"))
        {
            const mensagem = textArea.value;
    const arrayCaracteres = [...mensagem];

    const dicionario = {
    
        "e" : "enter",
        "i" : "imes",
        "a" : "ai",
        "o" : "ober",
        "u" : "ufat"
        
    }

    
    const resultado = arrayCaracteres.map((caractere) => {

        if(caractere in dicionario)
            {
                return dicionario[caractere];
            }
        else 
        {
            return caractere
        }
    }).join("");


    console.log(resultado);
    
        }
    else if(botoes[1].classList.contains("ativo"))
    {
        console.log("desencriptografa")
    }



    botoes.forEach((item) => {
        item.classList.remove("ativo");
    })
    
})



botoes.forEach((btn,index) => {
    btn.addEventListener("click", criptografarOuDesencriptografar)
})
