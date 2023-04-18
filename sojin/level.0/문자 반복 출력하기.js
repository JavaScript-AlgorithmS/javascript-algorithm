import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-18
 * **/

/** 문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요. **/

function solution(my_string, n) {
  let answer = "";
  for (const str of my_string) {
    answer += str.repeat(n);
  }
  return answer;
}

function main() {
  const my_string = "hello";
  const n = 3;
  const result = "hhheeellllllooo";

  checkAnswer(solution(my_string, n) === result);
}

main();
