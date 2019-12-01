# webpack-plugin-fr-theme

form-render支持antd自定义主题

### 使用

#### 安装
```
yarn add webpack-plugin-fr-theme --dev

or

npm install --save-dev webpack-plugin-fr-theme
```

#### 配置

````
// webpack.config.js

const WebpackPluginFrTheme = require('webpack-plugin-fr-theme');

{
  ...

  plugins: [
    new WebpackPluginFrTheme(),
  ],

  ...
}

````

## 实现

form-render对于antd的组件样式默认是引用css样式，如果项目中已经使用了antd自定义主题，这时候form-render引用的css文件会覆盖项目中的自定义样式。

因为自定义样式是通过less注入全局的样式变量来实现的，所以通过webpack plugin手动修改form-render中antd引用的样式文件，将style/css替换成style/index，去引用antd对应组件的less文件。