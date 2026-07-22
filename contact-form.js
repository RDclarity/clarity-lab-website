(function(){
  var form = document.getElementById('kontaktForm');
  if(!form) return;

  var noteEl = document.getElementById('formNote');
  var submitBtn = form.querySelector('button[type="submit"]');

  function currentStrings(){
    var lang = localStorage.getItem('clarity_lang') || 'de';
    var dict = (window.clarityI18n && window.clarityI18n.translations[lang]) || {};
    return (dict.kontakt) || {};
  }

  function showNote(text, isError){
    if(!noteEl) return;
    noteEl.textContent = text;
    noteEl.classList.add('show');
    noteEl.classList.toggle('error', !!isError);
  }

  var configured = window.CLARITY_SUPABASE
    && window.CLARITY_SUPABASE.url
    && window.CLARITY_SUPABASE.url.indexOf('YOUR_SUPABASE') === -1
    && window.supabase;

  var client = configured
    ? window.supabase.createClient(window.CLARITY_SUPABASE.url, window.CLARITY_SUPABASE.anonKey)
    : null;

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var email = form.email.value.trim();
    var newsletter = form.newsletter.checked;

    if(!name || !email) return;

    if(!client){
      console.warn('Supabase is not configured yet — see supabase-config.js');
      showNote(currentStrings().form_error || 'Configuration missing.', true);
      return;
    }

    submitBtn.disabled = true;

    client.from('contacts').insert({
      name: name,
      phone: phone,
      email: email,
      newsletter_opt_in: newsletter
    }).then(function(res){
      if(res.error) throw res.error;
      if(newsletter){
        return client.from('newsletter_subscribers')
          .upsert({ name: name, email: email }, { onConflict: 'email' });
      }
    }).then(function(){
      form.reset();
      showNote(currentStrings().form_success || 'Thank you.', false);
    }).catch(function(err){
      console.error(err);
      showNote(currentStrings().form_error || 'Something went wrong.', true);
    }).finally(function(){
      submitBtn.disabled = false;
    });
  });
})();
