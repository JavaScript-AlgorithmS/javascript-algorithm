import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-07-15
 * **/

/** 문제 설명
자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다.
-> 가장 작은 자연수를 구할 때 초기값을 2부터 시작하는 부분이 포인트!
**/

function solution(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

function main() {
  const n = 10;
  const result = 3;

  checkAnswer(solution(n) === result);
}

main();
