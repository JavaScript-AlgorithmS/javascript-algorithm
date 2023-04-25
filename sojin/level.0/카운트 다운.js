import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-25
 * **/

/** 문제 설명
정수 start와 end가 주어질 때, start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.**/

function solution(start, end) {
  const answer = [];
  for (let i = start; end <= i; i--) {
    answer.push(i);
  }
  return answer;
}

function main() {
  const start = 10;
  const end = 3;
  const result = [10, 9, 8, 7, 6, 5, 4, 3];

  checkAnswer(JSON.stringify(solution(start, end)) === JSON.stringify(result));
}

main();
