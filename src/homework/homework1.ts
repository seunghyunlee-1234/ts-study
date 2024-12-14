// 과제1
// 1부터 10까지의 숫자 배열을 정의한다.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 숫자 배열 내부를 반복문으로 순회하면서 모든 값을 하나씩 출력한다.
// 참고: numbers.length: numbers 라는 배열에 들어있는 원소의 개수를 의미합니다.
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// todo: 1부터 10까지 숫자의 합을 위의 반복문의 원리를 활용해서 계산하고 출력하세요.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
