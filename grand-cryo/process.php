<?php
// Get Data
// $department = strip_tags($_POST['department']);
// $country = strip_tags($_POST['country']);
// $title = strip_tags($_POST['title']);
$name = strip_tags($_POST['name']);
$email = strip_tags($_POST['email']);
$phone = strip_tags($_POST['phone']);
$message = strip_tags($_POST['message']);

// if ($department == 'Fashion & Design') {
// 	$to = 'taisiadesign@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// } elseif ($department == 'Sales & Retails') {
//     $to= 'sales@ladytais.com' . ', ';
// 	$to .= 'retails@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// } elseif ($department == 'Media & Marketing') {
//     $to = 'prmarketing@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// } elseif ($department == 'Shows & Events') {
//     $to = 'fashionhouse@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// } elseif ($department == 'Careers') {
//     $to = 'SEO@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// } elseif ($department == 'All Other Inquiries') {
//     $to = 'SEO@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// } elseif ($department == 'Not Selected') {
//     $to = 'taisiadesign@ladytais.com' . ', ';
// 	$to .= 'ntaistudio@gmail.com';
// }
$to = 'mail@grand-cryo-resort.ru';

// Send Message
mail( "$to", "Контактная форма grand-cryo-resort.ru",
"Имя: $name\nEmail: $email\nТелефон: $phone\nСообщение: $message\n",
"From: Форма <form@grand-cryo-resort.ru>" );
?>
