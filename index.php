<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="public/favicon.png">

    <title>Firmy</title>

    <!-- Bootstrap core CSS -->
    <link href="public/css/bootstrap.css" rel="stylesheet">
    <link href="public/css/bootstrap-responsive.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="public/css/sticky-footer-navbar.css" rel="stylesheet">

  </head>

  <body>

    <!-- Wrap all page content here -->
    <div id="wrap">

      <!-- Fixed navbar -->

      <div class="navbar">
        <div class="navbar-inner">
        <div class="container">
          <a class="brand" href="#">Wyszukiwarka firm</a>
          <ul class="nav">
            <li class="active"><a href="/">Start</a></li>
          </ul>
          <form role="form"action="excel.php" method="post">
          <input type="hidden" name="table_data" value="" id="table-data" />
          <ul class="nav pull-right row-fluid" style="width: 77%;">
            <li class="span2">
              <div class="form-group">
                <div class="btn-group pull-right" id="number-of-searchs">
                  <button id="number-show" class="btn">1000</button>
                  <button class="btn dropdown-toggle" data-toggle="dropdown">
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a href="#">100</a></li>
                    <li class="active"><a href="#">1000</a></li>
                    <li><a href="#">10000</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="span3">
              <div class="form-group">
                <input class="form-control" name="what" autocomplete="off" id="what" placeholder="firma, produkt, usluga" type="text" data-provide="typeahead">
              </div>
            </li>
            <li class="span3">
              <div class="form-group">
                <input class="form-control" name="location" autocomplete="off" id="location" placeholder="województwo, miasto, ulica" type="text">
              </div>
            </li>
            <li class="span4">
              <div class="form-group">
                <button id="send" type="button" class="btn">Szukaj</button>
                <button id="save" type="submit" class="btn btn-primary pull-right">Zapisz</button>
              </div>
            </li>
          </ul>
          </form>
        </div>
        </div>
      </div>

      <!-- Begin page content -->
      <div class="container">
        <table id="results" class="table table-bordered">
          <thead>
            <tr>
              <th>#</th>
              <th>Nazwa</th>
              <th>Adres</th>
              <th>Telefon</th>
              <th>www</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>

      </div>
    </div>

    <div id="footer">
      <div class="container">
        <p class="text-muted credit">Copyright &copy; 2013 </p>
      </div>
    </div>


    <!-- JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script language="javascript" type="text/javascript" src="public/js/jquery-1.10.2.min.js"></script>
    <script language="javascript" type="text/javascript" src="public/js/bootstrap.min.js"></script>
    <script language="javascript" type="text/javascript" src="public/js/script.js"></script>
  </body>
</html>
