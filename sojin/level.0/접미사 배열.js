import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-23
 * **/

/** 문제 설명
어떤 문자열에 대해서 접미사는 특정 인덱스부터 시작하는 문자열을 의미합니다. 예를 들어, "banana"의 모든 접미사는 "banana", "anana", "nana", "ana", "na", "a"입니다.
문자열 my_string이 매개변수로 주어질 때, my_string의 모든 접미사를 사전순으로 정렬한 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
**/

function solution(my_string) {
  const answer = [];
  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.substring(i));
  }
  answer.sort(); // 문자열을 사전순으로 정렬할때는 .sort() 사용한다.

  return answer;
}

function main() {
  const my_string = "banana";
  const result = ["a", "ana", "anana", "banana", "na", "nana"];

  checkAnswer(JSON.stringify(solution(my_string)) === JSON.stringify(result));
}

main();
