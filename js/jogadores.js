// Dando a referência para as divs
const ele_masc = document.getElementById("div-masculina");
const ele_fem = document.getElementById("div-feminina");

jogadores.forEach((ele) => {

  // Criando elemento de imagem

  const imagem = document.createElement("img");

  // Definindo o src da imagem com a url do jogador

  imagem.src = ele.imagem;

  // Separando jogadores nas respectivas divs e inserindo as imagens

  if (ele.elenco === "feminino") {
    ele_fem.appendChild(imagem);
  } 
  else if (ele.elenco === "masculino") {
    ele_masc.appendChild(imagem);
  }

  // Criando elemento do nome

  const nome = document.createElement("p");
  nome.textContent = ele.nome;

  // Inserindo o nome do jogador abaixo das imagens

  if (ele.elenco === "feminino") {
    ele_fem.appendChild(nome);
  } else if (jogador.elenco === "masculino") {
    ele_masc.appendChild(nome);
  }
});