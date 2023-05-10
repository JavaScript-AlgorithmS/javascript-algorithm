import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-10
 * **/

/** 문제 설명
머쓱이는 직육면체 모양의 상자를 하나 가지고 있는데 이 상자에 정육면체 모양의 주사위를 최대한 많이 채우고 싶습니다. 상자의 가로, 세로, 높이가 저장되어있는 배열 box와 주사위 모서리의 길이 정수 n이 매개변수로 주어졌을 때, 상자에 들어갈 수 있는 주사위의 최대 개수를 return 하도록 solution 함수를 완성해주세요.**/

function solution(box, n) {
  // 상자의 가로, 세로, 높이를 오름차순으로 정렬
  box.sort((a, b) => a - b);

  const x = box[0];
  const y = box[1];
  const z = box[2];
  const count = Math.floor(x / n) * Math.floor(y / n) * Math.floor(z / n);
  return count;
}

function main() {
  const box = [1, 1, 1];
  const n = 1;
  const result = 1;

  checkAnswer(solution(box, n) === result);
}

main();
