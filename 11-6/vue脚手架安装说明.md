1. 确保node npm安装路径正确
2. npm install @vue/cli -g
3. 检测版本号码：vue --version

生成项目：vue create  my-vue  


Manually select features :

 空格选择：
   babel
   css-pre-processors
   linter / formatter

sass/scss(width node-sass)
eslint + standard config

lint on save  // 在代码保存的时候检测代码规范

In dedicated config files  将已经配置的文件保存为一个文件

Save this as a preset for future projects? (y/N) y 

save preset as: preset-name


# 项目目录介绍：
project-component-demo1   项目名字
├─README.md             项目说明文档
├─babel.config.js
├─package.json
├─vue.config.js        webpack对外接口配置，需要手动创建
├─src                  代码目录
|  ├─App.vue           视图入口文件
|  ├─main.js           主入口文件
|  ├─components        组件文件夹（功能性组件） 
|  |     └HelloWorld.vue 
|  ├─assets            静态资源  iconfont  reset.css 
|  |   └logo.png
├─public               服务器提供的一个对外的静态资源访问目录
|   ├─favicon.ico          mock  img   
|   └index.html



区分父子组件：

import 其他组件的组件，就是父组件

1. 引入组件：import SwiperComponent from './components/Swiper'
2. 注册组件 
    components: {
        SwiperComponent
    }
3. 使用组件：
   
   <SwiperComponent></SwiperComponent>
   或
   <SwiperComponent />

4. 父子通信

 父： <SwiperComponent :数据名字="数据" />  数据名字和数据可以起一样的名字，省事

 子： props: {
   数据名字：数据类型
 }

 props： 单向数据流

 vue中组件传值： 如果传的是一个引用类型 其实传的都是引用的指针（引用地址）



拷贝：

浅拷贝
 object.assign()
 赋值
深拷贝：
const brr = JSON.parse(JSON.string(arr)) 
  
