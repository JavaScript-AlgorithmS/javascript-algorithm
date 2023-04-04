import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-04
 * **/

/** 문제 설명
문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요. **/

function solution(strlist) {
  const answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

/* map 을 이용하여 간결화 시키기 
 function solution(strlist) {
    return strlist.map((el) => el.length)
} */

function main() {
  const strlist = ["We", "are", "the", "world!"];
  const result = [2, 3, 3, 6];

  checkAnswer(JSON.stringify(solution(strlist)) === JSON.stringify(result));
}

main();
