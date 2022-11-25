 $(function() {
	get_quote();
	$('#new-quote').click(get_quote);
 });

function get_quote(){
    $.getJSON("https://programming-quotes-api.herokuapp.com/Quotes/random",function(data) {
      $("#text").text(data.en);
      $("#author").html(data.author);
      $("#tweet-quote").attr('href', 'http://www.twitter.com/intent/tweet?text=' + data.en + ' -- ' + data.author); 
     });
}
