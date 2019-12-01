const fsUtils = require("nodejs-fs-utils");

exports.getThemeFileList = function getThemeFileList(dirPath) {
  const fileList = [];
  const reg = /\.js$/;

  fsUtils.walkSync(dirPath, {
    skipErrors: true,
  }, function (err, path, stats, next, cache) {
    if (!err && stats.isFile() && reg.test(path)) {
      fileList.push(path);
    }
    next();
  });

  return fileList;
}