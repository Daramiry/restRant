const db = require('../models')

// To use await, we need an async function.
async function seed() {
    // Get the place, H-Thai-ML
    let place = await db.Commment.findOne({name:'H-Thai-ML'})

    let comment = await db.Commment.create({
        author: 'Famished Fran',
        rant: false,
        stars: 5.0,
        content: 'Ngl the food was surprisingly delicious.'
    }) 
        place.Comments.push(comment.id)
            await place.save()
            process.exit()
}

seed()