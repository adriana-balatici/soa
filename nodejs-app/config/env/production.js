module.exports = {
    PORT: process.env.PORT || 5000,
    mongodb: {
        uri: 'mongodb+srv://adriana:asdasd@adrianacluster.selfr.mongodb.net/testdb?retryWrites=true&w=majority',
    },
    token: {
        secret: process.env.TOKEN_SECRET || 'Smecherasii'
    }
}
