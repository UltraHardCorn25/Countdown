<?php
  $dateErr=$date='';
  session_start();
  $days=0;
  $hours= 0;
  $min= 0;
  $sec= 0;
  if(isset($_POST['submit'])){
    $date = filter_input(INPUT_POST,'date',FILTER_SANITIZE_SPECIAL_CHARS);
    $currentDate = date_create($date);
    $currentDate2 = date_create();
    $dateDifference = date_diff($currentDate2,$currentDate);
    $days= $dateDifference->format("%a");
    $hours= $dateDifference->format("%h");
    $min= $dateDifference->format("%i");
    $sec= $dateDifference->format("%s"); 
    
  }
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- displays site properly based on user's device -->
  <link rel="stylesheet" href="style.css">
  <link rel="icon" type="image/png" sizes="32x32" href="./images/favicon-32x32.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@700&display=swap" rel="stylesheet">
  <title>Frontend Mentor | Launch countdown numbersr</title>

</head>
<body>
  <img src="images/bg-stars.svg" class="stars">
  <h1 class="header">We're launching soon</h1>
  <form action="" method="POST">
    <div class="inputs">
      <label for="date" class="label">Enter your wanted date</label>
      <input type="date" name="date" class="date" value="<?php echo $date;?>"min="<?php echo Date("Y-m-d h:i:sa")?>" max="2040-01-01T00:00">
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
  <img src="images/pattern-hills.svg" class="mountain">
  

  <!-- <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> -->

  <script src="script.js"></script>
</body>
</html>