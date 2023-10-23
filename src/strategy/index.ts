import GaussSumStrategy from './GaussSumStrategy';
import LoopSumStrategy from './LoopSumStrategy';
import SumPrinter from './SumPrinter';

const printer = new SumPrinter();

const dom1 = document.createElement('h1');
document.body.append(dom1);

const dom2 = document.createElement('h1');
document.body.append(dom2);

printer.print(new LoopSumStrategy(), 100, dom1);
printer.print(new GaussSumStrategy(), 100, dom2);

/*
Strategy 패턴은 어떤 기능에 대한 특정 알고리즘을 느슨하게 결합시키는 패턴

어떤 알고리즘이 느슨하게 결합되면 추후 더 나은 알고리즘으로 쉽게 변경할 수 있을 뿐만 아니라
프로그램이 실행 중에 상황에 맞는 알고리즘으로 쉽게 변경할 수 있음

기존의 알고리즘을 유지하면서 새로운 알고리즘을 효과적으로 추가할 수 있음
*/
