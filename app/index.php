<!DOCTYPE html>

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="styles/styles.css">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
    crossorigin="anonymous">
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
  <script src="scripts/app.js"></script>

  <title>PHP Web App</title>
</head>

<body class="container container--location">
  <nav class="navbar">
    <div class="navbar__navtitle">Food Express</div>
    <div class="navbar__rightnav">

      <a href="index.php">
        <div class="navbar__location navbar--active navbar--btn">
          <i class="fas fa-thumbtack fa-2x"></i>
          Location
        </div>
      </a>
      <a href="menu.php">
        <div class="navbar__menu  navbar--btn">
          <i class="fas fa-utensils fa-2x"></i>
          Menu
        </div>
      </a>

      <a href="review.php">
        <div class="navbar__review navbar--btn">
          <i class="fas fa-shopping-cart fa-2x"></i>
          Review
        </div>
      </a>

      <a href="track.php">
        <div class="navbar__track navbar--btn">
          <i class="fas fa-box fa-2x"></i>
          Track
        </div>
      </a>

    </div>

  </nav>
  <header class="header">
    <div class="enclose">
      <form onsubmit="return validateForm()">
        <input name="name" id="name_input" list="addr_list" class="header__search-menu" placeholder="Enter Area / Locality" autofocus>
        <datalist id="addr_list">
        </datalist>
        <br>
        <input type="submit">
      </form>

    </div>
    <div class="header__search-btn">Search</div>

  </header>

  <section class="steps_section">
    <div class="steps">
      <div class="step">
        <img class="step__icon" src="img/gps.svg" alt="" srcset="">
        <h3 class="step__heading-3">1. Search</h3>
        <p class="step__text">Find restaurants that deliver to you by entering your address</p>
      </div>


      <div class="step">
        <img class="step__icon" src="img/kebab.svg" alt="" srcset="">
        <h3 class="step__heading-3">2. Choose</h3>
        <p class="step__text">Browse hundreds of menus to find the food you like</p>
      </div>

      <div class="step">
        <img class="step__icon" src="img/online-payment.svg" alt="" srcset="">
        <h3 class="step__heading-3">3. Pay</h3>
        <p class="step__text">Pay fast & secure online or on delivery</p>
      </div>

      <div class="step">
        <img class="step__icon" src="img/delivery.svg" alt="" srcset="">
        <h3 class="step__heading-3">4. Enjoy</h3>
        <p class="step__text">Food is prepared & delivered to your door
        </p>
      </div>
    </div>

  </section>
  <div class="cuisines">cuisines</div>
  <footer class="footer">footer</footer>


</body>


</html>