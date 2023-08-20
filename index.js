const express = require('express')
const app = express()
const port = 2070
const mysql = require('mysql2');
const router = require('./routers/router');
const cors = require('cors') 


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })