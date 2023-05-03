import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-03
 * **/

/** 문제 설명
정수 리스트 num_list가 주어질 때, 마지막 원소가 그전 원소보다 크면 마지막 원소에서 그전 원소를 뺀 값을 마지막 원소가 그전 원소보다 크지 않다면 마지막 원소를 두 배한 값을 추가하여 return하도록 solution 함수를 완성해주세요..**/

function solution(num_list) {
  const lastIdx = num_list.length - 1;
  const sec = num_list.length - 2;
  if (num_list[lastIdx] > num_list[sec]) {
    num_list.push(num_list[lastIdx] - num_list[sec]);
  } else {
    num_list.push(num_list[lastIdx] * 2);
  }
  return num_list;
}

/**
 * function solution(num_list) {
    const [sec, last] = num_list.slice(-2);
    last > sec ? num_list.push(last - sec) : num_list.push(last * 2);
    return num_list;
}
 */

function main() {
  const num_list = [2, 1, 6];
  const result = [2, 1, 6, 5];

  checkAnswer(JSON.stringify(solution(num_list)) === JSON.stringify(result));
}

main();
