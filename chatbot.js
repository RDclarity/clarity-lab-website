(function(){
  var BOOKING_URL = 'https://outlook.office.com/bookwithme/user/dc79bf543acd4612bd3cd71f5b078ae2@tischlerkultur.onmicrosoft.com/meetingtype/Lf7qqrACrkGmDArzLF0Lvw2?anonymous&ismsaljsauthenabled&ep=mlink';

  var UI = {
    de: {
      title: 'Clarity·Lab Assistent',
      closeAria: 'Chat schließen',
      openAria: 'Chat öffnen',
      placeholder: 'Frage eingeben…',
      inputAria: 'Nachricht',
      send: 'Senden',
      bookingChip: 'Termin buchen',
      greeting: 'Hallo! Ich bin der Clarity·Lab Assistent. Frag mich etwas über die Firma oder unsere Leistungen — oder wähl unten eine Frage.',
      fallback: 'Das habe ich leider nicht ganz verstanden. Wähle unten eine Frage aus, oder vereinbare direkt ein unverbindliches Erstgespräch.'
    },
    en: {
      title: 'Clarity·Lab Assistant',
      closeAria: 'Close chat',
      openAria: 'Open chat',
      placeholder: 'Type a question…',
      inputAria: 'Message',
      send: 'Send',
      bookingChip: 'Book a meeting',
      greeting: "Hello! I'm the Clarity·Lab Assistant. Ask me something about the company or our services — or pick a question below.",
      fallback: "Sorry, I didn't quite catch that. Pick a question below, or schedule a free, no-obligation consultation directly."
    }
  };

  var FAQS = {
    de: [
      {
        label: 'Über Clarity Lab',
        keywords: ['was ist', 'über euch', 'über clarity', 'firma', 'unternehmen', 'wer seid ihr'],
        answer: 'Clarity Lab ist eine Prozess- und Systemberatung aus Österreich. Wir bringen Ordnung in Komplexität — mit der Präzision eines Labors und dem Pragmatismus der Praxis. Unsere Grundsätze: Beobachten vor Bewerten, System vor Symptom, mit dem Team statt über es, Wirkung vor Bericht.'
      },
      {
        label: 'Unsere Leistungen',
        keywords: ['leistung', 'angebot', 'service', 'was bietet'],
        answer: 'Wir arbeiten an: <ul><li>Prozessanalyse — Ist-Aufnahme entlang der Wertschöpfungskette</li><li>Systemarchitektur — Software, die sich am Prozess orientiert</li><li>Organisationsdesign — klare Rollen &amp; Entscheidungswege</li><li>Change-Begleitung — Einführung gemeinsam mit dem Team</li><li>Kennzahlen &amp; Steuerung — Messgrößen, die zählen</li><li>Interim-Mandate — temporäre operative Führung</li></ul>'
      },
      {
        label: 'Unsere Methode',
        keywords: ['methode', 'prozess ab', 'ablauf', 'wie arbeitet', 'vorgehen'],
        answer: 'Drei Phasen, kein Blindflug:<br>1. <strong>Diagnose</strong> — Abläufe, Schnittstellen und Engpässe kartieren.<br>2. <strong>Neugestaltung</strong> — schlankere Prozesse, klare Verantwortlichkeiten.<br>3. <strong>Umsetzung</strong> — Begleitung bis die neuen Abläufe im Alltag tragen.'
      },
      {
        label: 'Ergebnisse',
        keywords: ['ergebnis', 'erfolg', 'zahlen', 'statistik', 'referenz'],
        answer: 'In Zahlen: <strong>40+</strong> begleitete Transformationen, <strong>90 Tage</strong> bis zur ersten messbaren Wirkung, durchschnittlich <strong>−34%</strong> Durchlaufzeit.'
      },
      {
        label: 'Unser Team',
        keywords: ['team', 'mitarbeiter', 'wer arbeitet'],
        answer: 'Im Team: Richard Dobrohruschka, Marko Katalan und Mihai Suta. <a href="team.html">Mehr zum Team →</a>'
      },
      {
        label: 'Kontakt & Adresse',
        keywords: ['kontakt', 'email', 'e-mail', 'telefon', 'adresse', 'erreichen', 'standort'],
        answer: 'E-Mail: inquiry@clarity-lab.com<br>Telefon: +43 660 3607188<br>Adresse: Royerstraße 7, 2482 Münchendorf<br><br>Am schnellsten geht’s mit einem direkten Termin — Button „Termin buchen“ unten.'
      },
      {
        label: 'Termin vereinbaren',
        hideChip: true,
        keywords: ['termin', 'buchen', 'meeting', 'gespräch', 'vereinbaren', 'erstgespräch'],
        answer: 'Am einfachsten direkt hier buchen: <a href="' + BOOKING_URL + '" target="_blank" rel="noopener noreferrer">Termin-Kalender öffnen →</a>'
      }
    ],
    en: [
      {
        label: 'About Clarity Lab',
        keywords: ['what is', 'about you', 'about clarity', 'company', 'who are you'],
        answer: 'Clarity Lab is a process and systems consultancy from Austria. We bring order to complexity — with the precision of a lab and the pragmatism of practice. Our principles: observe before judging, system over symptom, with the team rather than over it, impact over reporting.'
      },
      {
        label: 'Our Services',
        keywords: ['service', 'offer', 'what do you do'],
        answer: 'We work on: <ul><li>Process Analysis — current-state assessment across the value chain</li><li>System Architecture — software that follows the process</li><li>Organizational Design — clear roles &amp; decision paths</li><li>Change Management — rollout together with the team</li><li>Metrics &amp; Governance — metrics that matter</li><li>Interim Management — temporary operational leadership</li></ul>'
      },
      {
        label: 'Our Method',
        keywords: ['method', 'process work', 'how do you work', 'approach'],
        answer: 'Three phases, no guesswork:<br>1. <strong>Diagnosis</strong> — mapping workflows, interfaces, and bottlenecks.<br>2. <strong>Redesign</strong> — leaner processes, clear responsibilities.<br>3. <strong>Implementation</strong> — support until the new workflows hold up day to day.'
      },
      {
        label: 'Results',
        keywords: ['result', 'success', 'numbers', 'stats', 'reference'],
        answer: 'In numbers: <strong>40+</strong> guided transformations, <strong>90 days</strong> to first measurable impact, an average <strong>−34%</strong> reduction in lead time.'
      },
      {
        label: 'Our Team',
        keywords: ['team', 'staff', 'who works there'],
        answer: 'On the team: Richard Dobrohruschka, Marko Katalan, and Mihai Suta. <a href="team.html">More about the team →</a>'
      },
      {
        label: 'Contact & Address',
        keywords: ['contact', 'email', 'phone', 'address', 'reach you', 'location'],
        answer: 'Email: inquiry@clarity-lab.com<br>Phone: +43 660 3607188<br>Address: Royerstraße 7, 2482 Münchendorf, Austria<br><br>Fastest way is a direct booking — use the "Book a meeting" button below.'
      },
      {
        label: 'Schedule an appointment',
        hideChip: true,
        keywords: ['appointment', 'book', 'meeting', 'schedule', 'consultation'],
        answer: 'Easiest way is to book directly here: <a href="' + BOOKING_URL + '" target="_blank" rel="noopener noreferrer">Open booking calendar →</a>'
      }
    ]
  };

  var css = ''
    + '.cl-chat-toggle{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:var(--ink);color:var(--paper);border:none;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 12px 28px -12px rgba(20,30,60,0.45);z-index:200;transition:background .2s ease;}'
    + '.cl-chat-toggle:hover{background:var(--accent);}'
    + '.cl-chat-toggle svg{width:24px;height:24px;}'
    + '.cl-chat-panel{position:fixed;bottom:92px;right:24px;width:min(360px, calc(100vw - 32px));max-height:min(520px, calc(100vh - 140px));background:var(--paper);border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 20px 48px -20px rgba(20,30,60,0.35);display:none;flex-direction:column;overflow:hidden;z-index:200;font-family:"IBM Plex Sans",sans-serif;}'
    + '.cl-chat-panel.open{display:flex;}'
    + '.cl-chat-header{background:var(--ink);color:var(--paper);padding:14px 16px;display:flex;align-items:center;justify-content:space-between;font-family:"Space Grotesk",sans-serif;font-weight:600;font-size:0.96rem;flex-shrink:0;}'
    + '.cl-chat-close{background:none;border:none;color:var(--paper);opacity:0.75;font-size:1.2rem;line-height:1;cursor:pointer;padding:0 2px;}'
    + '.cl-chat-close:hover{opacity:1;}'
    + '.cl-chat-messages{flex:1;overflow-y:auto;padding:14px 16px;display:flex;flex-direction:column;gap:10px;}'
    + '.cl-msg{max-width:88%;padding:10px 13px;border-radius:var(--radius);font-size:0.88rem;line-height:1.55;}'
    + '.cl-msg.bot{align-self:flex-start;background:var(--paper-dim);color:var(--ink);}'
    + '.cl-msg.user{align-self:flex-end;background:var(--accent);color:#fff;}'
    + '.cl-msg ul{margin:6px 0 0 18px;padding:0;}'
    + '.cl-msg li{margin-bottom:4px;}'
    + '.cl-msg a{color:var(--accent-ink);text-decoration:underline;}'
    + '.cl-msg.bot a{color:var(--accent-ink);}'
    + '.cl-chips{display:flex;flex-wrap:wrap;gap:8px;padding:10px 16px;border-top:1px solid var(--line);flex-shrink:0;}'
    + '.cl-chip{border:1px solid var(--line);background:var(--paper);color:var(--ink);padding:7px 12px;font-size:0.78rem;border-radius:var(--radius);cursor:pointer;transition:border-color .2s ease, color .2s ease;font-family:inherit;}'
    + '.cl-chip:hover{border-color:var(--accent);color:var(--accent);}'
    + '.cl-chip.cl-chip-primary{background:var(--ink);color:var(--paper);border-color:var(--ink);}'
    + '.cl-chip.cl-chip-primary:hover{background:var(--accent);border-color:var(--accent);color:#fff;}'
    + '.cl-chat-inputrow{display:flex;gap:8px;padding:10px 12px;border-top:1px solid var(--line);flex-shrink:0;}'
    + '.cl-chat-inputrow input{flex:1;border:1px solid var(--line);padding:9px 10px;font-family:inherit;font-size:0.88rem;border-radius:var(--radius);color:var(--ink);background:var(--paper);}'
    + '.cl-chat-inputrow input:focus{outline:none;border-color:var(--accent);}'
    + '.cl-chat-inputrow button{background:var(--ink);color:var(--paper);border:none;padding:9px 14px;font-size:0.82rem;border-radius:var(--radius);cursor:pointer;font-family:inherit;transition:background .2s ease;}'
    + '.cl-chat-inputrow button:hover{background:var(--accent);}'
    + '@media (max-width:480px){.cl-chat-panel{right:16px;bottom:84px;}.cl-chat-toggle{right:16px;bottom:16px;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var toggle = document.createElement('button');
  toggle.className = 'cl-chat-toggle';
  toggle.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

  var panel = document.createElement('div');
  panel.className = 'cl-chat-panel';
  panel.innerHTML = ''
    + '<div class="cl-chat-header"><span class="cl-title"></span><button class="cl-chat-close">×</button></div>'
    + '<div class="cl-chat-messages"></div>'
    + '<div class="cl-chips"></div>'
    + '<div class="cl-chat-inputrow"><input type="text"><button type="button"></button></div>';

  document.body.appendChild(toggle);
  document.body.appendChild(panel);

  var titleEl = panel.querySelector('.cl-title');
  var messagesEl = panel.querySelector('.cl-chat-messages');
  var chipsEl = panel.querySelector('.cl-chips');
  var inputEl = panel.querySelector('input');
  var sendBtn = panel.querySelector('.cl-chat-inputrow button');
  var closeBtn = panel.querySelector('.cl-chat-close');

  var initialized = false;

  function getLang(){
    return localStorage.getItem('clarity_lang') || 'de';
  }

  function ui(){ return UI[getLang()] || UI.de; }
  function faqs(){ return FAQS[getLang()] || FAQS.de; }

  function applyChrome(){
    var strings = ui();
    titleEl.textContent = strings.title;
    closeBtn.setAttribute('aria-label', strings.closeAria);
    toggle.setAttribute('aria-label', strings.openAria);
    inputEl.placeholder = strings.placeholder;
    inputEl.setAttribute('aria-label', strings.inputAria);
    sendBtn.textContent = strings.send;
  }

  function addMessage(text, from){
    var div = document.createElement('div');
    div.className = 'cl-msg ' + from;
    if(from === 'bot'){ div.innerHTML = text; } else { div.textContent = text; }
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function renderMenu(){
    chipsEl.innerHTML = '';
    faqs().filter(function(faq){ return !faq.hideChip; }).forEach(function(faq){
      var chip = document.createElement('button');
      chip.className = 'cl-chip';
      chip.type = 'button';
      chip.textContent = faq.label;
      chip.addEventListener('click', function(){
        addMessage(faq.label, 'user');
        addMessage(faq.answer, 'bot');
      });
      chipsEl.appendChild(chip);
    });
    var bookingChip = document.createElement('button');
    bookingChip.className = 'cl-chip cl-chip-primary';
    bookingChip.type = 'button';
    bookingChip.textContent = ui().bookingChip;
    bookingChip.addEventListener('click', function(){
      window.open(BOOKING_URL, '_blank', 'noopener');
    });
    chipsEl.appendChild(bookingChip);
  }

  function handleUserText(text){
    var trimmed = text.trim();
    if(!trimmed) return;
    addMessage(trimmed, 'user');
    var lower = trimmed.toLowerCase();
    var match = faqs().find(function(faq){
      return faq.keywords.some(function(kw){ return lower.indexOf(kw) !== -1; });
    });
    if(match){
      addMessage(match.answer, 'bot');
    } else {
      addMessage(ui().fallback, 'bot');
    }
  }

  function openPanel(){
    panel.classList.add('open');
    if(!initialized){
      initialized = true;
      addMessage(ui().greeting, 'bot');
      renderMenu();
    }
    inputEl.focus();
  }

  function closePanel(){
    panel.classList.remove('open');
  }

  toggle.addEventListener('click', function(){
    if(panel.classList.contains('open')){ closePanel(); } else { openPanel(); }
  });
  closeBtn.addEventListener('click', closePanel);
  sendBtn.addEventListener('click', function(){
    handleUserText(inputEl.value);
    inputEl.value = '';
  });
  inputEl.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      handleUserText(inputEl.value);
      inputEl.value = '';
    }
  });

  window.addEventListener('clarity:langchange', function(){
    applyChrome();
    if(initialized) renderMenu();
  });

  applyChrome();
})();
