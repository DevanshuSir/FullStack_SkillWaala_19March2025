const userCollection = require("../models/user");
const productCollection = require("../models/Product");
const queryCollection = require("../models/Query");
const bcrypt = require("bcrypt");

const regDataController = async (req, res) => {
  try {
    const { fname, email, pass } = req.body;

    if (!fname || !email || !pass) {
      return res.status(400).json({ message: "All fields are required 😓" });
    }

    const emailExist = await userCollection.findOne({ userEmail: email });

    if (emailExist) {
      return res.status(400).json({ message: "Email already register" });
    }

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

const loginDataController = async (req, res) => {
  try {
    const { loginEmail, loginPass } = req.body;

    const userCheck = await userCollection.findOne({ userEmail: loginEmail });

    if (!userCheck) {
      return res.status(400).json({ message: "User not found..!" });
    }

    const matchPass = await bcrypt.compare(loginPass, userCheck.userPass);

    if (!matchPass) {
      return res.status(400).json({ message: "Invalid Credentials..😓" });
    }

    res.status(200).json({
      message: "Successfully Login..😍",
      data: userCheck,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
};

const userAllProducts = async (req, res) => {
  try {
    const record = await productCollection.find({ productStatus: "In-Stock" });
    res.status(200).json({
      data: record,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
};

const userQueryController = async (req, res) => {
  try {
    const { userName, userEmail, userQuery } = req.body;
    const record = new queryCollection({
      Name: userName,
      Email: userEmail,
      Query: userQuery,
    });
    await record.save();
    res.status(200).json({
      message: "Successfully submit your query..✅",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error..😓" });
  }
};

module.exports = {
  regDataController,
  loginDataController,
  userAllProducts,
  userQueryController,
};
