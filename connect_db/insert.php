<?php

 include_once("./connect.php");

 $message = '';

 if($con){ 
   
  if( isset( $_POST['submit'] ) ){

    $name = $_POST['name'];
    $age = $_POST['age'];
    $phone = $_POST['phone'];

    $insert_sql = "INSERT INTO `user_table` (`name`, `age`, `phone`) VALUES ('$name','$age','$phone')";

    $run = mysqli_query($con, $insert_sql);

    if($run){
      $message = "Data Inserted";
    }else{
      $message = mysqli_error($con);
    }

  }else{
    $message = "Request from Url.";
  }
   
   
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>

  <h3> <?php  echo $message ?> </h3>
  <form action="" method="post">
    <input type="text" name="name" placeholder='Name'>
    <br>
    <input type="number" max="200" min="0" name="age" placeholder='Age'>
    <br>
    <input type="text" name="phone" placeholder='Phone'>
    <br>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>

</html>


<?php

 }else {
   echo "NOT OK";
 }

 mysqli_close($con);