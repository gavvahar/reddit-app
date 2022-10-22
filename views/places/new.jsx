const React = require('react')
const Def = require('../default')

function new_form (data) {
    let message = ''
    if(data.message)
    {
        message = (
            <h4 className='alert alert-danger'>{data.message}</h4>
        )
    }
    return (
        <Def>
          <main>
            <h1>Add a Question</h1>
            {message}
            <form method="POST" action={`/places`}>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input className="form-control" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="city">Description</label>
                    <input className="form-control" id="city" name="city" />
                </div>
                <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
               
                <input className="btn btn-primary" type="submit" value="Add Place" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
