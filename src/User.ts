class User {
  // 인스턴스 변수
  private nickname: string;
  private age: number;
  private isStudent: boolean;

  // 생성자
  constructor(nickname: string, age: number, isStudent: boolean) {
    this.nickname = nickname;
    this.age = age;
    this.isStudent = isStudent;
  }
}

const user1 = new User("이승현", 11, true);
console.log(user1)
const user2 = new User("박승현", 19, true);
console.log(user2)

export default User;
