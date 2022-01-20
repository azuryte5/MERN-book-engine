const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      const userData = await User.findOne({ _id: user._id }).select(
        "-__v, -password"
      );
      return userData;

      throw new AuthenticationError("Not logged in!");
    },
    users: async () => {
      return User.find();
    },
  },
};

module.exports = resolvers;
