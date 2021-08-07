<?php

if(isset($_POST['user_name'])){
  $name = $_POST['user_name'];

  if($name != ""){
    echo $name;
  }else{
    echo "Please Insert Your Name";
  }

}else{
  echo  "BAD Request!!";
}