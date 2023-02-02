const express = require('express');
const Models = require('./models');

if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const PORT = process.env.PORT || 3000

const app = express()

/*app.use(session({
    secret: process.env.SESSION_SECRET, //Colocar em variavel de ambiente
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 15*60*1000} //2*60*1000 = 2 minutos 30*60*1000 = 30 minutos
}))
*/
app.use('/', require('./routes/root.router'))

app.listen(PORT, () => console.log(`Node: Server running on port ${PORT}`))