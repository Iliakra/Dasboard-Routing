var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/:client/:campaign/Publish/:platform/:format/:file", function (
  req,
  res,
  next
) {
  res.sendFile(
    path.resolve(
      `../../../dashboard/${req.params.client}/${req.params.campaign}/[PRODUCT]/Publish/${req.params.platform}/${req.params.format}/${req.params.file}`
    )
  );
});

module.exports = router;