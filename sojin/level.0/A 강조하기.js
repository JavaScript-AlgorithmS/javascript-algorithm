import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-12
 * **/

/** 문제 설명
문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.
**/

function solution(myString) {
  return myString
    .split("")
    .map((value) => {
      if (value === "A" || value === "a") {
        return "A";
      } else {
        return value.toLowerCase();
      }
    })
    .join("");
}

/**
 * const solution=s=>s.toLowerCase().replaceAll('a','A');
 */

function main() {
  const myString = "abstract algebra";
  const result = "AbstrAct AlgebrA";

  checkAnswer(solution(myString) === result);
}

main();
