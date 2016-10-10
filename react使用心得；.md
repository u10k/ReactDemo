#[参考阮一峰](http://www.ruanyifeng.com/blog/2015/03/react.html)
# 引入
注意*引入顺序*
```
    <script src="../build/react.js"></script>
    <script src="../build/react-dom.js"></script>
    <script src="../build/browser.min.js"></script>
```
# (demo1)html以及js挂载
注意*script的***type类型**
```
<div id="box"></div>
<script type="text/babel">
    ReactDOM.render(
       <h1>HELLO,WORLD!</h1>,
       document.getElementById("box")
    );
</script>
```
# (demo2)遍历数组
```
var names=["张三","李四","王五"]
ReactDOM.render(
    <div>
    {
        names.map(function(name){
        return <div>Hello,{name}!</div>
    })
    }
    </div>,
       document.getElementById("box")
    );
```
# (demo3)数组中的标签直接显示
```
var names=[<h1>张三</h1>,<h2>李四</h2>,<h3>王五</h3>]
    ReactDOM.render(
    <div>{names}</div>,
       document.getElementById("box")
    );
```
