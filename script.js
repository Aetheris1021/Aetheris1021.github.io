const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

const emailToast = document.querySelector('.toast');
document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
  link.addEventListener('click', () => {
    const address = link.getAttribute('href').replace('mailto:', '').split('?')[0];
    const copyEmail = navigator.clipboard?.writeText(address);
    const message = `Opening email to ${address}. If nothing opens, use the address shown here.`;

    if (copyEmail) {
      copyEmail.catch(() => {});
    }

    if (emailToast) {
      emailToast.textContent = message;
      emailToast.classList.add('is-visible');
      window.setTimeout(() => emailToast.classList.remove('is-visible'), 4000);
    }
  });
});
