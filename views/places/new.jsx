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
            <h1>Add a New Post</h1>
            {message}
            <form method="POST" action={`/places`} className="postForm">
                <div className="form-group">
                    <label htmlFor="name">Title</label>
                    <input className="form-control" id="title" name="title" required />
                </div>
              
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description" rows="3"></textarea>
                </div>
                  <div className="form-group">
                    <label htmlFor="pic">Place Picture</label>
                    <input className="form-control" id="pic" name="pic" />
                </div>
                
                <input className="btn btn-primary" type="submit" value="Add Post" />
            </form>
          </main>
        </Def>
    )
}

module.exports = new_form
