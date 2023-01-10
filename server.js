const app = require('./app');

const PORT = process.env.SERVER_PORT || 2345;

app.listen(PORT, () => console.info(`Server up and running on port ${SERVER_PORT}`));
