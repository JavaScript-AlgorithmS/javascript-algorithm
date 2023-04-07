import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-07
 * **/

/** 문제 설명
정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요. **/

function solution(array, n) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer++;
    }
  }
  return answer;
}

/* function solution(array, n) {
    return array.filter(v=>v===n).length;} 
    
    filter 함수를 사용하여 더 간결하게 작성가능*/

function main() {
  const array = [1, 1, 2, 3, 4, 5];
  const n = 1;
  const result = 2;

  checkAnswer(solution(array, n) === result);
}

main();
