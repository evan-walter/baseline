const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { KEY } = require('../../config');
const User = require('../../models/User');

module.exports = {
  Mutation: {
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {
      // TODOS
      // Validate user data
      // Ensure user doesn't already exits
      // Hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      const res = await newUser.save();

      const token = jwt.sign({
        id: res.id,
        email: res.email,
        username: res.username,
      }, KEY, { expiresIn: '1h'});

      return {
        ...res._doc,
        id: res._id,
        token
      }
    },
  },
};
