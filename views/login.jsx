const React = require('react')
const Def = require('./default')

function login() {
    return (
        <Def>
            <main>
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
            </main>
        </Def>
    )
}