const authorModel = require("../model/authorModel");
const jwt = require("jsonwebtoken");

// Author APIs /authors
// - Create an author - atleast 5 authors
// - Create a author document from request body.
//   `Endpoint: BASE_URL/authors`

const authorCreate = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await authorModel.create(data);
    res.status(201).send({ status: true, msg: savedData });
  } catch (error) {
    res.status(404).send({ status: false, msg: "something is missing" });
  }
};

// Add authentication and authroisation feature

// ### POST /login
// - Allow an author to login with their email and password. On a successful login attempt return a JWT token contatining the authorId in response body like [this](#Successful-login-Response-structure)
// - If the credentials are incorrect return a suitable error message with a valid HTTP status code
const authorLogin = async function (req, res) {
  try {
    let email = req.body.email;
    let password = req.body.password;

    const login = await authorModel.findOne({
      email: email,
      password: password,
    });
    if (!login) {
      res.status(404).send({ msg: "user id or password is not correct" });
    } else {
      let token = jwt.sign(
        {
          authorId: login._id.toString(),
          email: login.email,
        },
        "kickstarter"
      );
      res.setHeader("x-api-key", token);
      res.status(201).send({ status: true, msg: token });
    }
  } catch (error) {
    res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports.authorCreate = authorCreate;
module.exports.authorLogin = authorLogin;
