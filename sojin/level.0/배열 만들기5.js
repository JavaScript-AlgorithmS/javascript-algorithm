import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-10-06
 * **/

/** 문제 설명
문자열 배열 intStrs와 정수 k, s, l가 주어집니다. intStrs의 원소는 숫자로 이루어져 있습니다.
배열 intStrs의 각 원소마다 s번 인덱스에서 시작하는 길이 l짜리 부분 문자열을 잘라내 정수로 변환합니다.
이때 변환한 정수값이 k보다 큰 값들을 담은 배열을 return 하는 solution 함수를 완성해 주세요.
 **/

function solution(intStrs, k, s, l) {
  let answer = [];
  for (let str of intStrs) {
    let slice = Number(str.substr(s, l));
    if (slice > k) {
      answer.push(slice);
    }
  }
  return answer;
}

/**
 * function solution(intStrs, k, s, l) {
 * return inStrs.map((v) => +v.slice(s, s+l).filter((v) => v > k);
 * }
 */

function main() {
  const intStrs = ["0123456789", "9876543210", "9999999999999"];
  const k = 50000;
  const s = 5;
  const l = 5;
  const result = [56789, 99999];

  checkAnswer(
    JSON.stringify(solution(intStrs, k, s, l)) === JSON.stringify(result)
  );
}

main();
