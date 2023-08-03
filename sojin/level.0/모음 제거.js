import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-20
 * **/

/** 문제 설명
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.**/

function solution(my_string) {
  return my_string.replaceAll(/[aeiou]/g, ""); // g플래그는 global search(전역 검색)을 의미한다.
}

/** includes는 배열 메소드이자 문자열 메소드이다.
 * function solution(my_string) {
    return Array.from(my_string).filter(t => !['a', 'e', 'i', 'o', 'u'].includes(t)).join('');
}
 */

function main() {
  const my_string = "bus";
  const result = "bs";

  checkAnswer(solution(my_string) === result);
}

main();
