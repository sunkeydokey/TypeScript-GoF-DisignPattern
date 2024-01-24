import { King } from './King';

// const king = new King();
// 'King' 클래스의 생성자는 private이며 클래스 선언 내에서만 액세스할 수 있습니다.

const king = King.getInstance();
king.sayHello();

const king2 = King.getInstance();
if (king === king2) console.log('king and king2 are equal');
else console.log('king and king are not equal');

/* 
  Singleton 패턴은 특정 클래스의 인스턴스가 오직 한개만 존재함을 보장함

  Singleton 패턴이 적용된 클래스의 인스턴스는 미리 생성해 놓거나 사용될 때 생성할 수 있음
*/
