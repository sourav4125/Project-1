const jwt = require("jsonwebtoken");
const blogModel = require("../model/blogModel");

// Authentication
// - Add an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, return a suitable error message with a corresponding HTTP status code
// - Protected routes are create a blog, edit a blog, get the list of blogs, delete a blog(s)
// - Set the token, once validated, in the request - `x-api-key`
// - Use a middleware for authentication purpose.

const authetication = async function (req, res, next) {
  try {
    let token = req.headers["x-api-key"];
    if (!token) {
      res.status(403).send({ msg: "no token present" });
    }
    let decodedToken = jwt.verify(
      token,
      "kickstarter",
      function (err, decodedToken) {
        if (err) {
          res.status(400).send({ msg: "token is not valid" });
        }else{
          req.decodedToken = decodedToken;
          next();
        }
       
      }
    );
  } catch (error) {
    res.status(500).send({ status: false });
  }
};

// Authorisation
// - Make sure that only the owner of the blogs is able to edit or delete the blog.
// - In case of unauthorized access return an appropirate error message.
const authorisation = async function (req, res, next) {
  try {
    const token = req.decodedToken;
    let blogId = req.params.blogId;
    let authorId = token.authorId;

    let Id = await blogModel.findOne({ _id: blogId });
    if (!Id) {
       res.status(404).send({ msg: "blogId does not match" });
    }
    let AuthorId = Id.authorId;

    if (authorId != AuthorId) {
       res.send({
        status: false,
        msg: "Unauthorised Person",
      });
    }
    next();
  } catch (error) {
    res.status(500).send({ status: false, Error: error.message });
  }
};




module.exports.authetication = authetication;
module.exports.authorisation = authorisation;
