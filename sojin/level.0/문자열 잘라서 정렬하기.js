import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-06-02
 * **/

/** 문제 설명
문자열 myString이 주어집니다. "x"를 기준으로 해당 문자열을 잘라내 배열을 만든 후 사전순으로 정렬한 배열을 return 하는 solution 함수를 완성해 주세요.

단, 빈 문자열은 반환할 배열에 넣지 않습니다.**/

function solution(myString) {
  return myString
    .split("x")
    .filter((v) => v !== "") // 연속된 "x" 구간이 있을 경우, 빈 문자열이 생성될 수 있어 제거해줘야한다.
    .sort();
}

function main() {
  const myString = "axbxcxdx";
  const result = ["a", "b", "c", "d"];

  checkAnswer(JSON.stringify(solution(myString)) === JSON.stringify(result));
}

main();
