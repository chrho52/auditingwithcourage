/* Auditing with Courage — interactions */
(function () {
  'use strict';

  // --- Sticky nav state ---
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 24) nav.classList.add('is-scrolled');
    else nav.classList.remove('is-scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // --- Footer year ---
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // --- Scroll reveal ---
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // --- Countdown to release ---
  var RELEASE = new Date('2027-01-14T00:00:00-05:00'); // on-sale date (US Eastern)
  var cd = document.getElementById('countdown');
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function tick() {
    if (!cd) return;
    var now = new Date();
    var diff = RELEASE - now;
    var fields = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    if (diff > 0) {
      fields.days = Math.floor(diff / 86400000);
      fields.hours = Math.floor((diff % 86400000) / 3600000);
      fields.minutes = Math.floor((diff % 3600000) / 60000);
      fields.seconds = Math.floor((diff % 60000) / 1000);
    } else {
      cd.innerHTML = '<p style="color:var(--gold);font-family:var(--serif);font-size:1.4rem;">Available now — order your copy below.</p>';
      return;
    }
    Object.keys(fields).forEach(function (unit) {
      var el = cd.querySelector('[data-unit="' + unit + '"]');
      if (el) el.textContent = unit === 'days' ? fields[unit] : pad(fields[unit]);
    });
  }
  tick();
  setInterval(tick, 1000);
})();
