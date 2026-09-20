(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('puja-theme');
  if (saved) root.setAttribute('data-theme', saved);
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) root.setAttribute('data-theme','dark');

  const themeBtn = document.querySelector('[data-theme-toggle]');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('puja-theme', next);
      themeBtn.setAttribute('aria-label', `Switch to ${next === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  const menuBtn = document.querySelector('[data-menu]');
  const navLinks = document.querySelector('[data-nav]');
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  const progress = document.querySelector('.progress span');
  const updateProgress = () => {
    if (!progress) return;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (h > 0 ? Math.min(100, window.scrollY / h * 100) : 0) + '%';
  };
  window.addEventListener('scroll', updateProgress, {passive:true});
  updateProgress();

  document.querySelectorAll('[data-copy]').forEach(btn => {
    btn.addEventListener('click', async () => {
      const text = document.querySelector(btn.getAttribute('data-copy'))?.innerText || '';
      try { await navigator.clipboard.writeText(text); btn.textContent='Copied'; setTimeout(()=>btn.textContent='Copy citation',1400); }
      catch { btn.textContent='Select and copy'; }
    });
  });

  document.querySelectorAll('[data-filter-group]').forEach(group => {
    const buttons = group.querySelectorAll('[data-filter]');
    const scope = group.closest('section') || document;
    const cards = scope.querySelectorAll('[data-research-card]');
    buttons.forEach(btn => btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const value = btn.dataset.filter;
      cards.forEach(card => {
        const tags = (card.dataset.tags || '').split(',');
        card.hidden = value !== 'all' && !tags.includes(value);
      });
    }));
  });

  const activeLink = document.querySelector('[data-current]');
  if (activeLink) activeLink.classList.add('active');

  document.querySelectorAll('[data-year]').forEach(el => {
    const year = new Date().getFullYear();
    const start = Number(el.dataset.year);
    if (start && year >= start) el.textContent = `© ${year} Puja Minodji Thakre`;
  });
})();
