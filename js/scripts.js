var nrImagem = 0;
var imagens = [];
var refrescar = 1.5; // mudar imagem de 1 em 1 segundo

// colocar aqui todas as imagens, seguindo a ordem numérica
imagens[0] = "img/conjuntos/bojonude-mqn.jpg";
imagens[1] = "img/conjuntos/smalistrappy-mqn.jpg";

rodarImagens = function () {
   document.images["muda"].src = imagens[nrImagem];

   nrImagem = (nrImagem + 1) % imagens.length; 
}
var intervalControl = setInterval(rodarImagens, 1000 * refrescar);


// segundo
var nrImagem1 = 0;
var imagens1 = [];
var refrescar1 = 2;

imagens1[0] = "img/calcinhas/bombom-frente.jpg";
imagens1[1] = "img/calcinhas/frufru-frente.jpg";

rodarImagens1 = function () {
   document.images["muda1"].src = imagens1[nrImagem1];

   nrImagem1 = (nrImagem1 + 1) % imagens1.length; 
}
var intervalControl1 = setInterval(rodarImagens1, 1000 * refrescar1);


// terceiro
var nrImagem2 = 0;
var imagens2 = [];
var refrescar2 = 2.5;

imagens2[0] = "img/cuecas/boxer.jpg";
imagens2[1] = "img/cuecas/kitcuecas-cos.jpg";

rodarImagens2 = function () {
   document.images["muda2"].src = imagens2[nrImagem2];

   nrImagem2 = (nrImagem2 + 1) % imagens2.length; 
}
var intervalControl2 = setInterval(rodarImagens2, 1000 * refrescar2);


// quarto
var nrImagem3 = 0;
var imagens3 = [];
var refrescar3 = 3;

imagens3[0] = "img/infantil/kitcuecas.jpg";
imagens3[1] = "img/infantil/calccolinha2.jpg";

rodarImagens3 = function () {
   document.images["muda3"].src = imagens3[nrImagem3];

   nrImagem3 = (nrImagem3 + 1) % imagens3.length; 
}
var intervalControl3 = setInterval(rodarImagens3, 1000 * refrescar3);


// quinto
var nrImagem4 = 0;
var imagens4 = [];
var refrescar4 = 4; 

imagens4[0] = "img/inicial/dia-das-maes.png";
imagens4[1] = "img/inicial/outono-inverno.jpg";
imagens4[2] = "img/inicial/promodebute.jpg";

rodarImagens4 = function () {
   document.images["painel"].src = imagens4[nrImagem4];

   nrImagem4 = (nrImagem4 + 1) % imagens4.length; 
}
var intervalControl4 = setInterval(rodarImagens4, 1000 * refrescar4);
