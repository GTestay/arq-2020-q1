var app = require('./src/app');
const logger = require('simple-node-logger').createSimpleLogger('project.log');

app.listen(4000, () => {
  logger.info('Server inicializado en puerto 4000');
});