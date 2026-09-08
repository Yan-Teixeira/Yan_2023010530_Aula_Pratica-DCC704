function trocarPagina(idDaPaginaAlvo) {
    // Seleciona todas as seções de conteúdo[cite: 4, 7]
    const todasAsPaginas = document.querySelectorAll('.pagina-conteudo');

    // Oculta todas adicionando a classe 'oculta'[cite: 7, 8]
    todasAsPaginas.forEach(function(pagina) {
        pagina.classList.add('oculta');
    });

    // Seleciona a página alvo através do ID e remove a classe 'oculta' para exibi-la[cite: 4, 7]
    const paginaParaMostrar = document.getElementById(idDaPaginaAlvo);
    if (paginaParaMostrar) {
        paginaParaMostrar.classList.remove('oculta');
    }
}