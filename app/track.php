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
                <div class="navbar__review  navbar--btn">
                    <i class="fas fa-shopping-cart fa-2x"></i>
                    Review
                </div>
            </a>

            <a href="track.php">
                <div class="navbar__track navbar--active navbar--btn">
                    <i class="fas fa-box fa-2x"></i>
                    Track
                </div>
            </a>

        </div>

    </nav>

 <section class="track">
        <div class="tracker">
            <ul class="progressbar">
                <li class="active">Order Received</li>
                <li class="active">Prepared</li>
                <li>Packed</li>
                <li>Dispatched</li>
            </ul>
        </div>
    </section>

    <section class="ordersummary">
        <div class="summary">
            <div class="summary__header">
                <h4>YOUR ORDER SUMMARY 2 ITEMS(S)</h4>
            </div>
            <div class="summary__content">
                <div class="summary__item">
                    <h3>Items</h3>
                    <div class="itemss">
                        Cheesy
                    </div>
                    <div class="itemss">
                        Golden Corn
                    </div>
                </div>
                <div class="summary__quantity">
                    <h3>Quantity</h3>
                    <div class="quantity">
                        2
                    </div>
                    <div class="quantity">
                        2
                    </div>
                    <div class="netpricee">
                        Net Price
                    </div>
                    <div class="st">
                        Service Tax
                    </div>
                    <div class="vat">
                        VAT
                    </div>
                    <div class="gt">
                        Grand Total
                    </div>
                </div>
                <div class="summary__price">
                    <h3>Price</h3>
                    <div class="price">
                        178.00
                    </div>
                    <div class="price">
                        138.00
                    </div>
                    <div class="price">
                        316.00
                    </div>
                    <div class="price">
                        18.96
                    </div>
                    <div class="price">
                        39.50
                    </div>
                    <div class="price">
                        374.00
                    </div>
                </div>
            </div>
        </div>

        <div class="add">
            Print Order
        </div>
    </section>
    <footer class="footer">footer</footer>

    <script src=""></script>
</body>

</html>