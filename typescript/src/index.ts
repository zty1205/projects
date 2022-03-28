import { OnePerson } from './modules/interface';
import { Person1, Person2 } from './modules/class';

// 接口使用函数
function p(person: OnePerson): void {
  console.log('name = ', p.name);
}

let p1 = new Person1({
  name: 'zty',
  id: 123456
});
console.log('p1 speak: ', p1.speak());

let p1_1 = new Person1({
  name: 'ztty',
  id: 123456
});

// 类, 类也可以当接口使用
let p2 = new Person2({
  name: 'zty2',
  id: 123456,
  age: 18,
  telephone: 123456,
  child: [p1, p1_1]
});

console.log('p2 children: ', p2.children);
