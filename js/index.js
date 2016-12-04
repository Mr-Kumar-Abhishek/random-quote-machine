 $(document).ready(function() {
     $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?",function(data) {
      $("#quote").text(data.quote);
      $("#author").html(data.author);
      $("#tweet_this").attr('href', 'http://www.twitter.com/intent/tweet?text=' + data.quote + ' -- ' + data.author); 
     });
 });

$("#get_quote").click(function(){
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?",function(data) {
      $("#quote").text(data.quote);
      $("#author").html(data.author);
      $("#tweet_this").attr('href', 'http://www.twitter.com/intent/tweet?text=' + data.quote + ' -- ' + data.author); 
     });
});
