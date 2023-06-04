import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootsrap() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('database is connected.')
    app.listen(config.port, () => {
      console.log(`Application is listening on port ${config.port}`)
    })
  } catch (error) {
    console.log('fail to connect database', error)
  }
}

bootsrap()
