const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.post('/api', (req, res) => {
    res.send("你好, Vue")
})

app.listen(3333, console.log('服务器部署在本地3333端口上'))