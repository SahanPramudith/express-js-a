const express = require('express')
const app = express()
const port = 3000
import productRouter from './src/route/product.mjs'
import userRouter from './src/route/user.mjs'

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/product', productRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})