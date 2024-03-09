
const jwt = require("jsonwebtoken");
const jwt_Secret = 'secret';

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader ||!authHeader) {
    return res.status(401).json({ // Use 401 for unauthorized
      message: "not authorized" // Correct spelling of "message"
    });
  }

  const token = authHeader.split(' ')[1]; // Extract token from header

  try {
    const decoded = jwt.verify(token, jwt_Secret);

    req.userId = decoded.userId;

    next();
  } catch (err) {
    return res.status(401).json({ // Use 401 for invalid tokens
      message: "Invalid or expired token" // More informative message
    });
  }
};

module.exports = {
  authMiddleware
};