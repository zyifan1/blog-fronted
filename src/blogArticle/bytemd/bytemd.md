#### [ByteMD](https://github.com/bytedance/bytemd) 是一款基于Svelte构建的Markdown编辑器组件，常用于解析markdown语法。

#### 1.原理:
该组件是将markdown Text解析成markdown AST，然后进行插件操作后，将其转换成HTML AST，对HTML AST进行优化之后通过多个rehype插件进行操作，然后将HTML AST字符串化为HTML，最后经过渲染成DOM

[//]: # (> ```)

[//]: # (> 依赖安装)

[//]: # (> npm install @bytemd/vue-next &#40;Vue版本若小于3，则使用npm install @bytemd/vue&#41;)

[//]: # (> npm install @bytemd/plugin-gfm)

[//]: # (> npm install @bytemd/plugin-highlight)

[//]: # (> ```)