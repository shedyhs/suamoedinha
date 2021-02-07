let real = document.getElementsByTagName("input")[0];
let pontos = document.getElementsByTagName("input")[1];

const MEDIA_PC1 = 47.61;
const MEDIA_PC2 = 50.64;
const MEDIA_PC3 = 51.37;
const MEDIA_PC4 = 53.35;
const MEDIA_PC5 = 52.84;
const MEDIA_PC6 = 55.04;

const BRL_PC1 = 13.65;
const BRL_PC2 = 27.25;
const BRL_PC3 = 54.50;
const BRL_PC4 = 95.50;
const BRL_PC5 = 136.25;
const BRL_PC6 = 272.50;

const RP_PC1 = 650;
const RP_PC2 = 1380;
const RP_PC3 = 2800;
const RP_PC4 = 5000;
const RP_PC5 = 7200;
const RP_PC6 = 15000;


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
    7
    pc3 = Math.floor(sobra / BRL_PC3);
    sobra = (sobra % BRL_PC3);

    pc2 = Math.floor(sobra / BRL_PC2);
    sobra = (sobra % BRL_PC2);

    pc1 = Math.floor(sobra / BRL_PC1);
    sobra = (sobra % BRL_PC1);

    document.getElementById('pontos').value = Math.floor((pc6 * RP_PC6) + (pc5 * RP_PC5) + (pc4 * RP_PC4) + (pc3 * RP_PC3) + (pc2 * RP_PC2) + (pc1 * RP_PC1) + (sobra * MEDIA_PC1));

}

function pontosParaReal() {
    let pontos = document.getElementById('pontos').value;

    let pc1, pc2, pc3, pc4, pc5, pc6, sobra = 0;

    pc6 = Math.floor(pontos / RP_PC6);
    sobra = (pontos % RP_PC6);

    pc5 = Math.floor(sobra / RP_PC5);
    sobra = (sobra % RP_PC5);

    pc4 = Math.floor(sobra / RP_PC4);
    sobra = (sobra % RP_PC4);

    pc3 = Math.floor(sobra / RP_PC3);
    sobra = (sobra % RP_PC3);

    pc2 = Math.floor(sobra / RP_PC2);
    sobra = (sobra % RP_PC2);

    pc1 = Math.floor(sobra / RP_PC1);
    sobra = Math.floor(sobra % RP_PC1);

    document.getElementById('real').value = parseFloat((pc6 * BRL_PC6) + (pc5 * BRL_PC5) + (pc4 * BRL_PC4) + (pc3 * BRL_PC3) + (pc2 * BRL_PC2) + (pc1 * BRL_PC1) + (sobra / 33.56)).toFixed(2);
}