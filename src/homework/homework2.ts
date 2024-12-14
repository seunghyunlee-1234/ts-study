// 과제2
// 아래와 같은 이상한 문자열이 있습니다.
const weirdString = '5123, 1123, 1813, 1433, 5, 12, 7, 45, 94, 100';

// todo: 위에 적힌 이상한 문자열 내부에 적혀있는 모든 숫자의 합을 반복문의 원리를 활용해서 계산하고 출력하세요.
// 참고: 문자열.split("구분자") 는 구분자를 기준으로 문자열을 자른 후, 잘려진 각각을 원소로 하는 배열을 리턴합니다. 헷갈린다면 직접 출력해보세요.
// 참고: 문자를 숫자로 바꾸려면 parseInt("문자열")을 사용하세요.
// "5123, 1123, 1813, 1433, 5, 12, 7, 45, 94, 100" => 5123 + 1123 + 1813 + 1433 + 5 + 12 + 7 + 45 + 94 + 100
let sum2 = 0;
const splitWeirdString = weirdString.split(', ');
for (let i = 0; i < splitWeirdString.length; i++) {
  sum2 += parseInt(splitWeirdString[i]);
}
console.log(sum2);
