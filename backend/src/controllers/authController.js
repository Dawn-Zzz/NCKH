const jwtActions = require("../middleware/jwtActions");
const userModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
require("dotenv").config();

let register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      throw {
        code: 1,
        message: "Không được bỏ trống thông tin",
      };
    }

    let user = await userModel.findOne({ email });

    if (user) {
      throw {
        code: 1,
        message: "Email đã tồn tại",
      };
    }

    // Mã hóa mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);

    user = await userModel.create({ name, email, password: hashedPassword });

    let payload = {
      id: user._id,
    };

    const token = jwtActions.createJWT(payload);

    // Lưu token vào cookie
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 ngày
    });

    res.status(200).json({
      code: 0,
      message: "Đăng ký thành công",
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: Register",
    });
  }
};

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

    if (!user.password) {
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
      maxAge: 24 * 60 * 60 * 1000 * 365, // 1 năm
    });

    res.status(200).json({
      code: 0,
      message: "Đăng nhập thành công",
      user,
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: Login",
    });
  }
};

let logout = async (req, res) => {
  try {
    // xóa cookie
    res.clearCookie("token");

    res.status(200).json({
      code: 0,
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: Logout",
    });
  }
};

let refresh = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra khi refresh: Không tìm thấy userId",
      };
    }

    let user = await userModel.findById(userId);

    if (!user) {
      throw {
        code: 1,
        message: "Đã có lỗi xảy ra khi refresh: Không tìm thấy user",
      };
    }

    res.status(200).json({
      code: 0,
      message: "Refresh thành công",
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(200).json({
      code: error.code || 1,
      message: error.message || "Đã có lỗi xảy ra: Refresh",
    });
  }
};

const loginWithGoogle = (req, res, next) => {
  passport.authenticate("google", { scope: ["profile", "email"] })(
    req,
    res,
    next
  );
};

const loginWithGoogleCallback = (req, res, next) => {
  passport.authenticate("google", async (profile) => {
    // Logic xử lý sau khi đăng nhập thành công
    try {
      if (!profile) {
        throw {
          code: 1,
          message: "Đăng nhập thất bại. Hãy thử lại",
        };
      }

      let user = await userModel.findById(profile.id);

      if (user) {
        user.name = profile.displayName;
        user.email = profile.emails;
        user.pic = profile.photos[0].value;
      } else {
        user = await userModel.create({
          _id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
          pic: profile.photos[0].value,
        });
      }

      let payload = {
        id: user._id,
      };

      const token = jwtActions.createJWT(payload);

      // Lưu token vào cookie
      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000 * 365, // 1 năm
      });

      res.redirect(`${process.env.URL_FRONTEND}`);
    } catch (error) {
      console.log(error);
      res.redirect("http://localhost:3001/api/auth/google");
    }
  })(req, res, next);
};

module.exports = {
  register,
  login,
  refresh,
  logout,
  loginWithGoogle,
  loginWithGoogleCallback,
};
