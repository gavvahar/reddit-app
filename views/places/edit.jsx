const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
          </main>
          <form method="POST" action={`/places/${data.post.id}?_method=PUT` } className="postForm">
  <div className="row">
      <div className="form-group col-sm-6">
          <label htmlFor="title">Title</label>
          <input
          className='form-control'
          id="title"
          name='title'
          value={data.post.title}
          required/>
      </div>
      <div className="form-group col-sm-6">
          <label htmlFor="pic">Place Picture</label>
          <input
          className='form-control'
          id="pic"
          name='pic'
          value={data.post.pic}
          />
      </div>
       <div className="form-group col-sm-6">
          <label htmlFor="description">Description</label>
          <input
          className='form-control'
          id="description"
          name='description'
          value={data.post.description}
          />
      </div> 
         
   
  </div>
  <input className="btn btn-primary" type="submit" value="Add Place" />
</form>
        </Def>
    )
}

module.exports = edit_form