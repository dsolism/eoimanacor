<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$Nom_Sollicitant = $_POST['Nom_Sollicitant'];
$email_Sollicitant = $_POST['email_Sollicitant'];
$DNI_Sollicitant = $_POST['DNI_Sollicitant'];
$Obervacions_Sollicitant = $_POST['Obervacions_Sollicitant'];

//Validate first
/*if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}*/

$email_from = 'secretariaeoimanacor@gmail.com';//<== update the email address
$email_subject = "New Form submission";
$email_body = "You have received a new message from the user $Nom_Sollicitant.\n".
    "Here is the message:\n $DNI_Sollicitant".
    
$to = "secretariaeoimanacor@gmail.com";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $email_Sollicitant \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: https://www.eoimanacor.com/?page_id=5028&preview=true');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 