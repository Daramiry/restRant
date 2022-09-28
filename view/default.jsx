
const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Tastful Food Spots</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Places</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
                <hr/>
                <footer class="mt-3 text-center text-black">
                    <a class="btn btn-primary btn-floating m-1"  href="https://www.facebook.com/SmartMoneySensei" role="button"><i class="bi bi-facebook"></i></a>
                    <a class="btn btn-danger btn-floating m-1"  href="https://www.instagram.com/smartmoneysenseii/" role="button"><i class="bi bi-instagram"></i></a>
                    <a class="btn btn-secondary btn-floating m-1"  href="https://github.com/SmartMoneySensei" role="button"><i class="bi bi-github"></i></a>
                    <a class="btn btn-info btn-floating m-1"  href="https://www.linkedin.com/in/kasean-cobbs-walton-9a7567243/" role="button"><i class="bi bi-linkedin"></i></a>  
                    <div class="text-center p-3">
                        © 2022 Copyright:
                        <a class="text-black" href="/">Tasteful Food Spots</a>
                    </div>
                </footer>
            </body>
        </html>
    )
  }
  

module.exports = Def