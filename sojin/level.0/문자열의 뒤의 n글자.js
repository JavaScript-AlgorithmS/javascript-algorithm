import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-25
 * **/

/** 문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.**/

function solution(my_string, n) {
  return my_string.slice(my_string.length - n);
}

function main() {
  const my_string = "ProgrammerS123";
  const n = 11;
  const result = "grammerS123";

  checkAnswer(solution(my_string, n) === result);
}

main();
