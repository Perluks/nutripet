/* ======================================
   NUTRI PET - SCRIPT JAVASCRIPT
   ====================================== */

/* ======================================
   SEÇÃO 1: SCROLL SUAVE PARA NAVEGAÇÃO
   ====================================== */

/**
 * Função para habilitar scroll suave entre seções
 * Quando clica em um link com href="#id", a página se move suavemente até a seção
 * Funciona com todos os links que têm href começando com "#"
 */

/* Seleciona todos os links de navegação que apontam para seções (href com #) */
const links = document.querySelectorAll('a[href^="#"]');

/* Para cada link encontrado, adiciona um event listener */
links.forEach(link => {
    /* Escuta o evento de clique */
    link.addEventListener('click', function(event) {
        /* Previne o comportamento padrão do link (jump imediato) */
        /* preventDefault() cancela a ação padrão do navegador */
        event.preventDefault();
        
        /* Obtém o ID da seção para a qual o link aponta */
        /* getAttribute('href') pega o valor do atributo href */
        /* substring(1) remove o "#" do início (ex: "#inicio" vira "inicio") */
        const targetId = this.getAttribute('href').substring(1);
        
        /* Seleciona o elemento com esse ID */
        /* getElementById() busca por um elemento com esse ID */
        const targetSection = document.getElementById(targetId);
        
        /* Verifica se a seção existe (segurança contra erros) */
        if (targetSection) {
            /* scrollIntoView() faz a página ir até o elemento */
            /* { behavior: 'smooth' } faz o scroll ser suave (não pula direto) */
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

/* ======================================
   SEÇÃO 2: BOTÃO "AGENDAR AVALIAÇÃO"
   ====================================== */

/**
 * Funcionalidade do botão "Agendar Avaliação"
 * Quando clica no botão, leva até a seção de contato com scroll suave
 */

/* Seleciona o botão pelo ID */
/* getElementById() é mais rápido que querySelector para buscar por ID */
const btnAgendarAvaliacao = document.getElementById('btn-saiba-mais');

/* Verifica se o botão existe na página (segurança) */
if (btnAgendarAvaliacao) {
    /* Adiciona event listener para o clique */
    btnAgendarAvaliacao.addEventListener('click', function() {
        /* Seleciona a seção de contato pelo ID */
        const contatoSection = document.getElementById('contato');
        
        /* Se a seção existe, faz scroll suave até ela */
        if (contatoSection) {
            /* scrollIntoView com smooth behavior leva até a seção suavemente */
            contatoSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

/* ======================================
   SEÇÃO 3: EFEITO VISUAL AO CLICAR
   ====================================== */

/**
 * Adiciona efeito visual de "press" ao clicar no botão
 * O botão fica com efeito de estar sendo pressionado
 */

/* Escuta quando o mouse pressiona no botão */
btnAgendarAvaliacao.addEventListener('mousedown', function() {
    /* Adiciona classe 'ativo' que tem estilos CSS diferentes */
    /* A classe 'ativo' não está em style.css mas poderia estar */
    this.style.transform = 'scale(0.98)'; // Diminui 2% o tamanho
});

/* Escuta quando o mouse solta depois do click */
btnAgendarAvaliacao.addEventListener('mouseup', function() {
    /* Remove o efeito de press voltando ao tamanho normal */
    this.style.transform = 'scale(1)'; // Volta ao tamanho 100%
});

/* ======================================
   SEÇÃO 4: COMENTÁRIOS TÉCNICOS
   ====================================== */

/**
 * MÉTODOS JAVASCRIPT UTILIZADOS:
 * 
 * document.querySelectorAll() - Seleciona múltiplos elementos por seletor CSS
 * document.getElementById() - Seleciona um elemento por ID (mais rápido)
 * 
 * addEventListener() - Adiciona um "ouvinte de evento" a um elemento
 * Eventos usados: 'click', 'mousedown', 'mouseup'
 * 
 * event.preventDefault() - Cancela a ação padrão do navegador
 * 
 * getAttribute() - Obtém o valor de um atributo HTML
 * substring() - Extrai parte de uma string
 * 
 * scrollIntoView() - Faz o elemento ficar visível na tela
 * Opção { behavior: 'smooth' } para scroll suave
 * 
 * style.transform - Modifica a transformação CSS do elemento
 * scale(0.98) - Redimensiona para 98% do tamanho
 * scale(1) - Volta ao tamanho 100%
 */

/* FIM DO SCRIPT JAVASCRIPT */