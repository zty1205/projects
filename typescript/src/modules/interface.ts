// 定义一个接口
export interface IAnyObject {
  [propName: string]: any; // 可索引的类型
}

// 接口继承
export interface OnePerson extends IAnyObject {
  name: string; // 必填
  sex?: 0 | 1; // 可选
  readonly id: number; // 初始赋值后不可改变
  speak(): string; // 函数
}
