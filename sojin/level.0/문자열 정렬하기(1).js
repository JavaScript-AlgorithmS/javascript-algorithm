import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-11
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.**/

function solution(my_string) {
  const num = my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => parseInt(v));
  return num.sort((a, b) => a - b);
}

function main() {
  const my_string = "hi12392";
  const result = [1, 2, 2, 3, 9];

  checkAnswer(JSON.stringify(solution(my_string)) === JSON.stringify(result));
}

main();
