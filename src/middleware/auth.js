const jwt = require("jsonwebtoken")

// Authentication
// - Add an authorisation implementation for the JWT token that validates the token before every protected endpoint is called. If the validation fails, return a suitable error message with a corresponding HTTP status code
// - Protected routes are create a blog, edit a blog, get the list of blogs, delete a blog(s)
// - Set the token, once validated, in the request - `x-api-key`
// - Use a middleware for authentication purpose.

const authetication = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        if (!token) {
            res.status(403).send({ msg: "no token present" })
        }
        let decodedToken = jwt.verify(token, "kickstarter", function (err, decodedToken) {
            if (err) {
                res.status(400).send({ msg: "token is not valid" })
            }
            next()
        })
        

    } catch (error) {
        res.status(500).send({ status: false })
    }
}

// Authorisation
// - Make sure that only the owner of the blogs is able to edit or delete the blog.
// - In case of unauthorized access return an appropirate error message.
const authorisation = async function (req, res, next) {
    try {
        let token = req.headers["x-api-key"]
        let decodedToken = jwt.verify(token, "kickstarter")
        // let userModified=req.params.authorId         
        if (decodedToken.authorId == req.body.authorId) {
            res.status(201).send({ msg: "updated" })
            next()
        }
    } catch (error) {
        res.status(500).send({ msg: "error" })
    }
}


module.exports.authetication = authetication;
module.exports.authorisation = authorisation