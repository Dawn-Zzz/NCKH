const jwtActions = require("../middleware/jwtActions");
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

let login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw {
        code: 1,
        message: "Không được bỏ trống thông tin",
      };
    }

    let user = await userModel.findOne({ email });

    if (!user) {
      throw {
        code: 1,
        message: "Tài khoản hoặc mật khẩu không chính xác",
      };
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw {
        code: 1,
        message: "Tài khoản hoặc mật khẩu không chính xác",
      };
    }

    let payload = {
      id: user._id,
    };

    const token = jwtActions.createJWT(payload);

    // Lưu token vào cookie
    res.cookie("token", token, {
      httpOnly: true,
      // path: "/api/auth/refresh",
      maxAge: 24 * 60 * 60 * 1000, // 1 ngày
    });

    res.status(200).json({
      code: 0,
      message: "Đăng nhập thành công",
      user,
      token,
    });
  } catch (error) {
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: Login",
    });
  }
};

module.exports = { login };
