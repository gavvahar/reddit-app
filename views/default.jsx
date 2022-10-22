const React = require('react')
function Def(html){
    return(
        <html>
            <head>
                <title>Home Page</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>
				<link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Post</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Post</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def