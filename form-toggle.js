
$(document).ready(function()
	{	
		$(".form-link").click(function()
		 {
		 	event.preventDefault();
		 	//$( "a#que " ).css( "text-decoration","underline" );
		 	$(this).toggleClass("open");
		 	
			$( ".form" ).slideToggle( "slow" );

	});
});