
$(document).ready(function() {


	$('form').submit(function(event) {

		$('.form-group').removeClass('has-error'); // remove the error class
		$('.help-block').remove(); // remove the error text

	
		if ($('#check').is(":checked")) 
		{
			var check=$('#check').val();
		}

		var formData = {
			'name' 					: $('input[name=name]').val(),
			'phone' 				: $('input[name=phone]').val(),
			'check' 				: check,
			'email' 				: $('input[name=email]').val(),
			'msg' 					: $('#msg').val()
		};

		$.ajax({
			type 		: 'POST', 
			url 		: 'form.php',
			data 		: formData, 
			dataType 	: 'json',
			encode 		: true
		})
			// using the done promise callback
			.done(function(data) 
			{
				// log data to the console so we can see
				console.log(data); 
				if ( ! data.success) {
					
					// handle errors for name ---------------
					if (data.errors.name) {
						$('#name').addClass('has-error'); // add the error class to show red input
						$('#name').after('<p class="help-block">' + data.errors.name + '</p>'); // add the actual error message under our input
					}

					// handle errors for email ---------------
					if (data.errors.msg) {
						$('#msg').addClass('has-error'); // add the error class to show red input
						$('#msg').after('<p class="help-block">' + data.errors.msg + '</p>'); // add the actual error message under our input
					}

					

				} else {

					// ALL GOOD! just show the success message!
					$('form').css('display','none');
					$('.form').append('<div class="alert alert-success">' + data.message + '</div>');

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page

				}
				// here we will handle errors and validation messages
				
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

});
