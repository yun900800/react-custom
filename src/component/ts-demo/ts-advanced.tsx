import { createUnzip } from "zlib";

// type alias
type Name = string;
type NameResolver  = ()=> string;
type NameOrResolver = Name | NameResolver;

function getName(n: NameOrResolver) {
    if (typeof n === 'string') {
        return n;
    } 
    return n();
}

//类型别名常用于联合类型

//字符串字面量类型 约束取值只能是某几个字符串中的一个.
type EventName = 'click' | 'mousemove' | 'scroll';
function handleEvent(ele:Element, event: EventName){

}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'.

// 数组合并相同类型对象，元素合并不同类型对象
let tom: [string, number] = ['Tom', 25];
tom[0].slice(1);
tom[1].toFixed(2);

// 直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项,然后可以分别赋值

let tom1: [string, number];
tom1 = ['Tom', 25];

// let tom: [string, number];
// tom = ['Tom']; 这里会编译报错

// 元祖可以越界
let tom2: [string, number]; 
tom2 = ['Tom', 25];
tom2.push('male');
// tom2.push(true); 编译报错
console.log(tom2);