<?php
include('php\db_connection.php');
$firstname=mysqli_real_escape_string($conn,$_POST['fname']);
$lastname=mysqli_real_escape_string($conn,$_POST['lname']);
$emailpost=mysqli_real_escape_string($conn,$_POST['email']);
$contactpost=filter_var($_POST['contact'],FILTER_VALIDATE_INT);
$locationpost=mysqli_real_escape_string($conn,$_POST['location']);
$messagepost=mysqli_real_escape_string($conn,$_POST['message']);

if($contactpost===false){
    echo 'Invalid contact value';
    exit;
}

$insert="INSERT INTO react (fname,lname,email,contact,location,message) VALUES ('$firstname','$lastname','$emailpost','$contactpost','$locationpost','$messagepost')";

if(mysqli_query($conn,$insert)){
    echo " Successfully data saved";

}
else{
    echo "ERROR";
}








?>