// 定义一个接口
interface IAnyObject {
  [propName: string]: any; // 可索引的类型
}

// 接口继承
interface OnePerson extends IAnyObject {
  name: string; // 必填
  sex?: 0 | 1; // 可选
  readonly id: number; // 初始赋值后不可改变
  speak(): string; // 函数
}

// 使用1-函数
function p(person: OnePerson): void {
  console.log('name = ', p.name);
}

// 使用2-类
export class Person1 implements OnePerson {
  name: string;
  id: number;
  constructor(props: IAnyObject) {
    this.name = props.name;
    this.id = props.id;
  }
  speak(): string {
    return `my name is ${this.name}`;
  }
}
