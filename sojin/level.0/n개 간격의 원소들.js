import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-02
 * **/

/** 문제 설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 마지막 원소까지 n개 간격으로 저장되어있는 원소들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.**/

function solution(num_list, n) {
  const answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}

function main() {
  const num_list = [4, 2, 6, 1, 7, 6];
  const n = 2;
  const result = [4, 6, 7];

  checkAnswer(JSON.stringify(solution(num_list, n)) === JSON.stringify(result));
}

main();
