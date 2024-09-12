const express = require("express")
// console.log(express)
const app = express()
const port = 3000
const router = require('./router/router')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true })) // ini wajib dipakai ketika ingin menerima inputan 
app.use(express.static(__dirname + '/public'));
app.use('/', router)



app.listen(port, () => {
    console.log(`applikasi ini berjalan diport ${port}`)
})