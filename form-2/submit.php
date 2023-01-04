<?php

// For Name
if(empty($_REQUEST["name"])){
    echo "PLEASE FILL YOUR NAME";
    exit();
}else if (strlen($_REQUEST["name"]) <=2 || strlen($_REQUEST["name"]) > 20) {
    echo "NAME SHOULD NOT BE < 2 & SHOULD NOT BE > 20 char long";
    exit();
}
if(empty($_REQUEST["student_id"])){
    echo "PLEASE FILL YOUR STUDENT ID";
    exit();
}else if (strlen($_REQUEST["student_id"]) == 10) {
    echo "EQ 10";
    exit();
}

if(empty($_REQUEST["mobile_no"])){
    echo "PLEASE FILL YOUR MOBILE NO.";
    exit();
}else if (strlen($_REQUEST["mobile_no"]) == 10) {
    echo "M EQ 10";
    exit();
}

if(empty($_REQUEST["email"])){
    echo "PLEASE FILL YOUR EMAIL";
    exit();
}

if(empty($_REQUEST["city"])){
    echo "PLEASE FILL YOUR CITY";
    exit();
}else if (strlen($_REQUEST["city"]) > 20) {
    echo "city SHOULD NOT BE < 2 & SHOULD NOT BE > 20 char long";
    exit();
}

if(empty($_REQUEST["state"])){
    echo "PLEASE FILL YOUR STATE";
    exit();
}else if (strlen($_REQUEST["state"]) <=1 || strlen($_REQUEST["state"]) > 20) {
    echo "state SHOULD NOT BE < 1 & SHOULD NOT BE > 20 char long";
    exit();
}

if(empty($_REQUEST["rating"])){
    echo "PLEASE FILL YOUR RATING";
    exit();
}else if ($_REQUEST["rating"] < 6) {
    echo "EQ 1";
    exit();
}

if(empty($_REQUEST["comments"])){
    echo "PLEASE FILL YOUR COMMENTS";
    exit();
}else if (strlen($_REQUEST["comments"]) <=2 || strlen($_REQUEST["comments"]) > 20) {
    echo "comments SHOULD NOT BE < 2 & SHOULD NOT BE > 20 char long";
    exit();
}

if(empty($_REQUEST["password"])){
    echo "PLEASE FILL YOUR PASSWORD";
    exit();
}else if (strlen($_REQUEST["password"]) <=2 || strlen($_REQUEST["password"]) > 20) {
    echo "password SHOULD NOT BE < 2 & SHOULD NOT BE > 20 char long";
    exit();
}




$name= $_REQUEST["name"];
$student_id= $_REQUEST["student_id"];
$mobile_no= $_REQUEST["mobile_no"];
$email= $_REQUEST["email"];
$city= $_REQUEST["city"];
$state= $_REQUEST["state"];
$rating= $_REQUEST["rating"];
$comments= $_REQUEST["comments"];
$password = $_REQUEST["password"];


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