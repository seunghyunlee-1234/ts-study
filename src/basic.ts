// 변수와 값

// 타입 종류
// 문자열: string
// 숫자: number
// 불: boolean
// 내가 맘대로 정의하는 타입
type person = {
  name: string;
  age: number;
  isStudent: boolean;
};

// is_student: 파이썬, ...
// isStudent: 자바스크립트, 타입스크립트, ...
// IsStudent: 자바, c#, ...
const name1: string = '이승현';
const age1: number = 11;
const isStudent1: boolean = true;

const name2: string = '삼승현';
const age2: number = 31;
const isStudent2: boolean = false;

// 연산자
// =, +, -, x, /, +=, %
let x: number = 1;
x = x + 100;
x += 100;
console.log(x);
console.log(x % 100);
console.log(x / 100);

// 출력
// 문자열 포멧팅
console.log(name1);
console.log(age1);
console.log(isStudent1);
console.log(`내 이름은 ${name1}이다. 나는 ${age1}살이다.`); // 이승현의 프로필
console.log(`내 이름은 ${name2}이다. 나는 ${age2}살이다.`); // 삼승현의 프로필

// json 객체
// 키, 값
const person1: person = {
  name: '이승현',
  age: 11,
  isStudent: true,
};
const person2: person = {
  name: '삼승현',
  age: 31,
  isStudent: false,
};
console.log(`내 이름은 ${person1.name}이다. 나는 ${person1.age}살이다.`); // 이승현의 프로필
console.log(`내 이름은 ${person2.name}이다. 나는 ${person2.age}살이다.`); // 삼승현의 프로필

// 배열
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
const people = [person1, person2];
console.log(`내 이름은 ${people[0].name}이다. 나는 ${people[0].age}살이다.`); // 이승현의 프로필
console.log(`내 이름은 ${people[1].name}이다. 나는 ${people[1].age}살이다.`); // 삼승현의 프로필

// 조건문
// if (이 조건이 참이라면) {
//     이것을 실행한다
// } else if (또는 이 조건이 참이라면) {
//     이것을 실행한다
// } else {
//     이것을 실행한다
// }
if (person2.isStudent === true) {
  console.log('학생입니다');
} else {
  console.log('학생이 아닙니다');
}

const printProfile = () => {
  console.log(12345);
  return '이승현';
};

const y = printProfile();

console.log('-------------------');
console.log(`내 이름은 ${people[0].name}이다. 나는 ${people[0].age}살이다.`); // 이승현의 프로필
if (people[0].isStudent === true) {
  console.log('학생입니다');
} else {
  console.log('학생이 아닙니다');
}
console.log('-------------------');

console.log('-------------------');
console.log(`내 이름은 ${people[1].name}이다. 나는 ${people[1].age}살이다.`); // 이승현의 프로필
if (people[1].isStudent === true) {
  console.log('학생입니다');
} else {
  console.log('학생이 아닙니다');
}
console.log('-------------------');

// 반복문
// while (조건이 참이면) {
//     이것을 반복한다
// }
// 조건이 참이 아니면 빠져나온다
// i = 1;
// while (i <3){
//   console.log("hello")
//     i=i+1
//     }

// x = 7;
// i = 1;
// while (i <10){
//     console.log(`${x} x ${i} = ${x * i}`);
//     i = i+1;
// }
// x = 2;
// while (x < 10) {
//     i = 1;
//     while (i < 10) {
//         console.log(`${x} x ${i} = ${x * i}`);
//         i = i + 1;
//         console.log(`..........`)
//     }
//     x = x + 1;
//     console.log(`___________`)
// }

// 반복문
let i = 1;
while (i < 10) {
  console.log(i);
  i += 1;
}

i = 1;
while (true) {
  console.log(i);
  i += 1;
  if (i === 10) {
    break;
  }
}

for (let i = 1; i < 10; i++) {
  console.log(i);
}
for (let i = 1; i < 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// 함수
const addOne = (x: number) => {
  x = x + 1;
  return x;
};

const output1 = addOne(200);
console.log(output1);

const multiplyTwo = (x: number) => {
  x = x * 2;
  return x;
};
console.log(multiplyTwo(153621));
// 프로필을 출력해보자
// 내 이름은 이승현이다. 나는 11살이다.
// 나는 학생이다.

const printprofile = (person: person) => {
  console.log(`My name is ${person.name}. I am ${person.age} years old.`);
  console.log('I am a student.');
};
printprofile(person2);
