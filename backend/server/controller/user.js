const HomeController = (req, res) => {
  res.send("Hello Home page...");
};

const userdata = [];

const DataController = (req, res) => {
  try {
    res.status(200).send({ success: true, data: userdata });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: { message: "Server error.." } });
  }
};

const UserDataController = (req, res) => {
  try {
    const record = userdata.push(req.body);
    res.status(200).send({ success: true, data: record });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: { message: "Server error.." } });
  }
};

const DeleteController = (req, res) => {
  try {
    const frontendId = req.params.id;

    userdata.splice(frontendId, 1);
    res.status(200).send({ message: "Successfully Delete" });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: { message: "Server error.." } });
  }
};

const UpdateUserDataController = (req, res) => {
  try {
    const frontendId = req.params.abc;

    const result = userdata.filter((item, index) => {
      return index === Number(frontendId);
    });

    res.status(200).send({ data: result });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: { message: "Server error.." } });
  }
};

const UpdateController = (req, res) => {
  try {
    const newData = req.body;
    const frontendId = req.params.abc;
    userdata.splice(frontendId, 1, newData);
    res.status(200).send({ message: "Successfully Update" });
  } catch (error) {
    res
      .status(500)
      .send({ success: false, error: { message: "Server error.." } });
  }
};

module.exports = {
  HomeController,
  DataController,
  UserDataController,
  DeleteController,
  UpdateUserDataController,
  UpdateController,
};
