const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += '⭐️'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border col-sm-4">
            <h3 className="rant">{c.rant ? 'RANT! 😡' : 'RAVE! 😻'}</h3>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
            <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
              <input type="submit" className="btn btn-danger" value="Delete Comment" />
            </form>
          </div>
        )
      })
    }
    return (
        <Def>
          <main>
          <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} width="90%"/>
                    <h3> Located in {data.place.city}, {data.place.state}</h3>
                </div>
                  <div className="col-sm-6">
                      <h1>{data.place.name}</h1>
                      <h2> Rating </h2>
                      {rating}
                      <br/>
                      <h2> Description</h2>
                      <h3>{data.place.showEstablished()}</h3>
                      <h4>Serving {data.place.cuisines}</h4>
                      <a href={`/places/${data.id}/edit`} className="btn btn-warning"><i class="bi bi-pencil-square"></i> Edit</a>  
                      <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                      <button type="submit" className="btn btn-danger"><i class="bi bi-trash-fill"></i> 
                          Delete
                      </button>
                      </form>
                </div>
          </div>
          <hr/>
                  <div>
                      <h2> Comments </h2>
                         <div className="d-flex align-content-start flex-wrap">
                          {comments}
                         </div>

                  </div>
            <hr />
            <h2>Got Your Own Rant or Rave?</h2>
            <form action={`/places/${data.place.id}/comment`} method="POST">
              <div className="row">
                <div className="form-group col-sm-12">
                  <label htmlFor="content"><strong>Content</strong></label>
                  <textarea id="content" name="content" className="form-control"></textarea>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="author"><strong>Author</strong></label>
                  <input id="author" name="author" className="form-control" />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="stars"><strong>Star Rating</strong></label>
                  <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
                </div>
                <div className="form-group col-sm-2">
                  <label htmlFor="rant"><strong>Rant?</strong></label>
                  <input type="checkbox" id="rant" name="rant" className="form-control" />
                </div>
              </div>
              <input type="submit" className="btn btn-success" value="Add Comment" />
            </form>
          </main>
        </Def>
    )
}

module.exports = show