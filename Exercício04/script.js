let button = document.querySelector("button");
button.addEventListener('click', () => {
    let ano = Number(document.getElementById("ano").value);
    let h2 = document.querySelector("h2");

    if (ano % 400 == 0)
        h2.innerHTML = "É bissexto";
    else
        if (ano % 4 == 0 && ano % 100 != 0)
            h2.innerHTML = "É bissexto";
        else
            h2.innerHTML = "Não é bissexto";
});