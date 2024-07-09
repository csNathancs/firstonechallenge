// Dicionário de criptografia quase uma nova lingua
var dict = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

// Função para criptografar o texto XD
function criptografia() {
    var texto = document.getElementById("text_area").value;
    var textoCriptografado = "";
    for (var i = 0; i < texto.length; i++) {
        if (dict[texto[i]]) {
            textoCriptografado += dict[texto[i]];
        } else {
            textoCriptografado += texto[i];
        }
    }
    document.getElementById("edit_show").innerText = textoCriptografado;
    document.querySelector(".card_view_none").style.display = "none";
    document.querySelector(".card_view_message").style.display = "flex";
}

// Funçao para descriptografar o texto :)
function descriptografia() {
    var textoCriptografado = document.getElementById("text_area").value;
    var texto = textoCriptografado;
    for (var key in dict) {
        var re = new RegExp(dict[key], "g");
        texto = texto.replace(re, key);
    }
    document.getElementById("edit_show").innerText = texto;
    document.querySelector(".card_view_none").style.display = "none";
    document.querySelector(".card_view_message").style.display = "flex";
}

// Função para copiar o texto criptografado
function copia() {
    var texto = document.getElementById("edit_show").innerText;
    navigator.clipboard.writeText(texto).then(function () {
        // Atualiza a mensagem de alerta
        document.getElementById("alert_message").innerText = "Texto copiado: " + texto;
        // Limpa os campos após 5 segundos (5000 milissegundos)
        setTimeout(function () {
            limpar();
            // Restaura a mensagem de alerta original
            document.getElementById("alert_message").innerText = "Por favor, apenas letras minúsculas e sem acento!";
        }, 2000);
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

// Função para limpar os campos de texto e a mensagem
function limpar() {
    document.getElementById("text_area").value = "";
    document.getElementById("edit_show").innerText = "Nenhuma mensagem encontrada";
    document.querySelector(".card_view_none").style.display = "flex";
    document.querySelector(".card_view_message").style.display = "none";
}