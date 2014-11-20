<?php
	
$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';

	if (empty($_POST['msg']))
		$errors['msg'] = 'Message is required.';


	if ( ! empty($errors)) 
	{
		$data['success'] = false;
		$data['errors']  = $errors;
	} 
	else 
	{
	$to = "lbujaki@ccistudios.com";
	$subject="Website Inquiry";
	$name = $_POST['name'];
	$phone = $_POST['phone'];
	$msg=  $_POST['msg'];
	$email= $_POST['email'];
	$check= $_POST['check'];

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= " X-Priority: 2\nX-MSmail-Priority: high" . "\r\n";
	$headers .= "From: UWD<info@uniquewebdesigncanada.com>" . "\r\n" .
	"Reply-To: lbujaki@ccistudios.com" . "\r\n" .
	"X-Mailer: PHP/" . phpversion() ;
	$message= 'Name:  '.$name ."\r\n" .'Email:  '.$email ."\r\n" .'Phone:  '.$phone ."\r\n" .'Message:  '.$msg ."\r\n" .'Stay connected:  '.$check ;
	mail($to,$subject,$message,$headers);

	$data['success'] = true; 
	$data['message'] = "Thank You<br>We appreciate your inquiry and will be in touch shortly!";
	
	}

	echo json_encode($data);	

?>
