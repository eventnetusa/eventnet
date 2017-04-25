(function() {

  var $getQuote = $('#quote');
  $getQuote.submit(function(e) {
    e.preventDefault();
    $.ajax({
     url: 'https://formspree.io/sales@eventnetusa.com',
     method: 'POST',
     data: $(this).serialize(),
     dataType: 'json',
     beforeSend: function() {
       $getQuote.append('<div class="alert alert--loading">Sending...</div>');
     },
     success: function(data) {
       $getQuote.find('.alert--loading').hide();
       $getQuote.find('button[type=submit]').prop('disabled', true);
       $getQuote.append('<div class="alert alert--success">Thank you, we look forward to talking!</div>');
     },
     error: function(err) {
       $getQuote.find('.alert--loading').hide();
       $getQuote.append('<div class="alert alert--error">Oops, there was an error. Try again?</div>');
     }
   });
  });

  var $webContact = $('#contact');
  $webContact.submit(function(e) {
    e.preventDefault();
    $.ajax({
     url: 'https://formspree.io/sales@eventnetusa.com',
     method: 'POST',
     data: $(this).serialize(),
     dataType: 'json',
     beforeSend: function() {
       $webContact.append('<div class="alert alert--loading">Sending...</div>');
     },
     success: function(data) {
       $webContact.find('.alert--loading').hide();
       $webContact.find('button[type=submit]').prop('disabled', true);
       $webContact.append('<div class="alert alert--success">Thank you, we\'ll get back to you right away.</div>');
     },
     error: function(err) {
       $webContact.find('.alert--loading').hide();
       $webContact.append('<div class="alert alert--error">Oops, there was an error. Try again?</div>');
     }
   });
  });



})();