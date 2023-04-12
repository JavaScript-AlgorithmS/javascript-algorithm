import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-10
 * **/

/** 문제 설명
머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요. **/

function solution(money) {
  return [parseInt(money / 5500), money % 5500];
}

function main() {
  const money = 5500;
  const result = [1, 0];

  checkAnswer(JSON.stringify(solution(money)) === JSON.stringify(result));
}

main();
