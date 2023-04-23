import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-23
 * **/

/** 문제 설명
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요..**/

function solution(start, end) {
  const answer = [];
  for (let i = start; i <= end; i++) {
    answer.push(i);
  }
  return answer;
}

function main() {
  const start = 3;
  const end = 10;
  const result = [3, 4, 5, 6, 7, 8, 9, 10];

  checkAnswer(JSON.stringify(solution(start, end)) === JSON.stringify(result));
}

main();
