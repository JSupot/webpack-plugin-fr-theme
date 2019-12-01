const path = require('path');
const fs = require('fs');
const { getThemeFileList } = require('./lib/utils');
const { ASTParser } = require('./lib/parser');

// function test() {
//   const ROOT_PATH = path.resolve(process.cwd());
//   const FORM_RENDER_ANTD_PATH = path.resolve(ROOT_PATH, './node_modules/form-render/lib/widgets/antd');
//   const fileList = getThemeFileList(FORM_RENDER_ANTD_PATH);

//   ASTParser(fileList)
// }

// test()

class FormRenderThemePlugin {
  constructor(options) {
    this.options = options;
  }

  /* eslint-disable-next-line */
  apply(compiler) {
    compiler.hooks.beforeRun.tap('FormRenderThemePlugin', (compiler) => {
      const ROOT_PATH = path.resolve(process.cwd());
      const FORM_RENDER_ANTD_PATH = path.resolve(ROOT_PATH, './node_modules/form-render/lib/widgets/antd');
      const fileList = getThemeFileList(FORM_RENDER_ANTD_PATH);

      ASTParser(fileList)
    });
  }
}

module.exports = FormRenderThemePlugin;