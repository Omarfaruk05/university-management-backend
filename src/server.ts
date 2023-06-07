import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorLogger, logger } from './shared/logger'

async function bootsrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('database is connected.')
    app.listen(config.port, () => {
      logger.info(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    errorLogger.error('fail to connect database', error)
  }
}

bootsrap()
