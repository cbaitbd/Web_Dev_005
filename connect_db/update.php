<?php

  include_once("./connect.php");

  if(isset($_POST['submit'])){

    $id = $_POST['id'];
    $name = $_POST['name'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];

    $update_sql = "UPDATE `user_table` SET `name`='$name', `age`='$age',`phone`='$phone' WHERE `id`=$id";

    $run = mysqli_query($con, $update_sql);

    if($run){
      header("location: insert.php?msg=Update Success!!");

    }else{
      echo "Update Faild! <br>";
      echo "<a href='./insert.php'>Back to Home</a>";
    }

  }else{
    echo "Bad Request <br>";
    echo "<a href='./insert.php'>Back to Home</a>";
  }