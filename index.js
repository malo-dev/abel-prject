const app = require('express')()
const file = require('fs')
app.get('/', (req,res) => {
	// const resf = file.readFileSync(__dirname + '/server/index.html')
	res.sendFile(__dirname + '/index.html')
})
app.listen(8000, () => {
	console.log("server is running")
})