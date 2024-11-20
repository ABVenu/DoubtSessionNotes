var jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  // here i should get the token
  // then that token should be verified
  // if token verfied, then allowed to next route,
  // else send res as UnAuthorised

  // from where token is coming??
  // genrally it is passed through headers
  let token = req.headers.authorization.split(" ")[1];
  
  try {
    let token = req.headers.authorization.split(" ")[1];
    //console.log(token);
    var decoded = jwt.verify(token, "shhhhh");
    //console.log(decoded)
    if (decoded) {
      req.userId = decoded.userId;
      next();
    }
  } catch (err) {
    res.status(401).json({ msg: "UnAuthorized" });
  }
  // res.send("dummy res from auth.js")
};

module.exports = authMiddleware;
