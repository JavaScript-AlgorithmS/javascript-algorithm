import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-17
 * **/

/** 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요. **/

function solution(my_string) {
  let sum = 0;
  const num = my_string.split("").filter((v) => v === Number);

}

function main() {
  const my_string = "aAb1B2cC34oOp";
  const result = 37;

  checkAnswer(solution(my_string) === result);
}

main();
