const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const header = document.querySelector('.site-header');
const form = document.querySelector('#orcamento-form');
const year = document.querySelector('#ano');

if (year) year.textContent = new Date().getFullYear();

if (menuButton && menu && header) {
  const setMenuOpen = (isOpen) => {
    menu.classList.toggle('open', isOpen);
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    document.body.classList.toggle('menu-open', isOpen);
  };

  menuButton.addEventListener('click', () => {
    setMenuOpen(!menu.classList.contains('open'));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      event.preventDefault();
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  const closeMenuOnFocusOut = (event) => {
    if (menu.classList.contains('open') &&
        !menu.contains(event.relatedTarget) &&
        !menuButton.contains(event.relatedTarget)) {
      setMenuOpen(false);
    }
  };
  menu.addEventListener('focusout', closeMenuOnFocusOut);
  menuButton.addEventListener('focusout', closeMenuOnFocusOut);

  window.addEventListener('resize', () => {
    if (window.innerWidth > 820) setMenuOpen(false);
  });

  document.documentElement.classList.add('menu-ready');
}

const updateHeader = () => {
  header?.classList.toggle('scrolled', window.scrollY > 10);
};
window.addEventListener('scroll', updateHeader, { passive: true });
updateHeader();

form?.addEventListener('submit', (event) => {
  event.preventDefault();

  form.querySelectorAll('input[type="text"], textarea').forEach((field) => {
    field.value = field.value.trim();
  });
  if (!form.reportValidity()) return;

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

if (form) form.querySelector('button[type="submit"]')?.removeAttribute('disabled');

const marquee = document.querySelector('.marquee');
const marqueeContent = marquee?.querySelector('.marquee-content');
const marqueeTrack = marqueeContent?.querySelector('.marquee-track');
const marqueeToggle = marquee?.querySelector('.marquee-toggle');

if (marquee && marqueeContent && marqueeTrack && marqueeToggle) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const motion = document.createElement('div');
  motion.className = 'marquee-motion';
  motion.setAttribute('aria-hidden', 'true');

  for (let copy = 0; copy < 2; copy += 1) {
    const trackCopy = marqueeTrack.cloneNode(true);
    trackCopy.removeAttribute('id');
    motion.append(trackCopy);
  }
  marqueeContent.append(motion);

  const setMarqueeRunning = (isRunning) => {
    marquee.classList.toggle('is-running', isRunning);
    marqueeToggle.setAttribute('aria-label', isRunning ? 'Pausar animação' : 'Continuar animação');
  };

  marqueeToggle.addEventListener('click', () => {
    setMarqueeRunning(!marquee.classList.contains('is-running'));
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) setMarqueeRunning(false);
  });

  setMarqueeRunning(!reducedMotion.matches);
  marqueeToggle.hidden = false;
}
