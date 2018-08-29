function* counter() {
  // 제너레이터 함수를 호출하게 되면시작 부분부터 읽는 녀석이 만들어짐
  // .next()를 하게되면 yield가 있는곳까지 읽어 내려감  
  yield 1; // <- 처음 generatorObject.next()를 하면 여기까지 와서 만네게 되고 중지가됨, 그리고 yield뒤의 값을 value로 리턴하게 되고, 아직 함수가 안끝났으니까 done이 false로
  yield 2; // 또 호출하면 윗 부분부터 다시 코드를 읽어오면서 2를 가져옴
  yield 3; // 또 호출하면 또 윗부분부터 다시 코드를 읽어오면서 3 가져옴
  return 4; // 최종적으로 읽어와서 return 1을 만나게 됨, return을 만나서 메서드 전체가 끝났기 때문에 done이 true로 됨
}
generatorObject = counter();   
console.log(generatorObject.next()); // { value: 1, done: false }
console.log(generatorObject.next()); // { value: 2, done: false }
console.log(generatorObject.next()); // { value: 3, done: false }
console.log(generatorObject.next()); // { value: 4, done: true }
console.log(generatorObject.next()); // { value: undefined, done: true }

for (const value of generatorObject) {
  console.log(value); // 결과 1, 2, 3, 반복문으로 돌릴땐 return이 아무 의미가 없음
}
 

// 여기 아래서부터가 진짜 예제


a = [1, 2, 3, 4, 5];
function* reverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    yield array[i];
  }
}

for (const value of reverse(a)) {
  console.log(value);
}

function* filter(array, condition) {
  for (const value of array) {
    if (condition(value)) yield value;
  }
}

for(const value of filter(a,(x)=> x>2)){
  console.log(value) 
}
