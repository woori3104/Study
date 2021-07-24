{
  // Array
  const fruits: string[] = ['🍅', '🍌'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class로 대체해서 사용하기를 권장
  // 서로 다른 타입을 갖고있는 배열 
  // react의 usestate에서 봤던 친구
  // 동적으로 관련있는 데이터로, 사용자가 이름을 정해서 사용하는 경우에는 유용 
  let student: [string, number];
  student = ['name', 123];
  
  // 가독성이 떨어지기때문에 권장하는 방식은 아님 
  student[0]; // name
  student[1]; // 123

  // 
  const [name, age] = student;


}
