(function(){
  var TRANSLATIONS = {
    de: {
      meta: { title: 'Clarity Lab — Systeme für planbares Wachstum' },
      nav: { leistungen: 'Leistungen', warum: 'Warum wir', ablauf: 'Ablauf', faq: 'FAQ', team: 'Team', cta: 'Kostenlose Analyse' },
      hero: {
        eyebrow: 'CLARITY LAB',
        h1: 'Dein Unternehmen wächst. Aber ohne dich läuft nichts?',
        sub: 'Wir bauen gemeinsam mit dir Systeme für planbare Neukunden, bessere Abschlüsse, klare Prozesse — und ein Unternehmen, das nicht dauerhaft von dir abhängig ist.',
        cta1: 'Kostenlose Unternehmensanalyse',
        cta2: 'Leistungen ansehen',
        reassurance: '30 Minuten. Konkrete Analyse. Keine Verpflichtung.'
      },
      problem: {
        label: 'DAS PROBLEM',
        h2: 'Du arbeitest jeden Tag im Unternehmen. Nicht am Unternehmen.',
        p: 'Die meisten Betriebe, mit denen wir sprechen, kennen dieses Muster:',
        li1: 'Neukunden kommen unregelmäßig — mal viel, mal nichts.',
        li2: 'Abschlüsse hängen an dir oder einzelnen Mitarbeitern.',
        li3: 'Prozesse existieren nur im Kopf des Inhabers.',
        li4: 'Läuft etwas ohne dich, läuft es spürbar schlechter.'
      },
      loesung: {
        label: 'UNSER ANSATZ',
        h2: 'Wir bauen das System, das dein Unternehmen trägt.',
        p: 'Keine PowerPoint-Präsentationen. Keine theoretischen Workshops. Wir setzen uns mit dir hin und bauen die Systeme, die dein Unternehmen tatsächlich braucht — für Neukunden, Abschlüsse, Abläufe und Führung.'
      },
      leistungen: {
        label: 'LEISTUNGEN',
        h2: 'Woran wir mit dir arbeiten',
        p: 'Fünf Bereiche. Ein Ziel: ein Unternehmen, das läuft.',
        s1_tag: 'Mehr Neukunden', s1_h: 'Mehr qualifizierte Anfragen.', s1_p: 'Meta Ads, Google Ads, Webseiten, Landingpages, Leadgenerierung.',
        s2_tag: 'Mehr Abschlüsse', s2_h: 'Höhere Abschlussquoten.', s2_p: 'Verkaufsprozess, Telefonleitfäden, Bedarfsanalyse, Einwandbehandlung, Abschluss.',
        s3_tag: 'CRM & Automatisierung', s3_h: 'Kein Lead geht mehr verloren.', s3_p: 'Aircall, CRM, KI, Dashboards, automatische Aufgaben, Workflows.',
        s4_tag: 'Prozesse', s4_h: 'Dein Unternehmen funktioniert auch ohne ständige Eingriffe.', s4_p: 'Projektabläufe, Checklisten, Standards, klare Verantwortlichkeiten.',
        s5_tag: 'Unternehmerfreiheit', s5_h: 'Mehr Zeit für dich als Unternehmer.', s5_p: 'Delegation, Kennzahlen, Führung, Controlling.'
      },
      warum: {
        label: 'WARUM CLARITY LAB',
        h2: 'Praxis statt Theorie.',
        p: 'Wir setzen dieselben Systeme auch in unseren eigenen Unternehmen ein.',
        w1_name: 'Praxis statt Theorie', w1_desc: 'Wir setzen dieselben Systeme auch in unseren eigenen Unternehmen ein.',
        w2_name: 'Keine Standardberatung', w2_desc: 'Keine theoretischen Konzepte. Messbare Umsetzung.',
        w3_name: 'Klare Verantwortlichkeiten', w3_desc: 'Jeder weiß, wer wofür zuständig ist — auch ohne dich.',
        w4_name: 'Persönliche Begleitung', w4_desc: 'Wir bauen mit dir, nicht nur für dich.',
        w5_name: 'Nachhaltige Systeme', w5_desc: 'Systeme, die auch in einem Jahr noch funktionieren.',
        w6_name: 'Ergebnisse statt Folien', w6_desc: 'Wir werden daran gemessen, was tatsächlich passiert — nicht an einer Präsentation.'
      },
      ablauf: {
        label: 'ABLAUF',
        h2: 'So läuft die Zusammenarbeit.',
        p: 'Drei Schritte, ohne Umwege.',
        step1_h: 'Analyse', step1_p: 'Wir schauen uns dein Unternehmen an: Marketing, Vertrieb, Prozesse, Zahlen. Wo geht Potenzial verloren?',
        step2_h: 'Aufbau', step2_p: 'Gemeinsam bauen wir die Systeme, die fehlen — Kampagnen, CRM, Abläufe, Verantwortlichkeiten.',
        step3_h: 'Umsetzung', step3_p: 'Wir begleiten die Umsetzung, bis es läuft — messbar, ohne dass du bei jedem Schritt eingreifen musst.'
      },
      faq: {
        label: 'FAQ',
        h2: 'Häufige Fragen',
        p: 'Was du vor einer Analyse wissen solltest.',
        q1: 'Wann lohnt sich Clarity Lab?',
        a1: 'Wenn dein Unternehmen wächst, aber ohne dich als Inhaber nicht richtig funktioniert — oder wenn Neukunden und Abschlüsse zu unregelmäßig kommen, um wirklich zu planen.',
        q2: 'Für welche Unternehmen eignet sich das?',
        a2: 'Für inhabergeführte Betriebe, vor allem im Handwerk und in produzierenden Branchen — von Tischlereien über Installateure bis zu Bauunternehmen.',
        q3: 'Wie läuft die Zusammenarbeit ab?',
        a3: 'In drei Schritten: Analyse deines Unternehmens, gemeinsamer Aufbau der fehlenden Systeme, begleitete Umsetzung bis es messbar läuft.',
        q4: 'Wie lange dauert ein Projekt?',
        a4: 'Das hängt vom Umfang ab. Die kostenlose Erstanalyse zeigt dir konkret, wo wir ansetzen würden und wie lange das realistisch dauert.',
        q5: 'Welche Unternehmensgrößen betreut ihr?',
        a5: 'Von Einzelunternehmern mit ersten Mitarbeitern bis zu Betrieben mit mehreren Dutzend Mitarbeitenden.'
      },
      kontakt: {
        label: 'KOSTENLOSE ANALYSE',
        h2: 'Bereit für ein Unternehmen, das ohne dich läuft?',
        copy: '30 Minuten. Konkrete Analyse deiner größten Hebel. Keine Verpflichtung.',
        book_btn: 'Termin jetzt buchen',
        email_label: 'E-Mail',
        phone_label: 'Telefon',
        location_label: 'Standort',
        form_company: 'Unternehmen',
        form_name: 'Name',
        form_employees: 'Mitarbeiterzahl',
        form_revenue: 'Jahresumsatz',
        form_challenge: 'Größte Herausforderung',
        form_phone: 'Telefon',
        form_email: 'E-Mail',
        form_select_placeholder: 'Bitte wählen',
        form_newsletter: 'Ich möchte den Newsletter erhalten.',
        form_submit: 'Analyse anfragen',
        form_success: 'Danke! Wir melden uns innerhalb von zwei Werktagen. Du kannst aber auch gleich einen Termin wählen:',
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
        h1: 'Die Menschen hinter Clarity Lab.',
        sub: 'Unternehmer, die dieselben Systeme selbst einsetzen, die sie mit dir aufbauen.',
        role_pending: 'Rolle folgt',
        r_richard: 'Marketing, Vertrieb, Unternehmensentwicklung, Prozessaufbau',
        r_marko: 'Strategie, Organisation, Unternehmensentwicklung, Wachstum',
        cta_h: 'Bereit für den nächsten Schritt?',
        cta_sub: 'Kostenlose Analyse · 30 Minuten · unverbindlich',
        cta_btn: 'Kostenlose Unternehmensanalyse'
      },
      impressum_page: {
        meta_title: 'Impressum — Clarity Lab',
        eyebrow: 'IMPRESSUM',
        h1: 'Impressum',
        sub: 'Angaben gemäß §5 ECG und §25 MedienG.',
        h_company: 'Unternehmen',
        l_name: 'Firma', l_address: 'Anschrift', l_email: 'E-Mail', l_phone: 'Telefon',
        l_fn: 'Firmenbuchnummer', l_court: 'Firmenbuchgericht', l_uid: 'UID-Nummer',
        l_gewerbe: 'Gewerbeberechtigung', l_behoerde: 'Aufsichtsbehörde',
        pending: 'folgt',
        h_purpose: 'Unternehmensgegenstand',
        p_purpose: 'Prozess-, Vertriebs- und Marketingberatung für inhabergeführte Unternehmen.',
        h_dispute: 'Streitbeilegung',
        p_dispute: 'Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: ec.europa.eu/consumers/odr. Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.',
        h_liability: 'Haftung für Inhalte',
        p_liability: 'Die Inhalte dieser Website wurden mit Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir dennoch keine Gewähr übernehmen.',
        last_updated: 'Letzte Aktualisierung: Juli 2026'
      },
      privacy_page: {
        meta_title: 'Datenschutz — Clarity Lab',
        eyebrow: 'DATENSCHUTZ',
        h1: 'Datenschutzerklärung',
        sub: 'Stand: Juli 2026. Diese Erklärung beschreibt, welche personenbezogenen Daten wir auf dieser Website erheben, wofür wir sie verwenden und welche Rechte Sie haben.',
        h_controller: 'Verantwortlicher',
        p_controller: 'Verantwortlich für die Datenverarbeitung auf dieser Website ist Clarity Lab GmbH, Royerstraße 7, 2482 Münchendorf, Österreich. E-Mail: inquiry@clarity-lab.com, Telefon: +43 660 3607188.',
        h_data: 'Welche Daten wir erheben',
        h_contact_form: 'Analyse-Anfrageformular',
        p_contact_form: 'Wenn Sie unser Formular für die kostenlose Unternehmensanalyse ausfüllen, erheben wir: Name, Unternehmen, Mitarbeiterzahl, Jahresumsatz (jeweils als Größenklasse), Ihre größte Herausforderung, Telefonnummer (optional) und E-Mail-Adresse. Diese Daten verwenden wir ausschließlich, um Ihre Anfrage zu bearbeiten und die Analyse vorzubereiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Bearbeitung einer Anfrage im vorvertraglichen Stadium).',
        h_newsletter: 'Newsletter-Anmeldung',
        p_newsletter: 'Wenn Sie beim Absenden des Formulars die Newsletter-Checkbox aktivieren, speichern wir Ihren Namen und Ihre E-Mail-Adresse zusätzlich in einer separaten Liste für den Newsletter-Versand. Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), die Sie jederzeit formlos per E-Mail an inquiry@clarity-lab.com widerrufen können.',
        h_booking: 'Terminbuchung',
        p_booking: 'Nach dem Absenden des Formulars führt Sie der Button „Termin jetzt buchen" zu Microsoft Bookings, einem externen Dienst von Microsoft. Dort eingegebene Daten unterliegen den Datenschutzbestimmungen von Microsoft. Wir haben auf diese externe Seite keinen Einfluss.',
        h_analytics: 'Website-Analyse',
        p_analytics: 'Um zu verstehen, wie unsere Website genutzt wird, erfassen wir bei jedem Seitenaufruf: die aufgerufene Seite, die verweisende Seite (Referrer), den Gerätetyp (Mobil/Tablet/Desktop), die ungefähre Verweildauer und eine zufällig erzeugte Sitzungs-ID. Diese Sitzungs-ID verknüpft mehrere Seitenaufrufe miteinander und ist daher als pseudonyme Angabe zu behandeln. Unsere Anwendung selbst speichert dabei keine IP-Adressen oder Standortdaten; unser Hosting- und Datenbankanbieter verarbeitet IP-Adressen jedoch technisch bedingt kurzzeitig als übliche Server-Logdaten zur Sicherheit und Missbrauchsabwehr. Es werden keine Cookies gesetzt. Rechtsgrundlage ist unser berechtigtes Interesse an der Verbesserung unseres Angebots (Art. 6 Abs. 1 lit. f DSGVO).',
        h_chatbot: 'Chat-Assistent',
        p_chatbot: 'Der Chat-Assistent auf unserer Website beantwortet Fragen ausschließlich mit vorbereiteten Inhalten direkt in Ihrem Browser. Ihre Eingaben werden nicht an uns oder Dritte übertragen oder gespeichert.',
        h_language: 'Spracheinstellung',
        p_language: 'Ihre Auswahl zwischen Deutsch und Englisch speichern wir lokal in Ihrem Browser (localStorage), damit sie bei Ihrem nächsten Besuch erhalten bleibt. Diese Information verlässt Ihr Gerät nicht.',
        h_providers: 'Hosting und Dienstleister',
        p_providers: 'Diese Website wird über GitHub Pages gehostet. Formular- und Analysedaten werden bei Supabase gespeichert, mit Serverstandort in Frankfurt (EU). Beide Anbieter fungieren als Auftragsverarbeiter und verarbeiten Daten ausschließlich in unserem Auftrag.',
        h_retention: 'Speicherdauer',
        p_retention: 'Wir speichern personenbezogene Daten nur so lange, wie es für den jeweiligen Zweck erforderlich ist: Anfragen bis zur vollständigen Bearbeitung und einer angemessenen Nachfrist, Newsletter-Daten bis zu Ihrem Widerruf. Auf Anfrage löschen wir Ihre Daten früher, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.',
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
      meta: { title: 'Clarity Lab — Systems for Predictable Growth' },
      nav: { leistungen: 'Services', warum: 'Why us', ablauf: 'Process', faq: 'FAQ', team: 'Team', cta: 'Free Analysis' },
      hero: {
        eyebrow: 'CLARITY LAB',
        h1: 'Your business is growing. But nothing runs without you?',
        sub: "We build systems with you for predictable new customers, better close rates, clear processes — and a business that isn't permanently dependent on you.",
        cta1: 'Free Business Analysis',
        cta2: 'See our services',
        reassurance: '30 minutes. A concrete analysis. No obligation.'
      },
      problem: {
        label: 'THE PROBLEM',
        h2: 'You work in the business every day. Not on the business.',
        p: 'Most owners we talk to recognize this pattern:',
        li1: 'New customers arrive unpredictably — feast or famine.',
        li2: 'Closing deals depends on you or a handful of people.',
        li3: 'Processes only exist in the owner\'s head.',
        li4: 'When you\'re not there, things visibly run worse.'
      },
      loesung: {
        label: 'OUR APPROACH',
        h2: 'We build the system that carries your business.',
        p: 'No slide decks. No theoretical workshops. We sit down with you and build the systems your business actually needs — for new customers, closing deals, workflows, and leadership.'
      },
      leistungen: {
        label: 'SERVICES',
        h2: 'What we work on with you',
        p: 'Five areas. One goal: a business that runs.',
        s1_tag: 'More new customers', s1_h: 'More qualified inquiries.', s1_p: 'Meta Ads, Google Ads, websites, landing pages, lead generation.',
        s2_tag: 'More closed deals', s2_h: 'Higher close rates.', s2_p: 'Sales process, phone scripts, needs analysis, objection handling, closing.',
        s3_tag: 'CRM & Automation', s3_h: 'No lead ever falls through the cracks.', s3_p: 'Aircall, CRM, AI, dashboards, automated tasks, workflows.',
        s4_tag: 'Processes', s4_h: 'Your business runs without constant hands-on intervention.', s4_p: 'Project workflows, checklists, standards, clear responsibilities.',
        s5_tag: 'Owner freedom', s5_h: 'More time for you as the owner.', s5_p: 'Delegation, metrics, leadership, controlling.'
      },
      warum: {
        label: 'WHY CLARITY LAB',
        h2: 'Practice, not theory.',
        p: 'We use the same systems in our own businesses.',
        w1_name: 'Practice, not theory', w1_desc: 'We use the same systems in our own businesses.',
        w2_name: 'No off-the-shelf consulting', w2_desc: 'No theoretical concepts. Measurable implementation.',
        w3_name: 'Clear responsibilities', w3_desc: 'Everyone knows who is responsible for what — even without you.',
        w4_name: 'Hands-on support', w4_desc: 'We build with you, not just for you.',
        w5_name: 'Systems built to last', w5_desc: 'Systems that still work a year from now.',
        w6_name: 'Results, not slides', w6_desc: "We're measured by what actually happens — not by a presentation."
      },
      ablauf: {
        label: 'PROCESS',
        h2: 'How the collaboration works.',
        p: 'Three steps, no detours.',
        step1_h: 'Analysis', step1_p: 'We look at your business: marketing, sales, processes, numbers. Where is potential being lost?',
        step2_h: 'Build', step2_p: "Together we build the systems that are missing — campaigns, CRM, workflows, responsibilities.",
        step3_h: 'Implementation', step3_p: "We support the rollout until it runs — measurably, without you having to intervene at every step."
      },
      faq: {
        label: 'FAQ',
        h2: 'Frequently asked questions',
        p: 'What to know before a free analysis.',
        q1: 'When is Clarity Lab worth it?',
        a1: "When your business is growing but doesn't really function without you as the owner — or when new customers and closed deals come too irregularly to actually plan around.",
        q2: 'What kind of companies is this a fit for?',
        a2: 'For owner-run businesses, especially in trades and manufacturing — from joineries to electricians to construction companies.',
        q3: 'How does the collaboration work?',
        a3: 'In three steps: analysis of your business, building the missing systems together, supported implementation until it runs measurably.',
        q4: 'How long does a project take?',
        a4: 'That depends on scope. The free initial analysis shows you concretely where we\'d start and how long that realistically takes.',
        q5: 'What company sizes do you work with?',
        a5: 'From sole proprietors with their first employees to businesses with several dozen employees.'
      },
      kontakt: {
        label: 'FREE ANALYSIS',
        h2: "Ready for a business that runs without you?",
        copy: '30 minutes. A concrete analysis of your biggest levers. No obligation.',
        book_btn: 'Book a meeting now',
        email_label: 'Email',
        phone_label: 'Phone',
        location_label: 'Location',
        form_company: 'Company',
        form_name: 'Name',
        form_employees: 'Number of employees',
        form_revenue: 'Annual revenue',
        form_challenge: 'Biggest challenge',
        form_phone: 'Phone',
        form_email: 'Email',
        form_select_placeholder: 'Please select',
        form_newsletter: 'I would like to receive the newsletter.',
        form_submit: 'Request analysis',
        form_success: "Thanks! We'll get back to you within two business days. Or pick a time right now:",
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
        h1: 'The people behind Clarity Lab.',
        sub: 'Business owners who use the same systems themselves that they build with you.',
        role_pending: 'Role to be announced',
        r_richard: 'Marketing, sales, business development, process design',
        r_marko: 'Strategy, organization, business development, growth',
        cta_h: 'Ready for the next step?',
        cta_sub: 'Free analysis · 30 minutes · no obligation',
        cta_btn: 'Free Business Analysis'
      },
      impressum_page: {
        meta_title: 'Legal Notice — Clarity Lab',
        eyebrow: 'LEGAL NOTICE',
        h1: 'Legal Notice',
        sub: 'Information pursuant to §5 ECG and §25 MedienG (Austria).',
        h_company: 'Company',
        l_name: 'Company name', l_address: 'Address', l_email: 'Email', l_phone: 'Phone',
        l_fn: 'Company register number', l_court: 'Register court', l_uid: 'VAT ID',
        l_gewerbe: 'Trade license', l_behoerde: 'Supervisory authority',
        pending: 'pending',
        h_purpose: 'Business purpose',
        p_purpose: 'Process, sales, and marketing consulting for owner-run businesses.',
        h_dispute: 'Dispute resolution',
        p_dispute: 'The European Commission provides a platform for online dispute resolution (ODR): ec.europa.eu/consumers/odr. We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.',
        h_liability: 'Liability for content',
        p_liability: 'The content of this website has been prepared with care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content.',
        last_updated: 'Last updated: July 2026'
      },
      privacy_page: {
        meta_title: 'Privacy Policy — Clarity Lab',
        eyebrow: 'PRIVACY POLICY',
        h1: 'Privacy Policy',
        sub: 'Last updated: July 2026. This policy describes what personal data we collect on this website, why we use it, and what rights you have.',
        h_controller: 'Data Controller',
        p_controller: 'The controller responsible for data processing on this website is Clarity Lab GmbH, Royerstraße 7, 2482 Münchendorf, Austria. Email: inquiry@clarity-lab.com, Phone: +43 660 3607188.',
        h_data: 'What data we collect',
        h_contact_form: 'Analysis request form',
        p_contact_form: 'When you fill out our free business analysis form, we collect: name, company, number of employees, annual revenue (each as a size bracket), your biggest challenge, phone number (optional), and email address. We use this data solely to process your request and prepare the analysis. The legal basis is Art. 6(1)(b) GDPR (handling a request in the pre-contractual stage).',
        h_newsletter: 'Newsletter sign-up',
        p_newsletter: 'If you tick the newsletter checkbox when submitting the form, we additionally store your name and email address in a separate list for sending the newsletter. The legal basis is your consent (Art. 6(1)(a) GDPR), which you can withdraw at any time, informally, by emailing inquiry@clarity-lab.com.',
        h_booking: 'Booking an appointment',
        p_booking: 'After submitting the form, the "Book a meeting now" button takes you to Microsoft Bookings, an external service operated by Microsoft. Data entered there is subject to Microsoft\'s own privacy policy. We have no influence over that external page.',
        h_analytics: 'Website analytics',
        p_analytics: "To understand how our website is used, we record on each page view: the page visited, the referring page, the device type (mobile/tablet/desktop), the approximate time spent on the page, and a randomly generated session ID. This session ID links multiple page views together and is therefore treated as pseudonymous data. Our application itself does not store IP addresses or location data; our hosting and database provider does, however, process IP addresses briefly as standard server log data for security and abuse prevention. No cookies are set. The legal basis is our legitimate interest in improving our offering (Art. 6(1)(f) GDPR).",
        h_chatbot: 'Chat assistant',
        p_chatbot: 'The chat assistant on our website answers questions using only pre-written content, directly in your browser. Your input is never transmitted to us or to any third party, nor stored.',
        h_language: 'Language preference',
        p_language: 'We store your choice between German and English locally in your browser (localStorage) so it persists on your next visit. This information never leaves your device.',
        h_providers: 'Hosting and service providers',
        p_providers: 'This website is hosted via GitHub Pages. Form and analytics data is stored with Supabase, with servers located in Frankfurt (EU). Both providers act as data processors on our behalf only.',
        h_retention: 'Retention period',
        p_retention: 'We keep personal data only as long as necessary for its purpose: inquiries until fully handled plus a reasonable follow-up period, newsletter data until you withdraw consent. On request, we delete your data sooner, unless a legal retention obligation applies.',
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
