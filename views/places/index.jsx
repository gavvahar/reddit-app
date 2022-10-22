const React = require('react')
const Def = require('./default')

function index (data) {
  let message = ''
    if(data.message)
    {
        message = (
            <h4 className='alert alert-danger'>{data.message}</h4>
        )
    }
  let placesFormatted = data.places.map((place) => {
    return (
      <div key="1" className='col-sm-6'>
        <h2 className='text-center'>
            <a href={`/places/${place.id}`}>
              {place.name}
            </a>
          </h2>
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img src={place.pic} alt={place.name} className='center' width="100%" height="50%"/>
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
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
            <h1>PLACES INDEX PAGE</h1>
            <div className='row'>
              {placesFormatted}
            </div>
        </main>
    </Def>
)
}

module.exports = index
