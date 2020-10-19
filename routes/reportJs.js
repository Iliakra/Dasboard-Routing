var express = require("express");
var router = express.Router();
const path = require("path");

/* GET users listing. */
router.get("/:client/:campaign/:file", function (req, res, next) {
  res.sendFile(path.resolve(`../../../dashboard/${req.params.client}/${req.params.campaign}/[PRODUCT]/${req.params.file}`));
});

module.exports = router;
