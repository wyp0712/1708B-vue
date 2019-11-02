## webpack  

中文网：https://www.webpackjs.com/

### 一、webpack是什么？ 4.x

```
webpack是一个现代javascript应用程序的静态模块打包器（module bundler）。

webpack简单的说一个模块打包器。
```


<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/932C5EEC217642CDB512B26C2ABC6D05/7183" width="500px" height="240px"/>
</html>



### 二、为什么要使用webpack？webpack能解决什么问题？

```
现在很多的网页都可以看做是功能丰富的应用，他们拥有着复杂的javascript代码和一大推依赖包。为了解决这个问题，前端社区涌现出了很多好的实践方法。

a:模块化  requirejs  我们可以把复杂的程序细化为小的文件。

b:scss,less等css预处理器

c:.vue文件

d: ES6语法

....

以上这些浏览器都不能直接识别，都需要经过额外的处理之后才能让浏览器识别，而我们手动去繁琐，webpack就可以帮我们解决这些问题。
```

### 三、webpack和grunt及gulp相比有什么特性？

```
grunt和gulp是一种能够优化前端开发流程的工具。

grunt和gulp的工作方式是：在一个配置文件中，指明对某些文件进行类似编译，组合，压缩的具体步骤，这个工具可以帮你自动完成这些任务。

webpack是一种模块化的解决方案。

webpack的工作方式是：把你的项目当做一个整体，通过一个给定的主文件（如：index.js）,webpack将从这个文件开始找到你的项目的所有依赖文件，使用loader处理它们，最后打包为一个浏览器可识别的javascript文件。

```

```
1> 打包 (依赖关系，把多个文件打包成一个文件，减少请求，服务器的压力)

2> 转化 (比如：sass jsx、vue) 需要使用loader

3> 优化 (SPA越来越流行，webpack可以对你的项目进行优化)

```

### 四、webpack可以很好的实现如下目标：

1>将依赖树拆分成按需加载的模块

2>初始化加载时耗时尽量少

3>各种静态资源都可以视作模块（css,js,模块，...）

4>将第三方库整合成模块的能力,可以自己配置

5>适合大型项目，无论是单页面还是多页面

### 五、开始学习webpack

**1、webpack安装**

```
webpack基于nodejs，必须要保证你的电脑安装过nodejs

本地安装webpack  --->   推荐

npm install  webpack  --save-dev   

webpack 4.x版本需要安装webpack-cli

npm install webpack-cli --save-dev

全局安装webpack   --->   不推荐

npm install webpack -g
 
```
**六、基于commonjs的模块实现**

既然webpack可以让我们使用模块化的方式编写代码。


**第一步：构建一个项目目录，如下：**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/5221D53EB0964078B376631E8ADA2711/5092" width="200px"/>
</html>

**第二步：定义模块，如下：**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/948F4CAE30DD4A369A0142955610A0F7/5088" width="400px"/>
</html>

**第三步：在app.js中引入模块，如下：**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/BBD7E7F459AB4DC7B49222E359870DCE/5085" width="400px"/>
</html>

**第四步：在index.html中引入app.js，如下：**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/3DFE7871A8DE48B7B57C9C87C2EEED82/5127" width="400px"/>
</html>

**在浏览器中查看：**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/A5C6C11155644FDC9EE716EBC0D1B68F/5102" width="400px"/>
</html>

**第五步：执行webpack app.js -o bundle.js**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/4F8E9277D5DF4DB69DC30BB10833BCC3/5113" width="400px"/>
</html>

webpack 入口文件 -o 出口文件

在index.html中引bundle.js

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/A48C6B67ED6E41D79F6B211A6447E045/5115" width="400px"/>
</html>

在浏览器中查看：

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/E6A696B3189B4382A8496450699F3714/5111" width="400px"/>
</html>

### 七、webpack是如何工作的？

针对上面的案例，看看webpack是如何工作的


```
在执行webpack app.js -o bundle.js时，webpack会读取app.js，在app.js中有一个require语句，需要在读取a.js。

在这个案例中，到a.js所有的依赖的模块查找完毕。在实际工作中，有更长的模块加载链，需要加载很多次，直到没有require为止。

所有的模块查找完毕之后，就会分析这些依赖的模块（文件），然后就开始打包，最后生成一个最终文件。
```


这是最后生成的文件:

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/C3025EAF08ED414DB6732CF76EF2D62D/5171" width="600px"/>
</html>

