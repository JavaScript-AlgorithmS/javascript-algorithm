import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-01
 * **/

/** 문제 설명
어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.**/

function solution(n) {
  const sqrt = Math.floor(Math.sqrt(n));
  if (n % sqrt === 0) {
    return 1;
  } else {
    return 2;
  }
}

/**
 * function solution(n) {
    if(Math.sqrt(n) % 1 === 0){
        return 1;
    }
    
    return 2;
}
 */

function main() {
  const n = 144;
  const result = 1;

  checkAnswer(solution(n) === result);
}

main();
