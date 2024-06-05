import jwt from "jsonwebtoken";
import "dotenv/config";

const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;

  if (!token) {
    return res
      .status(403)
      .json({ success: false, message: "Not authorized, Login again" });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = decodeToken.id;
    //console.log("userId", req.body.userId);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export default authMiddleware;
