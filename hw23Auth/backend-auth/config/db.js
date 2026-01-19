const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://plotnikov1988_db_user:Mila2018@alexp.sxgn258.mongodb.net/?appName=AlexP',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    )
    console.log('MongoDB connected')
  } catch (error) {
    console.error('Error connecting to MongoDB', error)
    process.exit(1)
  }
}

module.exports = connectDB
