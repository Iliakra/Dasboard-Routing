var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/:client/:campaign/Frames/:platform/:format/:frame-type/:file", function (
  req,
  res,
  next
) {
  res.sendFile(
    path.resolve(
      `../../../dashboard/${req.params.client}/${req.params.campaign}/[PRODUCT]/Frames/${req.params.platform}/${req.params.format}/${req.params.frame-type}/${req.params.file}`
    )
  );
});

module.exports = router;