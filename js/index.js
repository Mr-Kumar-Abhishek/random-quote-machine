 $(document).ready(function() {
     $.getJSON("https://jsonp.afeld.me/?url=http%3A%2F%2Fquotes.stormconsultancy.co.uk%2Frandom.json",function(json) {
      $("#quote").text(json.quote);
      $("#author").html(json.author);
      $("#tweet_this").attr('href', 'http://www.twitter.com/intent/tweet?text=' + json.quote + ' -- ' + json.author); 
     });
 });

$("#get_quote").click(function(){
    $.getJSON("https://jsonp.afeld.me/?url=http%3A%2F%2Fquotes.stormconsultancy.co.uk%2Frandom.json",function(json) {
      $("#quote").text(json.quote);
      $("#author").html(json.author);
      $("#tweet_this").attr('href', 'http://www.twitter.com/intent/tweet?text=' + json.quote + ' -- ' + json.author); 
     });
});