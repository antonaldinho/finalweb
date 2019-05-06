const mongoose = require('mongoose')

var connectionURL = 'mongodb+srv://antonio:lmao@cluster0-buyml.azure.mongodb.net/test?retryWrites=true'

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
