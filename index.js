var qr = require('qr-image')
var express = require('express')

var app = express()

app.get('/', function (req,res) {
    res.send('Hallo Cloud9')
})

app.get('/qr/:qrstring', function (req, res) {
    console.log('app get with param', req.param)
    var code = qr.image(req.params.qrstring, { type: 'svg'})
    res.type('svg')
    code.pipe(res)
})

console.log('port',process.env.PORT)
console.log('IP',process.env.IP)

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0")
