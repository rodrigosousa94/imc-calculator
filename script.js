const buttonResult = document.querySelector(".btn");
const textResult = document.querySelector(".resultado");

function convertValues() {
    const pesoDeclarado = parseFloat(document.querySelector(".peso").value);
    const alturaDeclaradaCm = parseFloat(document.querySelector(".altura").value);
    const alturaDeclarada = alturaDeclaradaCm / 100;
    const alturaFinal = alturaDeclarada * alturaDeclarada

    let resultFinal = pesoDeclarado / alturaFinal 

    const resultadoFormatado = resultFinal.toFixed(2).replace(/^0+/, '');


    textResult.innerHTML = "Seu IMC é: " + resultadoFormatado;
}


buttonResult.addEventListener("click", convertValues)