<!DOCTYPE html>

<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Food Express</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ"
        crossorigin="anonymous">
    <link rel="stylesheet" href="styles/styles.css">
</head>

<body class="container container--review">
<nav class="navbar">
        <div class="navbar__navtitle">Food Express</div>

        <div class="navbar__rightnav">

            <a href="index.php">
                <div class="navbar__location navbar--btn">
                    <i class="fas fa-thumbtack fa-2x"></i>
                    Location
                </div>
            </a>

            <a href="menu.php">
                <div class="navbar__menu navbar--btn">
                    <i class="fas fa-utensils fa-2x"></i>
                    Menu
                </div>
            </a>

            <a href="review.php">
                <div class="navbar__review navbar--active navbar--btn">
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

    <section class="revieworder">
        <h1>Review your Order</h1>
        <div class="orderdetails">
            <div class="userdetails">
                <h1 class="userdetails__h1">Please Enter details below to complete your order</h1>
                <input type="text" class="userdetails__firstname t" placeholder="First name">
                <input type="text" class="userdetails__lastname t" placeholder="Last name">
                <input type="text" class="userdetails__email t" placeholder="Email">
                <input type="text" class="userdetails__mobilenumber t" placeholder="Mobile Number">
            </div>
            <div class="useraddresss">
                <h1 class="useraddresss__h1">Your Delivery Address</h1>
                <select name="" id="">
                    <option value="">home</option>
                    <option value="">home</option>
                </select>
                <input type="text" class="useraddresss__house t" placeholder="flat/House No.">
                <input type="text" class="useraddresss__street t" placeholder="Street Name">
                <p>Bendoor, Mangalore</p>
            </div>
            <div class="placeorder">
                <h1 class="placeorder__h1">Confirm Order</h1>
                <h4 class="placeorder__h4">netprice
                </h4>
                <div class="placeorder__amount">0.00</div>

                <h4>GST
                </h4>
                <div class="placeorder__amount">0.00</div>

                <h2>Grand Total
                </h2>
                <div class="placeorder__amount">0.00</div>



                <button class="placeorder__btn">PLACE ORDER</button>
            </div>
        </div>
    </section>
    <footer class="footer">footer</footer>

    <script src=""></script>
</body>

</html>