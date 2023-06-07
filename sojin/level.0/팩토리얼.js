import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-06-07
 * **/

/** 문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

i! ≤ n **/

function solution(n) {
  let answer = 1;
  for (let i = 1; i <= n; i++) {
    answer *= i;
    if (answer === n) {
      return i;
    } else if (answer > n) {
      //answer가 n보다 크면 현재 i보다 작은 수가 팩토리얼 값이 n을 넘어섰음을 의미함.
      return i - 1;
    }
  }
}

function main() {
  const n = 3628800;
  const result = 10;

  checkAnswer(solution(n) === result);
}

main();
