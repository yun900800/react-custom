//定义一个number类型,ts是静态类型，而且是弱类型
let foo: number = 1;

let myFavoriteNumber: string = 'seven';
//编译报错
//myFavoriteNumber = 7;

//myFavoriteNumberAny可以赋值任意类型(这里是string,number,object)
let myFavoriteNumberAny: any = 'seven';
myFavoriteNumberAny = 7;
myFavoriteNumberAny = {
    a: 'name',
    b: 'age'
}

//任意类型可以访问任意属性，任意方法,操作返回任意值,未声明类型的都是任意类型
myFavoriteNumberAny.myName;

let something;
something = 'seven';
something = 7;

//编译不报错，运行报错
//something.setName('Tom');

//类型推断,初始赋值的时候进行类型推断, 没有赋值默认为any
let favoriteNumber = 'seven';
//这里默认类型推断
//favoriteNumber = 7;


//联合类型表示取值可以为多种类型中的一种
let unitVariable: string | number;
unitVariable = '';
unitVariable = 7;

//不确定联合类型的值是哪一种类型时,只能访问公共属性和方法;一旦赋值的时候，会进行类型推断
let unitVariable1: string | number;
unitVariable1 = 'seven';
//console.log(unitVariable1.length); // 5
unitVariable1 = 7;
// 编译时报错
//console.log(unitVariable1.length); 

//为什么ts的接口有两点: 对类的一部分行为的抽象，也是用于对对象形状的描述

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
};
//这里的类型是Person, 赋值的时候，变量的形状必须和接口的形状保持一致,多属性或者少属性都会编译报错
//console.log(tom.age);

//为了提高灵活性,ts提供了不完全匹配形状，也就是可选属性
interface Person1 {
    name: string;
    age?: number;
}

let tom1: Person1 = {
    name: 'Tom'
};
//此时不能添加未定义属性

//任意属性,一个接口中只能定义一个任意属性
interface Person2 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom2: Person2 = {
    name: 'Tom',
    gender: 'male'
};

//一旦定义了任意属性，那么【确定属性】和【可选属性】的类型都必须是它的类型的子集
// interface Person3 {
//     name: string;
//     age?: number;
//     [propName: string]: string;
// }

// let tom3: Person3 = {
//     name: 'Tom',
//     age: 25,
//     gender: 'male'
// };

//以上代码会编译报错
interface Person3 {
    name: string;
    age?: number;
    [propName: string]: string | number;
}

let tom3: Person3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
//使用联合属性一定任意属性的类型是一个好的设计

//只读属性
interface Person4 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom4: Person4 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

//tom.id = 9527; 只读属性不能再次赋值，编译报错; 只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候


//数组定义
let array : string[] = ["a","b","c"];

//数组泛型
let fibonacci: Array<number> = [1, 1, 2, 3, 5];

//接口定义数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci1: NumberArray = [1, 1, 2, 3, 5];

//类数组
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}

//any在数组中的应用
let list: any[] = ['xcatliu', 25, { website: 'http://devnote.pro' }];

//函数表达式, 如果左边没有声明类型，ts会进行类型推断
let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};

//用接口定义函数的形状
//函数的形状如下
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}

//可选参数值,用?表示可选参数,和接口的可选属性类似,且可选参数后面不允许再出现必需参数
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom0 = buildName('Tom');

//默认参数值，ts会将添加了默认值的参数识别为可选参数,有了默认值以后的可选参数，后面可以继续出现参数,
//添加一个默认值是一个好的最佳实践。
function buildName1(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName1('Tom', 'Cat');
let cat1 = buildName1(undefined, 'Cat');

//剩余参数
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。

//类型断言情况
//1、将一个联合类型断言为其中一个类型
interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    //如果不用类型断言这里会编译报错
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}

//2、将一个父类断言为更加具体的子类
class ApiError extends Error {
    code: number = 0;
}
class HttpError extends Error {
    statusCode: number = 200;
}

function isApiError(error: Error) {
    //这里将Error父类断言为ApiError子类
    if (typeof (error as ApiError).code === 'number') {
        return true;
    }
    return false;
}
//以上代码如果是具体类的话还可以用instanceof判断，不过instanceof 只能用在类上，不能用在接口上
//因此，如果是接口的话，还是用断言的好

//3、将任何一个类型断言为 any
//window.foo = 1; 这个会编译报错

(window as any).foo = 1;
(window as any).cache = {};

//4、将 any 断言为一个具体的类型
function getCacheData(key: string): any {
    return (window as any).cache[key];
}

interface Cat {
    name: string;
    run(): void;
}
//这里将any类型断言为Cat类型
const tom5 = getCacheData('tom') as Cat;
//tom5.run();

//5、要使得 A 能够被断言为 B，只需要 A 兼容 B 或 B 兼容 A 即可

//类型断言在编译期间,类型转化在运行期间,需要调用具体的方法
//类型断言 ===>类型声明===>泛型,在处理类型的问题上，上面的方案后面优于前面

//声明
const tom8: Cat = getCacheData('tom');

//泛型
function getCacheData1<T>(key: string): T {
    return (window as any).cache[key];
}

interface Cat6 {
    name: string;
    run(): void;
}

const tom6 = getCacheData1<Cat6>('tom');
//tom6.run();






