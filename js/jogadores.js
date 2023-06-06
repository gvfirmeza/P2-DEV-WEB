// Dando a referência para as divs
const ele_masc = document.getElementById("div-masculina");
const ele_fem = document.getElementById("div-feminina");

jogadores.forEach((ele) => {

  // Criando elemento de imagem
  const imagem = document.createElement("img");

  // Definindo o src da imagem com a url do jogador
  imagem.src = ele.imagem;

  // Criando elemento do nome
  const nome = document.createElement("p");
  nome.textContent = ele.nome;

  // Criando uma div para conter a imagem e o nome
  const jogadorDiv = document.createElement("div");
  jogadorDiv.className = "jogador-div";
  
  // Armazenando os valores desejados como atributos personalizados

  jogadorDiv.setAttribute("data-nome", ele.nome);
  jogadorDiv.setAttribute("data-nome_completo", ele.nome_completo);
  jogadorDiv.setAttribute("data-descricao", ele.descricao);
  jogadorDiv.setAttribute("data-altura", ele.altura);
  jogadorDiv.setAttribute("data-nascimento", ele.nascimento);
  jogadorDiv.setAttribute("data-posicao", ele.posicao);
  jogadorDiv.setAttribute("data-imagem", ele.imagem);
  jogadorDiv.appendChild(imagem);
  jogadorDiv.appendChild(nome);

  // Separando jogadores nas respectivas divs e inserindo o cartão dos jogadores
  if (ele.elenco === "feminino") {
    ele_fem.appendChild(jogadorDiv);
  } else if (ele.elenco === "masculino") {
    ele_masc.appendChild(jogadorDiv);
  }

});

function manipularEvento(event) {
  const jogadorDiv = event.currentTarget;
  const nome = jogadorDiv.dataset.nome;
  const nome_completo = jogadorDiv.dataset.nome_completo;
  const descricao = jogadorDiv.dataset.descricao;
  const altura = jogadorDiv.dataset.altura;
  const nascimento = jogadorDiv.dataset.nascimento;
  const posicao = jogadorDiv.dataset.posicao;
  const imagem = jogadorDiv.dataset.imagem;
  
  sessionStorage.setItem('nome', nome);
  sessionStorage.setItem('posicao', posicao);
  sessionStorage.setItem('nascimento', nascimento);
  sessionStorage.setItem('altura', altura);
  sessionStorage.setItem('nome_completo', nome_completo);
  sessionStorage.setItem('descricao', descricao);
  sessionStorage.setItem('imagem', imagem);
  
  window.location.href = 'detalhes.html';
}

const jogadorDivs = document.querySelectorAll(".jogador-div");

jogadorDivs.forEach((jogadorDiv) => {
  jogadorDiv.addEventListener("click", manipularEvento);
});
