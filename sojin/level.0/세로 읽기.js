import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-10
 * **/

/** 문제 설명
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요. **/

function solution(my_string, m, c) {
  let answer = "";
  for (let i = c - 1; i < my_string.length; i += m) {
    // 시작 인덱스를 c-1로 설정하고, m만큼 증가시킨다
    answer += my_string[i];
  }
  return answer;
}

function main() {
  const my_string = "ihrhbakrfpndopljhygc";
  const m = 4;
  const c = 2;
  const result = "happy";

  checkAnswer(result == solution(my_string, m, c));
}

main();
