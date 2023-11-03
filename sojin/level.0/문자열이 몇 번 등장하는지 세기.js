import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-11-01
 * **/

/** 문제 설명
문자열 myString과 pat이 주어집니다. myString에서 pat이 등장하는 횟수를 return 하는 solution 함수를 완성해 주세요. **/

// indexOf 함수는 첫번째 인자로 찾을 문자열, 두번째 인자로 검색을 시작할 인덱스를 받는다.
function solution(myString, pat) {
  let answer = 0;
  let index = myString.indexOf(pat);

  while (index !== -1) {
    answer++;
    index = myString.indexOf(pat, index + 1); // 이전에 찾았던 pat의 다음 위치부터 검색을 시작한다.
  }
  return answer;
}

function main() {
  const myString = "banana";
  const pat = "ana";
  const result = 2;

  checkAnswer(solution(myString, pat) === result);
}

main();
