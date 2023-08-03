import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-18
 * **/

/** 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요. **/

function solution(numbers) {
  const answer = [];
  for (let num of numbers) {
    answer.push(num * 2);
  }
  return answer;
}

/** map을 사용한 풀이
 * function solution(numbers) {
 * return numbers.map((v) => v * 2)
 * }
 */

/** reduce를 사용한 풀이
 * function solution(numbers) {
return numbers.reduce((a, b) => [...a, b * 2], []);
}
 */

function main() {
  const numbers = [1, 2, 3, 4, 5];
  const result = [2, 4, 6, 8, 10];

  checkAnswer(JSON.stringify(solution(numbers)) === JSON.stringify(result));
}

main();
