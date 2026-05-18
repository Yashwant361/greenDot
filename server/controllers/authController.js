const jwt = require("jsonwebtoken");

const loginTeacher = async (req, res) => {

   try {

      const { email, password } = req.body;

      if (
         email !== process.env.ADMIN_EMAIL ||
         password !== process.env.ADMIN_PASSWORD
      ) {

         return res.status(401).json({
            message: "Invalid Credentials"
         });

      }

      const token = jwt.sign(

         {
            role: "teacher"
         },

         process.env.JWT_SECRET,

         {
            expiresIn: "7d"
         }
      );

      res.json({
         message: "Login Successful",
         token
      });

   } catch (error) {

      res.status(500).json({
         message: error.message
      });

   }

};

module.exports = {
   loginTeacher
};