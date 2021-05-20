

# Scratch调研



## 1.Scratch
### scratch3.0 几个核心库介绍

#### [scratch-gui](https://github.com/LLK/scratch-gui)
	React 组件实现的的 UI 界面：菜单、工作区、舞台区、角色区

#### [scratch-blocks](https://github.com/LLK/scratch-blocks)
	是基于谷歌 [Blockly](https://github.com/google/blockly) 开发的一个图形化 js 库，用积木块的形式来实现编程。js库中 Scratch Blocks 抛弃了 Blockly 中积木块转 Python 等编程语言的功能（Blockly中Generator 的部分），通过抛事件的方式搭配 Scratch VM 来实现控制舞台渲染

#### [scratch-vm](https://github.com/LLK/scratch-vm)
	一个运行 Scratch Blocks 代码块的引擎库：加载解析项目、导出项目、解析运行积木、扩展管理、调用Scratch Render 提供的渲染借口，更新舞台

#### [scratch-render](https://github.com/LLK/scratch-render)
	Scratch Render 是基于 webgl 的一个渲染引擎，主要用到了 twgl 库，定义了供 Scratch VM 调用的接口。 主要功能： + 根据 svg、png 的数据在 canvas 中渲染成图形 + 更新角色图层的信息：大小、位置、角度、图层优先级、图形特效等 + 画笔图层。

#### [scratch-audio](https://github.com/LLK/scratch-audio)
	Scratch Audio 是用来解析声音、播放声音的库。

#### [scratch-link](https://github.com/LLK/scratch-link)
	Scratch Link 通过 WebSocket 使 Scratch 硬件扩展可以和硬件设备通讯。

#### [scratch-paint](https://github.com/LLK/scratch-paint)
	GUI 中造型编辑的组件，用到了 paper.js，目前处理带有 text 标签的 svg 文件时会有 bug，在 windows 环境中容易崩溃。

[scratch-svg-render](https://github.com/LLK/scratch-svg-render)

	scratch 处理 svg 资源的一个工具库，处理带有 text 标签的 svg 文件时会有 bug。

#### [scratch-i10n](https://github.com/LLK/scratch-i10n)
	scratch 多语言库，包含了Scratch GUI 和 Scratch Blocks 中用到的翻译信息。


### Scratch2.0 & Scratch3.0

	Scratch之前并不是基于Blockly构建的，3.0的版本里，才这样做，为何之前的Scratch不基于Blockly呢，因为Scratch这个项目比Blockly更早诞生，Scratch前几个版本的积木块都是自己造的轮子。现在Blockly几乎是公认最好的积木化编辑器，所以Scratch在3.0里把轮子换成Blockly.说Scratch3.0基于Blockly构建依然显得含糊其辞，Scratch3.0是个庞大的项目，包含了很多组件，只有其中的scratch-blocks基于Blockly，Scratch3.0是scratch-gui + scratch-blocks + scratch-vm + scratch-render + ...
	    这条阐述是程序员视角，站在Scratch3.0的项目结构上解释它：Talk is cheap , show me the code
	    可以把Blockly视为一个库，而把Scratch3.0视为一个框架。一个库往往遵循Do one thing的Unix哲则，可以轻松将它组合到你的项目中，Blockly库只负责从积木中生成代码，怎么去使用这些代码？这些代码是控制虚拟角色还是实际的硬件？它何时被解释运行？是否支持并行？代码运行生命周期是怎样的？解释器在本地还是在另一个硬件上？Blockly通通不关心。

## 2. React

### React 语法
	生命周期
	jsx、函数式组件、class组件
	建议使用ts（js超集，未来发展趋势）
### 高阶组件
	状态提升、引用方式、纯函数（无副作用）
### 状态空间
	redux、react-redux
### HOOK函数（钩子函数）
	函数中定义state空间、状态和函数参数绑定

## 3.Blockly (Do one thing)
### 插件
	https://github.com/nbudin/react-blockly
	https://blocklycodelabs.dev/codelabs/getting-started/index.html#1
### 介绍
	是一个积木化代码编辑器

	blockly react-blockly

# 下周内容

状态空间

blocks： 扩展
硬件连接：microbit
素材库管理：编辑


###  使用过程

[matatalab](matatalab.com/zh-hans/matatabot-scratch-link-installation)

[mindplus](https://mindplus.dfrobot.com.cn/lego-link)


## 素材扩充


路径 `../src/container/library-item.jsx`
```text
https://cdn.assets.scratch.mit.edu/internalapi/asset/${iconMd5}/get/
```


json 文件目录 `../src/lib/librarys/`
```text
sprites.json     默认角色文件

costumes.json     默认素材文件
backdrops.json    默认背景图文件
sound.json        默认音频文件


```




## logo修改 `../src/lib/default-project/index.js`
```
import costume2 from '!raw-loader!./logo.svg';
```

## 选择素材后接口

`../src/lib/storage.js` 57行
`../node_modules/scratch-vm/dist/node/scratch-vm.js`

```text
示例：https://kankan.ngrok2.xiaomiqiu.cn/assets/800f6f1573677d59954e8d3164602287.svg
```
