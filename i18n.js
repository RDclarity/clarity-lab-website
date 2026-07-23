(function(){
  var TRANSLATIONS = {
    de: {
      meta: { title: 'Clarity Lab — Prozess- und Systemberatung' },
      common: { day_suffix: ' Tage' },
      nav: { methode: 'Methode', leistungen: 'Leistungen', ergebnisse: 'Ergebnisse', ueber: 'Über uns', team: 'Team', referenzen: 'Referenzen', cta: 'Erstgespräch' },
      hero: {
        eyebrow: 'CLARITY LAB — PROZESS- UND SYSTEMBERATUNG',
        h1_html: 'Klarheit ist keine Frage des Talents. Sie ist ein <em>Prozess</em>.',
        sub: 'Wir analysieren, wie Ihr Unternehmen wirklich arbeitet — und bauen Prozesse und Systeme, die diese Arbeit tragen, statt sie zu bremsen.',
        cta1: 'Erstgespräch vereinbaren',
        cta2: 'Unsere Methode ansehen',
        meta1: 'begleitete Transformationen',
        meta2: 'bis zur ersten messbaren Wirkung',
        meta3: 'Durchlaufzeit im Schnitt',
        reassurance: 'Kostenlos & unverbindlich · 30 Minuten · Antwort innerhalb von 2 Werktagen'
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
        stat3: 'begleitete Transformationen seit Gründung',
        case_link: 'Fallbeispiel lesen: Wie Metallbau Hofer den Umsatz in 18 Monaten um 50 % steigerte'
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
      faq: {
        label: '05 — FAQ',
        h2: 'Häufige Fragen',
        p: 'Was Sie vor einem Erstgespräch wissen sollten.',
        q1: 'Was macht Clarity Lab konkret?',
        a1: 'Wir analysieren, wie Ihr Unternehmen wirklich arbeitet, und bauen Prozesse und Systeme, die diese Arbeit tragen — von der Prozessanalyse über Systemarchitektur bis zur Umsetzung im Alltag.',
        q2: 'Wie läuft eine Zusammenarbeit ab?',
        a2: 'In drei Phasen: Diagnose (wir kartieren Abläufe und Engpässe), Neugestaltung (ein Zielbild mit klaren Verantwortlichkeiten) und Umsetzung (Begleitung, bis der neue Ablauf im Alltag trägt).',
        q3: 'Was kostet das Erstgespräch?',
        a3: 'Nichts. Ein erstes Gespräch dauert 30 Minuten, ist unverbindlich und zeigt, ob und wo wir ansetzen sollten.',
        q4: 'Wie schnell zeigt sich eine Wirkung?',
        a4: 'Im Schnitt nach 90 Tagen zeigt sich die erste messbare Wirkung im Betrieb.',
        q5: 'Für welche Unternehmen eignet sich das?',
        a5: 'Von Handwerksbetrieben bis mittelständischen Unternehmen — siehe zum Beispiel unser Fallbeispiel Metallbau Hofer, das den Jahresumsatz in 18 Monaten um 50 % steigerte.'
      },
      kontakt: {
        label: '06 — KONTAKT',
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
        role_pending: 'Rolle folgt',
        cta_h: 'Bereit für den nächsten Schritt?',
        cta_sub: 'Kostenloses Erstgespräch · 30 Minuten · unverbindlich',
        cta_btn: 'Erstgespräch vereinbaren'
      },
      ref_page: {
        meta_title: 'Referenz — Clarity Lab',
        eyebrow: 'REFERENZ — CLARITY LAB',
        h1: 'Ein Handwerksbetrieb, der endlich mit seinem Wachstum Schritt hielt.',
        sub: 'Metallbau Hofer war voll ausgelastet — und kam trotzdem nicht vom Fleck. 18 Monate später lag der Jahresumsatz 50 % höher.',
        s1_label: '01 — AUSGANGSLAGE',
        s1_h: 'Volle Auftragsbücher, stehender Umsatz.',
        s1_p: 'Metallbau Hofer, ein Handwerksbetrieb für Stahl- und Metallbau in Niederösterreich, hatte über Jahre einen stabilen Kundenstamm aufgebaut — und trotzdem stagnierte der Umsatz bei rund 500.000 € im Jahr. Aufträge kamen herein, blieben aber in informellen Abstimmungsschleifen hängen. Wer wofür zuständig war, wusste oft nur der Chef selbst.',
        s2_label: '02 — VORGEHEN',
        s2_h: 'Diagnose vor Lösung — wie überall bei uns.',
        s2_p: 'Wir kartierten den kompletten Auftragsprozess vom Angebot bis zur Montage. Ergebnis: Drei von fünf Verzögerungen entstanden nicht in der Werkstatt, sondern in der Kommunikation davor. Aus der Diagnose entstand ein neues Rollenmodell mit klaren Verantwortlichkeiten für Angebotserstellung, Materialdisposition und Terminplanung — begleitet, bis der neue Ablauf im Alltag trug.',
        s3_label: '03 — ERGEBNIS',
        s3_h: 'Was am Ende zählt.',
        stat1: 'Jahresumsatz in 18 Monaten (500.000 € → 750.000 €)',
        stat2: 'Durchlaufzeit von Anfrage bis Angebot',
        stat3: 'Monate bis zur ersten spürbaren Entlastung im Tagesgeschäft',
        quote: '„Wir wissen heute, wer wofür verantwortlich ist — und die Aufträge laufen, ohne dass ich jeden Handgriff selbst koordinieren muss.“',
        quote_cite: 'Geschäftsführung, Metallbau Hofer',
        cta_h: 'Ähnliche Herausforderung?',
        cta_btn: 'Erstgespräch vereinbaren'
      },
      privacy_page: {
        meta_title: 'Datenschutz — Clarity Lab',
        eyebrow: 'DATENSCHUTZ',
        h1: 'Datenschutzerklärung',
        sub: 'Stand: Juli 2026. Diese Erklärung beschreibt, welche personenbezogenen Daten wir auf clarity-lab.at erheben, wofür wir sie verwenden und welche Rechte Sie haben.',
        h_controller: 'Verantwortlicher',
        p_controller: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist Clarity Lab, Royerstraße 7, 2482 Münchendorf, Österreich. E-Mail: inquiry@clarity-lab.com, Telefon: +43 660 3607188.',
        h_data: 'Welche Daten wir erheben',
        h_contact_form: 'Kontaktformular',
        p_contact_form: 'Wenn Sie unser Kontaktformular ausfüllen, erheben wir Name, Telefonnummer (optional) und E-Mail-Adresse. Diese Daten verwenden wir ausschließlich, um Ihre Anfrage zu bearbeiten und zu beantworten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung einer Anfrage im vorvertraglichen Stadium).',
        h_newsletter: 'Newsletter-Anmeldung',
        p_newsletter: 'Wenn Sie beim Absenden des Kontaktformulars die Newsletter-Checkbox aktivieren, speichern wir Ihren Namen und Ihre E-Mail-Adresse zusätzlich in einer separaten Liste für den Newsletter-Versand. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit formlos per E-Mail an inquiry@clarity-lab.com widerrufen können.',
        h_booking: 'Terminbuchung',
        p_booking: 'Der Button „Termin buchen" führt Sie zu Microsoft Bookings, einem externen Dienst von Microsoft. Dort eingegebene Daten unterliegen den Datenschutzbestimmungen von Microsoft. Wir haben auf diese externe Seite keinen Einfluss.',
        h_analytics: 'Website-Analyse',
        p_analytics: 'Um zu verstehen, wie unsere Website genutzt wird, erfassen wir bei jedem Seitenaufruf: die aufgerufene Seite, die verweisende Seite (Referrer), den Gerätetyp (Mobil/Tablet/Desktop), die ungefähre Verweildauer und eine zufällig erzeugte, nicht personenbezogene Sitzungs-ID. Wir erheben ausdrücklich keine IP-Adressen und keinen geografischen Standort. Es werden keine Cookies gesetzt. Rechtsgrundlage ist unser berechtigtes Interesse an der Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).',
        h_chatbot: 'Chat-Assistent',
        p_chatbot: 'Der Chat-Assistent auf unserer Website beantwortet Fragen ausschließlich mit vorbereiteten Inhalten direkt in Ihrem Browser. Ihre Eingaben werden nicht an uns oder Dritte übertragen oder gespeichert.',
        h_language: 'Spracheinstellung',
        p_language: 'Ihre Auswahl zwischen Deutsch und Englisch speichern wir lokal in Ihrem Browser (localStorage), damit sie bei Ihrem nächsten Besuch erhalten bleibt. Diese Information verlässt Ihr Gerät nicht.',
        h_providers: 'Hosting und Dienstleister',
        p_providers: 'Diese Website wird über GitHub Pages gehostet. Formular- und Analysedaten werden bei Supabase gespeichert, mit Serverstandort in Frankfurt (EU). Beide Anbieter fungieren als Auftragsverarbeiter und verarbeiten Daten ausschließlich in unserem Auftrag.',
        h_retention: 'Speicherdauer',
        p_retention: 'Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist: Kontaktanfragen bis zur vollständigen Bearbeitung und einer angemessenen Nachfrist, Newsletter-Daten bis zu Ihrem Widerruf. Auf Anfrage löschen wir Ihre Daten früher, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
        h_rights: 'Ihre Rechte',
        p_rights_intro: 'Nach der DSGVO haben Sie das Recht auf:',
        right1: 'Auskunft über Ihre gespeicherten Daten',
        right2: 'Berichtigung unrichtiger Daten',
        right3: 'Löschung Ihrer Daten',
        right4: 'Einschränkung der Verarbeitung',
        right5: 'Datenübertragbarkeit',
        right6: 'Widerspruch gegen die Verarbeitung',
        right7: 'Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft',
        p_rights_contact: 'Zur Ausübung dieser Rechte genügt eine E-Mail an inquiry@clarity-lab.com. Sie haben zudem das Recht, sich bei der österreichischen Datenschutzbehörde zu beschweren: Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Wien, dsb@dsb.gv.at.',
        h_changes: 'Änderungen dieser Erklärung',
        p_changes: 'Wir passen diese Datenschutzerklärung an, wenn sich unsere Datenverarbeitung ändert. Es gilt die jeweils aktuelle, auf dieser Seite veröffentlichte Fassung.',
        last_updated: 'Letzte Aktualisierung: Juli 2026'
      }
    },
    en: {
      meta: { title: 'Clarity Lab — Process & Systems Consulting' },
      common: { day_suffix: ' days' },
      nav: { methode: 'Method', leistungen: 'Services', ergebnisse: 'Results', ueber: 'About', team: 'Team', referenzen: 'Case Study', cta: 'Consultation' },
      hero: {
        eyebrow: 'CLARITY LAB — PROCESS & SYSTEMS CONSULTING',
        h1_html: "Clarity isn't a matter of talent. It's a <em>process</em>.",
        sub: 'We analyze how your company actually works — and build processes and systems that support that work, instead of slowing it down.',
        cta1: 'Schedule a consultation',
        cta2: 'See our method',
        meta1: 'guided transformations',
        meta2: 'to first measurable impact',
        meta3: 'average lead time reduction',
        reassurance: 'Free & no obligation · 30 minutes · reply within 2 business days'
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
        stat3: 'guided transformations since founding',
        case_link: 'Read the case study: how Metallbau Hofer grew revenue 50% in 18 months'
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
      faq: {
        label: '05 — FAQ',
        h2: 'Frequently asked questions',
        p: 'What to know before your first conversation.',
        q1: 'What does Clarity Lab actually do?',
        a1: 'We analyze how your company actually works, and build processes and systems that support that work — from process analysis through system architecture to implementation in daily practice.',
        q2: 'How does a project typically proceed?',
        a2: 'In three phases: Diagnosis (we map workflows and bottlenecks), Redesign (a target picture with clear responsibilities), and Implementation (support until the new workflow holds up in daily practice).',
        q3: 'What does the initial consultation cost?',
        a3: 'Nothing. An initial conversation takes 30 minutes, is non-binding, and shows whether — and where — we should start.',
        q4: 'How quickly does impact show up?',
        a4: 'On average, the first measurable impact shows up in operations after 90 days.',
        q5: 'What kind of companies is this a fit for?',
        a5: 'From trade businesses to mid-sized companies — see for example our case study on Metallbau Hofer, which grew annual revenue 50% in 18 months.'
      },
      kontakt: {
        label: '06 — CONTACT',
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
        role_pending: 'Role to be announced',
        cta_h: 'Ready for the next step?',
        cta_sub: 'Free consultation · 30 minutes · no obligation',
        cta_btn: 'Schedule a consultation'
      },
      ref_page: {
        meta_title: 'Case Study — Clarity Lab',
        eyebrow: 'CASE STUDY — CLARITY LAB',
        h1: 'A trade business that finally kept pace with its own growth.',
        sub: "Metallbau Hofer had a full order book — and still wasn't moving forward. 18 months later, annual revenue was 50% higher.",
        s1_label: '01 — STARTING POINT',
        s1_h: 'Full order books, flat revenue.',
        s1_p: "Metallbau Hofer, a steel and metal fabrication business in Lower Austria, had built a stable customer base over the years — yet revenue stalled at around €500,000 a year. Orders came in, but got stuck in informal back-and-forth. Who was responsible for what was often only clear to the owner himself.",
        s2_label: '02 — APPROACH',
        s2_h: 'Diagnosis before solution — as always.',
        s2_p: "We mapped the entire order process from quote to installation. Result: three out of five delays weren't happening in the workshop, but in the communication beforehand. The diagnosis led to a new role model with clear responsibilities for quoting, material planning, and scheduling — supported until the new workflow held up in daily practice.",
        s3_label: '03 — RESULT',
        s3_h: 'What matters in the end.',
        stat1: 'Annual revenue in 18 months (€500,000 → €750,000)',
        stat2: 'Lead time from inquiry to quote',
        stat3: 'months to the first noticeable relief in daily operations',
        quote: '"Today we know who\'s responsible for what — and orders move forward without me coordinating every single step myself."',
        quote_cite: 'Management, Metallbau Hofer',
        cta_h: 'Facing a similar challenge?',
        cta_btn: 'Schedule a consultation'
      },
      privacy_page: {
        meta_title: 'Privacy Policy — Clarity Lab',
        eyebrow: 'PRIVACY POLICY',
        h1: 'Privacy Policy',
        sub: 'Last updated: July 2026. This policy describes what personal data we collect on clarity-lab.at, why we use it, and what rights you have.',
        h_controller: 'Data Controller',
        p_controller: 'The controller responsible for data processing on this website is Clarity Lab, Royerstraße 7, 2482 Münchendorf, Austria. Email: inquiry@clarity-lab.com, Phone: +43 660 3607188.',
        h_data: 'What data we collect',
        h_contact_form: 'Contact form',
        p_contact_form: "When you fill out our contact form, we collect your name, phone number (optional), and email address. We use this data solely to process and respond to your inquiry. The legal basis is Art. 6(1)(b) GDPR (handling a request in the pre-contractual stage).",
        h_newsletter: 'Newsletter sign-up',
        p_newsletter: 'If you tick the newsletter checkbox when submitting the contact form, we additionally store your name and email address in a separate list for sending the newsletter. The legal basis is your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time, informally, by emailing inquiry@clarity-lab.com.',
        h_booking: 'Booking an appointment',
        p_booking: 'The "Book a meeting" button takes you to Microsoft Bookings, an external service operated by Microsoft. Data entered there is subject to Microsoft\'s own privacy policy. We have no influence over that external page.',
        h_analytics: 'Website analytics',
        p_analytics: "To understand how our website is used, we record on each page view: the page visited, the referring page, the device type (mobile/tablet/desktop), the approximate time spent on the page, and a randomly generated, non-personal session ID. We explicitly do not collect IP addresses or geographic location. No cookies are set. The legal basis is our legitimate interest in improving our offering (Art. 6(1)(f) GDPR).",
        h_chatbot: 'Chat assistant',
        p_chatbot: 'The chat assistant on our website answers questions using only pre-written content, directly in your browser. Your input is never transmitted to us or to any third party, nor stored.',
        h_language: 'Language preference',
        p_language: 'We store your choice between German and English locally in your browser (localStorage) so it persists on your next visit. This information never leaves your device.',
        h_providers: 'Hosting and service providers',
        p_providers: 'This website is hosted via GitHub Pages. Form and analytics data is stored with Supabase, with servers located in Frankfurt (EU). Both providers act as data processors on our behalf only.',
        h_retention: 'Retention period',
        p_retention: 'We keep personal data only as long as necessary for its purpose: contact inquiries until fully handled plus a reasonable follow-up period, newsletter data until you withdraw consent. On request, we delete your data sooner, unless a legal retention obligation applies.',
        h_rights: 'Your rights',
        p_rights_intro: 'Under the GDPR, you have the right to:',
        right1: 'access the data we hold about you',
        right2: 'correct inaccurate data',
        right3: 'have your data deleted',
        right4: 'restrict processing',
        right5: 'data portability',
        right6: 'object to processing',
        right7: 'withdraw consent already given, with future effect',
        p_rights_contact: 'To exercise these rights, simply email inquiry@clarity-lab.com. You also have the right to lodge a complaint with the Austrian data protection authority: Österreichische Datenschutzbehörde, Barichgasse 40-42, 1030 Vienna, Austria, dsb@dsb.gv.at.',
        h_changes: 'Changes to this policy',
        p_changes: 'We update this privacy policy whenever our data processing changes. The version published on this page is always the current one.',
        last_updated: 'Last updated: July 2026'
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
