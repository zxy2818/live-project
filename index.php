
<?php
//插入数据

$id =$_POST['id'];
$name =$_POST['name'];

$mysql = new mysqli("175.24.82.144","jiecheng","jiecheng1234","wechair",3306);
echo $mysql->connect_error;
$query = "insert into stu values($id,$name,now(),now())";
//$query = "insert into stu values(888888,'888888',now(),now())";
$result = $mysql->query($query);
echo $mysql->affected_rows;

?>
