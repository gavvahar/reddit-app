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
            <div className="postForm">
            <h1>Add a New Post</h1>
            {message}
            <form method="POST" action={`/places`}>
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input className="form-control" id="title" name="title" required />
                </div>
              
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input className="form-control" id="description" name="description" />
                </div>
                  <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                <div className="form-group col-sm-4">
                    <label htmlFor="founded">Founded Year</label>
                    <input 
                        type="number"
                        className="form-control"
                        id="founded"
                        name="founded" 
                        value={new Date().getFullYear()} />
                    </div>
                <input className="btn btn-primary" type="submit" value="Add Post" />
            </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = new_form
