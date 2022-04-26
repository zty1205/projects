// 泛型

// function plu(a1: number): number {
//  return a1;
// }

// 编译器要求你在函数体必须正确的使用这个通用的类型。 换句话说，你必须把这些参数当做是任意或所有类型。但 T 本身无任何属性和方法
export function plus<T>(a1: T): T {
  return a1;
}

// 使用<>声明T的类型可忽略
let p1 = plus<string>('11');
