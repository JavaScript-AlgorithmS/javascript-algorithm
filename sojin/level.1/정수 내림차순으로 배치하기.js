import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-17
 * **/

/** 문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
**/

function solution(n) {
  return parseInt(
    //parseInt() 함수는 전역 함수이다.
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

function main() {
  const n = 118372;
  const result = 873211;

  checkAnswer(solution(n) === result);
}

main();
