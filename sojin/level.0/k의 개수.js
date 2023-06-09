import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-06-09
 * **/

/** 문제 설명
1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요. **/

function solution(i, j, k) {
  let answer = 0;

  for (let num = i; num <= j; num++) {
    let numString = String(num);
    let count = numString.split(k).length - 1; // k의 등장 횟수를 계산하기 위해 -1을 해야한다.
    answer += count;
  }
  return answer;
}

function main() {
  const i = 1;
  const j = 13;
  const k = 1;
  const result = 6;

  checkAnswer(solution(i, j, k) === result);
}

main();
