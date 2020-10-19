var express = require("express");
var router = express.Router();
const path = require("path");
const pathStr = require("../settings");

/* GET home page. */

router.get("/:client/:campaign/", function (
  req,
  res,
  next
) {
  res.sendFile(
    path.resolve(
      `${pathStr.pathToDashboardProject}/${req.params.client}/${req.params.campaign}/[PRODUCT]/dashboard.html`
    )
  );
});

module.exports = router;
