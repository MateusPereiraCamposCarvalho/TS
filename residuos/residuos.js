$("#formulario").validate({
    rules: {
        ndepessoas: {
            required: true
        }
    },
    messages: {
        ndepessoas: {
            required: "Campo obrigatório"
        }
    }
});
function producaolixo() {
    if ($("#formulario").valid()) {
        var qntPessoas = parseInt(document.getElementById("ndepessoas").value)
        var recicla = document.querySelector('input[name="lixo"]:checked').value
        var qntlixo = (qntPessoas * 1.1) * 30
        if (recicla == 1) {
            qntlixo = qntlixo - (qntlixo * 0.3)
        }
        qntlixo = parseInt(qntlixo)
        var texto = document.querySelector(".invisivel")
        texto.removeAttribute("class", "invisivel")
        texto.textContent = "Sua produção média atual é de " + qntlixo + " kg de lixo por mês."

        var lixoano = ((qntlixo * 12) * 100) / 80000000
        var texto2 = document.querySelector(".invisivel2")
        texto2.textContent = "E esse valor representa, aproximadamente, " + lixoano.toFixed(5) + "% do lixo produzido no Brasil em um ano."
        texto2.removeAttribute("class", "invisivel2")

        if (recicla == 1) {
            var texto3 = document.querySelector(".invisivel3")
            texto3.textContent = "Aqui vai algumas dicas para te ajudar a continuar reciclando!"
            texto3.removeAttribute("class", "invisivel3")

            var texto5 = document.querySelector(".invisivel5")
            texto5.removeAttribute("class", "invisivel5")
        } else {
            var texto3 = document.querySelector(".invisivel3")
            texto3.textContent = "Aqui vai algumas dicas para começar a reciclar e diminuir sua produção de lixo:"
            texto3.removeAttribute("class", "invisivel3")
            var texto4 = document.querySelector(".invisivel4")
            texto4.removeAttribute("class", "invisivel4")
        }
    }
}