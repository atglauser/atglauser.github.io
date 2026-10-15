(function(){
  // Image fallbacks: keep the styled placeholder if a photo is missing
  document.querySelectorAll('img[data-fallback]').forEach(function(img){
    var box = img.parentElement;
    function ok(){ box.classList.add('hasimg'); }
    function bad(){ img.remove(); }
    if (img.complete) { img.naturalWidth ? ok() : bad(); }
    img.addEventListener('load', ok); img.addEventListener('error', bad);
  });
  document.querySelectorAll('img[data-hide]').forEach(function(img){
    function bad(){ if (img.parentElement.classList.contains('ph')) img.parentElement.classList.add('missing'); else img.remove(); }
    if (img.complete && !img.naturalWidth) bad();
    img.addEventListener('error', bad);
  });

  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var topbar = document.getElementById('topbar');
  var page = document.body.getAttribute('data-page');

  // Experience sub-menu: peek on hover/focus of the Experience link
  var exp = topbar.querySelector('.nav-exp');
  exp.addEventListener('mouseenter', function(){ topbar.classList.add('peek'); });
  exp.addEventListener('focus', function(){ topbar.classList.add('peek'); });
  topbar.addEventListener('mouseleave', function(){ topbar.classList.remove('peek'); });
  topbar.addEventListener('focusout', function(e){ if (!topbar.contains(e.relatedTarget)) topbar.classList.remove('peek'); });

  // Count-up numbers: the final value stays in the markup until the number is actually on screen,
  // so screenshots, link previews and no-JS visitors always read the real figure
  function countUp(el){
    var target = +el.dataset.count;
    if (reduce) return;
    el.textContent = '0';
    var t0 = null, dur = 1200;
    function step(t){
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1), e = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * e).toLocaleString('en-US');
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (!en.isIntersecting) return;
      en.target.classList.add('in');
      en.target.querySelectorAll('[data-count]').forEach(countUp);
      io.unobserve(en.target);
    });
  }, {threshold:.15});
  document.querySelectorAll('.reveal, .stats').forEach(function(el){ io.observe(el); });

  // Experience pages mark their nav state in the markup; the main page tracks the visible section
  if (page) return;
  var links = {};
  topbar.querySelectorAll('.nav a[data-nav]').forEach(function(a){ links[a.getAttribute('data-nav')] = a; });
  function setActive(id){
    topbar.classList.toggle('in-exp', id === 'experience');
    Object.keys(links).forEach(function(k){ links[k].classList.toggle('active', k === id); });
  }
  var navObs = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if (en.isIntersecting) setActive(en.target.id); });
  }, {rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('main > section[id]').forEach(function(s){ navObs.observe(s); });
})();
