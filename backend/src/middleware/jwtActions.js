const jwt = require("jsonwebtoken");

const createJWT = (payload) => {
  let secret = process.env.JWT_SECRET;
  let token = null;
  try {
    token = jwt.sign(payload, secret, { expiresIn: "1h" });
  } catch (error) {
    console.log(error);
  }
  return token;
};

const checkJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      code: 1,
      message: "Hãy đăng nhập1",
    });
  }
  jwt.verify(token, process.env.JWT_SECRET, async (error, resutl) => {
    if (error) {
      return res.status(401).json({
        code: 1,
        message: "Hãy đăng nhập2",
      });
    }

    // check jwt thành công sẽ lưu userId vào req
    req.userId = resutl.id;
    next();
  });
};

module.exports = {
  createJWT: createJWT,
  checkJWT: checkJWT,
};
