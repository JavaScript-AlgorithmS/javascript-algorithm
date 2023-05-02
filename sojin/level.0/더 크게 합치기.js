import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-02
 * **/

/** 문제 설명
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

12 ⊕ 3 = 123
3 ⊕ 12 = 312
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.**/

function solution(a, b) {
  const sum1 = Number(`${a}${b}`);
  const sum2 = Number(`${b}${a}`);
  return sum1 > sum2 ? sum1 : sum2;
}

function main() {
  const a = 9;
  const b = 91;
  const result = 991;

  checkAnswer(solution(a, b) === result);
}

main();
