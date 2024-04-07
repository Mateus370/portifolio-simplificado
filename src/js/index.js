/* 
   Objetivo 1 - quando o usario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html
   
    passo 1 - pegar o boão mostrar mais no js pra poder verificar quando o usuario clicar em cima dele 
   
    passo 2 - indertificar o clique no botão

     passo 3 - adicionar a classe "ativo" nos projetos escondidos 

   Objetivo 2 - escondeer o botão de mostrar mais 
   passo 1 - pegar o botão e esconder ele 
   
*/

//Objetivo 1 - quando o usario clicar no botao de mostrar mais deve abrir os projetos que estao escondidos no html

//passo 1 - pegar o boão mostrar mais no js pra poder verificar quando o usuario clicar em cima delector('.btn-mostrar-projetos');

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = documento.querySelectorAll('.projeto:not(.ativo)');


botaoMostrarProjetos.addEventListener('click', () => {
    //passo 3 - adicionar a classe "ativo" nos projetos escondidos 
    mostrarMaisProjetos();
    //Objetivo 2 - escondeer o botão de mostrar mais 
    //passo 1 - pegar o botão e esconder ele 
   esconderbotao();
});

function newFunction() {
    botaoMostrarProjetos.classList.add("remover");
}

function esconder-botao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
