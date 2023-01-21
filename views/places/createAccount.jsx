const React = require('react')
const user = require('../../models/user')
const Def = require('../default')
function createAccount(data) {
    return (
        <Def>
            <main>
                <form className="form " id="createAccount" method='POST' action='/api/signup' >
            <h1 className="form__title">Create Account</h1>
            <div className="form__message form__message--error"></div>
            <div className="form__input-group">
                <input type="text" id="name" className="form__input" autofocus placeholder="name" name="name"/>
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="text" className="form__input" autofocus placeholder="email" id="email" name="email" />
                <div className="form__input-error-message"></div>
            </div>
            <div className="form__input-group">
                <input type="password" id="password" name="password" className="form__input" autofocus placeholder="password" />
                <div className="form__input-error-message"></div>
            </div>
           
            <button className="form__button" type="submit">Continue</button>
            <p className="form__text">
                <a className="form__link" href="/createAccount" id="linkLogin">Already have an account? Sign in</a>
            </p>
        </form>
            </main>
        </Def>
    )
}

module.exports = createAccount