
$(document).ready(function(){
	/* This will be executed after the DOM has been completely loaded. */
	
	$('nav a,footer a.up').click(function(e){
										  
		// once a link is been clicked, scroll the page to the link's hash target:
		
		$.scrollTo( this.hash || 0, 1500);
		e.preventDefault();
	});

});



