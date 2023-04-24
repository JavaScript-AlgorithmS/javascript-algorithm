import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-24
 * **/

/** 문제 설명
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.**/

function solution(my_string, k) {
  return my_string.repeat(k);
}

function main() {
  const my_string = "string";
  const k = 3;
  const result = "stringstringstring";

  checkAnswer(solution(my_string, k) === result);
}

main();
