<?php
// By GET
$name= $_REQUEST["name"];
$student_id= $_REQUEST["student_id"];
$mobile_no= $_REQUEST["mobile_no"];
$email= $_REQUEST["email"];
$city= $_REQUEST["city"];
$state= $_REQUEST["state"];
$rating= $_REQUEST["rating"];
$comments= $_REQUEST["comments"];
$password = $_REQUEST["password"];
// By POST
// $student_id = $_POST["student_id"];
// $password = $_POST["password"];

// By REQUEST++
// $student_id = $_REQUEST["student_id"];
// $password = $_REQUEST["password"];


echo "name: ".$name ;

echo "<br />";
echo "student_id: ".$student_id ;

echo "<br />";
echo "mobile_no: ".$mobile_no ;

echo "<br />";
echo "email: ".$email ;

echo "<br />";
echo "city: ".$city ;

echo "<br />";
echo "state: ".$state ;

echo "<br />";
echo "rating: ".$rating ;

echo "<br />";
echo "comments: ".$comments ;

echo "<br />";

echo "password: ".$password ;
?>