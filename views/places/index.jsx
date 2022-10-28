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
            <h1>Recent Question</h1>
            <div className='row'>
              {postsFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports = index
