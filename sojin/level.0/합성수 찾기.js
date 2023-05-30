import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-30
 * **/

/** 문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
**/

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    // 합성수는 1보다 큰 자연수이므로, 1부터 n까지의 수를 확인
    if (countDivisor(i) >= 3) {
      answer++;
    }
  }
  return answer;
}

function countDivisor(number) {
  // 약수의 개수를 세는 함수
  let count = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    // 제곱근까지만 순회하여 계산 효율성을 높임
    if (number % i === 0) {
      if (i === Math.sqrt(number)) {
        // 제곱근과 같다면 제곱근 약수이므로 +1
        count++;
      } else {
        count += 2; // 아니라면 서로 다른 약수 2개를 의미하므로 +2
      }
    }
  }
  return count;
}

/**
 * function solution(n) {
  let answer = 0;
  for (let i = 4; i <= n; i++) { // 2와 3은 소수이기 때문에 이미 제외
    for (let j = 2; j < i; j++) {
      if (i % j === 0) { // 나누어 떨어지면 i는 j의 배수이므로 합성어
        answer += 1;
        break;
      }
    }
  }
  return answer;
}
 */

function main() {
  const n = 10;
  const result = 5;

  checkAnswer(solution(n) === result);
}

main();
