import Array from './Array';
import Item from './Item';

const items = [
  new Item('쿠크다스', 2500),
  new Item('새우깡', 1300),
  new Item('빼빼로', 1200),
  new Item('빈츠', 3200),
];

const array = new Array(items);
const iter = array.iterator();

while (iter.next()) {
  const items = iter.current();
  const domItem = document.createElement('div');
  domItem.innerHTML = `${items.name}: ${items.cost}원`;
  document.body.appendChild(domItem);

  domItem.classList.add('iterator-item');
}

/* 
Iterator 패턴은 배열이나 Linked-List, Tree처럼 다른 자료구조를 갖는 Aggregator의 구성항목을
표준화된 공통 API로 접근할 수 있음

자료구조가 다른 Aggregator일 지라도 구성항목을 표준화된 공통 API로 접근할 수 있으므로
하나의 공통된 알고리즘으로 처리할 수 있음
*/
