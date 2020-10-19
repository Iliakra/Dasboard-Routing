var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/:client/:campaign/Demo/:file", function (
  req,
  res,
  next
) {
  res.sendFile(
    path.resolve(
      `../../../dashboard/${req.params.client}/${req.params.campaign}/[PRODUCT]/Demo/${req.params.file}`
    )
  );
});

module.exports = router;