let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let valor = num1 % 2;
    let h2 = document.querySelector("h2");

    if (valor == 0)
    h2.innerHTML = `O número ${num1} é par`;
    else
    h2.innerHTML = `O número ${num1} é impar`;

});