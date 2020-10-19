var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const dynamicStatic = require('express-dynamic-static')();

var pathStr = require("./settings.js");

var dashboardRouter = require("./routes/dashboard");
/*
var reportJsRouter = require("./routes/reportJS");
var demoRouter = require("./routes/demo");
var backupRouter = require("./routes/backup");
var framesRouter = require("./routes/frames");
*/

var app = express();
app.use(dynamicStatic);


// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.get('/:client/:campaign/:file', (req, res) => {
  dynamicStatic.setPath(path.resolve(`${pathStr.pathToDashboardProject}/${req.params.client}/${req.params.campaign}/[PRODUCT]/`));
  res.sendFile(path.resolve(`${pathStr.pathToDashboardProject}/${req.params.client}/${req.params.campaign}/[PRODUCT]/${req.params.file}`));
})



app.use("/", dashboardRouter);
/*
app.use("/:file", reportJsRouter);
app.use("/Demo/:file", demoRouter);
app.use("/Publish/:platform/:format/:file", backupRouter);
app.use("/Frames/:platform/:format/:frame-type/:file", framesRouter);
*/


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

//(../../../../../../dashboard) (../../../dashboard)

