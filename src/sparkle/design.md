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

# 为什么要设计这样的一个sparkles组件

1. 指示句子某部分重要的标签<strong>和<em>的语义表达不够充分,并且它们强调警告和极其严重的情况,缺乏一种积极活泼的指示重要.  
2. 在使用者的角度分析此组件的使用情况,设计出具体的接口和API.
```
{/* It should be able to wrap images */}
<Sparkles>
  <img src="gold-cat.png" alt="A golden cat statue" />
</Sparkles>
{/* It should also be able to wrap inline text */}
<p>
  Next race: <Sparkles>Rainbow Road</Sparkles>.
</p>
```
3. 创建一个闪烁星星的svg assets
4. 创建生成一个sparkle具体需要的数据,包括:
```
{
   id: String(random(10000, 99999)),
   createdAt: Date.now(),
   // Bright yellow color:
   color,
   size: random(10, 20),
   style: {
      // Pick a random spot in the available space
      top: random(0, 100) + '%',
      left: random(0, 100) + '%',
      // Float sparkles above sibling content
      zIndex: 2,
   },
}
```
5. 设计闪烁动画,包含旋转的收缩两部分,如果两个动画放在一个元素上，会很生硬，因此需要增加一个父wrapper，用于
   承载不同的动画.  
6. sparckles是一组sparckle,设计一组合理的清理过程,这里根据时间来过滤.  
7. 如果没有启用动画，应该注意此组件的可访问性. 
8. 合并以上的过程,编码实现组件. 