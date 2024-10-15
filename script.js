document.addEventListener('DOMContentLoaded', function() {
    onInit();
});

function onInit() {
    verificarTema();
    aparecerImg();
    configurarObserver();
}

function aparecerImg() {
    let ftoPrincipal = document.getElementById('ftoPrincipal');
    ftoPrincipal.style.opacity = 1; 
}

function verificarTema() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
        check.checked = true;
    }
    alterarTema(check.checked);
}

const check = document.getElementById('checkbox');
check.addEventListener('change', () => {
    alterarTema(check.checked);
});


function alterarTema(isDark) {
    const root = document.documentElement;
    document.body.classList.toggle('dark', isDark);
    document.getElementById('label1').classList.toggle('dark', isDark);

    if (isDark) {  
        root.style.setProperty('--primaria', '#e7dfcf');
        root.style.setProperty('--secundaria', '#080E47');
        localStorage.setItem('tema', 'dark');
    } else {
        root.style.setProperty('--primaria', '#080E47');
        root.style.setProperty('--secundaria', '#e7dfcf');
        localStorage.setItem('tema', 'light');
    }
}

function configurarObserver() {
    const imagem = document.getElementById('ftoPrincipal');
    const welcome = document.getElementById('welcome');
    const welcome2 = document.getElementById('welcome2');
    
    const observador = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animarElemento(entry.target);
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observador, {
        threshold: 0.1
    });

    observer.observe(imagem);
    observer.observe(welcome);
    observer.observe(welcome2);
}

function animarElemento(element) {
    if (element.id === 'ftoPrincipal') {
        element.classList.add('slide-in');
        return;
    }
    element.classList.add('slide-in-top-to-back');

}
