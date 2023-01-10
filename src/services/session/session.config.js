const getMongoconfig = () => {
    return {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

const getSessionConfig = () => {
    const MONGO_URI = process.env.mongo_URI || 'mongodb://localhost:27017';
    return {
        mongoUrl: MONGO_URI,
        ttl: 3600,
        mongoOptions: getMongoConfig()
    }
}

module.exports = {
    getMongoConfig,
    getStoreConfig
}