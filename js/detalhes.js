
    document.getElementById('nome').textContent = sessionStorage.getItem('nome');
    document.getElementById('nome_completo').textContent = sessionStorage.getItem('nome_completo');
    document.getElementById('posicao').textContent = sessionStorage.getItem('posicao');
    document.getElementById('descricao').textContent = sessionStorage.getItem('descricao');
    document.getElementById('nascimento').textContent = sessionStorage.getItem('nascimento');
    document.getElementById('altura').textContent = sessionStorage.getItem('altura');
    document.getElementById('imagem').src = sessionStorage.getItem('imagem');