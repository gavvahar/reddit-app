const React = require('react')
const Def = require('./default')

function createAccount(){
    return (
        <Def>
            <form className="form form--hidden" id="createAccount" method="POST" action='/api/signup'>
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
        </Def>
    )
}

module.exports = createAccount