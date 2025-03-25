// Digitação (JS Completo)
// controle do menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');
    
    // Bloquear o scroll quando o menu estiver aberto
    document.body.style.overflow = navList.classList.contains('open') ? 'hidden' : 'auto';
});

// Fechar menu ao clicar nos links
document.querySelectorAll('.navlist a').forEach(link => { link.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navList.classList.remove('open');
    document.body.style.overflow = 'auto';

    });
});

// Fechar ao rolar a página
window.addEventListener('scroll', () =>{
    if(navList.classList.contains('open')) {
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});

//  ===== Navegação ativa =====
// Seleciona todos os links de navegação
const navLinks = document.querySelectorAll('.navlist a');

// Função para adicionar a classe 'active' no link clicado
function activeLink(){
    navLinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
}

// adiciona o evento de click no link de navegação
navLinks.forEach(item => item.addEventListener('click', activeLink));

// ===== Alterar Modo claro / modo escuro =====
// Função para alterar entre os temas
function toggleMode(){
    const html = document.documentElement;
    html.classList.toggle('light');


    // Salva o tema escolhido no "Armazenamento Local (LocalStorage)"
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Alterar aparência do título
    updateTextColor();
}

// Função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}


const savedTheme = localStorage.getItem('theme');
if(savedTheme){
    document.documentElement.classList.toggle('light', savedTheme === 'light');
}

// ===== Animação do titulo principal =====
// Seleciona o elemento 'titulo' e define as variaveis para animar
const titleElement = document.querySelector('#name');
const text = "Gabriel";
let index = 0;
let isTyping = true;
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff'

// função para animar o texto (digitando e apagando)
function animateText(){
    if(isTyping){
        if(index < text.length){
            titleElement.textContent = text.slice(0, index + 1);
            index ++;
        }else{
            isTyping = false;
        }
    }else{
        if(index > 1){
            titleElement.textContent = text.slice(0, index -1);
            index --;
        }else{
            isTyping = true;
            // altera a cor entre preto e laranja
            currentColor = currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff') ? '#c94c16' : (document.documentElement.classList.contains('light') ? 'black' : '#fff');
            titleElement.style.color = currentColor;
         }
    }
    setTimeout(animateText, 150);
}

// inicia a animação quando carregar a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();

// ===== animação da sessão home =====
// Seleciona a seção home e aplica uma animação de fade-in
const homeSection = document.querySelector('#home');
homeSection.style.opacity = '0';
homeSection.style.transform= 'translateY(20px)';
homeSection.style.transition = 'opacity 1s ease, transform 1s ease';

setTimeout(() => {
    homeSection.style.opacity = '1';
    homeSection.style.transform = 'translate(0)';
}, 100);

// ===== ANIMAÇÃO DA SEÇÕES =====
// Seleciona todas as seções e aplica animações de entrada
const sections = document.querySelectorAll('section');

sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 1s, transform 1s';

    // aplica diferentes transformações com base mo indice da seção
    if(index !== 0){
        if(index === 1) section.style.transform = 'transleteY(100px)';
        else if(index === 2) section.style.transform = 'scale(0.8)';
        else if(index === 3) section.style.transform = 'rotateY(90deg)';
    }
});

// observer para animar a seções ao rolar a página
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'nome';
        }
    });
});

// observa cada seção para aplicar  animação
sections.forEach((section) => observer.observe(section));

// ===== BOTÃO DE VOLTAR AO TOPO =====
// Adiciona um evento de clique ao botão de voltar ao topo
document.querySelector('.top a').addEventListener('click', (e) =>{
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth'}); // Rola suavemente para o topo da página 
});