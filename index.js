const express = require('express')
const app = express()
app.get('/', (req,res) => {
	// const resf = file.readFileSync(__dirname + '/server/index.html')
	res.sendFile(__dirname + '/NiceAdmin/index.html')
})
app.use('/',express.static(__dirname + '/NiceAdmin'))
app.listen(8000, () => {
	console.log("server is running")
})