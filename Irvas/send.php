<?php

    $name = $_GET['name'];
    $phone = $_GET['phone'];

    $name = htmlspecialchars($name);
    $phone = htmlspecialchars($phone);

    $name = urldecode($name);
    $phone = urldecode($phone);

    $name = trim($name);
    $phone = trim($phone);

    mail("regina-golik-mail@yandex.ru", "От ИРВАС", "Имя: ".$name.", Номер телефона: ".$phone, "From: regina-golik-from@yandex.ru \r\n");

?>