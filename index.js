const express = require('express')
import userRouter from './src/route/user.mjs'
import productRouter from './src/route/product.mjs'

const app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/product', productRouter)
app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})