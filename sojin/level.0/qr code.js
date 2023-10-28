import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-27
 * **/

/** 문제 설명
두 정수 q, r과 문자열 code가 주어질 때, code의 각 인덱스를 q로 나누었을 때 나머지가 r인 위치의 문자를 앞에서부터 순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요. **/

function solution(q, r, code) {
  let answer = "";
  for (let i = 0; i < code.length; i++) {
    if (i % q === r) {
      answer += code[i];
    }
  }
  return answer;
}

/** _를 사용하여 첫번째 인자를 무시한다.
 * function solution(q, r, code) {
 *  return [...code].filter((_, i) => i % q === r).join('');
 * }
 */

function main() {
  const q = 3;
  const r = 1;
  const code = "qjnwezgrpirldywt";
  const result = "jerry";

  checkAnswer(solution(q, r, code) === result);
}

main();
