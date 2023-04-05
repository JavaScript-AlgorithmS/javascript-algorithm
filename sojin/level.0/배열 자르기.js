import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-05
 * **/

/** 문제 설명
정수 배열 numbers와 정수 num1, num2가 매개변수로 주어질 때, numbers의 num1번 째 인덱스부터 num2번째 인덱스까지 자른 정수 배열을 return 하도록 solution 함수를 완성해보세요. **/

function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

/*function solution(numbers, num1, num2) {
  return [...numbers].slice(num1, num2 + 1);}*/

function main() {
  const numbers = [1, 2, 3, 4, 5];
  const num1 = 1;
  const num2 = 3;
  const result = [2, 3, 4];

  checkAnswer(
    JSON.stringify(solution(numbers, num1, num2)) === JSON.stringify(result)
  );
}

main();
