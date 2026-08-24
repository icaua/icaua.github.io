const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const header = document.querySelector('.site-header');
const form = document.querySelector('#orcamento-form');
const year = document.querySelector('#ano');

if (year) year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  document.body.classList.toggle('menu-open', isOpen);
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

window.addEventListener('scroll', () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const nome = String(data.get('nome') || '').trim();
  const servico = String(data.get('servico') || '').trim();
  const detalhes = String(data.get('detalhes') || '').trim();

  const message = [
    'Olá, Isaac! Vi seu site e gostaria de solicitar um orçamento.',
    '',
    `Nome: ${nome}`,
    `Serviço: ${servico}`,
    `Detalhes: ${detalhes}`
  ].join('\n');

  const phone = '5511950845262';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
});
