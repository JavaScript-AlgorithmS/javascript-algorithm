import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-10
 * **/

/** 문제 설명
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요. **/

function solution(my_string, s, e) {
  let arr = my_string.split("");
  let reversed = arr.slice(s, e + 1).reverse();
  arr.splice(s, e - s + 1, ...reversed); // 배열의 내용을 변경하는 splice 메서드
  return arr.join("");
}

function main() {
  const my_string = "Progra21Sremm3";
  const s = 6;
  const e = 12;
  const result = "ProgrammerS123";

  checkAnswer(result == solution(my_string, s, e));
}

main();
