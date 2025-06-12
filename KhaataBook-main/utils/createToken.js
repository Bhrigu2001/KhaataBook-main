const jwt = require("jsonwebtoken");

function getToken(user) {
  const secret = "9f3fa8f726b94a57abde5cb423ba7087";
  if (!secret) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  return jwt.sign({ id: user._id }, secret, { expiresIn: "1h" });
}

module.exports = getToken;
