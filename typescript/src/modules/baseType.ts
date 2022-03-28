// 基础类型

let bol: boolean = true; //  布尔值
let num: number = 1; // 数字
let str: string = 'str'; // 字符串

let arr1: Array<number> = [1, 2]; //  数组
let arr2: number[] = [1, 2]; //  数组

let tuple: [string, number] = ['str', 1]; // 元祖
let l: number | string = '1'; // 联合类型 number or string

// 枚举 默认从0开始累加1，可以指导开始下标
enum Color {
  Red = 1,
  Green,
  Blue
}

// 不确定的类型
let notSure: any = 4;

// void 没有类型
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null
let unusable: void = undefined;
// 常用于没有返回值的函数
function noop(): void {}

// null 和 undefined 也有自己的类型， 但用处不大
let u: undefined = undefined;
let n: null = null;

// never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
  return error('Something failed');
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}

// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
function create(o: object | null): void {}

// 类型断言有两种形式。 其一是“尖括号”语法, 上面的就是
// 另一个为as语法， 然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
let strLength: number = (l as string).length;
