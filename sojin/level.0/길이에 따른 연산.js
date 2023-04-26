import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-26
 * **/

/** 문제 설명
문제 설명
정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list) {
  if (num_list.length >= 11) {
    let sum = 0;
    for (let i = 0; i < num_list.length; i++) {
      sum += num_list[i];
    }
    return sum;
  } else {
    let multi = 1;
    for (let i = 0; i < num_list.length; i++) {
      multi *= num_list[i];
    }
    return multi;
  }
}

/* map, 화살표 함수를 이용한 풀이도 적용해볼것 */

function main() {
  const num_list = [3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1];
  const result = 51;

  checkAnswer(solution(num_list) === result);
}

main();
