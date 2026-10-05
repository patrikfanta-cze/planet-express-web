// Rok v patičce
const rok = document.getElementById('rok');
if (rok) rok.textContent = new Date().getFullYear();

// Logo a „Nahoru“ – hlavička je přilepená, takže kotva #top by nikam neposunula
document.querySelectorAll('a[href="#top"]').forEach(a =>
  a.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    history.replaceState(null, '', location.pathname + location.search);
  })
);

// Mobilní menu
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('nav');
if (toggle && nav) {
  const setOpen = open => {
    toggle.setAttribute('aria-expanded', open);
    nav.classList.toggle('is-open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
}

// Plovoucí tlačítko Zavolat – po odscrollování z úvodu, schované u kontaktu
const fab = document.querySelector('.call-fab');
const contact = document.getElementById('kontakt');
if (fab) {
  const updateFab = () => {
    const contactVisible = contact && contact.getBoundingClientRect().top < innerHeight;
    fab.classList.toggle('is-shown', scrollY > 400 && !contactVisible);
  };
  addEventListener('scroll', updateFab, { passive: true });
  updateFab();
}
