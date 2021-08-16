<?php
 include_once("./connect.php");


if(isset($_GET['id'])){

  $id = $_GET['id'];
  $selectSql = "SELECT * FROM `user_table` WHERE `id`=$id";
  $run = mysqli_query($con, $selectSql);
  $user = mysqli_fetch_assoc($run);

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
        <h3> Edit User</h3>
        <form action="./update.php" method="post">
          <input type="hidden" name="id" value="<?php echo $_GET['id']?>">
          <input type="text" class="form-control mt-2" name="name" value="<?php echo $user['name'] ?>"
            placeholder='Name'>
          <input type="number" class="form-control mt-2" value="<?php echo $user['age'] ?>" max="200" min="0" name="age"
            placeholder='Age'>
          <input type="text" class="form-control mt-2" value="<?php echo $user['phone'] ?>" name="phone"
            placeholder='Phone'>
          <input type="submit" class="btn btn-success w-100 mt-2" name="submit" value="Update">
        </form>
      </div>
    </div>
  </div>

</body>

</html>

<?php

}else{
  header("location: insert.php");
}