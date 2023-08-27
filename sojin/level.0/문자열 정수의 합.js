import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-26
 * **/

/** 문제 설명
문제 설명
한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.**/

function solution(num_str) {
  let answer = 0;

  for (let num of num_str) {
    answer += Number(num);
  }
  return answer;
}

function main() {
  const num_str = "123456789";
  const result = 45;
  checkAnswer(solution(num_str) === result);
}

main();
