<?php
  session_start();
  $data = isset($_COOKIE['name']);
  dateExist($data);
  if(isset($_POST['submit'])){
    $date = filter_input(INPUT_POST,'date',FILTER_SANITIZE_SPECIAL_CHARS);
    setcookie('name',$date);
    var_dump($date);
    datedif($date,$days,$hours,$min,$sec); 
    $location = 'Location: ' . htmlentities($_SERVER['REQUEST_URI']);
    header($location);
  }
  
  function dateExist($data){
    if(!$data){
      $date = date("Y/m/d");
      $days=0;
      $hours= 0;
      $min= 0;
      $sec= 0;
    }else {
      $date = $_COOKIE['name'];
      $date = strtotime($date);
      $date = date("Y/m/d",$date);
      $days=0;
      $hours= 0;
      $min= 0;
      $sec= 0;
      datedif($date,$days,$hours,$min,$sec);
      setcookie('name',$date);
    }
  }
  function datedif($date){
    $currentDate = date_create($date);
    $currentDate2 = date_create();
    $dateDifference = date_diff($currentDate2,$currentDate);
    global $days;$days = $dateDifference->format("%a");
    global $hours;$hours= $dateDifference->format("%h");
    global $min;$min= $dateDifference->format("%i");
    global $sec;$sec= $dateDifference->format("%s"); 
  }
  function dateValue($data){
    if(!$data){
      $date = date("Y-m-d");
      echo $date;
      
    }else {
      $date = $_COOKIE['name'];
      $date = strtotime($date);
      $date = date("Y-m-d",$date);
      echo $date;
    }
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->
  <link rel="stylesheet" href="css/style2.css">
  <link rel="stylesheet" href="css/dark.css" id="stylesheet">
  <!-- <link rel="stylesheet" href="css/light.css" media="(prefers-color-scheme: light)">
  <link rel="stylesheet" href="css/dark.css" media="(prefers-color-scheme: dark)"> -->
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" rel="stylesheet">
  <title>Frontend Mentor | Launch countdown numbersr</title>

</head>
<body>
  <div class="scheme-change-container">
    <div class="circle">

    </div>
  </div>
  <img src="images/bg-stars.svg" class="stars">
  <h1 class="header">We're launching soon</h1>
  <form action="" method="POST">
    <div class="inputs">
      <label for="date" class="label">Enter your wanted date</label>
      <input type="date" name="date" class="date" value="<?php dateValue($data)?>"min="<?php echo Date("Y-m-d")?>" max="2050-01-01">
    </div>
    <input type="submit" name="submit" value="SUBMIT" class="submit">
  </form>
  <div class="container">
    <div class="flip-clock flip days">
      <div class="numbers top"><?php echo $days?></div>
      <div class="numbers bottom"><?php echo $days?></div> 
      <div class="time">DAYS</div>
    </div>
    <div class="flip-clock flip hours">
      <div class="numbers top"><?php echo $hours?></div>
      <div class="numbers bottom"><?php echo $hours?></div>
      <div class="time">HOURS</div>
    </div>
    <div class="flip-clock flip minutes">
      <div class="numbers top"><?php echo $min?></div>
      <div class="numbers bottom"><?php echo $min?></div>
      <div class="time">MINUTES</div>
    </div>
    <div class="flip-clock flip seconds">
      <div class="numbers top"><?php echo $sec?></div>
      <div class="numbers bottom"><?php echo $sec?></div>
      <div class="time">SECONDS</div>
    </div>
  </div>
  <img class="mountain" >
  

  <!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> -->

  <script src="script.js"></script>
</body>
</html>