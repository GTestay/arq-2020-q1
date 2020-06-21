const app = require('./src/app');
const logger = require('./conf/logger');

app.listen(4000, () => {
  logger.info('Server inicializado en puerto 4000');
});