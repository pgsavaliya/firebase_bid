const testService = require("../service/test");
const response = require("../middleware/response");

exports.add = async (req, res) => {
  try {
    let resp = await testService.add(req.body);
    if (resp) {
      console.log("abc", resp);
      res.send(resp);
    } else {
      res.send("not found");
    }
  } catch (err) {
    res.send(err);
  }
};
exports.addbid = async (req, res) => {
  try {
    let resp = await testService.addbid(req.body.title);
    if (resp) {
      res.send(resp);
    } else {
      res.send("not found");
    }
  } catch (err) {
    res.send(err);
  }
};
