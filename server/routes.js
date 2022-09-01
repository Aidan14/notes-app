const router = require('express').Router()

router.get('/', (req, res) => {
    res.redirect('/notes')
})

const notesRouter = require('./controllers/notes.controller')
router.use('/notes', notesRouter)

router.use('/', (req, res) => {
    res.status(404).send('404')
})

module.exports = router