import { BoxDecorator } from './BoxDecorator';
import { SideDecorator } from './SideDecorator';
import { Strings } from './Strings';

const string = new Strings();

string.add('Hi');
string.add('I am sunkeydokey.');
string.add('I am Front-end Developer.');
string.add('Study Design Patterns.');

const preDom = document.querySelector('pre');

string.print(preDom);

const sideDecorator = new SideDecorator(string, '"');
sideDecorator.print(preDom);

const boxDecorator = new BoxDecorator(string);
boxDecorator.print(preDom);
const boxDecorator2 = new BoxDecorator(sideDecorator);
boxDecorator2.print(preDom);

/* 
  Decorator 패턴은 어떤 객체에 기능을 적용할 때 그 객체와 적용될 기능을 동일시할 수 있음

  데이터와 기능을 동일시할 수 있으므로 다양한 기능을 중첩해서 적용할 수 있으며 적용되는 기능의 순서에 따라 다른 결과를 얻을 수 있음
*/
