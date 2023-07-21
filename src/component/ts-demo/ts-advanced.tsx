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

getName(()=>'54');

//类型别名常用于联合类型

//字符串字面量类型 约束取值只能是某几个字符串中的一个.
type EventName = 'click' | 'mousemove' | 'scroll';
function handleEvent(ele:Element, event: EventName){
    console.log(ele);
    console.log(event);
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'.

// 数组合并相同类型对象，元组合并不同类型对象
const tom: [string, number] = ['Tom', 25];
tom[0].slice(1);
tom[1].toFixed(2);

// 直接对元组类型的变量进行初始化或者赋值的时候，需要提供所有元组类型中指定的项,然后可以分别赋值

let tom1: [string, number];
tom1 = ['Tom', 25];
console.log(tom1);

// let tom: [string, number];
// tom = ['Tom']; 这里会编译报错

// 元祖可以越界
let tom2: [string, number]; 
tom2 = ['Tom', 25];
tom2.push('male');
// tom2.push(true); 编译报错
//console.log(tom2);

// es6中类的实现
class Animal {
    //name;
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `My name is ${this.name}`;
    }

    static isAnimal(a) {
        return a instanceof Animal;
    }

    set name(value:string) {
        
    }

    get name() {
        return this.name;
    }
}

const a = new Animal('Jack');
a.name = 'Kate Green';
Animal.isAnimal(a);
//console.log(a.sayHi());

class TomCat extends Animal {
    constructor(name) {
        super(name);
    }

    sayHi() {
        return 'Miyelow, '+super.sayHi();
    }
}

const c = new TomCat('Tom'); // Tom
// console.log(c.sayHi());

// 参数属性
class ParamAnimal {
    // public name: string;
    readonly age;
    public constructor(public name, age, public readonly pass) {
      // this.name = name;
      this.age = age;
    }
}

const paramAnimal = new ParamAnimal('paramAnimal',15,'6688');
// console.log(paramAnimal.name);
// 一下编译报错
// paramAnimal.age = 20;
// paramAnimal.pass = 555;

//抽象类不能实例化,子类必须实现抽象方法

// 泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

// 声明合并 如果定义了两个相同名字的函数、接口或类，那么它们会合并成一个类型：
interface Alarm {
    price: number;
}
interface Alarm {
    weight: number;
}

// 合并的属性的类型必须是唯一的：

//交叉类型
interface Ant {
    name: string;
    weight:number;
}

interface Fly {
    flyWeight:number;
    speed:number;
}

const FlyAnt: Ant & Fly = {
    name: '',
    weight:50,
    flyWeight:80,
    speed: 100
};
// 把所有类型叠加到一起成为一种新类型,它包含所有类型的特性
// 交叉类型的返回类型既要符合Ant，又要符合Fly

//联合类型
class Bird {
    fly() {

    }
    layEggs() {

    }
}

class Fish {
    swim() {

    }
    layEggs() {
        
    }
}

const bird = new Bird();
const fish = new Fish();

const start = function(pet: Bird | Fish) {
    pet.layEggs();
    // 以下编译报错
    // pet.swim();
    // pet.fly();
}

//type Exclude<T,U> = T extends U ? T :never;
// https://blog.csdn.net/weixin_44051815/article/details/124182060

// 类型映射
interface Person {
    name:string;
    age:number;
    gender:number;
}

type ReadOnlyType<T> =  {
    readonly [p in keyof T] : T;
}

type ReadOnlyPerson = ReadOnlyType<Person>;

// https://blog.csdn.net/Magneto7/article/details/121489097

// 类型兼容性说明:确定一个类型是否可以赋值给其他类型
// 如果x要兼容y,那么y至少要具有x相同的属性。


// Exclude使用
type myUnionType = "🍇" | "🍎" | "🫐" | "🍋";

// This works!
const lemon:myUnionType = "🍋"
 
const noLemonsPlease:Exclude<myUnionType, "🍋"> = "🍇";
//  ^
//  └ - - Type is  "🍇" | "🍎" | "🫐"

const noApplesOrLemons:Exclude<myUnionType, "🍋" | "🍎"> = "🍇";
//  ^
//  └ - - Type is  "🍇" | "🫐"

const onlyRaspberries:Exclude<myUnionType, "🍋" | "🍎" | "🫐"> = "🍇";
//  ^
//  └ - - Type is  "🍇"

const backToLemons:myUnionType = "🍋"
//  ^
//  └ - - Type is  "🍇" | "🍎" | "🫐" | "🍋"
export {}