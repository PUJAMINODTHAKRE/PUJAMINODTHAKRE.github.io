(function(){
  const year = new Date().getFullYear();
  document.querySelectorAll('[data-year]').forEach(x=>x.textContent=year);
  document.querySelectorAll('[data-email]').forEach(x=>{x.href='mailto:'+PUJA_SITE.email;x.textContent=PUJA_SITE.email});
  document.querySelectorAll('[data-github]').forEach(x=>x.href=PUJA_SITE.github);
  document.querySelectorAll('[data-doi]').forEach(x=>x.href=PUJA_SITE.doi);

  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.links a').forEach(a=>{if(a.getAttribute('href')===path || (path===''&&a.getAttribute('href')==='index.html')) a.classList.add('active')});

  const revealEls = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.08});
  revealEls.forEach(el=>io.observe(el));

  const toggle=document.querySelector('.mobile-toggle'), links=document.querySelector('.links');
  if(toggle){toggle.addEventListener('click',()=>links.classList.toggle('show'))}

  const faq=document.getElementById('faqPanel'), faqBtn=document.getElementById('faqButton'), close=document.getElementById('faqClose');
  if(faqBtn) faqBtn.addEventListener('click',()=>faq.classList.toggle('open'));
  if(close) close.addEventListener('click',()=>faq.classList.remove('open'));

  const answers={
    'research':'Her current research sits at the intersection of mathematical/statistical training, statistical learning and data mining, knowledge representation and knowledge graphs, NLP, and intelligent information systems. The visible portfolio has two main research streams: healthcare knowledge representation and high-frequency financial/geopolitical analysis.',
    'publication':'She co-authored “Knowledge Representation for Healthcare Systems: A Comparative Analysis of Performance of Different Representation Paradigms,” published by Springer in 2026 in Intelligent Computing: Proceedings of the 2026 Computing Conference, LNNS volume 1950, pp. 38–54.',
    'iit':'She completed an M.Sc. in Mathematics at IIT Delhi (2023–2025, CGPA 7.65/10). Her coursework spans analysis, algebra, topology, probability/statistics, optimisation, numerical methods, machine learning, data mining, and computer programming.',
    'methods':'Her CV lists Python, SQL, C/C++, LaTeX; machine learning and data-mining methods including regression, classification and clustering; NLP/text classification; and knowledge-representation technologies including Knowledge Graphs, ontologies, RDF, OWL, and SPARQL.',
    'repository':'Yes. The healthcare knowledge-representation study has a dedicated GitHub repository containing research documentation and an evaluation schema.',
    'contact':'For research conversations or academic collaboration, use '+PUJA_SITE.email+'. The academic CV and publication record are available from this site.',
    'education':'She studied B.Sc. at Government Institute of Science, Nagpur (2019–2022) and completed an M.Sc. in Mathematics at IIT Delhi (2023–2025).',
    'work':'She is currently a Mathematics Faculty member at Resonance, Hyderabad, teaching JEE and Olympiad programmes while continuing collaborative research.'
  };
  function answerQuestion(q){
    const text=q.toLowerCase();
    let key='research';
    if(/publish|paper|doi|springer/.test(text)) key='publication';
    else if(/iit|delhi|master|msc|m\.sc|course/.test(text)) key='iit';
    else if(/method|python|sql|rdf|owl|sparql|skill|tool/.test(text)) key='methods';
    else if(/github|repo|repository|code/.test(text)) key='repository';
    else if(/email|contact|reach|collab/.test(text)) key='contact';
    else if(/bsc|education|degree|study|college/.test(text)) key='education';
    else if(/job|teach|resonance|faculty|professional/.test(text)) key='work';
    return {key, text:answers[key]};
  }
  document.querySelectorAll('.faq-q').forEach(q=>q.addEventListener('click',()=>{
    const out=document.getElementById('faqAnswer'), user=document.getElementById('faqUser');
    if(!out||!user)return;
    const q=q.dataset.q; const a=answerQuestion(q);
    user.textContent=q;
    let extra='';
    if(a.key==='publication') extra='<br><br><a href="'+PUJA_SITE.doi+'" target="_blank" rel="noreferrer">Open DOI ↗</a>';
    if(a.key==='repository') extra='<br><br><a href="'+PUJA_SITE.github+'" target="_blank" rel="noreferrer">Open GitHub repository ↗</a>';
    out.innerHTML='<b>Answer</b>'+a.text+extra;
  }));
  const form=document.getElementById('faqForm');
  if(form)form.addEventListener('submit',e=>{
    e.preventDefault(); const input=document.getElementById('faqInput'); if(!input)return; const q=input.value.trim(); if(!q)return;
    const out=document.getElementById('faqAnswer'), user=document.getElementById('faqUser'); const a=answerQuestion(q);
    user.textContent=q; out.innerHTML='<b>Answer</b>'+a.text+(a.key==='publication'?'<br><br><a href="'+PUJA_SITE.doi+'" target="_blank" rel="noreferrer">Open DOI ↗</a>':'')+(a.key==='repository'?'<br><br><a href="'+PUJA_SITE.github+'" target="_blank" rel="noreferrer">Open GitHub repository ↗</a>':''); input.value='';
  });
})();
