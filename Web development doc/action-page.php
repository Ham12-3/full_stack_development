<?php

  if (isset($_POST['submit'])){
     $name = $_POST['name'];
     $mailFrom = $_POST['mail'];
     $message = $_POST['message'];

     $email_from="adeyinka.olufodun@yahoo.co.uk";
     $email_Subject= "New Form Submission";
     $email_body="User Name: $name.\n".  
                 "User Email: $visitor_email.\n".
                 "User Message: $message.\n";


     $to="adeyinka.olufodun@outlook.com;
     $headers= 'From: $email_from  \r\n ";
     $headers .= "Reply-To: $visitor_email \r\n";
   
   mail($to, $email_subject, $email_body, $headers);
   header("Location:contact.html");
     
    
   }

   ?>