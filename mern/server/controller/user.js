const userCollection = require("../models/user");

const homepageController = (req, res) => {
  res.send("Homepage Mern...");
};

// Data Insert

const userDataController = async (req, res) => {
  try {
    const { UserName, UserPassword } = req.body;
    const record = new userCollection({
      user: UserName,
      pass: UserPassword,
    });

    await record.save();
    res
      .status(200)
      .json({ message: "Successfully InsertData...", data: UserName });
  } catch (error) {
    res.status(501).json("Internal server error");
  }
};

// Data Read and send

const userAllDataController = async (req, res) => {
  try {
    const userData = await userCollection.find();
    res.status(200).json({ message: "UserAllData", Data: userData });
  } catch (error) {
    res.status(501).json("Internal server error");
  }
};

// Data Delete

const userDataDelete = async (req, res) => {
  try {
    const id = req.params.abc;
    await userCollection.findByIdAndDelete(id);
    res.status(200).json({ message: "Successfully Delete..." });
  } catch (error) {
    res.status(501).json("Internal server error");
  }
};

// Update Data Send

const userUpdateData = async (req, res) => {
  try {
    const id = req.params.abc;
    const record = await userCollection.findById(id);
    res.status(200).json({ message: "UserData", data: record });
  } catch (error) {
    res.status(501).json("Internal server error");
  }
};

// update data

const newUpdate = async (req, res) => {
  try {
    const { update } = req.body;
    const id = req.params.abc;

    await userCollection.findByIdAndUpdate(id, {
      user: update,
    });

    res.status(200).json({ message: "Successfully Update" });
  } catch (error) {
    res.status(501).json("Internal server error");
  }
};

module.exports = {
  homepageController,
  userDataController,
  userAllDataController,
  userDataDelete,
  userUpdateData,
  newUpdate,
};
