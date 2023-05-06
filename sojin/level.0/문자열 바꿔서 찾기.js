import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-06
 * **/

/** 문제 설명
문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.**/

function solution(myString, pat) {
  let newString = "";
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] == "A") {
      newString += "B";
    } else if (myString[i] == "B") {
      newString += "A";
    }
  }
  return newString.includes(pat) ? 1 : 0;
}

function main() {
  const myString = "ABBAA";
  const pat = "AABB";
  const result = 1;

  checkAnswer(solution(myString, pat) === result);
}

main();
