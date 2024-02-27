const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Welcome to Kubernetes session!'))
app.listen(3000, () => console.log('Server ready'))
