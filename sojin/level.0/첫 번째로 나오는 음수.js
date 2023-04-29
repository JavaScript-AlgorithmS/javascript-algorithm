import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-04-29
 * **/

/** 문제 설명
정수 리스트 num_list가 주어질 때, 첫 번째로 나오는 음수의 인덱스를 return하도록 solution 함수를 완성해주세요. 음수가 없다면 -1을 return합니다.**/

function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}

// 첫번째 음수값만 찾기 위해 음수를 찾으면 인덱스를 반환하고 함수가 종료되게끔 작성해야한다.

/** break를 사용한 다른 풀이
 *  for(let i = 0; i<num_list.length;i++){
        if(num_list[i] < 0){
            answer = i;
            break;
        }else{
            answer = -1;
        }
    }
    return answer;
}
 */

function main() {
  const num_list = [12, 4, 15, 46, 38, -2, 15];
  const result = 5;

  checkAnswer(solution(num_list) === result);
}

main();
