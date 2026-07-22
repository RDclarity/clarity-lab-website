(function(){
  var TRANSLATIONS = {
    de: {
      meta: { title: 'Clarity Lab — Prozess- und Systemberatung' },
      common: { day_suffix: ' Tage' },
      nav: { methode: 'Methode', leistungen: 'Leistungen', ergebnisse: 'Ergebnisse', ueber: 'Über uns', team: 'Team', cta: 'Erstgespräch' },
      hero: {
        eyebrow: 'CLARITY LAB — PROZESS- UND SYSTEMBERATUNG',
        h1_html: 'Klarheit ist keine Frage des Talents. Sie ist ein <em>Prozess</em>.',
        sub: 'Wir analysieren, wie Ihr Unternehmen wirklich arbeitet — und bauen Prozesse und Systeme, die diese Arbeit tragen, statt sie zu bremsen.',
        cta1: 'Erstgespräch vereinbaren',
        cta2: 'Unsere Methode ansehen',
        meta1: 'begleitete Transformationen',
        meta2: 'bis zur ersten messbaren Wirkung',
        meta3: 'Durchlaufzeit im Schnitt'
      },
      methode: {
        label: '01 — METHODE',
        h2: 'Drei Phasen. Kein Blindflug.',
        p: 'Jedes Mandat folgt derselben Reihenfolge — weil Klarheit erst entsteht, wenn Diagnose vor Lösung kommt.',
        step1_h: 'Diagnose',
        step1_p: 'Wir kartieren Abläufe, Schnittstellen und Engpässe — nicht auf Basis von Organigrammen, sondern von dem, was im Alltag tatsächlich passiert.',
        step2_h: 'Neugestaltung',
        step2_p: 'Aus der Diagnose entsteht ein Zielbild: schlankere Prozesse, klare Verantwortlichkeiten, Systeme, die zur Arbeit passen.',
        step3_h: 'Umsetzung',
        step3_p: 'Wir begleiten die Einführung, bis die neuen Abläufe im Alltag tragen — nicht nur auf dem Papier stehen.'
      },
      leistungen: {
        label: '02 — LEISTUNGEN',
        h2: 'Woran wir konkret arbeiten',
        p: 'Von der ersten Bestandsaufnahme bis zur operativen Begleitung im Alltag.',
        s1_h: 'Prozessanalyse',
        s1_p: 'Ist-Aufnahme und Schwachstellenidentifikation entlang der gesamten Wertschöpfungskette.',
        s2_h: 'Systemarchitektur',
        s2_p: 'Auswahl und Integration von Software, die sich am Prozess orientiert — nicht umgekehrt.',
        s3_h: 'Organisationsdesign',
        s3_p: 'Klare Rollen, Verantwortlichkeiten und Entscheidungswege statt informeller Umwege.',
        s4_h: 'Change-Begleitung',
        s4_p: 'Einführung neuer Abläufe gemeinsam mit dem Team — nicht an ihm vorbei.',
        s5_h: 'Kennzahlen & Steuerung',
        s5_p: 'Messgrößen, die tatsächlich über Erfolg entscheiden, statt Reporting um seiner selbst willen.',
        s6_h: 'Interim-Mandate',
        s6_p: 'Temporäre operative Führung in Transformationsphasen, wenn intern die Kapazität fehlt.'
      },
      ergebnisse: {
        label: '03 — ERGEBNISSE',
        h2: 'Was am Ende zählt',
        p: 'Wirkung, die sich messen lässt — nicht nur beschreiben.',
        stat1: 'durchschnittliche Reduktion der Durchlaufzeit',
        stat2: 'bis zur ersten messbaren Wirkung im Betrieb',
        stat3: 'begleitete Transformationen seit Gründung'
      },
      ueber: {
        label: '04 — ÜBER UNS',
        p1: 'Clarity Lab wurde gegründet, um eine einfache Beobachtung ernst zu nehmen: Die meisten Unternehmen scheitern nicht an fehlenden Ideen, sondern an Prozessen, die niemand mehr vollständig versteht.',
        p2: 'Wir bringen Ordnung in Komplexität — mit der Präzision eines Labors und dem Pragmatismus der Praxis. Kein Berater-Vokabular, keine Folienschlachten. Nur Prozesse und Systeme, die im Alltag tatsächlich tragen.',
        pr1_name: 'Beobachten vor Bewerten',
        pr1_desc: 'Wir verstehen den Ist-Zustand, bevor wir ihn verändern.',
        pr2_name: 'System vor Symptom',
        pr2_desc: 'Wir lösen Ursachen, nicht Einzelfälle.',
        pr3_name: 'Mit dem Team, nicht über es',
        pr3_desc: 'Veränderung trägt nur, was gemeinsam entsteht.',
        pr4_name: 'Wirkung vor Bericht',
        pr4_desc: 'Erfolg zeigt sich im Alltag, nicht in der Präsentation.'
      },
      kontakt: {
        label: '05 — KONTAKT',
        h2: 'Bereit für Klarheit?',
        copy: 'Ein erstes Gespräch dauert 30 Minuten und zeigt, ob und wo wir ansetzen sollten. Unverbindlich.',
        book_btn: 'Termin buchen',
        email_label: 'E-Mail',
        phone_label: 'Telefon',
        location_label: 'Standort',
        form_name: 'Name',
        form_phone: 'Telefon',
        form_email: 'E-Mail',
        form_newsletter: 'Ich möchte den Newsletter erhalten.',
        form_submit: 'Anfrage senden',
        form_success: 'Danke — wir melden uns innerhalb von zwei Werktagen.',
        form_error: 'Da ist etwas schiefgelaufen. Bitte versuche es erneut oder schreib uns direkt per E-Mail.'
      },
      footer: {
        copyright: '© 2026 Clarity Lab. Alle Rechte vorbehalten.',
        impressum: 'Impressum',
        datenschutz: 'Datenschutz'
      },
      team_page: {
        meta_title: 'Team — Clarity Lab',
        eyebrow: 'TEAM — CLARITY LAB',
        h1: 'Die Menschen hinter der Methode.',
        sub: 'Drei Perspektiven, ein Anspruch: Prozesse und Systeme so gestalten, dass sie im Alltag tatsächlich tragen.',
        role_pending: 'Rolle folgt'
      }
    },
    en: {
      meta: { title: 'Clarity Lab — Process & Systems Consulting' },
      common: { day_suffix: ' days' },
      nav: { methode: 'Method', leistungen: 'Services', ergebnisse: 'Results', ueber: 'About', team: 'Team', cta: 'Consultation' },
      hero: {
        eyebrow: 'CLARITY LAB — PROCESS & SYSTEMS CONSULTING',
        h1_html: "Clarity isn't a matter of talent. It's a <em>process</em>.",
        sub: 'We analyze how your company actually works — and build processes and systems that support that work, instead of slowing it down.',
        cta1: 'Schedule a consultation',
        cta2: 'See our method',
        meta1: 'guided transformations',
        meta2: 'to first measurable impact',
        meta3: 'average lead time reduction'
      },
      methode: {
        label: '01 — METHOD',
        h2: 'Three phases. No guesswork.',
        p: 'Every engagement follows the same order — because clarity only emerges when diagnosis comes before solution.',
        step1_h: 'Diagnosis',
        step1_p: 'We map workflows, interfaces, and bottlenecks — not based on org charts, but on what actually happens day to day.',
        step2_h: 'Redesign',
        step2_p: 'The diagnosis produces a target picture: leaner processes, clear responsibilities, systems that fit the work.',
        step3_h: 'Implementation',
        step3_p: 'We support the rollout until the new workflows hold up in daily practice — not just on paper.'
      },
      leistungen: {
        label: '02 — SERVICES',
        h2: 'What we actually work on',
        p: 'From the initial assessment to hands-on support in daily operations.',
        s1_h: 'Process Analysis',
        s1_p: 'Current-state assessment and weak-point analysis across the entire value chain.',
        s2_h: 'System Architecture',
        s2_p: 'Selecting and integrating software that follows the process — not the other way around.',
        s3_h: 'Organizational Design',
        s3_p: 'Clear roles, responsibilities, and decision paths instead of informal workarounds.',
        s4_h: 'Change Management',
        s4_p: 'Introducing new workflows together with the team — not around it.',
        s5_h: 'Metrics & Governance',
        s5_p: 'Metrics that actually determine success, not reporting for its own sake.',
        s6_h: 'Interim Management',
        s6_p: 'Temporary operational leadership during transformation phases when internal capacity is lacking.'
      },
      ergebnisse: {
        label: '03 — RESULTS',
        h2: 'What matters in the end',
        p: 'Impact that can be measured — not just described.',
        stat1: 'average reduction in lead time',
        stat2: 'to first measurable impact in operations',
        stat3: 'guided transformations since founding'
      },
      ueber: {
        label: '04 — ABOUT US',
        p1: "Clarity Lab was founded to take a simple observation seriously: most companies don't fail for lack of ideas, but because of processes nobody fully understands anymore.",
        p2: 'We bring order to complexity — with the precision of a lab and the pragmatism of practice. No consultant jargon, no slide battles. Just processes and systems that actually hold up in daily work.',
        pr1_name: 'Observe before judging',
        pr1_desc: 'We understand the current state before we change it.',
        pr2_name: 'System over symptom',
        pr2_desc: 'We solve causes, not individual cases.',
        pr3_name: 'With the team, not over it',
        pr3_desc: "Change only lasts when it's built together.",
        pr4_name: 'Impact over reporting',
        pr4_desc: 'Success shows up in daily work, not in the presentation.'
      },
      kontakt: {
        label: '05 — CONTACT',
        h2: 'Ready for clarity?',
        copy: 'An initial conversation takes 30 minutes and shows whether — and where — we should start. No obligation.',
        book_btn: 'Book a meeting',
        email_label: 'Email',
        phone_label: 'Phone',
        location_label: 'Location',
        form_name: 'Name',
        form_phone: 'Phone',
        form_email: 'Email',
        form_newsletter: 'I would like to receive the newsletter.',
        form_submit: 'Send inquiry',
        form_success: "Thanks — we'll get back to you within two business days.",
        form_error: 'Something went wrong. Please try again or email us directly.'
      },
      footer: {
        copyright: '© 2026 Clarity Lab. All rights reserved.',
        impressum: 'Legal Notice',
        datenschutz: 'Privacy Policy'
      },
      team_page: {
        meta_title: 'Team — Clarity Lab',
        eyebrow: 'TEAM — CLARITY LAB',
        h1: 'The people behind the method.',
        sub: 'Three perspectives, one standard: designing processes and systems that actually hold up in daily practice.',
        role_pending: 'Role to be announced'
      }
    }
  };

  function resolve(dict, path){
    return path.split('.').reduce(function(o, k){ return (o || {})[k]; }, dict);
  }

  function applyLang(lang){
    var dict = TRANSLATIONS[lang];
    if(!dict) return;
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = resolve(dict, el.getAttribute('data-i18n'));
      if(val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var val = resolve(dict, el.getAttribute('data-i18n-html'));
      if(val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-suffix]').forEach(function(el){
      var suffix = resolve(dict, el.getAttribute('data-i18n-suffix'));
      if(suffix === undefined) return;
      el.setAttribute('data-suffix', suffix);
      var target = parseInt(el.getAttribute('data-count'), 10);
      var prefix = el.getAttribute('data-prefix') || '';
      el.textContent = prefix + target + suffix;
    });
    document.querySelectorAll('.lang-btn').forEach(function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    localStorage.setItem('clarity_lang', lang);
    window.dispatchEvent(new CustomEvent('clarity:langchange', { detail: { lang: lang } }));
  }

  window.clarityI18n = { translations: TRANSLATIONS, applyLang: applyLang, resolve: resolve };

  document.querySelectorAll('.lang-btn').forEach(function(btn){
    btn.addEventListener('click', function(){
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  var savedLang = localStorage.getItem('clarity_lang') || 'de';
  applyLang(savedLang);
})();
