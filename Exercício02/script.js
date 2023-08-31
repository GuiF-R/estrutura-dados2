let button = document.querySelector("button");
button.addEventListener('click', () => {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let num3 = Number(document.getElementById("num3").value);
    let h2 = document.querySelector("h2");
    let media = ((num1*4) + (num2*3) + (num3*3)) / 10;
    
    if (media >= 7)
    h2.innerHTML = `A média é ${media} Aprovado`;
    else
        if (media >= 5)
        h2.innerHTML = `A média é ${media} Recuperação`;
    else 
    h2.innerHTML = `A média é ${media} Reprovado`;
    
});