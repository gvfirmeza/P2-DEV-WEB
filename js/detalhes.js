
    document.getElementById('nome').textContent = localStorage.getItem('nome').toUpperCase();
    document.getElementById('nome_completo').textContent = "Nome Completo: " + localStorage.getItem('nome_completo');
    document.getElementById('posicao').textContent = localStorage.getItem('posicao').toUpperCase();
    document.getElementById('descricao').textContent = localStorage.getItem('descricao');
    document.getElementById('nascimento').textContent = "Nascimento: " + localStorage.getItem('nascimento');
    document.getElementById('altura').textContent = "Altura: " + localStorage.getItem('altura');
    document.getElementById('imagem').src = localStorage.getItem('imagem');