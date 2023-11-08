import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-06
 * **/

/** 문제 설명
임의의 문자열이 주어졌을 때 문자 "a", "b", "c"를 구분자로 사용해 문자열을 나누고자 합니다.

예를 들어 주어진 문자열이 "baconlettucetomato"라면 나눠진 문자열 목록은 ["onlettu", "etom", "to"] 가 됩니다.

문자열 myStr이 주어졌을 때 위 예시와 같이 "a", "b", "c"를 사용해 나눠진 문자열을 순서대로 저장한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 두 구분자 사이에 다른 문자가 없을 경우에는 아무것도 저장하지 않으며, return할 배열이 빈 배열이라면 ["EMPTY"]를 return 합니다.
 **/

// split 함수는 하나의 문자열 혹은 문자만 인자로 받기 때문에, 여러 문자열을 동시에 검사하기 위해 정규표현식을 사용한다.
function solution(myStr) {
  let splitStrings = myStr.split(/[abc]/);
  splitStrings = splitStrings.filter((str) => str.length > 0);
  if (splitStrings.length === 0) {
    return ["EMPTY"];
  }
  return splitStrings;
}

function main() {
  const myStr = "baconlettucetomato";
  const result = ["onlettu", "etom", "to"];

  checkAnswer(JSON.stringify(solution(myStr)) === JSON.stringify(result));
}

main();
