<? 
$phone = $_POST['tel'];


$mail_message = '
<html>
<head>
    <title>Заявка</title>
</head>
<body>
    <h2>Заявка с сайта</h2>
    <ul>
        
        <li>Телефон: ' .$phone. '</li>
      
    </ul>
</body>
</html>';

$headers = "From: Администратор сайта \r\n".
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('dev325@yandex.ru', 'Заказ', $mail_message, $headers);

?>