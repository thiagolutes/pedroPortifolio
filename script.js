document.addEventListener('DOMContentLoaded', function() {
    onInit();
});

function onInit() {
    verificarTema();
    aparecerImg();
}

function aparecerImg() {
    let ftoPrincipal = document.getElementById('ftoPrincipal');
    ftoPrincipal.style.opacity = 1;
}

const check = document.getElementById('checkbox');
check.addEventListener('change', () => {
    document.body.classList.toggle('dark');
    document.getElementById('label1').classList.toggle('dark');
    document.getElementById('paragrafoTema').classList.toggle('dark');

    const root = document.documentElement;

    if (check.checked) {  
        root.style.setProperty('--primaria', '#e7dfcf');
        root.style.setProperty('--secundaria', '#080E47');
        localStorage.setItem('tema', 'dark');
    } else {
        root.style.setProperty('--primaria', '#080E47');
        root.style.setProperty('--secundaria', '#e7dfcf');
        localStorage.setItem('tema', 'light');
    }
});

function verificarTema() {
    const temaSalvo = localStorage.getItem('tema');
    const root = document.documentElement;

    if (temaSalvo === 'dark') {
        check.checked = true;
        document.body.classList.add('dark');
        document.getElementById('label1').classList.add('dark');
        document.getElementById('paragrafoTema').classList.add('dark');
        root.style.setProperty('--primaria', '#e7dfcf');
        root.style.setProperty('--secundaria', '#080E47');
    } else {
        check.checked = false;
        root.style.setProperty('--primaria', '#080E47');
        root.style.setProperty('--secundaria', '#e7dfcf');
    }
}
