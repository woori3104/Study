{
  // Array
  const fruits: string[] = ['๐', '๐'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, class๋ก ๋์ฒดํด์ ์ฌ์ฉํ๊ธฐ๋ฅผ ๊ถ์ฅ
  // ์๋ก ๋ค๋ฅธ ํ์์ ๊ฐ๊ณ ์๋ ๋ฐฐ์ด 
  // react์ usestate์์ ๋ดค๋ ์น๊ตฌ
  // ๋์ ์ผ๋ก ๊ด๋ จ์๋ ๋ฐ์ดํฐ๋ก, ์ฌ์ฉ์๊ฐ ์ด๋ฆ์ ์ ํด์ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ์๋ ์ ์ฉ 
  let student: [string, number];
  student = ['name', 123];
  
  // ๊ฐ๋์ฑ์ด ๋จ์ด์ง๊ธฐ๋๋ฌธ์ ๊ถ์ฅํ๋ ๋ฐฉ์์ ์๋ 
  student[0]; // name
  student[1]; // 123

  // 
  const [name, age] = student;


}
