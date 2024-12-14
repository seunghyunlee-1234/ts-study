// 과일이라는 타입을 정의합니다.
type fruitType = {
  name: string;
  color: string;
};

// 사과 객체를 정의합니다.
const apple: fruitType = {
  name: 'apple',
  color: 'red',
};

// 여러개의 과일 정보를 담을 배열 fruits 를 정의합니다.
const fruits: fruitType[] = [];

// 과일 배열 fruits 에 apple 객체를 추가합니다.
fruits.push(apple);

// todo: banana, melon 2개의 과일 객체를 정의하고 배열에 추가해주세요
const banana = {
  name: 'banana',
  color: 'yellow',
};
const melon = {
  name: 'melon',
  color: 'green',
};
fruits.push(banana);
fruits.push(melon);

// todo: 반복문을 사용해서 모든 과일의 정보를 아래처럼 출력하세요.
// 예시: "The color of an apple is red."
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i].name[0] === 'a') {
    console.log(`The color of an ${fruits[i].name} is ${fruits[i].color}.`);
  } else {
    console.log(`The color of a ${fruits[i].name} is ${fruits[i].color}.`);
  }
}
