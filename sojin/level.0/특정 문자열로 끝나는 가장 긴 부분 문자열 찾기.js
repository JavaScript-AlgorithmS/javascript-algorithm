import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-03
 * **/

/** 문제 설명
문자열 myString과 pat가 주어집니다. myString의 부분 문자열중 pat로 끝나는 가장 긴 부분 문자열을 찾아서 return 하는 solution 함수를 완성해 주세요.
 **/

function solution(myString, pat) {
  let lastIdx = myString.lastIndexOf(pat);
  if (lastIdx !== -1) {
    return myString.slice(0, lastIdx + pat.length); // lastIdx + pat.length값으로 pat이 끝나는 위치를 찾을 수 있다.
  }
}

function main() {
  const myString = "AbCdEFG";
  const pat = "dE";
  const result = "AbCdE";

  checkAnswer(solution(myString, pat) === result);
}

main();
