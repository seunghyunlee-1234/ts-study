import { input } from './input';
import { AuthService } from './service/auth-service';

const authService: AuthService = new AuthService();
const app = async () => {
  while (true) {
    const choice = await input(
      'Are you signing up(0) or logging in(1)? or exit(2):  ',
    );
    const numberChoice = parseInt(choice);
    if (numberChoice === 0) {
      const email = await input('What is your email?:');
      const password = await input('What is your password?:');
      const username = await input('What is your username?:');
      const isSignUpSuccess = authService.signUp(email, password, username);
      if (isSignUpSuccess) {
        console.log('Sign Up Complete!');
      } else {
        console.log('Email already exist!');
      }
    } else if (numberChoice === 1) {
      const email = await input('What is your email?:');
      const password = await input('What is your password?:');
      const isSignInSuccess = authService.signIn(email, password);
      if (isSignInSuccess) {
        console.log('Welcome');
        break;
      } else {
        console.log('Invalid Email or Password!');
      }
    } else {
      console.log('프로그램을 종료합니다.');
      process.exit();
    }
  }

  // 홈 화면
  console.log('반복문이 종료되었다!');
  // 게시글 작성해보기
  // 게시글 삭제해보기
  // 게시글 수정해보기
};
app();
