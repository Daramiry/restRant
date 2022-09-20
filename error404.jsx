const React = require('react')
const Def = require('./default')

function error404() {
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <P> Oops, sorry, we can't find this page!</P>
        </main>
    </Def>
}


module.exports = error404