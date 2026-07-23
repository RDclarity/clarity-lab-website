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

  form.addEventListener('submit', function(e){
    e.preventDefault();

    var name = form.name.value.trim();
    var phone = form.phone.value.trim();
    var email = form.email.value.trim();
    var newsletter = form.newsletter.checked;

    if(!name || !email) return;

    if(!window.claritySupabaseReady){
      console.warn('Supabase is not configured yet — see supabase-config.js');
      showNote(currentStrings().form_error || 'Configuration missing.', true);
      return;
    }

    submitBtn.disabled = true;

    window.claritySupabaseReady(function(client){
      if(!client){
        showNote(currentStrings().form_error || 'Configuration missing.', true);
        submitBtn.disabled = false;
        return;
      }

      client.from('contacts').insert({
        name: name,
        phone: phone,
        email: email,
        newsletter_opt_in: newsletter
      }).then(function(res){
        if(res.error) throw res.error;
        if(newsletter){
          return client.from('newsletter_subscribers')
            .insert({ name: name, email: email })
            .then(function(nlRes){
              // 23505 = unique_violation: already subscribed with this email — not an error for the user
              if(nlRes.error && nlRes.error.code !== '23505') throw nlRes.error;
            });
        }
      }).then(function(){
        form.reset();
        showNote(currentStrings().form_success || 'Thank you.', false);
        if(window.clarityLogConversion) window.clarityLogConversion('form_submit');
      }).catch(function(err){
        console.error(err);
        showNote(currentStrings().form_error || 'Something went wrong.', true);
      }).finally(function(){
        submitBtn.disabled = false;
      });
    });
  });
})();
