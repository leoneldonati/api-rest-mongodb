import express from 'express'
import cors from 'cors'
import { router } from './routes/Posts.js'

// express initialization
export const app = express()


// middlewares
app.use(express.json())
app.use(cors())
app.use(router)