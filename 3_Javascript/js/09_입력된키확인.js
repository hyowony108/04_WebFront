// 문자열.toLowerCase() : 영어를 모두 소문자로 변경 (A -> a)
// 문자열.toUpperCase() : 영어를 모두 대문자로 변경 (a -> A)

// 화면에 존재하는 key 모두 얻어오기
// const keys = document.querySelectorAll(".key");

// console.log(keys);

// // 화면(문서자체)에서 키가 눌러지는걸 감지했을 때
// document.addEventListener("keydown", function(e) {

//   console.log(e.key);

//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // 함수 종료
//   }

//   // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
//   keys[idx].style.backgroundColor = "deepPink";

// });


// // 화면(문서자체)에서 키가 떼어지는걸 감지했을 때
// document.addEventListener("keyup", function(e) {

//   let idx; // 인덱스 값을 저장할 변수

//   // 입력된 키를 소문자로 바꿔서 일치하는 CASE 실행
//   switch(e.key.toLowerCase()) {
//     case 'q' : idx = 0; break;
//     case 'w' : idx = 1; break;
//     case 'e' : idx = 2; break;
//     case 'r' : idx = 3; break;
//     default : return; // 함수 종료
//   }

//   // idx번호와 일치하는 keys 배열의 요소의 배경색을 변경
//   keys[idx].style.backgroundColor = "white";


// });


// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 키보드 이벤트 핸들러 함수
function changeKeyColor(e, color) {
                  // e: 이벤트 종류 객체
                  // color : 색상

  const keyMap = { 'q' : 0, 
                  'w' : 1, 
                  'e' : 2, 
                  'r' : 3 };
  
  const idx = keyMap[e.key.toLowerCase()];
  // keyMap['q'] -> 0
  // keyMap['w'] -> 1
  // keyMap['e'] -> 2
  // keyMap['r'] -> 3

  // keyMap에 없는 값 입력되었을 때 idx 는 undefined
  if(idx != undefined) {
    keys[idx].style.backgroundColor = color;
  }

}

// 키가 눌렸을 때 실행
document.addEventListener("keydown" , (e) => changeKeyColor(e, "deepPink") );
document.addEventListener("keyup" , (e) => changeKeyColor(e, "white") );