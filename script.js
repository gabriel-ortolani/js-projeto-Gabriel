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

    // salva o tema escolhido no localStorege
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Alterar apaência do título
    updateTextColor();
}

// Função que altera a cor do texto de acordo com o tema
function updateTextColor(){
    currentColor = document.document.classList.contains('light') ? 'black' : '#fff';
    titleElement.style.color = currentColor;
}