**说明：所有引入的文件，最终都会打包到bundle.js中，这是我们为什么 只引入一个文件的原因。**

再举一个es6模块的例子，

**说明webpack对commonjs和es6模块都有很好的支持**

### 八、在工作中使用webpack

在刚才的两个案例中，每次需要手动编写命令执行，非常繁琐。

实际上是可以简化，并且还可以提供更强大的功能。

### 八、webpack的四大核心概念：
 
- **入口 （entry）：入口起点，告诉webpack应该使用哪个模块，来构建其内部依赖的开始。**

    入口分两种情况：单个入口，多个入口
    
  **1>单入口：entry: string|array**
  
    ```
        module.exports = {
            entry:'./app.js'
        }
    ```
    
    只指定入口文件，会默认输出到dist目录下的main.js文件内
    
    
```
     module.exports = {
        entry:{
            app:'./app.js'
        }
    }
```
    
只指定入口文件，值为对象时，会输出到dist目录下的app.js文件内

```
    module.exports = {
        entry:['./app.js','./detail.js']
    }
```
    
    只指定入口文件，其值为数组时，多个入口文件，但是最后会输出到dist文件下的main.js内（一个文件）

   **2>多入口：entry：{entryChunkName:string|array}** 一般用在多页面开发时
   
   
    ```
        module.exports = {
            entry:{
                app:'./app.js',
                detail:'./detail.js'
            }
        }
    ```

    只指定入口文件，其值为对象，多入口文件，会分别输出到dist文件下的对应的文件内
    
---
    
- **出口 （output）告诉webpack在哪里输出它所创建的bundles，以及如何命名这些文件，默认值为'./dist**

    
```
module.exports = {
        entry:{
            app:'./app.js'
        },
        output:{
            filename: '[name]-[hash].js'             //name对应entry对象里面的对应键名
            path：path.join(__dirname,'./bundle')    //目标输出目录的绝对路径
        }
    }
    
    注：path:绝对路径，需要path模块拼接一下路径,直接写：'/bundle'会直接输出到d:的根目录下
```

---

    
- **加载器 （loader）：loader让webpack能够去处理那些非javascript文件（webpack自身只理解javascript）。**
- 
**注：test的值为正则，切记不能加引号。**

   
```
webpack的目标是，让webpack聚焦于项目中的所有资源，而浏览器不需要去关注考虑这些。webpack把每个文件（js,css,less,scss,图片等）都作为模块处理。
    
    loader用于将模块的源代码进行转换。
    
    **注：有了webpack之后，前端的模块不仅仅限于js的模块化，也包括css、less、vue、react等，都是模块化开发。**
    
    loader参数：
    
        1>test属性，用于识别出应该被对应的loader进行转换的某个或某些文件。
        
        2>use属性，表示进行转换时，应该使用哪个loader。
        
        3>loader
        
        4>options:object 对当前loader的配置
```

#### 常用的loader

注：use的值可以是string，array，object三种类型。

1.babel-loader  

**babel-loader 8.x版本**

安装 **npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack**

ES6模块导入导出**可以编译**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/96FF3E37A6B2403C86E818BE5EAAC25F/5344" width="400px"/>
</html>

**babel-loader 7.x**

安装 **npm install babel-loader babel-core babel-preset-env webpack**

ES6 模块导入导出**不能编译**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/3D6C38859C2F4BDBB840F9829E1C55BB/5342" width="400px"/>
</html>

2.样式  sass-loader css-loader style-loader  

安装 **npm install sass-loader node-sass css-loader style-loader --save-dev**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/42F1E176C3B94AB591C508392BF5D66B/5361" width="400px"/>
</html>


以上是把css文件内嵌到js bundle中，而不会单独放到一个css文件中。

可以使用**extract-text-webpack-plugin**这个插件，把所有入口中引入的*.css文件，移动到独立分离的css文件。 

安装 npm install extract-text-webpack-plugin@next  webpack4.x版本

使用的步骤：

第一步：先引入**extract-text-webpack-plugin**插件

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/42F1E176C3B94AB591C508392BF5D66B/5361" width="400px"/>
</html>

第二步：配置

**loader的配置**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/6F2F29B0AE9D49A180B25DDF41D581FB/5405" width="400px"/>
</html>

**插件的配置**

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/BF3DC06F8B414E2FA13FF61B8F7B067F/5403" width="400px"/>
</html>

执行webpack后，生成的目录

<html>
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/5A9F34F204CF42C28F1FD0A4818DB65C/5412" width="200px"/>
</html>

