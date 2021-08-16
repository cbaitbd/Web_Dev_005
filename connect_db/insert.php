<?php

 include_once("./connect.php");

 $message = '';

 if( isset($_GET['msg']) ){
  $message = $_GET['msg'];
 }

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

  }
   
   
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>

  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h3> <?php  echo $message ?> </h3>
        <form action="" method="post">
          <input type="text" class="form-control mt-2" name="name" placeholder='Name'>

          <input type="number" class="form-control mt-2" max="200" min="0" name="age" placeholder='Age'>

          <input type="text" class="form-control mt-2" name="phone" placeholder='Phone'>

          <input type="submit" class="btn btn-success w-100 mt-2" name="submit" value="Submit">
        </form>

        <table class="table mt-5">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>

            <?php 
          
          $selectSql = "SELECT * FROM `user_table`";
          $run = mysqli_query($con, $selectSql);
          while ($user = mysqli_fetch_assoc($run)) {

?>
            <tr>
              <th scope="row"><?php echo $user['id'] ?></th>
              <td><?php echo $user['name'] ?></td>
              <td><?php echo $user['age'] ?></td>
              <td><?php echo $user['phone'] ?></td>
              <td>
                <a href="edit.php?id=<?php echo $user['id'] ?>" class="btn btn-sm btn-warning">Edit</a>
                <a href="delete.php?id=<?php echo $user['id'] ?>" class="btn btn-sm btn-danger ml-2">Delete</a>
              </td>
            </tr>
            <?php
            
          }
          
?>

          </tbody>
        </table>
      </div>
    </div>
  </div>

</body>

</html>


<?php

 }else {
   echo "NOT OK";
 }

 mysqli_close($con);