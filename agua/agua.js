$("#formulario").validate({
    rules: {
        ndepessoas: {
            required: true
        },
        quantbanhos: {
            required: true,
        },
        duracaobanho: {
            required: true,
        },
        tipochuveiro: {
            required: true,
        },
        descargas: {
            required: true,
        },
    },
    messages: {
        ndepessoas: {
            required: "Campo obrigatório"
        },
        quantbanhos: {
            required: "Campo obrigatório"
        },
        duracaobanho: {
            required: "Campo obrigatório"
        },
        tipochuveiro: {
            required: "Campo obrigatório"
        },
        descargas: {
            required: "Campo obrigatório"
        },
    }
});
function consumoagua() {
    if ($("#formulario").valid()) {
        var gasto = []
        var ideal = []
        var consumo = []
        var nome = []
        ideal[0] = 1650
        ideal[1] = 980
        ideal[2] = 800
        ideal[3] = 1350
        ideal[4] = 350
        nome[0] = "Gasto com banhos:"
        nome[1] = "Gasto lavando roupas:"
        nome[2] = "Gasto lavando louça:"
        nome[3] = "Gasto com descargas:"
        nome[4] = "Gasto regando o jardim:"
        //armazenar
        //pessoas
        var qntPessoas = parseInt(document.getElementById("ndepessoas").value)

        //banhos
        var nbanhos = parseInt(document.getElementById("quantbanhos").value)
        var minbanhos = parseInt(document.getElementById("duracaobanho").value)
        var tipochuveiro = document.getElementById("tipochuveiro").value

        //lavar roupa
        var maq = document.querySelector('input[name="maquina"]:checked').value
        if (maq == 1) {
            var tmhmaq = document.querySelector('input[name="tamanhomaq"]:checked').value
            var vezesmaq = parseInt(document.getElementById("quanmaquina").value)
        } else {
            var vezesmaq = parseInt(document.getElementById("roupamão").value)
        }

        //lavar louça
        var louca = document.querySelector('input[name="maquinadel"]:checked').value
        if (louca == 1) {
            var vezeslouca = document.getElementById("quanlouca").value
        } else {
            var vezeslouca = document.getElementById("loucaamão").value
        }

        //descarga
        var qntdescarga = document.getElementById("descargas").value

        //jardim
        var jardim = document.querySelector('input[name="jardim"]:checked').value
        if (jardim == 1) {
            var regar = document.getElementById("regar").value
        }


        //calculos
        //banho
        if (tipochuveiro == "eletrico") {
            gasto[0] = ((6 * minbanhos) * nbanhos) * 30
        } else {
            gasto[0] = ((9 * minbanhos) * nbanhos) * 30
        }
        //lavar roupa
        if (maq == 1) {
            if (tmhmaq == 1) {
                gasto[1] = (120 * vezesmaq) * 4
            } else {
                if (tmhmaq == 2) {
                    gasto[1] = (150 * vezesmaq) * 4
                } else {
                    gasto[1] = (180 * vezesmaq) * 4
                }
            }
        } else {
            gasto[1] = (180 * vezesmaq) * 4
        }

        //lavar louça
        if (louca == 1) {
            gasto[2] = (vezeslouca * 16) * 4
        } else {
            gasto[2] = (vezeslouca * 80) * 4
        }

        //descarga
        gasto[3] = (qntdescarga * 10) * 30

        //jardim
        if (jardim == 1) {
            gasto[4] = (regar * 5) * 4
        }


        for (var i = 0; i < 5; i++) {
            gasto[i] = gasto[i] / qntPessoas
        }
        for (var i = 0; i < 5; i++) {
            if (gasto[i] > ideal[i]) {
                consumo[i] = "ruim"
            } else {
                consumo[i] = "bom"
            }
        }

        var texto = document.querySelector(".invisivel")
        texto.removeAttribute("class", "invisivel")

        if (jardim == 1) {
            var texto2 = document.querySelectorAll("li")
            for (i = 0; i < 5; i++) {
                if (consumo[i] == "ruim") {
                    texto2[i].textContent = nome[i] + " está acima da média recomendada pela ONU."
                    texto2[i].removeAttribute("class", "invisivel")
                    texto2[i].setAttribute("class", "visivel")
                } else {
                    texto2[i].removeAttribute("class", "invisivel")
                }
            }
        } else {
            var texto2 = document.querySelectorAll("li")
            for (i = 0; i < 4; i++) {
                if (consumo[i] == "ruim") {
                    texto2[i].textContent = nome[i] + " está acima da média recomendada pela ONU."
                    texto2[i].removeAttribute("class", "invisivel")
                    texto2[i].setAttribute("class", "visivel")
                } else {
                    texto2[i].removeAttribute("class", "invisivel")
                }
            }
        }
        var texto3 = document.querySelector("h5")
        texto3.removeAttribute("class", "invisivel")
    }
}