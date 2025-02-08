import jwt from "jsonwebtoken";

const SECRET_KEY = "your_secret_key";

export const extractUserFromToken = (authHeader) => {
  if (!authHeader) throw new Error("No token provided");
  
  const token = authHeader.split(" ")[1]; // Expecting 'Bearer <token>'
  if (!token) throw new Error("Malformed token");

  return jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) throw new Error("Invalid or expired token");
    return user;
  });
}


export const createToken = (args) => {
  return jwt.sign({ ...args }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_MAX_AGE
  });
};
