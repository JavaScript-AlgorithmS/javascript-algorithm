import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-09-26
 * **/

/** 문제 설명
문자열 my_string, overwrite_string과 정수 s가 주어집니다. 
문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
+ splice는 배열의 내용을 바꾸고, replace는 문자열을 바꿔준다. **/

function solution(my_string, overwrite_string, s) {
  const myStr = [...my_string];
  myStr.splice(s, overwrite_string.length, overwrite_string);
  return myStr.join("");
}

/**
 * function solution(my_string, overwrite_string, s) {
 * const before = my_string.slice(0,s); // 원래 있던 부분
 * const after = my_string.slice(s + overwrite_string.length); // 새로 들어갈 부분
 *
 * return before + overwrite_string + after;
 * }
 */

function main() {
  const my_string = "He11oWor1d";
  const overwrite_string = "lloWorl";
  const s = 2;
  const result = "HelloWorld";

  checkAnswer(solution(my_string, overwrite_string, s) === result);
}

main();
