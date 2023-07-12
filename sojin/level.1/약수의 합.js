import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-12
 * **/

/** 문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요. **/

function solution(n) {
  let answer = 0;

  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

function main() {
  const n = 12;
  const result = 28;

  checkAnswer(solution(n) === result);
}

main();
