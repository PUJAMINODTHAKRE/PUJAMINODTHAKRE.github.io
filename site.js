(function(){
  const yearEls=document.querySelectorAll('[data-year]');
  yearEls.forEach(el=>el.textContent=new Date().getFullYear());

  const themeButtons=document.querySelectorAll('[data-theme-toggle]');
  themeButtons.forEach(btn=>btn.addEventListener('click',()=>{document.documentElement.classList.toggle('dark'); localStorage.setItem('pujaTheme',document.documentElement.classList.contains('dark')?'dark':'light');}));
  if(localStorage.getItem('pujaTheme')==='dark')document.documentElement.classList.add('dark');

  const menu=document.querySelector('[data-menu]');
  const nav=document.querySelector('[data-nav]');
  if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('mobile-open')); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));}

  const faqToggle=document.querySelector('[data-faq-toggle]');
  const faqPanel=document.querySelector('[data-faq-panel]');
  const faqAnswer=document.querySelector('[data-faq-answer]');
  const faqInput=document.querySelector('[data-faq-input]');
  if(faqToggle&&faqPanel){
    faqToggle.addEventListener('click',()=>faqPanel.classList.toggle('open'));
    document.addEventListener('click',e=>{if(!e.target.closest('.faq'))faqPanel.classList.remove('open')});
  }
  const answers={
    research:'Puja works at the intersection of mathematical foundations, statistical learning and structured knowledge. Her current research spans knowledge representation and knowledge graphs, statistical learning/data mining, NLP, and applied quantitative analysis.',
    interests:'Her listed interests are Knowledge Representation and Knowledge Graphs; Machine Learning and Data Mining; Natural Language Processing; Statistical Learning; Mathematical Modelling; and Intelligent Information Systems.',
    healthcare:'The published healthcare study compares knowledge-representation paradigms for question answering using 47 cardiovascular patient records and five benchmark queries. The evaluation considers query coverage, reasoning depth and explainability. Knowledge Graphs covered all five benchmark queries in the published benchmark.',
    finance:'The ongoing project studies cryptocurrency and traditional financial-market responses to geopolitical shocks during the Israel–Gaza conflict. It uses time-stamped news, an Hourly War Risk Index (HWRI), hourly market data, and event-study measures including AR, CAR and CAAR.',
    publication:'Puja is a co-author of “Knowledge Representation for Healthcare Systems: A Comparative Analysis of Performance of Different Representation Paradigms,” published in Springer’s Intelligent Computing conference proceedings (LNNS 1950, 2026), pp. 38–54. DOI: 10.1007/978-3-032-24807-7_4.',
    education:'Puja completed an M.Sc. in Mathematics at IIT Delhi (2023–2025, CGPA 7.65/10) and a B.Sc. at the Government Institute of Science, Nagpur (2019–2022, 91.70%).',
    methods:'Her technical toolkit includes Python, SQL, C/C++, LaTeX; machine learning and data mining; NLP/text classification; and knowledge-representation technologies including Knowledge Graphs, Ontologies, RDF, OWL and SPARQL.',
    contact:'For academic enquiries, collaboration or access to her academic record, use the email and profile links in the Contact section. Google Scholar, ORCID, LinkedIn and GitHub are linked there.'
  };
  function reply(key){if(faqAnswer) faqAnswer.innerHTML=answers[key]||answers.contact;}
  document.querySelectorAll('[data-faq-key]').forEach(btn=>btn.addEventListener('click',()=>reply(btn.dataset.faqKey)));
  const form=document.querySelector('[data-faq-form]');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();const q=(faqInput.value||'').toLowerCase();let key='contact';if(/research|work|study|area/.test(q))key='research';if(/interest|field/.test(q))key='interests';if(/health|knowledge graph|representation/.test(q))key='healthcare';if(/finance|crypto|geopolitical|gaza|market/.test(q))key='finance';if(/publication|paper|springer|doi/.test(q))key='publication';if(/education|iit|degree|study at/.test(q))key='education';if(/method|python|sql|rdf|owl|sparql|skill/.test(q))key='methods';reply(key);});}
})();

const copyBtn=document.querySelector('[data-copy-bib]'); if(copyBtn){copyBtn.addEventListener('click',async()=>{const target=document.querySelector('[data-bib]'); try{await navigator.clipboard.writeText(target.textContent); copyBtn.textContent='Copied'; setTimeout(()=>copyBtn.textContent='Copy BibTeX',1600)}catch(e){copyBtn.textContent='Select & copy'}})}
