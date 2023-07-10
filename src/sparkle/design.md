# 设计知识
1. sparkle的数据对象采用百分比定位,因为不知道父元素的大小，所以百分比的值在0-100%之间，方便定位.  
2. 学习为什么sparkle的svg元素对应旋转动画，而sparkle的wrapper设置缩放动画，为什么这样设计.  
3. 创建的sparkle根据时间进行清理的功能,这样能够避免那些无法清理的sparkle.   
4. 子元素增加一层wrapper的作用是方便定位.  

# 知识点
1. 在css中，有一些属性是用百分比开设置值的,这里总结一下,百分比是相对于自身元素还是父元素
   - 1.1 相对于父级块元素: width,height; 相对定位的top,left;绝对定位的top,left,width,height; margin-top,margin-left,padding-top,        padding-left;
   - 1.2 相对于视口: 固定定位的top,left;
   - 1.3 相对于自身: translate,border-radius;
   - 1.4 相对于背景区的宽高: background-size;