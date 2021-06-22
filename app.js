require("babel-register");

const express = require('express');
const morgan = require('morgan');
const func = require('functions')
const app = express();
const port = 3000

const members = [
    {
        id: 1,
        name:'kevin',
    },
    {
        id: 2,
        name:'marko',
    },
    {
        id: 3,
        name:'eureka',
    },
    {
        id: 4,
        name:'jhon',
    },
]




app.use(morgan('dev'))

app.get('/api/v1/members/:id', (req, res) => {
    res.json(func.success(members[req.params.id-1].name))
})

app.get('/api/v1/members', (req, res) => {
    if (req.query != undefined) {
        res.json(func.success(members.slice(0,req.query.max)))
    } else {
        res.json(func.success(members))
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

