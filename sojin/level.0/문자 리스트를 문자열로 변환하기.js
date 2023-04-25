import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-25
 * **/

/** 문제 설명
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.**/

function solution(arr) {
  return arr.join("");
}

/* 반복문으로 작성하면
function soliution(arr) {
    const answer = "";
    for (let i of arr){
        answer += i;
    }
    return answer;
} */

function main() {
  const arr = ["a", "b", "c"];
  const result = "abc";

  checkAnswer(solution(arr) === result);
}

main();
