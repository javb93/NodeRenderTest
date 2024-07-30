
const express = require('express')
const app = express()
const port =process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/test', (req, res) => {
  res.send('NOW I ANSWER THIS OTHER THING!')
})
app.post('/user', (req, res) => {
  res.send('Got a POST request with this body: ' + JSON.stringify(req.body))
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
