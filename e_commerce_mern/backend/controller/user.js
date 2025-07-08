const userCollection = require("../models/user");
const bcrypt = require("bcrypt");

const regDataController = async (req, res) => {
  try {
    const { fname, email, pass } = req.body;

    if (!fname || !email || !pass) {
      res.status(400).json({ message: "All fields are required 😓" });
    }

    // const emailExist = await userCollection.findOne({ userEmail: email });

    // console.log(emailExist);

    // if (emailExist.userEmail === email) {
    //   res.status(400).json({ message: "Email already register" });
    // }

    const hashPassword = await bcrypt.hash(pass, 10);

    const record = new userCollection({
      userName: fname,
      userEmail: email,
      userPass: hashPassword,
    });

    await record.save();
    res.status(200).json({ message: "Successfully Register 😍" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
};

module.exports = {
  regDataController,
};
