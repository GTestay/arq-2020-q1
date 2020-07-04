const simpleNodeLogger = require('simple-node-logger');

const updateMethods = ['POST', 'PATCH', 'PUT'];
const eventTypes = {
  request: '[REQUEST]',
  server: '[SERVER]',
  app: '[APP]'
}

const logger = simpleNodeLogger.createSimpleLogger({ logFilePath: 'project.log', timestampFormat: 'YYYY-MM-DD - HH:mm:ss.SSS |' });

logger.serverInfo = (message) => logger.info(`${eventTypes.server} ${message}`);
logger.requestInfo = (message) => logger.info(`${eventTypes.request} ${message}`);
logger.appInfo = (message) => logger.info(`${eventTypes.app} ${message}`);
logger.appWarn = (message) => logger.warn(`${eventTypes.app} ${message}`);

const requestMiddleware = (req, res, next) => {
  const shouldLogBody = updateMethods.includes(req.method);

  logger.requestInfo(`${req.method} ${req.originalUrl} ${shouldLogBody ? JSON.stringify(req.body) : ''}`);
  next();
}

module.exports = { logger, requestMiddleware };