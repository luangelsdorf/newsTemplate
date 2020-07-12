<!DOCTYPE html>
<html lang="pt">
<head>
    <link rel="stylesheet" href="https://getbootstrap.com/docs/4.1/assets/css/docs.min.css">
    <link rel="stylesheet" href="../css/bootstrap.css">
    <script src="../js/jquery.js"></script>
    <script src="../js/popper.js"></script>
    <script src="../js/bootstrap.js"></script>
    <script src="../js/main.js"></script>
    <meta charset="UTF-8">
    <title>Adm</title>
</head>
<header class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <a class="navbar-brand text-dark-2" href="#">
            <img alt="" class="rounded" src="../img/75px.png">
            <strong>Tabajara News</strong>
        </a>
        <button class="navbar-toggler" data-target="#navbarCollapse" data-toggle="collapse" type="button">
            <span class="navbar-toggler-icon    "></span>
            Categorias
        </button>

        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="col-md-12 navbar-nav justify-content-around nav-fill">
                <li class="nav-item">
                    <button class="btn btn-fluid btn-outline-danger btn-lg btn-block p-3" type="button">
                        <strong>Esportes</strong></button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-fluid btn-outline-warning btn-lg btn-block p-3" type="button">
                        <strong>Polícia</strong></button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-fluid btn-outline-primary btn-lg btn-block p-3" type="button">
                        <strong>Política</strong></button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-fluid btn-outline-secondary btn-lg btn-block p-3" type="button">
                        <strong>Clima</strong></button>
                </li>
                <li class="nav-item">
                    <button class="btn btn-fluid btn-outline-success btn-lg btn-block p-3" type="button">
                        <strong>Saúde</strong></button>
                </li>
            </ul>
        </div>

        <div class="custom-control custom-switch">
            <input type="checkbox" class="custom-control-input" id="darkMode" onclick="changeTheme()">
            <label class="custom-control-label text-dark" for="darkMode"></label>
        </div>

        <div class="btn-group-vertical col-md-12 col-sm-12 col-12 col-lg-auto col-xl-auto">
            <button class="btn m-1 btn-outline-dark" type="button"><strong>Assine</strong></button>
            <button class="btn m-1 btn-outline-dark" type="button"><strong>Login</strong></button>
        </div>
    </nav>
</header>
