import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-21
 * **/

/** 문제 설명
정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.
**/

function solution(n) {
  const answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer;
}

function main() {
  const n = 24;
  const result = [1, 2, 3, 4, 6, 8, 12, 24];

  checkAnswer(JSON.stringify(solution(n)) === JSON.stringify(result));
}

main();
