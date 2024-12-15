const { registerUserService } = require("../services/registerResearchService")

const registerUser = async (req, res) => {
    try {
        const user = await registerUserService(
          req.body.name,
          req.body.nim,
          req.body.className,
          req.body.email,
          req.body.noHp,
          req.body.gender,
          req.body.faculty,
          req.body.year,
          req.body.major,
          req.body.document,
          req.body.github
        );
    
        const { password, ...userWithoutPassword } = user;
    
        return res.status(201).json({
          status: true,
          message: `Account created`,
          data: userWithoutPassword,
        });
      } catch (error) {
        return res.status(400).json({
          status: false,
          message: error.message,
          data: null,
        });
      }
}

module.exports = {
  registerUser
}