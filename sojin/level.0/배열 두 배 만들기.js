import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-03-18
 * **/

/** 문제 설명
정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요. **/

function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    answer.push(numbers[i] * 2);
  }

  return answer;
}

function main() {
  const numbers = [1, 2, 3, 4, 5];
  const result = [2, 4, 6, 8, 10];

  checkAnswer(JSON.stringify(solution(numbers)) === JSON.stringify(result));
}

main();
