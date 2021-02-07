function abrirMenu() {
    document.getElementById('menu').style.width = "100%";
    document.getElementById('menu').style.minWidth = "500px";
}

function fecharMenu() {
    document.getElementById('menu').style.minWidth = "0px";
    document.getElementById('menu').style.width = "0px";
}

function aumentaLargura() {
    real.style.width = "15vw";
    pontos.style.width = "15vw";
}

function diminuiLargura() {
    real.value = parseFloat(real.value).toFixed(2)
    real.style.width = real.value.length + 1 + "ch";
    pontos.style.width = pontos.value.length + 1 + "ch";
    isNaN(document.getElementById('real').value[0]) ? document.getElementById('real').value = 0.00 : document.getElementById('real').value;
}