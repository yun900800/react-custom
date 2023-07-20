# 设计知识学习

1. 设计一个Boop的基本原理是设置一个isBooped属性,默认值为false,一旦属性修改为true的时候,触发react
重新渲染,先执行一个动画,并且同时触发React.useEffect()执行,在一定的时间间隔以后将isBooped设置为false;
此时动画结束,并且副作用的也执行,但是不会触发状态的改变;  

2. 这里的动画从transition转化到react-spring,效果一次比一次逼真.  

3. 最后发现这里的动画逻辑可以抽取为一个hook,返回值是一个style和一个trigger函数.这里体现了react的一个抽象逻辑
就是将UI部分和行为部分相应的职责分离;元素代表UI和hooks抽象行为.  