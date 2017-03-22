(function() {

  var feed = new Instafeed({
    get: 'user',
    userId: 353224793,
    accessToken: '353224793.1677ed0.2b9078e2ba574b35bc312d7d95d304ca',
    sortBy: 'most-recent',
    limit: 10,
    resolution: 'low_resolution',
    template: '<div class="fl relative insta" style="width: 20%; padding-left: 4px; padding-right: 4px" ><span class="absolute pa2 raleway fw5 ttu" style="font-size: 12px; left: 15px; bottom: 15px; background-color: rgba(255,255,255,.7);"><i class="fa fa-heart brand" aria-hidden="true"></i> {{likes}}</span><a class="link dim" href="{{link}}" target="_blank"><img src="{{image}}"/></a></div>'
  });
  feed.run();


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