import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorLogger.error(error)
  process.exit(1)
})
let server: Server

async function bootsrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database is connected.')
    server = app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('fail to connect database', error)
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorLogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootsrap()

process.on('SIGTERM', () => {
  logger.info('SIGTERM is received.')
  if (server) {
    server.close()
  }
})
