<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language');
$mail->IsHTML(true);

// от кого
$mail->setFrom('fotoalbumkss@gmail.com ', 'Фото альбом'); 
// кому
$mail->addAddress('svetoskover@gmail.com');

// тема
$mail->Subject = 'Вот тема';

// тело письма
$body = '<h1>Вы оставили заявку</h1>';

if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>E-mail</strong> '.$_POST['email'].'</p>';
}

$body.='<p><strong>Телефон</strong> '.$_POST['phone'].'</p>';

if(trim(!empty($_POST['subject']))){
    $body.='<p><strong>Вариант</strong> '.$_POST['subject'].'</p>';
}
if(trim(!empty($_POST['questions']))){
    $body.='<p><strong>Вопрос</strong> '.$_POST['questions'].'</p>';
}

if (!$mail->send()){
    $massage = 'Ошибка';
} else {
    $massage = 'Данные отправлены';
}

$response = ['message' => $message];
header('Content-type: application/json');
echo json_encode($response);
?>