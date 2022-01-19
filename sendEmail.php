<?php

$postData = file_get_contents("php://input");
if(isset($postData) && !empty($postData)) {
  $data = json_decode($postData);
  if(isset($data->name) && isset($data->email) && isset($data->subject) && isset($data->message)
    && !empty($data->name) && !empty($data->email) && !empty($data->subject) && !empty($data->message)) {
    $to = 'anthony35cordon@gmail.com';
    $subject = $data->subject;
    $message = $data->message;
    //attention Email != name
    $headers = array(
      'From' => $data->email,
      'Reply-To' => $data->email,
      'X-Mailer' => 'PHP/' . phpversion()
    );

    echo json_encode(mail($to, $subject, $message, $headers));
  }else{
    echo json_encode(false);
  }
}else{
echo json_encode(false);
}
  ?>
