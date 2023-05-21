import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-21
 * **/

/** 문제 설명
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
**/

function solution(num, k) {
  const string = num.toString();
  for (let i = 0; i < string.length; i++) {
    if (Number(string[i]) === k) {
      return i + 1;
    }
  }
  return -1;
}

function main() {
  const num = 29183;
  const k = 1;
  const result = 3;

  checkAnswer(solution(num, k) === result);
}

main();
