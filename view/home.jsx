
const React = require ('react')
const Def = require ('./default')

function home (){
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div>
                    <img src="/images/Free.jpg" alt="man surrounded by water" width="50%"/>
                    <div>
                    Photo by <a href="https://unsplash.com/@coopery?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mohamed Nohassi</a> on <a href="https://unsplash.com/s/photos/free?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                     <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home