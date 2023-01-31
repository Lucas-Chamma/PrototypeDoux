const express = require('express')
const router = express.Router()

router.get('^/$|/index(.html)?', (req, res) => {
    let data = {
        title:'Home',
        mensagens: ""
    }
    res.send('Oi')
})

module.exports = router