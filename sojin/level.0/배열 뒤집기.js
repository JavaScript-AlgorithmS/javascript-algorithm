import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-05
 * **/

/** 문제 설명
정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요. **/

function solution(num_list) {
  return num_list.reverse();
}

function main() {
  const num_list = [1, 2, 3, 4, 5];
  const result = [5, 4, 3, 2, 1];

  checkAnswer(JSON.stringify(solution(num_list)) === JSON.stringify(result));
}

main();
