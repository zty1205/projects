import { Person1 } from './modules/interface';

// 接口
let p1 = new Person1({
  name: 'zty',
  id: 123456
});
console.log('p1 speak: ', p1.speak());
