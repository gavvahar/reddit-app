const React = require('react')
const Def = require('./default')

function index (data) {
  let postsFormatted = data.posts.map((post) => {
    return (
      <div key="1" className='col-sm-6'>
        <h2 className='text-center'>
            <a href={`/places/${post.id}`}>
              {post.title}
            </a>
          </h2>
        
        <img src={post.pic} alt={post.title} className='center' width="100%" height="50%"/>
       
      </div>
    )
  })
  return (
    <Def>
        <main>
            {/* <h1>Recent Question</h1> */}
            <form method="POST" action={`/places`} className="postForm2">
                <div className="form-group">
                    {/* <label htmlFor="name">Ask a question</label> */}
                    <input className="form-control" id="title" name="title" required value="What do you want to ask or Share?" />
                </div>
              
                                             
                <input className="btn btn-primary" type="submit" value="Ask/Post" />
            </form>
            <div className='row'>
              {postsFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports = index
