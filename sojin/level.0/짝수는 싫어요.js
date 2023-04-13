import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-13
 * **/

/** 문제 설명
정수 n이 매개변수로 주어질 때, n 이하의 홀수가 오름차순으로 담긴 배열을 return하도록 solution 함수를 완성해주세요.. **/

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) answer.push(i);
  }
  return answer;
}

function main() {
  const n = 10;
  const result = [1, 3, 5, 7, 9];

  checkAnswer(JSON.stringify(result) === JSON.stringify(solution(n)));
}

main();
