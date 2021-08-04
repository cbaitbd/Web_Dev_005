

<?php 

  // $arr = [1, 2, 3, 4];

  $assoc = [
    'name' => 'Mr. Abdul Goni',
    'age' => 50,
    'address' => "Baneswar, Rajshahi"
  ];

  $assoc['phone'] = 21556987441;

  // foreach ($assoc as $key => $value) {
  //   echo $key." : ".$value;
  //   echo "<br>";
  // }



  // print_r($assoc);
  // var_dump($arr);


  $arr = [10, 100, 2, 98, 41, 21, 500, 0, 6];
  $names = ['momin', 'arafat', 'rasel', 'maruf', 'shohel', 'imran', 'mustafiz', 'alomgir'];
  rsort($arr);
  rsort($names);

  krsort($assoc);

  print_r($assoc);
  


?>