<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
//插入数据
$id =$_POST['id'];
$name =$_POST['name'];

$mysql = new mysqli("175.24.82.144","jiecheng","jiecheng1234","wechair",3306);
echo $mysql->connect_error;
$query = "insert into stu values($id,$name,now(),now())";
//$query = "insert into stu values(12345678910,'xm',now(),now())";
$result = $mysql->query($query);
if($result)
{
    echo "插入数据成功！数据插入行数为：";
    echo $mysql->affected_rows;
}
?>

