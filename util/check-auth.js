const { AuthenticationError } = require('apollo-server');
const jwt = require('jsonwebtoken');
const { KEY } = require('../config');

module.exports = (context) => {
  const authHeader = context.req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split('Bearer ')[1];
    if (token) {
      try {
        const user = jwt.verify(token, KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid or expired token');
      }
    }
    throw new Error("Authentication must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};
