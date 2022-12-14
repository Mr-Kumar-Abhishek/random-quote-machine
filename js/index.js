 $(function() {
	get_quote();
	$('#new-quote').click(get_quote);
 });

function get_quote(){
    $.getJSON("https://api.themotivate365.com/stoic-quote",function(data) {
      $("#text").text(data.quote);
      $("#author").html(data.author);
      $("#tweet-quote").attr('href', 'http://www.twitter.com/intent/tweet?text=' + data.quote + ' -- ' + data.author); 
     });
}
