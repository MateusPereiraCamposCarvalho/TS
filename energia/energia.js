$("#formulario").validate({
    rules: {
        ndepessoas: {
            required: true
        },
    },
    messages: {
        ndepessoas: {
            required: "Campo obrigatório"
        },
    }
});
function consumoluz() {
    if ($("#formulario").valid()) {
        var gasto = []
        var aux = 0
        var ideal = []
        var consumo = []
        var nome = []
        var tempo = []
        var simnao = []
        ideal[0] = 200
        ideal[1] = 400
        ideal[2] = 600
        nome[0] = "O consumo de energia na residência para 1 ou 2 pessoas"
        nome[1] = "O consumo de energia na residência para 3 ou 4 pessoas"
        nome[2] = "O consumo de energia na residência para mais de 5 pessoas"
        //armazenar
        //pessoas
        var qntPessoas = parseInt(document.getElementById("ndepessoas").value)

        //geladeira
        var gela = document.querySelector('input[name="geladeira"]:checked').value
        if (gela == 1) {
            simnao[0] = 1  
            var qntgeladeira = parseInt(document.getElementById("qgeladeira").value)
            var tmhgela = document.querySelector('input[name="tamgeladeira"]:checked').value
            if (tmhgela == 1) {
                gasto[0] = 0.05 * qntgeladeira * 30 
            }
            
            if (tmhgela == 2) {
                gasto[0] = 0.06 * qntgeladeira * 30 
            }

            if (tmhgela == 3) {
                gasto[0] = 0.07 * qntgeladeira * 30
            }
           
        }

        //Televisão
        var tv = document.querySelector('input[name="televisao"]:checked').value
        if (tv == 1) {
            simnao[1] = 1
            var qnttv = parseInt(document.getElementById("qtv").value)
            var tptv = parseInt(document.getElementById("tempotv").value)
            var tipotv = document.querySelector('input[name="tamtv"]:checked').value

            if (tipotv == 1) {
                gasto[1] = 0.03 * qnttv * 30
            }

            if (tipotv == 2) {
                gasto[1] = 0.05 * qnttv * 30
            }

            if (tipotv == 3) {
                gasto[1] = 0.04 * qnttv * 30
            }
    
        }

        //computador
        var comp = document.querySelector('input[name="computador"]:checked').value
        if (comp == 1) {
            simnao[2] = 1
            var qcomp = parseInt(document.getElementById("qcom").value)
            var tpcomp = parseInt(document.getElementById("tempocom").value)
            gasto[2] = 0.06 * qcomp * 30
        }

        //Microondas
        var micro = document.querySelector('input[name="microondas"]:checked').value
        if (micro == 1) {
            simnao[3] = 1
            var tpmicro = parseInt(document.getElementById("qmicro").value)
            gasto[3] = 0.05 * tpmicro * 30
        }

        //Ferro de passar
        var ferro = document.querySelector('input[name="ferro"]:checked').value
        if (ferro == 1) {
            simnao[4] = 1
            var tpferro = parseInt(document.getElementById("qferro").value)
            gasto[4] = 2.5 * tpferro * 4
        }

        //Ar-condicionado
        var cond = document.querySelector('input[name="arcondicionado"]:checked').value
        if (cond == 1) {
            simnao[5] = 1
            var tpcond = parseInt(document.getElementById("qar").value)
            var ptcond = parseInt(document.getElementById("potenciaar").value)
            gasto[5] = tpcond * ptcond
        }

        //Lâmpadas
            var tipolamp = document.querySelector('input[name="lampada"]:checked').value
            var qntlamp = parseInt(document.getElementById("qar").value)
            var tplamp = parseInt(document.getElementById("potenciaar").value)
            

            if (tipolamp == 1) {
                gasto[6] = 0.3 * qntlamp * 30
            }
            
            if (tipolamp == 2) {
                gasto[6] = 0.1 * qntlamp * 30
            }
            
            if (tipolamp == 3) {
                gasto[6] = 0.04 * qntlamp * 30
            }

        //Fogão elétrico
        var fog = document.querySelector('input[name="fogao"]:checked').value
        if (fog == 1) {
             var tpfog = parseInt(document.getElementById("qfog").value)
             var ptfog = parseInt(document.getElementById("potenciafog").value)
             gasto[7] = ptfog * tpfog
        }    

        for (i = 0; i < 8; i++){
            aux += parseFloat(gasto[i])        
        }
        if(qntPessoas == 1 || qntPessoas == 2){
            if (aux > ideal[0]) {
                consumo[0] = "ruim"
            } else {
                consumo[0] = "bom"
            }
        }
        if(qntPessoas == 3 || qntPessoas == 4){
            if (aux > ideal[1]) {
                consumo[0] = "ruim"
            } else {
                consumo[0] = "bom"
            }
        }
        if(qntPessoas >= 5){
            if (aux > ideal[2]) {
                consumo[0] = "ruim"
            } else {
                consumo[0] = "bom"
            }
        }

        var texto = document.querySelector(".invisivel")
        texto.removeAttribute("class", "invisivel")

        if (qntPessoas == 1 || qntPessoas == 2) {
            var texto2 = document.querySelectorAll("li")
            if (consumo[0] == "ruim") {
                    texto2[0].textContent = nome[0] + " está acima da média recomendada pela ANEEL."
                    texto2[0].removeAttribute("class", "invisivel")
                    texto2[0].setAttribute("class", "visivel")
            } else {
                    texto2[0].removeAttribute("class", "invisivel")
            }
        }
        if (qntPessoas == 3 || qntPessoas == 4) {
            var texto2 = document.querySelectorAll("li")
            if (consumo[0] == "ruim") {
                    texto2[0].textContent = nome[1] + " está acima da média recomendada pela ANEEL."
                    texto2[0].removeAttribute("class", "invisivel")
                    texto2[0].setAttribute("class", "visivel")
            } else {
                    texto2[0].removeAttribute("class", "invisivel")
            }
        }
        if (qntPessoas >= 5) {
            var texto2 = document.querySelectorAll("li")
            if (consumo[0] == "ruim") {
                    texto2[0].textContent = nome[2] + " está acima da média recomendada pela ANEEL."
                    texto2[0].removeAttribute("class", "invisivel")
                    texto2[0].setAttribute("class", "visivel")
            } else {
                    texto2[0].removeAttribute("class", "invisivel")
            }
        }
        var texto3 = document.querySelector("h5")
        texto3.removeAttribute("class", "invisivel")
    }
}