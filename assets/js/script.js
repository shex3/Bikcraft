//Menu Ativo
const links = document.querySelectorAll('header nav a')

function ativarLink(link){
    const url = location.href
    const href = link.href

    if(url.includes(href)){
        link.classList.add('ativo')
    }
}

links.forEach(ativarLink)

// URL auto-check
const parametros = new URLSearchParams(location.search);

function autoCheck(parametro){
    const elemento = document.getElementById(parametro)
    elemento.checked = true
}
parametros.forEach(autoCheck)


const perguntas = document.querySelectorAll('.pergunta button');

function click(pergunta){
    pergunta.addEventListener('click', ativarPergunta)  
};
perguntas.forEach(click);

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls)

    pergunta.setAttribute('aria-expanded', 'true')
    resposta.classList.toggle('ativa')
};
