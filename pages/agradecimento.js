function pegarNota() {
    let nota = localStorage.getItem("nota");

    let paragrafoNota = document.querySelector(".paragrafo_nota");

    if (nota !== null) {
        paragrafoNota.innerHTML = `Você selecionou ${nota} de 5`;
    } else {
        paragrafoNota.innerHTML = "Nota não encontrada";
    }
}

pegarNota();
