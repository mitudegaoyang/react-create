## create-react-app

## 安装

```
npx create-react-app project-name
cd project-name
npm i react-app-rewired customize-cra -D
```

配置`package.json`

```
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

项目根目录创建`config-overrides.js`

```
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

## 参考资料

* [create-react-app使用react-app-rewired2.x添加webpack配置](https://www.cnblogs.com/zyl-Tara/p/10635033.html)
* [在 create-react-app 中使用](https://ant.design/docs/react/use-with-create-react-app-cn)