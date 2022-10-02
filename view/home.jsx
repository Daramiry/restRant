const React = require ('react')
const Def = require ('./default')

function home (){
    return (
        <Def>
            <main>
                <h1>America's Secret Cuisines</h1>
                <div>
                    <img src="/images/eat.jpg" alt="man surrounded by water" width="50%"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@shawnanggg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">shawnanggg</a> on <a href="https://unsplash.com/s/photos/restaurant?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                     <button className="btn-primary">Secret Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home