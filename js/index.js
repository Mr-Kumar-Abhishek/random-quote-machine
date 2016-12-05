 $(document).ready(function() {
	get_quote();
	$('#get_quote').click(get_quote);
 });

function get_quote(){
    $.getJSON("http://quotes.stormconsultancy.co.uk/random.json?callback=?",function(data) {
      $("#quote").text(data.quote);
      $("#author").html(data.author);
      $("#tweet_this").attr('href', 'http://www.twitter.com/intent/tweet?text=' + data.quote + ' -- ' + data.author); 
     });
}
