import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-01
 * **/

/** 문제 설명
정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.**/

function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0 && arr[i] >= 50) {
      answer.push(arr[i] / 2);
    } else if (arr[i] % 2 !== 0 && arr[i] < 50) {
      answer.push(arr[i] * 2);
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

/*
function solution(arr) {
    return arr.map(num => {
        if(num >= 50 && !(num % 2)) return num / 2;
        if(num < 50 && num % 2) return num * 2;
        return num;
    })
} 
*/

function main() {
  const arr = [1, 2, 3, 100, 99, 98];
  const result = [2, 2, 6, 50, 99, 49];

  checkAnswer(JSON.stringify(solution(arr)) === JSON.stringify(result));
}

main();
