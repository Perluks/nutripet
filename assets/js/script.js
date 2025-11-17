const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const btnAgendarAvaliacao = document.getElementById('btn-saiba-mais');

if (btnAgendarAvaliacao) {
    btnAgendarAvaliacao.addEventListener('click', function() {
        const contatoSection = document.getElementById('contato');
        if (contatoSection) {
            contatoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

btnAgendarAvaliacao.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.98)';
});

btnAgendarAvaliacao.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});
