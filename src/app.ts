import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()

import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './app/middlewares/globalErrorHandlers'

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

//testing
app.get('/', (req: Request, res: Response) => {
  res.send('All routes are working.')
})

// global error handler
app.use(globalErrorHandler)

export default app
