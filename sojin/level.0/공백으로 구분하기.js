import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-27
 * **/

/** 문제 설명
단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.**/

function solution(my_string, target) {
  return my_string.split(" ");
}

function main() {
  const my_string = "i love you";
  const result = ["i", "love", "you"];

  checkAnswer(JSON.stringify(solution(my_string)) === JSON.stringify(result));
}

main();
