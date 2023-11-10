import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-08
 * **/

/** 문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.**/

function solution(x) {
  const sum = String(x)
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0); //reduce 함수는 두개의 인자를 가지고, acc는 누적값 cur은 현재 인덱스를 나타낸다. 두번째 인자인 0은 초기값이다.
  return x % sum === 0;
}

function main() {
  const x = 10;
  const result = true;

  checkAnswer(solution(x) === result);
}

main();
