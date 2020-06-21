const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoMemoryServer = new MongoMemoryServer();
const mongooseOpts = { useNewUrlParser: true, useUnifiedTopology: true };

const setupTestDB = async () => {
  mongoose.connectTestDatabase = async () => {
    const uri = await mongoMemoryServer.getConnectionString();
    mongoose.connect(uri, mongooseOpts);
  };

  mongoose.clearTestDatabase = async () => {
    const collections = mongoose.connection.collections;

    for (const key in collections) {
      const collection = collections[key];
      await collection.deleteMany();
    }
  }

  mongoose.closeTestDatabase = async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoMemoryServer.stop();
  }
};

const setupDevDB = () => {
  mongoose.connect('mongodb://localhost:27017/dev', mongooseOpts);
}

if(process.env.NODE_ENV === 'test') {  
  setupTestDB();
} else {
  setupDevDB();
}

module.exports = mongoose;