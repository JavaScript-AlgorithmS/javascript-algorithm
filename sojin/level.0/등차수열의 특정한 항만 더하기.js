import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-09-27
 * **/

/** 문제 설명
두 정수 a, d와 길이가 n인 boolean 배열 included가 주어집니다. 
첫째항이 a, 공차가 d인 등차수열에서 included[i]가 i + 1항을 의미할 때, 이 등차수열의 1항부터 n항까지 included가 true인 항들만 더한 값을 return 하는 solution 함수를 작성해 주세요.
 **/

function solution(a, d, included) {
  let sum = 0;
  for (let i = 0; i < included.length; i++) {
    if (included[i]) {
      sum += a + d * i;
    }
  }
  return sum;
}

function main() {
  const a = 3;
  const d = 4;
  const included = [true, false, false, true, true];
  const result = 37;

  checkAnswer(solution(a, d, included) === result);
}

main();
