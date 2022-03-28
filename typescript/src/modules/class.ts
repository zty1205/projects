import { IAnyObject, OnePerson } from './interface';

// 接口使用2-类
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

// 继承一个类
export class Person2 extends Person1 {
  public child: Person1[]; // public：自由访问类的属性 可省略
  protected age: number; // protected 成员在派生类中仍然可以访问
  private telephone: string; // 不能在声明它的类的外部访问

  static COUNTRY = 'CHINA'; // static：静态成员，可通过类直接访问

  constructor(props: IAnyObject) {
    super(props);
    this.age = props.age;
    this.child = props.child || [];
    this.telephone = props.telephone;
  }

  // get set：属性拦截器
  get children(): string {
    return this.child.map((x) => x.name).join();
  }
}

// 抽象类 抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。派生类必须实现抽象类的抽象成员
export abstract class Man {
  abstract myCountry(): string;
}

export class Man1 extends Man {
  myCountry() {
    return 'china';
  }
}
