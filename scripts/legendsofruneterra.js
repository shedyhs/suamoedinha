var real = document.getElementsByTagName("input")[0];
var pontos = document.getElementsByTagName("input")[1];

const MEDIA_PC1 = 33.56;
const MEDIA_PC2 = 35.12;
const MEDIA_PC3 = 36.31;
const MEDIA_PC4 = 36.70;
const MEDIA_PC5 = 37.02;
const MEDIA_PC6 = 38.35;

const BRL_PC1 = 14.90;
const BRL_PC2 = 29.90;
const BRL_PC3 = 59.90;
const BRL_PC4 = 104.90;
const BRL_PC5 = 149.90;
const BRL_PC6 = 299.90;

const VP_PC1 = 500;
const VP_PC2 = 1050;
const VP_PC3 = 2175;
const VP_PC4 = 3850;
const VP_PC5 = 5550;
const VP_PC6 = 11500;


function realParaPontos() {

    let reais = document.getElementById('real').value;

    reais = String(reais).replace(",", ".");
    parseFloat(reais).toFixed(2);
    let pc1, pc2, pc3, pc4, pc5, pc6, sobra = 0;


    pc6 = Math.floor(reais / BRL_PC6);
    sobra = (reais % BRL_PC6);

    pc5 = Math.floor(sobra / BRL_PC5);
    sobra = (sobra % BRL_PC5);

    pc4 = Math.floor(sobra / BRL_PC4);
    sobra = (sobra % BRL_PC4);

    pc3 = Math.floor(sobra / BRL_PC3);
    sobra = (sobra % BRL_PC3);

    pc2 = Math.floor(sobra / BRL_PC2);
    sobra = (sobra % BRL_PC2);

    pc1 = Math.floor(sobra / BRL_PC1);
    sobra = (sobra % BRL_PC1);

    document.getElementById('pontos').value = Math.floor((pc6 * VP_PC6) + (pc5 * VP_PC5) + (pc4 * VP_PC4) + (pc3 * VP_PC3) + (pc2 * VP_PC2) + (pc1 * VP_PC1) + (sobra * MEDIA_PC1));

}

function pontosParaReal() {
    let pontos = document.getElementById('pontos').value;

    let pc1, pc2, pc3, pc4, pc5, pc6, sobra = 0;

    pc6 = Math.floor(pontos / VP_PC6);
    sobra = (pontos % VP_PC6);

    pc5 = Math.floor(sobra / VP_PC5);
    sobra = (sobra % VP_PC5);

    pc4 = Math.floor(sobra / VP_PC4);
    sobra = (sobra % VP_PC4);

    pc3 = Math.floor(sobra / VP_PC3);
    sobra = (sobra % VP_PC3);

    pc2 = Math.floor(sobra / VP_PC2);
    sobra = (sobra % VP_PC2);

    pc1 = Math.floor(sobra / VP_PC1);
    sobra = Math.floor(sobra % VP_PC1);

    document.getElementById('real').value = parseFloat((pc6 * BRL_PC6) + (pc5 * BRL_PC5) + (pc4 * BRL_PC4) + (pc3 * BRL_PC3) + (pc2 * BRL_PC2) + (pc1 * BRL_PC1) + (sobra / 33.56)).toFixed(2);
}