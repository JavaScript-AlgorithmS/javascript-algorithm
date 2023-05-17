import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-17
 * **/

/** 문제 설명
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.**/

function solution(my_string, num1, num2) {
  const array = Array.from(my_string); // split은 구분자를 기준으로 나누기 때문에 Array.from을 사용하여 유사배열객체 사용
  [array[num1], array[num2]] = [array[num2], array[num1]]; // 구조분해할당
  return array.join("");
}

function main() {
  const my_string = "hello";
  const num1 = 1;
  const num2 = 2;
  const result = "hlelo";

  checkAnswer(solution(my_string, num1, num2) === result);
}

main();
