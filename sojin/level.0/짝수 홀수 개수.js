import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-08
 * **/

/** 문제 설명
정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요. **/

function solution(num_list) {
  let a = 0,
    b = 0;
  for (let num of num_list) {
    if (num % 2 == 0) {
      a++;
    } else {
      b++;
    }
  }
  return [a, b];
}

/**
 * function solution(num_list) {
    const answer = [0,0];

    for(let num of num_list){
        answer[num % 2] += 1
    }

    return answer;
}
 */

/* function solution(num_list) {
  const evenLength = num_list.filter(n => n % 2 === 0).length;
  return [evenLength, num_list.length - evenLength];} */

function main() {
  const num_list = [1, 2, 3, 4, 5];
  const result = [2, 3];

  checkAnswer(JSON.stringify(solution(num_list)) === JSON.stringify(result));
}

main();
