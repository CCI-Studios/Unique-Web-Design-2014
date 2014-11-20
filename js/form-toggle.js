
$(document).ready(function()
{	
	$(".form-link").click(function()
	 {
	 	event.preventDefault();
	 	$(this).toggleClass("open");
		$( ".form" ).slideToggle( "slow" );
	});
});