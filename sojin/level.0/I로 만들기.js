import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-20
 * **/

/** 문제 설명
알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.
**/

function solution(myString) {
  return myString.replace(/[a-k]/g, "l"); // a부터 k사이의 알파벳을 l로 교체해주는 정규표현식 사용
}

/**
 * for문 사용한 풀이
function solution(myString) {
  let replaceString = '';
  for (let i = 0; i < myString.length; i++) {
    if (myString[i] < 'l') {
      replaceString += 'l';
    } else {
      replaceString += myString[i];
    }
  }
  return replaceString;
}
 */

/**메서드 활용 풀이
 * function solution(myString) {
  return myString.split('').map(v => v < 'l' ? 'l' : v).join('');
}
 */

function main() {
  const myString = "abcdevwxyz";
  const result = "lllllvwxyz";

  checkAnswer(solution(myString) === result);
}

main();
