import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-16
 * **/

/** 문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요. **/

function solution(numbers, direction) {
  if (direction === "right") {
    const last = numbers.pop();
    numbers.unshift(last);
  } else if (direction === "left") {
    const first = numbers.shift();
    numbers.push(first);
  }
  return numbers;
}

/** 선언하지 않고 간략화 하기
 * function solution(numbers, direction) {
 * if(direction === "right"){
 * numbers.unshift(numbers.pop());
 * }else {
 * numbers.push(numbers.shift());
 * }
 * return numbers;
 * }
 */

function main() {
  const numbers = [1, 2, 3];
  const direction = "right";
  const result = [3, 1, 2];

  checkAnswer(
    JSON.stringify(solution(numbers, direction)) === JSON.stringify(result)
  );
}

main();
