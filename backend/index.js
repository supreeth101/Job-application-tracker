import express from 'express'
import mongoose from 'mongoose'
import bodyparser from 'body-parser'
import cors from 'cors'
import routes from './routes/AppRoutes'

const app = express()
const PORT = 4000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/applications',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(bodyparser.urlencoded({
  extended: true
}))

app.use(bodyparser.json())

app.use(cors())

routes(app)

app.get('/',(req,res) =>
  res.send('Hello')
)

app.listen(PORT, () =>
  console.log("Running")
)
