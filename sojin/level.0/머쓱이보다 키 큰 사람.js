import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-07
 * **/

/** 문제 설명
머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요. **/

function solution(array, height) {
  let answer = array.filter((v) => v > height);
  return answer.length;
}

function main() {
  const array = [149, 180, 192, 170];
  const height = 167;
  const result = 3;

  checkAnswer(solution(array, height) === result);
}

main();
