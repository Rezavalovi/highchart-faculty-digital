const { User, Data } = require("../models");
const { signToken } = require("../helpers/jwt");
const { comparePassword } = require("../helpers/bcrypt");

class Controller {
  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username) {
        throw {
          name: "BadRequest",
          message: "Username is required",
        };
      }
      if (!password) {
        throw {
          name: "BadRequest",
          message: "Password is required",
        };
      }
      const user = await User.findOne({
        where: {
          username: username,
        },
      });
      if (!user) {
        throw {
          name: "Unauthorized",
          message: "Invalid username/password",
        };
      }
      const isPasswordCorrect = comparePassword(password, user.password);
      if (!isPasswordCorrect) {
        throw {
          name: "Unauthorized",
          message: "Invalid username/password",
        };
      }
      const access_token = signToken({ id: user.id });
      console.log(access_token, "<<<<<<<");

      res.status(200).json({ access_token, id: user.id });
    } catch (error) {
    //   console.log(error);
      next(error)
    }
  }

  static async getAllData(req, res, next) {
    try {
      const data = await Data.findAll();
      res.status(200).json(data);
    } catch (error) {
    //   console.log(error);
      next(error)
    }
  }
}

module.exports = Controller;
