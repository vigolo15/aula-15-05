const botoes = document.querySelectorAll(".botao");

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        
        // Remove a classe "ativo" e reseta os estilos de todos os botões
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            
            // Reseta a cor e o peso caso tenham sido alterados pelo JS
            botoes[j].style.backgroundColor = ""; 
            botoes[j].style.fontWeight = "";
            botoes[j].style.color = "";
        }
        
        // Adiciona a classe ativo no botão clicado
        botoes[i].classList.add("ativo");
        
        // DESAFIO: Alterando cor de fundo e peso DIRETAMENTE via JS
        // (Nota: Se você já fez isso no CSS .ativo, essas linhas abaixo são opcionais, 
        // mas cumprem o desafio se o professor pediu para manipular a propriedade .style)
        botoes[i].style.backgroundColor = "#ff9800"; // Um laranja atraente
        botoes[i].style.fontWeight = "bold";         // Deixa o texto em negrito
        botoes[i].style.color = "#ffffff";           // Altera o texto para branco
    };
}