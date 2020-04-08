<?php
$data = array();
$conn = new mysqli("175.24.82.144","jiecheng","jiecheng1234","wechair",3306);
echo $conn->connect_error;

class User {
    public $id;
    public $name;
    public $intime;
    public $outtime;
}

$sql = "SELECT * FROM stu";
$result = $conn->query($sql);
if($result){
echo "success";
while ($row = mysqli_fetch_array($result,MYSQL_ASSOC)){
$user = new User();
$user->id = $row["id"];
$user->name = $row["name"];
$user->intime = $row["intime"];
$user->outtime= $row["outtime"];
$data[]=$user;
}
echo "<pre>";print_r($data);echo "<pre>";
}else{
echo "failure";
}

?>