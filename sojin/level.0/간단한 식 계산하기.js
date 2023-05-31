import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-31
 * **/

/** 문제 설명
문자열 binomial이 매개변수로 주어집니다. binomial은 "a op b" 형태의 이항식이고 a와 b는 음이 아닌 정수, op는 '+', '-', '*' 중 하나입니다. 주어진 식을 계산한 정수를 return 하는 solution 함수를 작성해 주세요.
**/

function solution(binomial) {
  const [a, op, b] = binomial.split(" ");

  const num1 = parseInt(a);
  const num2 = parseInt(b);

  let answer = 0;

  switch (op) {
    case "+":
      answer = num1 + num2;
      break;
    case "-":
      answer = num1 - num2;
      break;
    case "*":
      answer = num1 * num2;
      break;
    default:
      throw Error("존재하지 않습니다"); // op가 주어진 연산자가 아니라면 예외를 발생시킨다.
  }
  return answer;
}

/**
 * const solution = eval
 * 문자로 표현된 JavaScript 코드를 실행하는 함수이다.
 * 간단해 보일 수 있지만, 보안과 성능상 여러 문제가 있어 사용 비추!
 */

function main() {
  const binomial = "43 + 12";
  const result = 55;

  checkAnswer(solution(binomial) === result);
}

main();
