// 装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上。 装饰器使用 @expression 这种形式，expression 求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

function Path(p1: string, p2: string) {
  return function (target: any) {
    console.log('类装饰器 = ', target, p1, p2);
  };
}

function enumerable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('方法装饰器 = ', target, propertyKey, descriptor);
    descriptor.enumerable = value;
  };
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('访问器装饰器');
    descriptor.configurable = value;
  };
}

function format() {
  return function (target: any, propertyKey: string) {
    console.log('属性装饰器 = ', target, propertyKey);
  };
}

function param() {
  return function (target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log('参数装饰器 = ', target, propertyKey, parameterIndex);
  };
}

// 类装饰器
@Path('/hello', 'world')
export class HelloW {
  // 属性装饰器
  @format()
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // 方法装饰器
  @enumerable(true)
  greet() {
    return 'Hello, ' + this.name;
  }

  // 访问器装饰器
  @configurable(false)
  get x() {
    return this.name;
  }

  say(@param() who: string) {
    console.log(who + this.name);
  }
}
