const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="name"><span class="required-field">*</span>Place Name</label>
                        <input className="form-control" id="name" name="name" value={data.place.name} required/>
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" value={data.place.pic} />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" value={data.place.city} />
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" value={data.place.state}/>
                    </div>
                    <div className="form-group col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="cuisines"><span class="required-field">*</span>Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" value={data.place.cuisines} required/>
                    </div>
                </div>
                <input className="btn btn-success" type="submit" value="Add Restaurant"/>
            </form>
          </main>
        </Def>
    )
}

module.exports = edit_form