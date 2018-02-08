const express = require('express')

const app = express()
// tell the app to look for static files in these directories
app.use(express.static('./server/static/'))
app.use(express.static('./client/dist/'))

// start the server

app.get('*', (req, res) => {
  res.render('./index.html')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})