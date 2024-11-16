"use strict";
// 변수와 값
// 오른쪽에 있는 값을 왼쪽의 변수에 대입한다
const x = 1;
const y = 2;
console.log(x);
console.log(y);
// 문자열 포멧팅: 문자열 안에 변수를 삽입해서 출력
console.log(`x = ${x}, y = ${y}`);
const nickname = '이승현';
const age = 11;
const isStudent = true;
const person = {
    nickname: '이승현',
    age: 11,
    isStudent: true,
};
const person2 = {
    nickname: '박승현',
    age: 19,
    isStudent: true,
};
console.log(nickname);
console.log(age);
console.log(isStudent);
console.log(person);
console.log(`내 이름은 ${person.nickname}이다. 나는 ${person.age}살이다.`);
// 연산자
// =, +, -, x, /, +=, %
let z = 1;
z = z + 100;
z += 100;
console.log(z);
// 배열
const people = [person];
console.log(`내 이름은 ${people[0].nickname}이다. 나는 ${people[0].age}살이다.`); // 이승현의 프로필
// 조건문
// if (이 조건이 참이라면) {
//     이것을 실행한다
// } else if (또는 이 조건이 참이라면) {
//     이것을 실행한다
// } else {
//     이것을 실행한다
// }
if (person.isStudent === true) {
    console.log(`${person.nickname}은 학생입니다`);
}
else {
    console.log(`${person.nickname}은 학생이 아닙니다`);
}
// 함수
const makeUserProfileString = (user) => {
    if (user.isStudent === true) {
        return `내 이름은 ${user.nickname}이다. 나는 ${user.age}살이다. 나는 학생이다`;
    }
    else {
        return `내 이름은 ${user.nickname}이다. 나는 ${user.age}살이다. 나는 학생이 아니다`;
    }
};
const profileString = makeUserProfileString(person);
console.log(profileString);
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
