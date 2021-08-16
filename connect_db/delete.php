<?php

  include_once("./connect.php");

  if(isset($_GET['id'])){

    $id = $_GET['id'];
    $delete_sql = "DELETE FROM `user_table` WHERE `id`=$id";

    $run = mysqli_query($con, $delete_sql);

    if($run){
      header("location: insert.php?msg=Delete Success!!");
    }else{
      header("location: insert.php?msg=Delete Fail!!");
    }
  }else{
    header("location: insert.php?msg=Bad Request!!");
  }