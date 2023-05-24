import { checkAnswer } from "../../common.js";

/**
 * © DEV SSO 💻
 * Current date: 2023-05-24
 * **/

/** 문제 설명
오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
**/

function solution(todo_list, finished) {
  let answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (!finished[i]) {
      answer.push(todo_list[i]);
    }
  }
  return answer;
}

function main() {
  const todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
  const finished = [true, false, true, false];
  const result = ["practiceguitar", "studygraph"];

  checkAnswer(
    JSON.stringify(solution(todo_list, finished)) === JSON.stringify(result)
  );
}

main();
