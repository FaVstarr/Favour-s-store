<?php

$conn = mysqli_connect("localhost", "root", "" , "favour-s store");
if($conn){
    echo "DB connected successfully";
}
else{
    echo " Failed to connect";
}

?>