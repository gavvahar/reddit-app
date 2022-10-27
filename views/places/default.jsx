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
                    <div>
                    <form>
                        <h2>Search</h2>
                        <input type='text' placeholder='Search For a Post' />
                        <button>Submit</button>
                    </form>
                    </div>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/places">Posts</a>
                        </li>
                        <li>
                            <a href="/places/new">Add Post</a>
                        </li>
                    </ul>
                </nav>
                <div className="container">
        <form className="form" id="login">
            <h1 className="form__title">Login</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="Username or email" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" />
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit">Continue</button>
            <p className="form__text">
                <a href="#" className="form__link">Forgot your password?</a>
            </p>
            <p className="form__text">
                <a className="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
            </p>
        </form>
        <form className="form form--hidden" id="createAccount">
            <h1 className="form__title">Create Account</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" id="signupUsername" className="form__input" autofocus placeholder="Username" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="Email Address" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Password" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" className="form__input" autofocus placeholder="Confirm password" />
                <div className="form__input-error-message"></div>
            </div>
            <button className="form__button" type="submit">Continue</button>
            <p className="form__text">
                <a className="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
            </p>
        </form>
    </div>
                {html.children}
            </body>
        </html>
    )
}
module.exports = Def