3.html-loader html里引用的静态资源，如：img，audio等。

安装：cnpm install html-loader --save-dev

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/F6803D9036DF42F4B4AC1D46F3486C5B/5598" width="400px"/>
</html>

完全禁用：attrs:false

4.url-loader 处理图片和字体文件的loader 

安装：cnpm install  url-loader --save-dev  

url-loader的fallback配置是file-loader，所以需要安装file-loader。

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/10E31F0B7F6B413DA08864E4E722B5C2/5607" width="400px"/>
</html>

**综上使用loader的经典步骤：**

1>安装对应的loader

2>配置module的rules选项，每个loader对应一个对象

3>配置主要包括以下内容:

test:一个匹配loaders所处理的文件扩展名的正则表达式

use：使用的loader  数据类型：string|array|object

---

- **插件（plugins）**

插件(plugins)是用来扩展webpack功能的，它们会在整个构建过程中生效，执行相关的任务。

插件可以完成更多loader不可能完成的功能。

插件分为两种：

1)内置插件


2)第三方插件

- html-webpack-plugin 有两个主要作用：

1)为html文件中引入外部资源如script、link动态添加每次compile后的hash，防止引用缓存的外部文件问题。

2)可以生成创建html入口文件，比如单页面可以生成一个html文件入口，配置N个html-webpack-plugin可以生成N个页面入口。

第一步：安装html-webpack-plugin插件

```
cnpm install html-webpack-plugin --save-dev
```

第二步：在plugins内配置

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/371C0E4158FE4EDA90778CC86FDFFC78/5511" width="600px"/>
</html>

**注：需要替换title,需要在html内title标签内添加<%= htmlWebpackPlugin.options.title%>,这个配置和html-loader冲突。**

生成多个html页面时，需要用filename来区分，引入的js需要使用chunk来配置。

配置多个：写多个即可。

- **构建本地服务器 webpack-dev-server**

第一步：

安装：**cnpm install webpack-dev-server --save-dev**

第二步：在webpack.config.js中配置

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/6D33A2843EED406FA2CFA33B44EE5DB1/5459" width="400px"/>
</html>

第三步：配置package.json里的scripts字段里

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/70C5546C1D4E404CBDC73D40D072872F/5468" width="400px"/>
</html>

第四步：在命令行里执行

```
npm run dev 
```
注：执行完后不会生成文件，文件会运行在内存中。


#### 九、开发环境和构建环境的构建配置差异

我们在日常的前端开发工作中，一般都会有两套构建环境：一套开发时使用，构建结果用于本地开发调试，不进行代码压缩，打印debug信息，包含sourcemap文件；另外一套构建后的结果是直接应用于线上的，即代码都是压缩后，运行时不打印debug信息，静态文件不包括sourcemap的。有的时候可能还需要多一套测试环境，在运行时直接请求mock工作。

webpack的运行环境是nodejs，我们依赖通过nodejs提供的机制给要运行的webpack程序传递环境变量，来控制不同环境下的构建行为。

例：
在npm中的scripts字段中添加一个用于生产环境的构建命令。


```
{
    "scripts":{
        "build":"NODE_ENV=production webpack",
        "dev":"NODE_ENV=development webpack-dev-server"
    }
}
```

然后可以在webpack.config.js文件中可以通过process.env.NODE_ENV来获取命令传入的环境变量。

**注：在这里会报下面的错**

<html>
<!--在这里插入内容-->
<img src="https://note.youdao.com/yws/public/resource/a96ec48f53fb807f191930a40cefd4cf/xmlnote/1C54EBC6546E4F6B89ABC33B2D058E59/5566" width="600px"/>
</html>

**原因是window不支持NODE_ENV=development

解决方案：**

**第一步：安装cross-env包  cnpm install --save-dev cross-env**

什么是cross-env？

它是运行跨平台设置和使用环境变量的脚本。

**第二步：在NODE_ENV=development前面加上cross-env即可，如下**

```
{
    "scripts":{
        "build":"cross-env NODE_ENV=production webpack",
        "dev":"cross-env NODE_ENV=development webpack-dev-server"
    }
}
```

### 十、模块热更新

**(Hot Module Replacement或HMR)是webpack提供的最有用的功能之一。它允许在运行时更新各种模块，而==无需进行完全==刷新**。  

引用：const webpack = require('webpack');

配置：

devServer:{
    hot:true
},
plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NameModulesPlugin()
]












