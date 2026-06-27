/**
 * Axis Law Offices — Main JS
 * Handles: sticky nav, mobile menu, accordion, scroll-to-top, active nav links
 */

(function () {
  'use strict';

  /* ── Sticky Nav ── */
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  /* ── Mobile Hamburger ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.nav-mobile');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', open);
      hamburger.setAttribute('aria-expanded', open);
    });
    /* Close on link click */
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active Nav Link ── */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Practice Area Accordion ── */
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const isActive = header.classList.contains('active');
      /* Close all */
      document.querySelectorAll('.accordion-header').forEach(h => {
        h.classList.remove('active');
        const b = h.nextElementSibling;
        if (b) b.classList.remove('open');
      });
      /* Open clicked (unless it was already open) */
      if (!isActive) {
        header.classList.add('active');
        const body = header.nextElementSibling;
        if (body) body.classList.add('open');
      }
    });
  });

  /* ── Scroll-to-Top ── */
  const scrollBtn = document.getElementById('scroll-top');
  if (scrollBtn) {
    window.addEventListener('scroll', () => {
      scrollBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Contact Form ── */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      const successMsg = document.getElementById('form-success');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          contactForm.reset();
          if (successMsg) successMsg.style.display = 'block';
          btn.textContent = 'Message Sent';
        } else {
          throw new Error('Server error');
        }
      } catch {
        btn.textContent = 'Error — Please email us directly';
        btn.disabled = false;
      }
    });
  }

})();
